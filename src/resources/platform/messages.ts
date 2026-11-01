import {
  SdkAcknowledgeMessageDocument,
  SdkAcknowledgeMessagesDocument,
  SdkClearPlatformMessageCopyDocument,
  SdkClearPlatformMessageRoutingDocument,
  SdkCreatePlatformSenderDomainDocument,
  SdkDisablePlatformSenderDomainDocument,
  SdkMyNotificationsDocument,
  SdkMarkNotificationsReadDocument,
  SdkPlatformMessageCopyDocument,
  SdkPlatformSenderDomainsDocument,
  SdkPreviewPlatformMessageCopyDocument,
  SdkSetNotificationPreferenceDocument,
  SdkSetPlatformMessageCopyDocument,
  SdkVerifyPlatformSenderDomainDocument,
  type SetNotificationPreferenceInput,
  type SetPlatformMessageCopyInput,
  SdkMarkMessageReadDocument,
  SdkMessageCatalogueDocument,
  SdkPlatformMessageRoutingDocument,
  SdkPlatformMessageSettingsDocument,
  SdkPlatformMessagesDocument,
  SdkResendPlatformMessageDocument,
  SdkSetPlatformMessageRoutingDocument,
  SdkUpdatePlatformMessageSettingsDocument,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient } from '../../http.js';
import type { AcknowledgeChannel, MessageCategory, MessageRouting, MessageType } from '../../messages.js';
import type { CompanyRef, CursorPage } from './data.js';

export type AcknowledgeParams = {
  /** The message id (`msg_…` as delivered in `message.created`). */
  id: string;
  /** Where you delivered it. */
  channel: AcknowledgeChannel;
  deliveredAt?: string | Date;
  /** Your own id for the delivery (push ticket, email id). */
  providerMessageId?: string;
  /** `failed` reports that you could not deliver; the message then stays unacknowledged and escalates. */
  outcome?: 'delivered' | 'failed';
};

export type MessageListParams = {
  /** A company's FinBaze id; use `platform.companies.retrieveByExternalId` to look it up. */
  company?: Pick<Extract<CompanyRef, { id: string }>, 'id'>;
  status?: string;
  /** Only messages that need an acknowledgement and have none. */
  unacknowledgedOnly?: boolean;
  limit?: number;
  starting_after?: string;
};

export type SetRoutingParams =
  | { scope: 'all'; routing: MessageRouting; company?: string; channels?: string[]; digestWindow?: 'off' | 'hourly' | 'daily' }
  | { scope: 'category'; category: MessageCategory; routing: MessageRouting; company?: string; channels?: string[]; digestWindow?: 'off' | 'hourly' | 'daily' }
  | { scope: 'type'; type: MessageType; routing: MessageRouting; company?: string; channels?: string[]; digestWindow?: 'off' | 'hourly' | 'daily' };

export type MessageSettingsParams = {
  digestHourLocal?: number;
  ackTimeoutMinutes?: number;
  criticalAckTimeoutMinutes?: number;
  criticalEmailFallback?: boolean;
  fallbackAfterMinutes?: number;
  includeEmailHtml?: boolean;
  quietHours?: { start: string; end: string; timezone: string };
  /** Switches quiet hours off. */
  clearQuietHours?: boolean;
};

const iso = (value: string | Date | undefined) => (value instanceof Date ? value.toISOString() : value);

/** Messages FinBaze routes to you (`message.created`): the log, acknowledgements, routing policy and settings. */
export class Messages {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Every message type with FinBaze's default routing and what you may change. */
  async catalogue() {
    return (await this.http.request(SdkMessageCatalogueDocument)).messageCatalogue;
  }

  /** Newest first. Pages with an offset cursor; `autoPagingEach` walks all of them. */
  async list(params: MessageListParams = {}): Promise<CursorPage<MessageNode>> {
    const limit = params.limit ?? 50;
    const fetchPage = async (cursor?: string) => {
      const offset = cursor ? Number(cursor) : 0;
      const nodes = (
        await this.http.request(SdkPlatformMessagesDocument, {
          filter: {
            profileId: params.company?.id,
            status: params.status,
            unacknowledgedOnly: params.unacknowledgedOnly,
            limit,
            offset,
          },
        })
      ).platformMessages;
      const full = nodes.length === limit;
      return { data: nodes, hasMore: full, nextCursor: full ? String(offset + limit) : null };
    };
    const first = await fetchPage(params.starting_after);
    const each = async (handler: (item: MessageNode) => void | Promise<void>) => {
      let page = first;
      for (;;) {
        for (const item of page.data) await handler(item);
        if (!page.hasMore || !page.nextCursor) return;
        page = await fetchPage(page.nextCursor);
      }
    };
    return {
      ...first,
      autoPagingEach: each,
      autoPagingToArray: async (opts: { limit?: number } = {}) => {
        const out: MessageNode[] = [];
        await each((item) => {
          if (opts.limit === undefined || out.length < opts.limit) out.push(item);
        });
        return out;
      },
    };
  }

  /** Confirms you delivered a message. Idempotent. */
  async acknowledge(params: AcknowledgeParams) {
    return (await this.http.request(SdkAcknowledgeMessageDocument, { input: toInput(params) })).acknowledgeMessage;
  }

  /** Up to 100 at once. */
  async acknowledgeMany(params: AcknowledgeParams[]) {
    return (await this.http.request(SdkAcknowledgeMessagesDocument, { inputs: params.map(toInput) })).acknowledgeMessages;
  }

  /** Sends `message.created` again for a message routed to you, for example after a lost webhook. */
  async resend(id: string) {
    return (await this.http.request(SdkResendPlatformMessageDocument, { id })).resendPlatformMessage;
  }

  /** The user saw it. */
  async markRead(id: string) {
    return (await this.http.request(SdkMarkMessageReadDocument, { id })).markMessageRead;
  }

  /** Who delivers which messages. A rule for a company wins over one for the platform, a type over a category. */
  readonly routing = {
    list: async (params: { company?: string } = {}) =>
      (await this.http.request(SdkPlatformMessageRoutingDocument, { profileId: params.company })).platformMessageRouting,
    /** `ROUTING_NOT_CHANGEABLE` for lifecycle, billing and account-security types. */
    set: async (params: SetRoutingParams) => {
      const { company, ...rest } = params;
      return (await this.http.request(SdkSetPlatformMessageRoutingDocument, { input: { ...rest, profileId: company } })).setPlatformMessageRouting;
    },
    clear: async (id: string) => (await this.http.request(SdkClearPlatformMessageRoutingDocument, { id })).clearPlatformMessageRouting,
  };

  /** Your own wording per message type, locale and variant (`push`, `in_app`, `email_subject`, `email_text`, ...). */
  readonly copy = {
    list: async (type?: MessageType) => (await this.http.request(SdkPlatformMessageCopyDocument, { type })).platformMessageCopy,
    /** Renders a template with sample data and lists what is wrong with it. */
    preview: async (params: { type: MessageType; variant: string; template: string; data: Record<string, unknown> }) =>
      (await this.http.request(SdkPreviewPlatformMessageCopyDocument, params)).previewPlatformMessageCopy,
    set: async (input: SetPlatformMessageCopyInput) => (await this.http.request(SdkSetPlatformMessageCopyDocument, { input })).setPlatformMessageCopy,
    clear: async (id: string) => (await this.http.request(SdkClearPlatformMessageCopyDocument, { id })).clearPlatformMessageCopy,
  };

  /** Domains FinBaze sends mail from for your companies, so messages never show "via FinBaze". Add the DNS records, then `verify`. */
  readonly senderDomains = {
    list: async () => (await this.http.request(SdkPlatformSenderDomainsDocument)).platformSenderDomains,
    create: async (params: { domain: string; fromLocalPart?: string }) =>
      (await this.http.request(SdkCreatePlatformSenderDomainDocument, { input: params })).createPlatformSenderDomain,
    verify: async (id: string) => (await this.http.request(SdkVerifyPlatformSenderDomainDocument, { id })).verifyPlatformSenderDomain,
    disable: async (id: string) => (await this.http.request(SdkDisablePlatformSenderDomainDocument, { id })).disablePlatformSenderDomain,
  };

  /** The in-app notification centre of the user behind a user token. */
  readonly notifications = {
    list: async (params: { company?: string; unreadOnly?: boolean; limit?: number; starting_after?: string } = {}) =>
      (await this.http.request(SdkMyNotificationsDocument, { companyId: params.company, unreadOnly: params.unreadOnly, first: params.limit, after: params.starting_after })).myNotifications,
    markRead: async (params: { ids?: string[]; all?: boolean; company?: string }) =>
      (await this.http.request(SdkMarkNotificationsReadDocument, { ids: params.ids, all: params.all, companyId: params.company })).markNotificationsRead,
    setPreference: async (input: SetNotificationPreferenceInput) =>
      (await this.http.request(SdkSetNotificationPreferenceDocument, { input })).setNotificationPreference,
  };

  readonly settings = {
    retrieve: async () => (await this.http.request(SdkPlatformMessageSettingsDocument)).platformMessageSettings,
    update: async (params: MessageSettingsParams) => {
      const { quietHours, ...rest } = params;
      return (
        await this.http.request(SdkUpdatePlatformMessageSettingsDocument, {
          input: {
            ...rest,
            quietHoursStart: quietHours?.start,
            quietHoursEnd: quietHours?.end,
            quietHoursTimezone: quietHours?.timezone,
          },
        })
      ).updatePlatformMessageSettings;
    },
  };
}

type MessageNode = Awaited<ReturnType<Messages['acknowledge']>>;

function toInput(params: AcknowledgeParams) {
  return { ...params, deliveredAt: iso(params.deliveredAt) };
}

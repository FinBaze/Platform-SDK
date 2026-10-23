import type { PlatformWebhookEvent } from './webhooks.js';
import type { AuthorisedTax, EngagementSide, FirmEngagementOrigin, FirmEngagementStatus } from './resources/platform/firms.js';

/** `data.object` of every `firm.*` event: the engagement, plus what the step adds. No email address is ever in it. */
export type FirmEngagementEventObject = {
  __typename: 'FirmEngagement';
  id: string;
  companyId: string;
  firmId: string;
  firmName: string;
  origin: FirmEngagementOrigin;
  status: FirmEngagementStatus;
  filingAuthority: 'none' | 'submit';
  taxes: AuthorisedTax[];
  expiresAt: string | null;
};

export type FirmAccessRequestedEvent = PlatformWebhookEvent<'firm.access_requested', { object: FirmEngagementEventObject }>;
export type FirmConnectionRequestedEvent = PlatformWebhookEvent<'firm.connection_requested', { object: FirmEngagementEventObject }>;
export type FirmConnectedEvent = PlatformWebhookEvent<'firm.connected', { object: FirmEngagementEventObject }>;
export type FirmConnectionDeclinedEvent = PlatformWebhookEvent<
  'firm.connection_declined',
  { object: FirmEngagementEventObject & { decidedBy: EngagementSide; withdrawn?: boolean } }
>;
export type FirmConnectionExpiredEvent = PlatformWebhookEvent<'firm.connection_expired', { object: FirmEngagementEventObject }>;
/** `firm_access` was hidden: the engagement ends at `endsAt`; showing the key again cancels it. */
export type FirmDisconnectScheduledEvent = PlatformWebhookEvent<
  'firm.disconnect_scheduled',
  { object: FirmEngagementEventObject & { endsAt: string; reason: 'firm_access_hidden' } }
>;
export type FirmDisconnectedEvent = PlatformWebhookEvent<
  'firm.disconnected',
  { object: FirmEngagementEventObject & { endedBySide: EngagementSide; reason: string | null } }
>;
export type FirmAuthorityChangedEvent = PlatformWebhookEvent<
  'firm.authority_changed',
  { object: FirmEngagementEventObject & { previousTaxes: AuthorisedTax[] } }
>;

export type PlatformFirmEvent =
  | FirmAccessRequestedEvent
  | FirmConnectionRequestedEvent
  | FirmConnectedEvent
  | FirmConnectionDeclinedEvent
  | FirmConnectionExpiredEvent
  | FirmDisconnectScheduledEvent
  | FirmDisconnectedEvent
  | FirmAuthorityChangedEvent;

const FIRM_EVENT_TYPES: ReadonlySet<string> = new Set([
  'firm.access_requested',
  'firm.connection_requested',
  'firm.connected',
  'firm.connection_declined',
  'firm.connection_expired',
  'firm.disconnect_scheduled',
  'firm.disconnected',
  'firm.authority_changed',
]);

/** Narrows an event from `webhooks.constructPlatformEvent` to the accountant events (Wave 5.3). */
export function isFirmEvent(event: PlatformWebhookEvent): event is PlatformFirmEvent {
  return FIRM_EVENT_TYPES.has(event.type);
}

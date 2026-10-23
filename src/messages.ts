import type { MessageCategory, MessageData, MessageType } from './message-types.generated.js';
import type { PlatformWebhookEvent } from './webhooks.js';

export type { MessageCategory, MessageData, MessageDataByType, MessageType } from './message-types.generated.js';

export type MessagePriority = 'critical' | 'normal' | 'digestible';
export type MessageRouting = 'finbaze_sends' | 'partner_delivers' | 'both' | 'suppress';
/** Where you delivered a message, for `acknowledge`. */
export type AcknowledgeChannel = 'push' | 'in_app' | 'email' | 'sms' | 'chat' | 'other';

/** What you get to show: limits are 50/150 for push, 80/400/30 for in-app, 160 for SMS. */
export type MessageContent = {
  push: { title: string; body: string };
  in_app: { title: string; body: string; cta_label: string; severity: 'info' | 'warning' | 'critical' };
  email: { subject: string; text: string };
  sms: { text: string };
};

/** The `data.object` of `message.created` and `message.unacknowledged`. */
export type MessageObject<T extends MessageType = MessageType> = {
  object: 'message';
  id: string;
  type: T;
  category: MessageCategory;
  audience: string;
  priority: MessagePriority;
  locale: string;
  routing: MessageRouting;
  recipient: { kind: string; account?: string | null; [key: string]: unknown };
  deep_link: { route: string; params?: Record<string, string> } | null;
  content: MessageContent;
  data: MessageData<T>;
  attachments: Array<{ id: string; kind: string; filename: string; content_type: string; size: number; sha256: string; url: string; url_expires_at: string }>;
  dedupe_key: string;
  ack_required: boolean;
  ack_deadline: string | null;
  expires_at: string | null;
  created: string;
};

/** Every message type as a union of objects, so `message.type` narrows `message.data`. */
export type AnyMessageObject = { [T in MessageType]: MessageObject<T> }[MessageType];

export type MessageCreatedEvent = PlatformWebhookEvent<'message.created', { object: AnyMessageObject }>;
export type MessageUnacknowledgedEvent = PlatformWebhookEvent<'message.unacknowledged', { object: AnyMessageObject }>;
export type PlatformMessageEvent = MessageCreatedEvent | MessageUnacknowledgedEvent;

/** Narrows an event from `webhooks.constructPlatformEvent` to the message events. */
export function isMessageEvent(event: PlatformWebhookEvent): event is PlatformMessageEvent {
  return event.type === 'message.created' || event.type === 'message.unacknowledged';
}

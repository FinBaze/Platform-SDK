import type { PlatformWebhookEvent } from './webhooks.js';

/** What the event projector puts in `data.object` for events that have no snapshot builder: the event id plus its details. */
type EventObject<T extends Record<string, unknown>> = { __typename: 'Event'; id: string | null } & T;

/** A payment request was created, changed or paid. `data.object` is the request. */
export type PaymentRequestEventObject = {
  id: string;
  status?: string;
  kind?: 'tax' | 'supplier_batch' | 'wages';
  amountMinor?: number;
  currency?: string;
  endToEndId?: string;
  [key: string]: unknown;
};

export type PaymentRequestCreatedEvent = PlatformWebhookEvent<'payment_request.created', { object: PaymentRequestEventObject }>;
export type PaymentRequestUpdatedEvent = PlatformWebhookEvent<'payment_request.updated', { object: PaymentRequestEventObject }>;
export type PaymentRequestPaidEvent = PlatformWebhookEvent<'payment_request.paid', { object: PaymentRequestEventObject }>;

/** FinBaze wants a payment link for an invoice: answer with `platform.paymentLinks.provide` before `deadline`. */
export type PaymentLinkRequestedEvent = PlatformWebhookEvent<
  'payment_link.requested',
  {
    object: EventObject<{
      paymentLinkRequest: { id: string; sales_invoice_id: string | null; amount_minor: number; currency: string; deadline: string };
    }>;
  }
>;

/** FinBaze advises how much to set aside for tax. Report what you reserved with `platform.taxReservation.report`. */
export type TaxReservationAdvisedEvent = PlatformWebhookEvent<
  'tax_reservation.advised',
  {
    object: EventObject<{
      taxReservation: { id: string; tax_type: string; period_label: string; period_end: string; amount_minor: number; currency: string };
    }>;
  }
>;

/** A high-risk action waits for your confirmation. Sign it with `signStepUp` and send it in the `FinBaze-Step-Up` header. */
export type StepUpRequiredEvent = PlatformWebhookEvent<
  'step_up.required',
  {
    object: EventObject<{
      stepUp: { id: string; action: string; summary: Record<string, unknown>; nonce: string; expires_at: string };
    }>;
  }
>;

/** FinBaze asks you to render a document. Answer with `platform.documents.rendering.attach` before `deadline`. */
export type DocumentRenderRequestedEvent = PlatformWebhookEvent<
  'document.render_requested',
  {
    object: EventObject<{
      job: string;
      documentType: string;
      entityType: string;
      entityId: string;
      deadline: string;
      factsHash: string;
      /** What to print. Never contains a BSN. */
      dataModel: Record<string, unknown>;
      /** Signed links (15 minutes) to files that go with the document, such as the invoice UBL. */
      attachments: Array<{ kind: string; url: string; filename?: string; content_type?: string }>;
    }>;
  }
>;

export type DocumentRenderRejectedEvent = PlatformWebhookEvent<'document.render_rejected', { object: EventObject<Record<string, unknown>> }>;
export type DocumentRenderFailedEvent = PlatformWebhookEvent<'document.render_failed', { object: EventObject<Record<string, unknown>> }>;
export type DocumentOfficialCopyCreatedEvent = PlatformWebhookEvent<'document.official_copy_created', { object: EventObject<Record<string, unknown>> }>;
export type CustomDomainStatusChangedEvent = PlatformWebhookEvent<'custom_domain.status_changed', { object: EventObject<Record<string, unknown>> }>;
export type CustomActionInvokedEvent = PlatformWebhookEvent<'custom_action.invoked', { object: EventObject<Record<string, unknown>> }>;
export type PolicyActivatedEvent = PlatformWebhookEvent<'policy.activated', { object: EventObject<Record<string, unknown>> }>;
export type QuotaReachedEvent = PlatformWebhookEvent<'quota.reached', { object: EventObject<Record<string, unknown>> }>;

export type PlatformControlEvent =
  | PaymentRequestCreatedEvent
  | PaymentRequestUpdatedEvent
  | PaymentRequestPaidEvent
  | PaymentLinkRequestedEvent
  | TaxReservationAdvisedEvent
  | StepUpRequiredEvent
  | DocumentRenderRequestedEvent
  | DocumentRenderRejectedEvent
  | DocumentRenderFailedEvent
  | DocumentOfficialCopyCreatedEvent
  | CustomDomainStatusChangedEvent
  | CustomActionInvokedEvent
  | PolicyActivatedEvent
  | QuotaReachedEvent;

const CONTROL_EVENT_TYPES: ReadonlySet<string> = new Set([
  'payment_request.created',
  'payment_request.updated',
  'payment_request.paid',
  'payment_link.requested',
  'tax_reservation.advised',
  'step_up.required',
  'document.render_requested',
  'document.render_rejected',
  'document.render_failed',
  'document.official_copy_created',
  'custom_domain.status_changed',
  'custom_action.invoked',
  'policy.activated',
  'quota.reached',
]);

/** Narrows an event from `webhooks.constructPlatformEvent` to the Wave 4 control-surface events. */
export function isControlEvent(event: PlatformWebhookEvent): event is PlatformControlEvent {
  return CONTROL_EVENT_TYPES.has(event.type);
}

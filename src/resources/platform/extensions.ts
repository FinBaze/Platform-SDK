import {
  SdkArchiveCustomFieldDefinitionDocument,
  SdkClearFieldControlDocument,
  SdkCustomFieldDefinitionsDocument,
  SdkCustomFieldValuesDocument,
  SdkDeleteCustomActionDocument,
  SdkDeleteLinkTemplateDocument,
  SdkFieldControlsDocument,
  SdkInvokeCustomActionDocument,
  SdkInvokeSlotItemDocument,
  SdkPartnerLinksDocument,
  SdkPlatformCustomActionsDocument,
  SdkPlatformLinkTemplatesDocument,
  SdkSetCustomFieldValuesDocument,
  SdkSetFieldControlDocument,
  SdkUpsertCustomActionDocument,
  SdkUpsertCustomFieldDefinitionDocument,
  SdkUpsertLinkTemplateDocument,
  type SetFieldControlInput,
  type UpsertCustomActionInput,
  type UpsertCustomFieldDefinitionInput,
  type UpsertLinkTemplateInput,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient } from '../../http.js';

type Context = { contextType: string; contextId: string };

/** "Open shipment in TMS": actions on FinBaze screens, links both ways, your own fields, and control over fields. */
export class Extensions {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Buttons and menu items FinBaze shows next to its own. A click emits `custom_action.invoked` (or calls your embed callback). */
  readonly customActions = {
    list: async () => (await this.http.request(SdkPlatformCustomActionsDocument)).platformCustomActions,
    upsert: async (input: UpsertCustomActionInput) => (await this.http.request(SdkUpsertCustomActionDocument, { input })).upsertCustomAction,
    delete: async (id: string) => (await this.http.request(SdkDeleteCustomActionDocument, { id })).deleteCustomAction,
    /** What a click does on FinBaze's side; for server-side tests and headless UIs. Returns the resolved deep links. */
    invoke: async (key: string, context: Context) => (await this.http.request(SdkInvokeCustomActionDocument, { key, ...context })).invokeCustomAction,
  };

  /** Items you put in a named slot of a FinBaze screen. */
  readonly slots = {
    invoke: async (params: { slot: string; key: string } & Context) => (await this.http.request(SdkInvokeSlotItemDocument, params)).invokeSlotItem,
  };

  /** URL templates that turn a FinBaze object (a booking made from a custom record) into a link in your own app. */
  readonly linkTemplates = {
    list: async () => (await this.http.request(SdkPlatformLinkTemplatesDocument)).platformLinkTemplates,
    upsert: async (input: UpsertLinkTemplateInput) => (await this.http.request(SdkUpsertLinkTemplateDocument, { input })).upsertLinkTemplate,
    delete: async (id: string) => (await this.http.request(SdkDeleteLinkTemplateDocument, { id })).deleteLinkTemplate,
    /** The links that apply to one object, with your templates filled in. */
    resolve: async (params: { objectType: string; objectId: string; locale?: string }) =>
      (await this.http.request(SdkPartnerLinksDocument, params)).partnerLinks,
  };

  /** Your own fields on invoices, transactions, relations and projects. */
  readonly customFields = {
    definitions: async (entityType: string) => (await this.http.request(SdkCustomFieldDefinitionsDocument, { entityType })).customFieldDefinitions,
    define: async (input: UpsertCustomFieldDefinitionInput) =>
      (await this.http.request(SdkUpsertCustomFieldDefinitionDocument, { input })).upsertCustomFieldDefinition,
    archive: async (id: string) => (await this.http.request(SdkArchiveCustomFieldDefinitionDocument, { id })).archiveCustomFieldDefinition,
    values: async (entityType: string, entityId: string) => (await this.http.request(SdkCustomFieldValuesDocument, { entityType, entityId })).customFieldValues,
    /** Only the keys you pass change. `FIELD_LOCKED` when field control forbids it. */
    setValues: async (entityType: string, entityId: string, values: Record<string, unknown>) =>
      (await this.http.request(SdkSetCustomFieldValuesDocument, { entityType, entityId, values })).setCustomFieldValues,
  };

  /** Hide, lock or preset a field of a FinBaze view, for all your companies or one. Legally required fields cannot be controlled. */
  readonly fieldControl = {
    list: async (view: string, companyId?: string) => (await this.http.request(SdkFieldControlsDocument, { view, companyId })).fieldControls,
    set: async (input: SetFieldControlInput) => (await this.http.request(SdkSetFieldControlDocument, { input })).setFieldControl,
    clear: async (params: { view: string; field: string; companyId?: string }) => (await this.http.request(SdkClearFieldControlDocument, params)).clearFieldControl,
  };
}

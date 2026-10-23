import {
  SdkActivateDocumentTemplateDocument,
  SdkActivatePlatformDocumentLayoutDocument,
  SdkAddPlatformCustomDomainDocument,
  SdkArchiveDocumentTemplateDocument,
  SdkArchivePlatformDocumentLayoutDocument,
  SdkAttachRenderedDocumentDocument,
  SdkBrandFontsDocument,
  SdkCheckPlatformCustomDomainDocument,
  SdkChooseDocumentLayoutDocument,
  SdkDeleteBrandFontDocument,
  SdkDocumentRenderJobDocument,
  SdkDocumentTemplatePreviewDocument,
  SdkDocumentTemplatesDocument,
  SdkPlatformCustomDomainsDocument,
  SdkPlatformDocumentLayoutPreviewDocument,
  SdkPlatformDocumentLayoutsDocument,
  SdkPlatformDocumentRenderSettingsDocument,
  SdkRemovePlatformCustomDomainDocument,
  SdkSetPlatformDocumentRenderSettingDocument,
  SdkUpsertDocumentTemplateDocument,
  SdkUpsertPlatformDocumentLayoutDocument,
  SdkValidateDocumentLayoutDocument,
  SdkValidateDocumentTemplateDocument,
  type DocumentRenderMode,
  type DocumentType,
  type UpsertDocumentTemplateInput,
  type UpsertPlatformDocumentLayoutInput,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient } from '../../http.js';

/** Layout presets for invoices, quotes and reminders: your branding on FinBaze's documents. Blocking rules refuse activation. */
export class DocumentLayouts {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(documentType?: DocumentType) {
    return (await this.http.request(SdkPlatformDocumentLayoutsDocument, { documentType })).platformDocumentLayouts;
  }

  /** Required-content check without saving. */
  async validate(documentType: DocumentType, layout: Record<string, unknown>) {
    return (await this.http.request(SdkValidateDocumentLayoutDocument, { documentType, layout })).validateDocumentLayout;
  }

  /** A saved layout is a draft; changes to an active one create a new version. */
  async save(input: UpsertPlatformDocumentLayoutInput) {
    return (await this.http.request(SdkUpsertPlatformDocumentLayoutDocument, { input })).upsertPlatformDocumentLayout;
  }

  async activate(id: string, params: { makeDefault?: boolean } = {}) {
    return (await this.http.request(SdkActivatePlatformDocumentLayoutDocument, { id, makeDefault: params.makeDefault ?? false })).activatePlatformDocumentLayout;
  }

  async archive(id: string) {
    return (await this.http.request(SdkArchivePlatformDocumentLayoutDocument, { id })).archivePlatformDocumentLayout;
  }

  /** HTML (default) of the layout with sample data. */
  async preview(id: string, format?: string) {
    return (await this.http.request(SdkPlatformDocumentLayoutPreviewDocument, { id, format })).platformDocumentLayoutPreview;
  }

  /** Sets the preset one company uses, where the preset allows a choice. */
  async choose(params: { company: string; documentType: DocumentType; layoutId: string }) {
    return (
      await this.http.request(SdkChooseDocumentLayoutDocument, {
        profileId: params.company,
        documentType: params.documentType,
        platformDocumentLayoutId: params.layoutId,
      })
    ).chooseDocumentLayout;
  }
}

/** Logic-less HTML templates, rendered by FinBaze in an isolated renderer. A template activates only after validation passes. */
export class DocumentTemplates {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(documentType?: DocumentType) {
    return (await this.http.request(SdkDocumentTemplatesDocument, { documentType })).documentTemplates;
  }

  async save(input: UpsertDocumentTemplateInput) {
    return (await this.http.request(SdkUpsertDocumentTemplateDocument, { input })).upsertDocumentTemplate;
  }

  /** Renders the fixtures and checks the required content. The result's `validationReport` lists what failed. */
  async validate(id: string) {
    return (await this.http.request(SdkValidateDocumentTemplateDocument, { id })).validateDocumentTemplate;
  }

  async activate(id: string, params: { makeDefault?: boolean } = {}) {
    return (await this.http.request(SdkActivateDocumentTemplateDocument, { id, makeDefault: params.makeDefault ?? false })).activateDocumentTemplate;
  }

  async archive(id: string) {
    return (await this.http.request(SdkArchiveDocumentTemplateDocument, { id })).archiveDocumentTemplate;
  }

  /** HTML of the template filled with a named fixture. */
  async preview(id: string, fixture: string) {
    return (await this.http.request(SdkDocumentTemplatePreviewDocument, { id, fixture })).documentTemplatePreview;
  }
}

/** Documents you render yourself (`document.render_requested`): FinBaze stores your PDF as the official copy. */
export class DocumentRendering {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** How each document type is rendered: `finbaze_layout`, `template` or `partner` with a timeout. */
  settings = {
    list: async () => (await this.http.request(SdkPlatformDocumentRenderSettingsDocument)).platformDocumentRenderSettings,
    set: async (params: { documentType: DocumentType; mode: DocumentRenderMode; timeoutSeconds?: number }) =>
      (await this.http.request(SdkSetPlatformDocumentRenderSettingDocument, params)).setPlatformDocumentRenderSetting,
  };

  async retrieveJob(id: string) {
    return (await this.http.request(SdkDocumentRenderJobDocument, { id })).documentRenderJob;
  }

  /**
   * Your rendered PDF. Small files go inline (`pdfBase64`); for larger ones upload to
   * `POST /v2/platform/documents/uploads` first and pass the `uploadId`. A PDF that misses required content is rejected
   * and FinBaze falls back to its own layout.
   */
  async attach(jobId: string, file: { pdfBase64: string; uploadId?: never } | { uploadId: string; pdfBase64?: never }) {
    return (await this.http.request(SdkAttachRenderedDocumentDocument, { jobId, ...file })).attachRenderedDocument;
  }

  /** Uploads a large PDF (up to 10 MB); returns the `uploadId` for `attach`. Valid for an hour, usable once. */
  async upload(pdf: Uint8Array, options: { signal?: AbortSignal } = {}) {
    const { data } = await this.http.rest<{ uploadId: string; sizeBytes: number; sha256: string; expiresAt: string }>('POST', '/platform/documents/uploads', {
      headers: { 'Content-Type': 'application/pdf' },
      body: pdf,
      signal: options.signal,
    });
    return data;
  }
}

/** WOFF2 brand fonts for your documents and emails. */
export class DocumentFonts {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(params: { ownerType: 'platform' | 'company'; ownerId?: string }) {
    return (await this.http.request(SdkBrandFontsDocument, params)).brandFonts;
  }

  async delete(id: string) {
    return (await this.http.request(SdkDeleteBrandFontDocument, { id })).deleteBrandFont;
  }

  /**
   * Uploads a WOFF2 file (up to the API's font limit). `attest: true` confirms you may embed the font.
   * Without `company` the font belongs to your platform; with it, to one company.
   */
  async upload(params: { woff2: Uint8Array; family: string; weight: number; style?: 'normal' | 'italic'; attest: boolean; company?: string; signal?: AbortSignal }) {
    const { data } = await this.http.rest<{ id: string; family: string; weight: number; style: string }>(
      'POST',
      params.company ? `/profiles/${encodeURIComponent(params.company)}/fonts` : '/platform/fonts',
      {
        query: { family: params.family, weight: params.weight, style: params.style ?? 'normal', attest: params.attest },
        headers: { 'Content-Type': 'font/woff2' },
        body: params.woff2,
        signal: params.signal,
      },
    );
    return data;
  }
}

/** Invoice, quote and payment pages on your own domain. Point the CNAME and add the TXT record, then `check`. */
export class CustomDomains {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list() {
    return (await this.http.request(SdkPlatformCustomDomainsDocument)).platformCustomDomains;
  }

  async add(hostname: string) {
    return (await this.http.request(SdkAddPlatformCustomDomainDocument, { hostname })).addPlatformCustomDomain;
  }

  /** Looks at DNS now instead of waiting for the next scheduled check. */
  async check(id: string) {
    return (await this.http.request(SdkCheckPlatformCustomDomainDocument, { id })).checkPlatformCustomDomain;
  }

  async remove(id: string) {
    return (await this.http.request(SdkRemovePlatformCustomDomainDocument, { id })).removePlatformCustomDomain;
  }
}

/* @ds-bundle: {"format":4,"namespace":"TakeAnyAIDesignSystem_365327","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"CtaLink","sourcePath":"components/actions/Button.jsx"},{"name":"EchoSignature","sourcePath":"components/brand/EchoSignature.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"HairlineGrid","sourcePath":"components/cards/HairlineCard.jsx"},{"name":"HairlineCard","sourcePath":"components/cards/HairlineCard.jsx"},{"name":"SummaryBar","sourcePath":"components/cards/HairlineCard.jsx"},{"name":"UseCaseCard","sourcePath":"components/cards/UseCaseCard.jsx"},{"name":"IntentList","sourcePath":"components/cards/UseCaseCard.jsx"},{"name":"StartStep","sourcePath":"components/cards/UseCaseCard.jsx"},{"name":"StartGrid","sourcePath":"components/cards/UseCaseCard.jsx"},{"name":"WhyCard","sourcePath":"components/cards/WhyCard.jsx"},{"name":"WhyGrid","sourcePath":"components/cards/WhyCard.jsx"},{"name":"ComparisonTable","sourcePath":"components/data/ComparisonTable.jsx"},{"name":"RouterTable","sourcePath":"components/data/ComparisonTable.jsx"},{"name":"HeadToHead","sourcePath":"components/data/ComparisonTable.jsx"},{"name":"MetricStrip","sourcePath":"components/data/MetricStrip.jsx"},{"name":"StepList","sourcePath":"components/data/MetricStrip.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Field.jsx"},{"name":"SegmentedPicker","sourcePath":"components/forms/Field.jsx"},{"name":"FormCard","sourcePath":"components/forms/FormCard.jsx"},{"name":"FormRow","sourcePath":"components/forms/FormCard.jsx"},{"name":"Hero","sourcePath":"components/hero/Hero.jsx"},{"name":"PageHead","sourcePath":"components/hero/Hero.jsx"},{"name":"IntroStatement","sourcePath":"components/hero/IntroStatement.jsx"},{"name":"CtaStrip","sourcePath":"components/hero/IntroStatement.jsx"},{"name":"Badge","sourcePath":"components/labels/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"MonoLabel","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SectionHead","sourcePath":"components/layout/Section.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"Showcase","sourcePath":"components/media/Showcase.jsx"},{"name":"Placeholder","sourcePath":"components/media/Showcase.jsx"},{"name":"FigureCaption","sourcePath":"components/media/Showcase.jsx"},{"name":"BentoGrid","sourcePath":"components/modules/BentoGrid.jsx"},{"name":"BentoTile","sourcePath":"components/modules/BentoGrid.jsx"},{"name":"ModuleChip","sourcePath":"components/modules/BentoGrid.jsx"},{"name":"ModuleStack","sourcePath":"components/modules/BentoGrid.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SubNav","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"brand-book/doc-page.js":"f52ae9c02fca","components/actions/Button.jsx":"e2aab32890fd","components/brand/EchoSignature.jsx":"0f2e2e683c6f","components/brand/Logo.jsx":"5414152df336","components/cards/HairlineCard.jsx":"789d3e592b2d","components/cards/UseCaseCard.jsx":"7ddfa23765a8","components/cards/WhyCard.jsx":"eaedda8794bd","components/data/ComparisonTable.jsx":"369753a8e041","components/data/MetricStrip.jsx":"e951c75f7358","components/forms/Field.jsx":"14371975ffea","components/forms/FormCard.jsx":"3ddf11dc9dd0","components/hero/Hero.jsx":"f3f24e835fd6","components/hero/IntroStatement.jsx":"4809d21be683","components/labels/Badge.jsx":"f36549aa5119","components/labels/Eyebrow.jsx":"27a9f340fb8f","components/layout/Section.jsx":"21ed101f6d57","components/media/Icon.jsx":"a17dcd49fa65","components/media/Showcase.jsx":"1def0d74fcd4","components/modules/BentoGrid.jsx":"7b10cbadf19a","components/navigation/Footer.jsx":"e07363c539c8","components/navigation/NavBar.jsx":"cdac3577ea02","guidelines/motifs/motif-e-features.js":"270d18514df6","guidelines/motifs/motif-e.js":"3d10acff3086","guidelines/motifs/motif-f.js":"a4f1682c2fa8","guidelines/motifs/motif-h.js":"a88ba41f6608","mockups/homepage-ube/Motifs.jsx":"496e4d732b2b","mockups/homepage-ube/UbeHomepage.jsx":"9a0d399af4b1","ui_kits/docs/DocsArticles.jsx":"2a2941d7e292","ui_kits/docs/DocsShell.jsx":"4e2a7864f518","ui_kits/website/DifferScreen.jsx":"3e9d2e4df62c","ui_kits/website/GetStartedScreen.jsx":"8a1e1f833c02","ui_kits/website/HomeScreen.jsx":"eaeae57abf8a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TakeAnyAIDesignSystem_365327 = window.TakeAnyAIDesignSystem_365327 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// brand-book/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-book/doc-page.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill button. Primary = ink fill; accent = electric amethyst with glow (one per screen); outline = ink hairline; ghost = text only. */
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  onDark = false,
  href,
  disabled,
  children,
  className = '',
  ...rest
}) {
  const cls = ['btn', 'btn-' + variant, size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '', onDark ? 'on-dark' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  }, "\u2192"));
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    "aria-disabled": disabled || undefined
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), inner);
}

/** Underlined text link with optional arrow — the quiet secondary CTA. */
function CtaLink({
  href = '#',
  arrow = true,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "cta-link",
    href: href
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button, CtaLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/EchoSignature.jsx
try { (() => {
/** Four copies of one glyph in ascending weight at 4–7% opacity — a quiet brand watermark. */
function EchoSignature({
  text = 'A',
  size = 360,
  onDark = false,
  style,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: 'echo-sig' + (onDark ? ' on-dark' : '') + (className ? ' ' + className : ''),
    style: {
      '--echo-size': size + 'px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e1"
  }, text), /*#__PURE__*/React.createElement("span", {
    className: "e2"
  }, text), /*#__PURE__*/React.createElement("span", {
    className: "e3"
  }, text), /*#__PURE__*/React.createElement("span", {
    className: "e4"
  }, text));
}
Object.assign(__ds_scope, { EchoSignature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EchoSignature.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function dsBase() {
  if (typeof document === 'undefined') return '';
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  return s ? s.src.replace(/_ds_bundle\.js.*$/, '') : '';
}
const SVG_FILES = {
  ube: 'takeany-logo-ube-classic.svg',
  night: 'takeany-logo-night-glow.svg',
  butter: 'takeany-logo-ube-butter.svg',
  mono: 'takeany-logo-night-mono.svg'
};
const PNG_FILES = {
  ube: 'takeany-wordmark-ube',
  night: 'takeany-wordmark-ube-night',
  'ube-soft': 'takeany-wordmark-ube-soft',
  'on-plum': 'takeany-wordmark-ube-on-plum',
  'ube-ink': 'takeany-wordmark-ube-ink',
  navy: 'takeany-wordmark-navy',
  white: 'takeany-wordmark-white'
};
const WEIGHTS = {
  regular: '',
  medium: '-w3',
  semibold: '-w5',
  bold: '-w7'
};

/** TakeAny.AI wordmark. ube = primary (01 Ube classic), night = negative on dark (10 Night glow), butter = negative on plum (09 Ube butter). Medium weight renders the vector SVG. */
function Logo({
  tone = 'ube',
  weight = 'medium',
  layout = 'horizontal',
  height = 24,
  src,
  alt = 'TakeAny.AI',
  style,
  ...rest
}) {
  let file;
  if (layout === 'stacked' && SVG_FILES[tone]) file = SVG_FILES[tone].replace('.svg', '-stacked.svg');else if (weight === 'medium' && SVG_FILES[tone]) file = SVG_FILES[tone];else {
    const base = PNG_FILES[tone] || PNG_FILES.ube;
    const w = tone === 'ube' || tone === 'night' ? WEIGHTS[weight] || '' : '';
    file = base + w + '.png';
  }
  const url = src || dsBase() + 'assets/logo/' + file;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ta-logo",
    style: {
      height,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: alt
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/HairlineCard.jsx
try { (() => {
/** Hairline grid: 1px gap over the line colour draws the rules between cards. */
function HairlineGrid({
  cols = 3,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hl-grid",
    style: {
      '--cols': cols,
      ...style
    }
  }, children);
}

/** Card inside a HairlineGrid: mono key or number, h3/h4, muted copy, optional dash list. */
function HairlineCard({
  k,
  n,
  title,
  size = 'h3',
  body,
  items = [],
  children
}) {
  const H = size === 'h4' ? 'h4' : 'h3';
  return /*#__PURE__*/React.createElement("div", {
    className: "hl-card"
  }, n && /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, n), k && /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), title && /*#__PURE__*/React.createElement(H, null, title), body && /*#__PURE__*/React.createElement("p", null, body), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "dash-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it))), children);
}

/** Ink closing line under a grid: mono label + one sentence. */
function SummaryBar({
  label = 'In short',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "summary-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, label), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { HairlineGrid, HairlineCard, SummaryBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/HairlineCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/UseCaseCard.jsx
try { (() => {
/** Quote card: the customer's sentence in quotes, our answer pinned to the bottom above a dashed rule. */
function UseCaseCard({
  k,
  quote,
  answer,
  href,
  onClick
}) {
  const Tag = href || onClick ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    className: "uc-card",
    href: href,
    onClick: onClick,
    style: {
      cursor: href || onClick ? 'pointer' : undefined
    }
  }, k && /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), /*#__PURE__*/React.createElement("p", {
    className: "quote"
  }, quote), answer && /*#__PURE__*/React.createElement("p", {
    className: "answer"
  }, answer));
}

/** Numbered link rows — the home "How do you want to use AI?" menu. */
function IntentList({
  items = [],
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "intent-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "intent-row",
    href: it.href || '#',
    onClick: e => {
      if (onSelect) {
        e.preventDefault();
        onSelect(i);
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: "a",
    "aria-hidden": "true"
  }, "\u2192"))));
}

/** Three "doors" with ink top rules and bottom-pinned CTAs. */
function StartStep({
  num,
  title,
  body,
  reqTitle,
  req = [],
  cta
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "start-step"
  }, num && /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, num), /*#__PURE__*/React.createElement("h3", null, title), body && /*#__PURE__*/React.createElement("p", null, body), req.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rk"
  }, reqTitle || 'You will need'), /*#__PURE__*/React.createElement("ul", {
    className: "dash-list"
  }, req.map(r => /*#__PURE__*/React.createElement("li", {
    key: r
  }, r)))), cta && /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, cta));
}
function StartGrid({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "start-grid"
  }, children);
}
Object.assign(__ds_scope, { UseCaseCard, IntentList, StartStep, StartGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/UseCaseCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/WhyCard.jsx
try { (() => {
/** White 16px card with a green mono index and a 20px statement; optional expandable detail (+ → ×). */
function WhyCard({
  when,
  text,
  body,
  tone = 'default',
  expandable = false,
  defaultOpen = false,
  children
}) {
  const cls = 'why-card' + (tone === 'feature' ? ' feature' : tone === 'inverse' ? ' inverse' : tone === 'plum' ? ' plum' : '');
  if (expandable) {
    return /*#__PURE__*/React.createElement("div", {
      className: cls
    }, when && /*#__PURE__*/React.createElement("span", {
      className: "when"
    }, when), /*#__PURE__*/React.createElement("details", {
      className: "exp",
      open: defaultOpen
    }, /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, text), /*#__PURE__*/React.createElement("span", {
      className: "exp-plus",
      "aria-hidden": "true"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "exp-body"
    }, body && /*#__PURE__*/React.createElement("p", {
      className: "body"
    }, body), children)));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, when && /*#__PURE__*/React.createElement("span", {
    className: "when"
  }, when), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, text), body && /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, body), children);
}

/** Grid for WhyCards (12px gaps). */
function WhyGrid({
  cols = 4,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "why-grid",
    style: {
      '--cols': cols,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { WhyCard, WhyGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/WhyCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonTable.jsx
try { (() => {
/** Signature comparison: our column is a solid green header over a green-tint column. */
function ComparisonTable({
  paramLabel = 'Criterion / capability',
  us = 'TakeAny.AI',
  others = [],
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cmp-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "cmp"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "param"
  }, paramLabel), /*#__PURE__*/React.createElement("th", {
    className: "col-us"
  }, us), others.map(o => /*#__PURE__*/React.createElement("th", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => r.group ? /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: "grp"
  }, /*#__PURE__*/React.createElement("th", {
    colSpan: 2 + others.length
  }, r.group)) : /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "param"
  }, r.param), /*#__PURE__*/React.createElement("td", {
    className: "col-us"
  }, r.us), (r.others || []).map((v, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    className: "other"
  }, v)))))));
}

/** "If this → go here" router. */
function RouterTable({
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "router"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "rr",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc if"
  }, r.if), /*#__PURE__*/React.createElement("div", {
    className: "rc go"
  }, r.badge && /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, r.badge), r.go))));
}

/** Head-to-head rows: 220px mono label, one 17px sentence. */
function HeadToHead({
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "h2h"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "vs"
  }, r.vs), /*#__PURE__*/React.createElement("p", null, r.text))));
}
Object.assign(__ds_scope, { ComparisonTable, RouterTable, HeadToHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricStrip.jsx
try { (() => {
/** Stacked metric rows: mono key + 24px figure on the left, one explanatory line on the right. */
function MetricStrip({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "metrics"
  }, items.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("b", null, m.k), /*#__PURE__*/React.createElement("span", {
    className: m.lit ? 'lit' : ''
  }, m.v), /*#__PURE__*/React.createElement("em", null, m.note))));
}

/** Numbered steps with green mono numerals. */
function StepList({
  items = []
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: "steps"
  }, items.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("b", null, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, s))));
}
Object.assign(__ds_scope, { MetricStrip, StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricStrip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled form control: mono 11px label, 6px-radius input, 2px ink focus outline. */
function Field({
  label,
  required,
  as = 'input',
  options = [],
  hint,
  error,
  full,
  id,
  ...rest
}) {
  const fid = id || (label ? 'f-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  let control;
  if (as === 'textarea') control = /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid
  }, rest));else if (as === 'select') control = /*#__PURE__*/React.createElement("select", _extends({
    id: fid
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o)));else control = /*#__PURE__*/React.createElement("input", _extends({
    id: fid
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: 'field' + (error ? ' error' : ''),
    style: full ? {
      gridColumn: '1 / -1'
    } : undefined
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label, required && ' *'), control, error ? /*#__PURE__*/React.createElement("span", {
    className: "err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, hint) : null);
}

/** Checkbox with wrapping consent-style label. */
function Checkbox({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "check"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", null, children));
}

/** Segmented vertical picker (→ rows, pressed = paper-3 + ink border). */
function SegmentedPicker({
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, options.map((o, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-pressed": value === i,
    onClick: () => onChange && onChange(i)
  }, /*#__PURE__*/React.createElement("span", null, "\u2192"), /*#__PURE__*/React.createElement("span", null, o))));
}
Object.assign(__ds_scope, { Field, Checkbox, SegmentedPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormCard.jsx
try { (() => {
/** The only ink-bordered, elevated surface: header row (mono title + reply promise), then fields. */
function FormCard({
  title = 'Talk to us',
  reply = 'Reply within 1 business day',
  children,
  onSubmit,
  style
}) {
  return /*#__PURE__*/React.createElement("form", {
    className: "form-card",
    style: style,
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "reply"
  }, reply)), /*#__PURE__*/React.createElement("div", {
    className: "form-stack"
  }, children));
}

/** Two-column row inside a FormCard. */
function FormRow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, children);
}
Object.assign(__ds_scope, { FormCard, FormRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormCard.jsx", error: String((e && e.message) || e) }); }

// components/hero/IntroStatement.jsx
try { (() => {
/** Thesis slot: 160px mono tag (ink top rule) beside one 21–29px sentence. */
function IntroStatement({
  tag = 'In one line',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "intro-grid"
  }, /*#__PURE__*/React.createElement("span", {
    className: "intro-tag"
  }, tag), /*#__PURE__*/React.createElement("p", {
    className: "intro-body"
  }, children));
}

/** Closing CTA band: 36–64px headline with <strong> at 800, mono sub, buttons at the baseline. */
function CtaStrip({
  title,
  sub,
  actions,
  inverse = false,
  plum = false,
  echo = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: 'cta-strip' + (inverse ? ' inverse' : '') + (plum ? ' plum' : '')
  }, echo && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: 'echo-sig' + (inverse || plum ? ' on-dark' : ''),
    style: {
      right: -10,
      bottom: -40,
      '--echo-size': '200px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e1"
  }, "A"), /*#__PURE__*/React.createElement("span", {
    className: "e2"
  }, "A"), /*#__PURE__*/React.createElement("span", {
    className: "e3"
  }, "A"), /*#__PURE__*/React.createElement("span", {
    className: "e4"
  }, "A")), /*#__PURE__*/React.createElement("div", {
    className: "container cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, sub)), actions && /*#__PURE__*/React.createElement("div", {
    className: "cta-bts"
  }, actions)));
}
Object.assign(__ds_scope, { IntroStatement, CtaStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/IntroStatement.jsx", error: String((e && e.message) || e) }); }

// components/labels/Badge.jsx
try { (() => {
/** Small mono tag. Solid navy by default; outline, lit (green tint) and warn (blocked) variants. */
function Badge({
  variant = 'solid',
  children,
  style
}) {
  const cls = 'badge' + (variant !== 'solid' ? ' ' + variant : '');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
/** Mono uppercase label with a green dot and soft halo — sits above hero and page headlines. */
function Eyebrow({
  dot = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: style
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), children);
}

/** Bare mono metadata label (11px, 0.16em, uppercase, muted). */
function MonoLabel({
  as: Tag = 'span',
  tone = 'muted',
  children,
  style
}) {
  const color = tone === 'ink' ? 'var(--ink)' : tone === 'lit' ? 'var(--lit-deep)' : tone === 'faint' ? 'var(--muted-2)' : 'var(--muted)';
  return /*#__PURE__*/React.createElement(Tag, {
    className: "mono",
    style: {
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow, MonoLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/hero/Hero.jsx
try { (() => {
/** Home hero: eyebrow, two-weight headline (200 then 800), lede above a hairline, CTAs, mono proof chips. */
function Hero({
  eyebrow,
  line1,
  line2,
  lede,
  actions,
  chips = [],
  align = 'left',
  echo = true,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: 'hero' + (align === 'center' ? ' center' : '')
  }, echo && /*#__PURE__*/React.createElement(__ds_scope.EchoSignature, {
    style: {
      right: -40,
      top: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-main"
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", null, line1 && /*#__PURE__*/React.createElement("span", {
    className: "l1"
  }, line1), line2 && /*#__PURE__*/React.createElement("span", {
    className: "l2"
  }, line2)), lede && /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, lede), actions && /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, actions), chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "hero-chips"
  }, chips.map(c => /*#__PURE__*/React.createElement("span", {
    key: c
  }, c))), children)));
}

/** Interior page head: eyebrow, h1 with a <strong> weight jump, muted lede, CTAs. */
function PageHead({
  eyebrow,
  title,
  lede,
  actions,
  echo = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-head"
  }, echo && /*#__PURE__*/React.createElement(__ds_scope.EchoSignature, {
    style: {
      right: -60,
      top: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", null, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lede), actions && /*#__PURE__*/React.createElement("div", {
    className: "head-cta"
  }, actions)));
}
Object.assign(__ds_scope, { Hero, PageHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
/** Page band: 2px ink chapter rule with a 92px green tick, 72/88px vertical rhythm, 1280 container. */
function Section({
  tone = 'default',
  rule = true,
  id,
  label,
  children,
  style,
  containerStyle
}) {
  const cls = ['section', tone === 'sunken' ? 'sunken' : '', tone === 'inverse' ? 'inverse' : '', tone === 'plum' ? 'plum' : '', !rule ? 'plain' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("section", {
    className: cls,
    id: id,
    "data-screen-label": label,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: containerStyle
  }, children));
}

/** Section header: numbered mono label in a 244px left column, h2 + sub on the right. */
function SectionHead({
  num,
  title,
  sub,
  stacked = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: 'section-head' + (stacked ? ' stacked' : ''),
    style: style
  }, num && /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, num), title && /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, sub), children);
}
Object.assign(__ds_scope, { Section, SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
const LUCIDE_SRC = 'https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js';
let loading = null;
function loadLucide() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.lucide && window.lucide.icons) return Promise.resolve(window.lucide);
  if (!loading) loading = new Promise(res => {
    const s = document.createElement('script');
    s.src = LUCIDE_SRC;
    s.onload = () => res(window.lucide);
    s.onerror = () => res(null);
    document.head.appendChild(s);
  });
  return loading;
}
const pascal = n => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());

/** Lucide icon on the 24 grid with size-compensated stroke. tone="lit" for the single green accent. */
function Icon({
  name,
  size = 24,
  tone = 'ink',
  title,
  style
}) {
  const [lib, setLib] = React.useState(typeof window !== 'undefined' && window.lucide && window.lucide.icons ? window.lucide : null);
  React.useEffect(() => {
    if (!lib) loadLucide().then(l => l && setLib(l));
  }, []);
  let node = lib && lib.icons && (lib.icons[pascal(name)] || lib.icons[name]);
  if (node && node[0] === 'svg') node = node[2];
  const cls = 'icn icn-' + size + (tone === 'lit' ? ' icn-lit' : tone === 'quiet' ? ' icn-quiet' : tone === 'warn' ? ' icn-warn' : tone === 'white' ? ' icn-on-dark' : '');
  return /*#__PURE__*/React.createElement("svg", {
    className: cls,
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    style: style
  }, title && /*#__PURE__*/React.createElement("title", null, title), (node || []).map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/media/Showcase.jsx
try { (() => {
/** Product screenshot in dark browser chrome with a mono URL, plus a tagged caption. */
function Showcase({
  src,
  alt = '',
  url,
  tag,
  caption,
  children
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "showcase"
  }, /*#__PURE__*/React.createElement("div", {
    className: "frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), url && /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, url)), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : children), (tag || caption) && /*#__PURE__*/React.createElement("figcaption", null, tag && /*#__PURE__*/React.createElement("span", {
    className: "fc-tag"
  }, tag), /*#__PURE__*/React.createElement("span", null, caption)));
}

/** Greeked 16:10 placeholder with a 135° hatch — use where a real screenshot or illustration is pending. */
function Placeholder({
  label = 'Screenshot',
  ratio = '16/10',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph-body",
    style: {
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ph-label"
  }, label)));
}

/** Illustration caption: green dot, green tag, em dash, uppercase mono sentence. */
function FigureCaption({
  tag,
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "ill-cap"
  }, /*#__PURE__*/React.createElement("i", null), tag && /*#__PURE__*/React.createElement("b", null, tag), /*#__PURE__*/React.createElement("span", null, "\u2014 ", children));
}
Object.assign(__ds_scope, { Showcase, Placeholder, FigureCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Showcase.jsx", error: String((e && e.message) || e) }); }

// components/modules/BentoGrid.jsx
try { (() => {
/** 6-column bento grid; tiles span 1–6 columns and 1–3 rows. Collapses to 2 columns under 820px. */
function BentoGrid({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bento",
    style: style
  }, children);
}

/** One module tile: dotted mono key, title or big stat, short copy, optional bottom-bleed media. */
function BentoTile({
  span = 2,
  rows = 1,
  tone = 'default',
  k,
  title,
  stat,
  body,
  media,
  onClick,
  href,
  children
}) {
  const cls = 'tile' + (tone !== 'default' ? ' ' + tone : '') + (onClick ? ' link' : '');
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    className: cls,
    href: href,
    onClick: onClick,
    style: {
      gridColumn: 'span ' + span,
      gridRow: rows > 1 ? 'span ' + rows : undefined
    }
  }, k && /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), stat && /*#__PURE__*/React.createElement("span", {
    className: "stat"
  }, stat), title && /*#__PURE__*/React.createElement("h3", null, title), body && /*#__PURE__*/React.createElement("p", null, body), children, media && /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, media));
}

/** Pill naming one module; tone on = green dot (enabled), warm = ochre dot (add-on). */
function ModuleChip({
  tone = 'off',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'mod-chip' + (tone !== 'off' ? ' ' + tone : '')
  }, children);
}

/** Layered platform stack (e.g. Core → Apps → Agents): each layer is selectable and lists its modules. */
function ModuleStack({
  layers = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modstack"
  }, layers.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "mod-layer",
    "aria-pressed": value === i,
    onClick: () => onChange && onChange(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, /*#__PURE__*/React.createElement("b", null, l.label), l.tagline && /*#__PURE__*/React.createElement("i", null, l.tagline)), /*#__PURE__*/React.createElement("span", {
    className: "chips"
  }, (l.items || []).map(it => /*#__PURE__*/React.createElement(ModuleChip, {
    key: it,
    tone: l.tone || 'on'
  }, it))), l.count != null && /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, /*#__PURE__*/React.createElement("b", null, l.count), l.unit || 'modules'))));
}
Object.assign(__ds_scope, { BentoGrid, BentoTile, ModuleChip, ModuleStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/modules/BentoGrid.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** Site footer on #FAFAF7: wordmark + one-line positioning, link columns, mono legal row. */
function Footer({
  tagline = 'The control layer for AI agents. Runs on your infrastructure.',
  columns = [],
  legal = '© 2026 TakeAny.AI',
  meta = 'llms.txt · Privacy · Terms · DPA · Cookie settings'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ta-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-brand"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 22
  }), /*#__PURE__*/React.createElement("p", null, tagline)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    className: "foot-col",
    key: c.title
  }, /*#__PURE__*/React.createElement("h6", null, c.title), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", null, meta))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** Sticky top nav: wordmark, centred links, pill CTA. 84% warm paper with blur. */
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = 'Get started',
  onCta,
  logoHeight = 22
}) {
  const go = (e, l) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l.id || l.label);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "nav-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go(e, {
      id: 'home'
    }),
    "aria-label": "TakeAny.AI home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: logoHeight
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    className: active === (l.id || l.label) ? 'active' : '',
    onClick: e => go(e, l)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    arrow: true,
    onClick: onCta
  }, cta))));
}

/** Sticky mono sub-nav for long pages (pills, scrolls horizontally). */
function SubNav({
  items = [],
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "subnav-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container subnav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: '#' + it.id,
    className: active === it.id ? 'active' : '',
    onClick: e => {
      if (onSelect) {
        e.preventDefault();
        onSelect(it.id);
      }
    }
  }, it.label))));
}
Object.assign(__ds_scope, { NavBar, SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// guidelines/motifs/motif-e-features.js
try { (() => {
(function () {
  const P = '#5C2A6B',
    A = '#8B3DFF',
    L = '#DCCCF0',
    L1 = '#EEE6F8',
    L3 = '#C8B3E6',
    W = '#FFFFFF';
  const pos = [[2, 2], [62, 2], [2, 62], [62, 62]];
  let n = 0;
  // one 56px tile at slot i: background + content in absolute module coords, clipped to the rounded tile
  function T(i, bg, inner) {
    const [x, y] = pos[i],
      id = 'fe' + n++;
    return `<clipPath id="${id}"><rect x="${x}" y="${y}" width="56" height="56" rx="6"/></clipPath><g clip-path="url(#${id})"><rect x="${x}" y="${y}" width="56" height="56" fill="${bg}"/>${inner || ''}</g>`;
  }
  const F = {
    // two eyes looking ahead over one rounded head: four tiles, one silhouette
    agents: () => T(0, P, `<circle cx="30" cy="30" r="16" fill="${W}"/><circle cx="35" cy="30" r="6" fill="${A}"/>`) + T(1, P, `<circle cx="90" cy="30" r="16" fill="${W}"/><circle cx="95" cy="30" r="6" fill="${A}"/>`) + T(2, L1, `<path d="M58 62H2A56 56 0 0 0 58 118Z" fill="${P}"/>`) + T(3, L1, `<path d="M62 62H118A56 56 0 0 1 62 118Z" fill="${P}"/>`),
    // node → connector → node, with a ghost slot for the next step
    workflows: () => T(0, A, `<rect x="18" y="18" width="24" height="24" fill="${W}"/><path d="M42 30H58" stroke="${W}" stroke-width="6"/>`) + T(1, L1, `<path d="M62 30A28 28 0 0 1 90 58" fill="none" stroke="${P}" stroke-width="6"/><circle cx="81.8" cy="38.2" r="5" fill="${A}"/>`) + T(2, L1, `<rect x="19" y="79" width="22" height="22" fill="none" stroke="${L3}" stroke-width="2" stroke-dasharray="4 3"/>`) + T(3, P, `<path d="M90 62V78" stroke="${L}" stroke-width="6"/><rect x="78" y="78" width="24" height="24" fill="${L}"/>`),
    // shield silhouette cut into tiles, lock-ring at the centre
    guardrails: () => T(0, P) + T(1, P) + T(2, L1, `<path d="M2 62H58V118Z" fill="${P}"/>`) + T(3, L1, `<path d="M62 62H118L62 118Z" fill="${P}"/>`) + `<circle cx="60" cy="56" r="17" fill="none" stroke="${L}" stroke-width="6"/><circle cx="60" cy="56" r="6" fill="${A}"/>`
  };
  window.FEATURE_TILES = F;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/motifs/motif-e-features.js", error: String((e && e.message) || e) }); }

// guidelines/motifs/motif-e.js
try { (() => {
(function () {
  const P = '#5C2A6B',
    A = '#8B3DFF',
    L = '#DCCCF0',
    L1 = '#EEE6F8',
    L3 = '#C8B3E6',
    W = '#FFFFFF';
  const S = 56,
    pos = [[2, 2], [62, 2], [2, 62], [62, 62]];
  // one tile: background + primitive. rot rotates the primitive around the tile centre.
  function tile(i, bg, shape, fg, rot = 0, stroke) {
    const [x, y] = pos[i],
      cx = x + 28,
      cy = y + 28;
    let s = '';
    if (shape === 'q') s = `<path d="M${x} ${y} H${x + S} A${S} ${S} 0 0 1 ${x} ${y + S} Z" fill="${fg}"/>`;
    if (shape === 'h') s = `<path d="M${x} ${y + S} A28 28 0 0 1 ${x + S} ${y + S} Z" fill="${fg}"/>`;
    if (shape === 'c') s = `<circle cx="${cx}" cy="${cy}" r="18" fill="${fg}"/>`;
    if (shape === 'd') s = `<circle cx="${cx}" cy="${cy}" r="7" fill="${fg}"/>`;
    if (shape === 't') s = `<path d="M${x} ${y + S} H${x + S} L${x} ${y} Z" fill="${fg}"/>`;
    if (shape === 'r') s = `<circle cx="${cx}" cy="${cy}" r="18" fill="none" stroke="${fg}" stroke-width="${stroke || 6}"/>`;
    if (shape === 's') s = `<rect x="${cx - 12}" y="${cy - 12}" width="24" height="24" fill="${fg}"/>`;
    if (shape === 'qo') s = `<path d="M${x} ${y} H${x + S} A${S} ${S} 0 0 1 ${x} ${y + S} Z" fill="none" stroke="${fg}" stroke-width="2"/>`;
    const clip = `<clipPath id="tc${i}${shape}${rot}"><rect x="${x}" y="${y}" width="${S}" height="${S}" rx="6"/></clipPath>`;
    return `${clip}<g clip-path="url(#tc${i}${shape}${rot})"><rect x="${x}" y="${y}" width="${S}" height="${S}" fill="${bg}"/><g transform="rotate(${rot} ${cx} ${cy})">${s}</g></g>`;
  }
  // quarter centred on the inner corner of each tile → four tiles assemble one circle
  const inner = [180, 270, 90, 0];
  const ring12 = Array.from({
    length: 12
  }, (_, k) => {
    const a = k * Math.PI / 6 - Math.PI / 2;
    return `<circle cx="${(60 + 40 * Math.cos(a)).toFixed(1)}" cy="${(60 + 40 * Math.sin(a)).toFixed(1)}" r="4" fill="${A}"/>`;
  }).join('');
  window.MOTIFS_X = window.MOTIFS_X || {};
  window.MOTIFS_X.E = {
    light: tile(0, L1, '', L1) + tile(1, L1, 'd', A) + tile(2, L1, 'h', L) + tile(3, L1, 'r', L3, 0, 2),
    onprem: [0, 1, 2, 3].map(i => tile(i, P, 'q', L, inner[i])).join('') + `<circle cx="60" cy="60" r="7" fill="${A}"/>`,
    orch: tile(0, L1, 'h', L3, 90) + tile(1, L1, 'h', L3, 180) + tile(2, L1, 'h', L, 0) + tile(3, A, 'c', W),
    eu: [0, 1, 2, 3].map(i => tile(i, P, '', P)).join('') + ring12 + `<circle cx="60" cy="60" r="14" fill="${L}"/>`,
    agnostic: tile(0, L1, 'c', L3) + tile(1, L1, 't', L3) + tile(2, A, 's', W) + tile(3, L1, 'h', L3),
    cost: tile(0, W, 'q', A, inner[0]) + [1, 2, 3].map(i => tile(i, L1, 'qo', L3, inner[i])).join('')
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/motifs/motif-e.js", error: String((e && e.message) || e) }); }

// guidelines/motifs/motif-f.js
try { (() => {
(function () {
  const P = '#5C2A6B',
    P9 = '#3B1747',
    A = '#8B3DFF',
    L = '#DCCCF0',
    L1 = '#EEE6F8',
    L3 = '#C8B3E6',
    I = '#0A0A0A';
  // character: half-disc body + circle head + two dot eyes. look shifts the eyes (-1 left, 1 right).
  function guy(x, base, {
    body = P,
    head = L3,
    eye = I,
    r = 20,
    hr = 12,
    look = 0
  } = {}) {
    const hy = base - r - hr + 2,
      ex = look * 2.5;
    return `<path d="M${x - r} ${base} A${r} ${r} 0 0 1 ${x + r} ${base} Z" fill="${body}"/><circle cx="${x}" cy="${hy}" r="${hr}" fill="${head}"/><circle cx="${x - 4.5 + ex}" cy="${hy - 1}" r="2" fill="${eye}"/><circle cx="${x + 4.5 + ex}" cy="${hy - 1}" r="2" fill="${eye}"/>`;
  }
  const shadow = (x, y, w = 20) => `<ellipse cx="${x}" cy="${y}" rx="${w}" ry="3.5" fill="${L1}"/>`;
  const halo = Array.from({
    length: 12
  }, (_, k) => {
    const a = k * Math.PI / 6;
    return `<circle cx="${(60 + 22 * Math.cos(a)).toFixed(1)}" cy="${(44 + 6 * Math.sin(a)).toFixed(1)}" r="2.6" fill="${A}"/>`;
  }).join('');
  window.MOTIFS_X = window.MOTIFS_X || {};
  window.MOTIFS_X.F = {
    light: `<circle cx="88" cy="28" r="20" fill="${A}"/><path d="M88 48 C86 66 72 70 64 86" fill="none" stroke="${P9}" stroke-width="1.4"/>` + guy(48, 100, {
      look: 1
    }) + shadow(48, 113, 16),
    onprem: `<rect x="18" y="34" width="84" height="76" rx="6" fill="${P}"/><path d="M10 38 L60 8 L110 38 Z" fill="${P9}"/><circle cx="60" cy="68" r="22" fill="${L1}"/><circle cx="60" cy="72" r="13" fill="${L3}"/><circle cx="56" cy="71" r="2" fill="${I}"/><circle cx="64" cy="71" r="2" fill="${I}"/><rect x="78" y="92" width="14" height="18" rx="2" fill="${L}"/><circle cx="32" cy="96" r="3.5" fill="${A}"/>`,
    orch: guy(36, 106, {
      look: 1
    }) + `<path d="M50 92 L86 50" stroke="${P9}" stroke-width="2.2" stroke-linecap="round"/><circle cx="88" cy="48" r="4" fill="${A}"/><circle cx="72" cy="22" r="8" fill="${L}"/><circle cx="100" cy="28" r="7" fill="${L3}"/><circle cx="108" cy="62" r="9" fill="${A}"/>` + shadow(36, 112),
    eu: halo + `<rect x="32" y="102" width="56" height="10" rx="2" fill="${P9}"/>` + guy(60, 102),
    agnostic: `<path d="M18 106 A20 20 0 0 1 58 106 Z" fill="${P}"/><rect x="26" y="60" width="24" height="24" rx="3" fill="${L3}"/><circle cx="33.5" cy="71" r="2" fill="${I}"/><circle cx="42.5" cy="71" r="2" fill="${I}"/><path d="M70 46 H112 M74 46 V100" stroke="${P9}" stroke-width="1.6"/><circle cx="84" cy="34" r="10" fill="none" stroke="${L3}" stroke-width="2.2"/><path d="M102 22 L112 44 H92 Z" fill="none" stroke="${L3}" stroke-width="2.2"/>` + shadow(38, 112),
    cost: `<path d="M46 66 V30 A36 36 0 1 0 82 66 Z" fill="${L1}" stroke="${L3}" stroke-width="1.5"/>` + guy(96, 110, {
      r: 16,
      hr: 10,
      look: -1
    }) + `<path d="M94 68 V48 A20 20 0 0 1 114 68 Z" fill="${A}" transform="rotate(-8 94 68)"/>` + shadow(96, 114, 14)
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/motifs/motif-f.js", error: String((e && e.message) || e) }); }

// guidelines/motifs/motif-h.js
try { (() => {
(function () {
  const P = '#5C2A6B',
    P9 = '#3B1747',
    A = '#8B3DFF',
    L = '#DCCCF0',
    L1 = '#EEE6F8',
    L3 = '#C8B3E6',
    W = '#FFFFFF';
  // the stencil cut from the logo's "A": a parallelogram band at 60°, drawn in the page colour
  function band(cx, cy, len, w = 7, fill = W, deg = 60) {
    const t = deg * Math.PI / 180,
      dx = Math.cos(t),
      dy = -Math.sin(t),
      nx = Math.sin(t),
      ny = Math.cos(t);
    const p = [[1, 1], [1, -1], [-1, -1], [-1, 1]].map(([a, b]) => `${(cx + dx * len / 2 * a + nx * w / 2 * b).toFixed(1)},${(cy + dy * len / 2 * a + ny * w / 2 * b).toFixed(1)}`).join(' ');
    return `<polygon points="${p}" fill="${fill}"/>`;
  }
  const ringDash = (2 * Math.PI * 38 / 12 - 5).toFixed(2);
  window.MOTIFS_X = window.MOTIFS_X || {};
  window.MOTIFS_X.H = {
    light: `<circle cx="60" cy="60" r="40" fill="none" stroke="${P}" stroke-width="3"/>` + band(94.6, 40, 26, 13) + `<circle cx="60" cy="60" r="5" fill="${A}"/>`,
    onprem: `<rect x="20" y="20" width="80" height="80" rx="4" fill="${P}"/>` + band(84, 36, 56, 11) + `<rect x="52" y="52" width="16" height="16" rx="2" fill="${A}"/>`,
    orch: `<rect x="12" y="30" width="58" height="10" rx="5" fill="${L}"/><rect x="12" y="55" width="58" height="10" rx="5" fill="${L3}"/><rect x="12" y="80" width="58" height="10" rx="5" fill="${P}"/><path d="M64 18 L108 60 L64 102 Z" fill="${A}"/>` + band(78, 74, 46, 8),
    eu: `<circle cx="60" cy="60" r="38" fill="none" stroke="${P}" stroke-width="12" stroke-dasharray="${ringDash} 5" transform="rotate(-87 60 60)"/>` + band(60, 60, 120, 6) + `<circle cx="60" cy="60" r="9" fill="${A}"/>`,
    agnostic: `<circle cx="50" cy="64" r="36" fill="${P}"/>` + band(50, 64, 84, 12) + band(56.5, 52.7, 30, 10, A) + band(98, 30, 22, 10, L) + band(104, 58, 22, 10, L3),
    cost: `<circle cx="54" cy="64" r="36" fill="${L3}"/><path d="M62 56 V20 A36 36 0 0 1 98 56 Z" fill="${A}"/>` + band(54, 64, 80, 6)
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/motifs/motif-h.js", error: String((e && e.message) || e) }); }

// mockups/homepage-ube/Motifs.jsx
try { (() => {
const MP = '#5C2A6B',
  MP9 = '#3B1747',
  MA = '#8B3DFF',
  ML = '#DCCCF0',
  ML1 = '#EEE6F8',
  ML3 = '#C8B3E6';
const ring12 = r => Array.from({
  length: 12
}, (_, k) => {
  const a = k * Math.PI / 6 - Math.PI / 2;
  return [r * Math.cos(a), r * Math.sin(a)];
});

/* ---------- A · Solid primitives (SVG) ---------- */
const MotifA = {
  light: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "56",
    r: "34",
    fill: "none",
    stroke: ML3,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "30",
    r: "8",
    fill: MA
  }), /*#__PURE__*/React.createElement("line", {
    x1: "26",
    y1: "106",
    x2: "94",
    y2: "106",
    stroke: MP9,
    strokeWidth: "1.5"
  })),
  onprem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "16",
    width: "88",
    height: "88",
    rx: "8",
    fill: MP
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "26",
    fill: ML
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "8",
    fill: MA
  })),
  orch: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M28 26 C58 26 58 60 86 60 M28 60 H86 M28 94 C58 94 58 60 86 60",
    fill: "none",
    stroke: ML3,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "26",
    r: "10",
    fill: ML
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "60",
    r: "10",
    fill: MP
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "94",
    r: "10",
    fill: ML3
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "60",
    r: "20",
    fill: MA
  })),
  eu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "24",
    fill: MP
  }), ring12(42).map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: 60 + x,
    cy: 60 + y,
    r: "4.5",
    fill: MA
  }))),
  agnostic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M30 66 V98 H90 V66",
    fill: "none",
    stroke: MP,
    strokeWidth: "7",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "76",
    r: "15",
    fill: MA
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "16",
    width: "24",
    height: "24",
    rx: "3",
    fill: ML
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 12 L73 36 H47Z",
    fill: ML3
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "94",
    cy: "28",
    r: "12",
    fill: "none",
    stroke: ML3,
    strokeWidth: "2"
  })),
  cost: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "44",
    fill: ML1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 60 V16 A44 44 0 0 1 104 60 Z",
    fill: MA
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "16",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "44",
    fill: "none",
    stroke: MP,
    strokeWidth: "1.5"
  }))
};

/* ---------- C · Luminous glass (CSS) ---------- */
function Orb({
  s,
  x = 0,
  y = 0,
  c1,
  c2,
  glow = 'none',
  o = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: s,
      height: s,
      left: `calc(50% + ${x}px - ${s / 2}px)`,
      top: `calc(50% + ${y}px - ${s / 2}px)`,
      borderRadius: '50%',
      background: `radial-gradient(circle at 32% 28%,#fff 0,${c1} 28%,${c2} 100%)`,
      boxShadow: glow,
      opacity: o
    }
  });
}
const MotifC = {
  light: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Orb, {
    s: 46,
    y: -12,
    c1: ML1,
    c2: ML3,
    glow: "0 0 30px rgba(200,179,230,.7)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'calc(50% - 26px)',
      top: 'calc(50% + 34px)',
      width: 52,
      height: 8,
      borderRadius: '50%',
      background: 'radial-gradient(closest-side,rgba(92,42,107,.22),transparent)'
    }
  })),
  onprem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'calc(50% - 40px)',
      top: 'calc(50% - 40px)',
      width: 80,
      height: 80,
      borderRadius: 22,
      background: 'linear-gradient(145deg,rgba(238,230,248,.95),rgba(200,179,230,.55))',
      border: '1px solid rgba(255,255,255,.8)',
      boxShadow: 'inset 0 1px 0 #fff,0 18px 36px -18px rgba(92,42,107,.55)'
    }
  }), /*#__PURE__*/React.createElement(Orb, {
    s: 28,
    c1: "#A970FF",
    c2: MP,
    glow: "0 0 26px rgba(139,61,255,.7)"
  })),
  orch: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'calc(50% - 46px)',
      top: 'calc(50% - 26px)',
      width: 92,
      height: 52,
      borderRadius: '50%',
      border: `1.5px solid ${ML}`,
      transform: 'rotate(-14deg)'
    }
  }), /*#__PURE__*/React.createElement(Orb, {
    s: 34,
    c1: "#A970FF",
    c2: MP,
    glow: "0 0 24px rgba(139,61,255,.45)"
  }), /*#__PURE__*/React.createElement(Orb, {
    s: 14,
    x: -44,
    y: 10,
    c1: ML1,
    c2: ML3
  }), /*#__PURE__*/React.createElement(Orb, {
    s: 12,
    x: 40,
    y: -16,
    c1: ML3,
    c2: MA,
    glow: "0 0 12px rgba(139,61,255,.6)"
  }), /*#__PURE__*/React.createElement(Orb, {
    s: 9,
    x: 18,
    y: 24,
    c1: ML1,
    c2: ML
  })),
  eu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Orb, {
    s: 40,
    c1: MP,
    c2: MP9,
    glow: "0 10px 26px -10px rgba(59,23,71,.7)"
  }), ring12(44).map(([x, y], i) => /*#__PURE__*/React.createElement(Orb, {
    key: i,
    s: 10,
    x: x,
    y: y,
    c1: ML3,
    c2: MA,
    glow: "0 0 10px rgba(169,112,255,.8)"
  }))),
  agnostic: /*#__PURE__*/React.createElement(React.Fragment, null, [[ML, -36, -30, .9], ['#A970FF', -4, -30, .7], [MP, -20, -2, .75]].map(([c, x, y, o], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: 56,
      height: 56,
      borderRadius: '50%',
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      background: c,
      opacity: o,
      mixBlendMode: 'multiply'
    }
  }))),
  cost: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'calc(50% - 44px)',
      top: 'calc(50% - 44px)',
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: `conic-gradient(${MA} 0 25%,${ML1} 25% 100%)`,
      boxShadow: '0 0 30px rgba(139,61,255,.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'calc(50% - 22px)',
      top: 'calc(50% - 22px)',
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 30%,#fff,#F7F3FC)',
      boxShadow: '0 4px 12px -4px rgba(92,42,107,.4)'
    }
  }))
};

/* ---------- D · Type as object ---------- */
const tx = (t, st) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-sans)',
    lineHeight: 1,
    letterSpacing: '-0.05em',
    ...st
  }
}, t);
const MotifD = {
  light: /*#__PURE__*/React.createElement(React.Fragment, null, tx('A', {
    fontSize: 110,
    fontWeight: 100,
    color: MP
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '0%',
      top: '2%',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      color: MA
    }
  }, "WT 100")),
  onprem: /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, tx('[', {
    fontSize: 96,
    fontWeight: 200,
    color: ML3
  }), tx('A', {
    fontSize: 84,
    fontWeight: 800,
    color: MP9
  }), tx(']', {
    fontSize: 96,
    fontWeight: 200,
    color: ML3
  })),
  orch: /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, [[200, ML, 0], [400, ML3, -11], [700, '#A970FF', -11], [900, MA, -11]].map(([w, c, m], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, tx('A', {
    fontSize: 58,
    fontWeight: w,
    color: c,
    marginLeft: m
  })))),
  eu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 8,
      borderRadius: 14,
      background: MP
    }
  }), tx('A', {
    fontSize: 56,
    fontWeight: 800,
    color: '#fff',
    position: 'relative'
  }), ring12(44).map(([x, y], i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      position: 'absolute',
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#A970FF',
      left: `calc(50% + ${x}px - 3.5px)`,
      top: `calc(50% + ${y}px - 3.5px)`
    }
  }))),
  agnostic: /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: .9
    }
  }, tx('Any', {
    fontSize: 40,
    fontWeight: 800,
    color: MP9
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 34,
      color: MA,
      letterSpacing: '-0.04em',
      lineHeight: 1
    }
  }, "Any"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 40,
      color: ML3,
      lineHeight: .95
    }
  }, "Any")),
  cost: /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 84,
      fontWeight: 900,
      letterSpacing: '-0.06em',
      color: MP9,
      background: `linear-gradient(transparent 60%,${ML} 60%)`,
      padding: '0 6px',
      lineHeight: 1
    }
  }, "0%")
};

/** Renders one differentiator motif in the chosen direction, at any size (designed at 120px). */
function Motif({
  dir = 'A',
  name,
  size = 120
}) {
  const scale = size / 120;
  const X = window.MOTIFS_X && window.MOTIFS_X[dir];
  if (X) return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    width: size,
    height: size,
    style: {
      overflow: 'visible',
      display: 'block'
    },
    dangerouslySetInnerHTML: {
      __html: X[name]
    }
  });
  if (dir === 'A') return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    width: size,
    height: size,
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, MotifA[name]);
  const set = dir === 'C' ? MotifC : MotifD;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      position: 'relative',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 120,
      height: 120,
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, set[name]));
}
const DIFFERENTIATORS = [{
  name: 'light',
  k: 'Ultra-light framework',
  t: 'One Go binary + SQLite',
  b: 'No cluster, no microservice sprawl. Installs on one Linux host.'
}, {
  name: 'onprem',
  k: 'On-premise',
  t: 'Runs inside your perimeter',
  b: 'Air-gapped by design. Zero outbound telemetry.'
}, {
  name: 'orch',
  k: 'GenAI / LLM / RAG',
  t: 'Orchestration, not glue code',
  b: 'Agents, tools, RAG and workflows on one canvas.'
}, {
  name: 'eu',
  k: 'EU sovereignty',
  t: 'Your jurisdiction, your logs',
  b: 'GDPR, EU AI Act, NIS2 and DORA ready.'
}, {
  name: 'agnostic',
  k: 'Model-agnostic',
  t: 'Any model, bound per agent',
  b: 'Ollama, vLLM, LocalAI, TGI or frontier APIs.'
}, {
  name: 'cost',
  k: 'AI cost control',
  t: '0% Step Tax, 0% markup',
  b: 'Pay per completed run. Bring your own key.'
}];
Object.assign(window, {
  Motif,
  DIFFERENTIATORS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/homepage-ube/Motifs.jsx", error: String((e && e.message) || e) }); }

// mockups/homepage-ube/UbeHomepage.jsx
try { (() => {
const UB = window.TakeAnyAIDesignSystem_365327;
function UbeHero({
  go
}) {
  const {
    Eyebrow,
    Button,
    Showcase
  } = UB;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    "data-screen-label": "Hero",
    style: {
      paddingTop: 72,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-main",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Self-hosted AI agent orchestration"), /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: '12ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l1"
  }, "Ship your"), /*#__PURE__*/React.createElement("span", {
    className: "l2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "AI projects."))), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, /*#__PURE__*/React.createElement("strong", null, "getaamp"), " is a self-hosted, air-gapped AI agent orchestration platform for LLM agents, RAG and workflows. It runs entirely on your own infrastructure \u2014 against local model engines (vLLM, Ollama, LocalAI, TGI) or cloud APIs. ", /*#__PURE__*/React.createElement("strong", null, "Nothing leaves your infrastructure unless you say it can.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    arrow: true,
    onClick: go
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline"
  }, "How we differ")), /*#__PURE__*/React.createElement("div", {
    className: "hero-chips"
  }, /*#__PURE__*/React.createElement("span", null, "Zero outbound telemetry"), /*#__PURE__*/React.createElement("span", null, "Local or frontier models"), /*#__PURE__*/React.createElement("span", null, "Single Go binary"), /*#__PURE__*/React.createElement("span", null, "Hardware-isolated sandboxing"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow-field",
    style: {
      width: '120%',
      height: '120%',
      left: '-10%',
      top: '-10%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Showcase, {
    src: "../../assets/product/workflow-editor.png",
    url: "workflows \xB7 editor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 2,
      left: -28,
      bottom: -28,
      background: 'var(--surface-plum)',
      color: '#fff',
      borderRadius: 16,
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      boxShadow: '0 24px 48px -24px rgba(59,23,71,.6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--text-on-plum-muted)'
    }
  }, "Step tax"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '-0.05em',
      lineHeight: 1
    }
  }, "0%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-on-plum-muted)'
    }
  }, "per completed run")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 2,
      right: -16,
      top: -18,
      background: '#fff',
      border: '1px solid var(--line-card)',
      borderRadius: 999,
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--lit)',
      boxShadow: 'var(--glow-ring)'
    }
  }), "Air-gap \xB7 on"))));
}
function UbeHomepage({
  dir = 'A'
}) {
  const {
    NavBar,
    Section,
    SectionHead,
    BentoGrid,
    BentoTile,
    ModuleStack,
    IntentList,
    UseCaseCard,
    ComparisonTable,
    CtaStrip,
    Footer,
    Button,
    Showcase,
    WhyGrid,
    WhyCard
  } = UB;
  const [layer, setLayer] = React.useState(0);
  const layers = [{
    label: 'Core',
    tagline: 'Runs the platform.',
    items: ['Control plane', 'Audit trail · 14 domains', 'Dual safety firewalls', 'Secrets'],
    count: 5
  }, {
    label: 'Models',
    tagline: 'Any OpenAI-compatible model.',
    items: ['Ollama', 'vLLM', 'LocalAI', 'TGI', 'Frontier APIs'],
    count: 9,
    unit: 'engines',
    tone: 'warm'
  }, {
    label: 'Connectors',
    tagline: 'Reaches your systems.',
    items: ['ERP', 'CRM', 'Knowledge base', 'REST'],
    count: 12,
    unit: 'apps'
  }, {
    label: 'Agents',
    tagline: 'Does the work.',
    items: ['Local RAG', 'Service desk', 'RFP / RFI'],
    count: 6,
    unit: 'agents'
  }];
  const shots = ['workflow-editor', 'llm-providers', 'knowledge-base', 'system-logs'];
  const go = () => {};
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    active: "product",
    onNavigate: () => {},
    onCta: go,
    links: [{
      label: 'Product',
      id: 'product'
    }, {
      label: 'Use cases',
      id: 'uc'
    }, {
      label: 'Pricing',
      id: 'pricing'
    }, {
      label: 'Docs',
      id: 'docs'
    }, {
      label: 'Blog',
      id: 'blog'
    }]
  }), /*#__PURE__*/React.createElement(UbeHero, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, {
    id: "why",
    label: "00 Differentiators"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "00 \xB7 Why getaamp",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Six reasons, ", /*#__PURE__*/React.createElement("strong", null, "one platform."))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 12
    }
  }, DIFFERENTIATORS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.name,
    className: "tile",
    style: {
      gap: 12,
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 104,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    dir: dir,
    name: d.name,
    size: 104
  })), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, d.k), /*#__PURE__*/React.createElement("h3", null, d.t), /*#__PURE__*/React.createElement("p", null, d.b))))), /*#__PURE__*/React.createElement(Section, {
    id: "platform",
    label: "01 Platform"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "01 \xB7 The platform",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Everything an agent needs. ", /*#__PURE__*/React.createElement("strong", null, "Nothing it doesn't.")),
    sub: "One binary, governed host-side. Pick the modules you need today and add the rest when you are ready."
  }), /*#__PURE__*/React.createElement(BentoGrid, null, /*#__PURE__*/React.createElement(BentoTile, {
    span: 4,
    rows: 2,
    k: "Control plane",
    title: "One binary. Every agent.",
    body: "Models, tools, data and logs governed from one host-side console.",
    media: /*#__PURE__*/React.createElement(Showcase, {
      src: "../../assets/product/workflow-editor.png",
      url: "workflows \xB7 editor"
    })
  }), /*#__PURE__*/React.createElement(BentoTile, {
    span: 2,
    tone: "plum",
    k: "Cost",
    stat: /*#__PURE__*/React.createElement("strong", null, "0%"),
    body: "Step Tax and token markup. You pay per completed run."
  }), /*#__PURE__*/React.createElement(BentoTile, {
    span: 2,
    tone: "accent",
    k: "Sovereignty",
    title: "Zero outbound telemetry",
    body: "Nothing leaves unless you say it can."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    dir: dir,
    name: "eu",
    size: 56
  }))), /*#__PURE__*/React.createElement(BentoTile, {
    span: 2,
    k: "Models",
    title: "Any OpenAI-compatible model",
    body: "Ollama, vLLM, LocalAI, TGI or frontier APIs \u2014 bound per agent."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    dir: dir,
    name: "agnostic",
    size: 56
  }))), /*#__PURE__*/React.createElement(BentoTile, {
    span: 2,
    k: "Isolation",
    title: "Firecracker MicroVM",
    body: "Every tool call in a disposable, hardware-isolated sandbox."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    dir: dir,
    name: "onprem",
    size: 56
  }))), /*#__PURE__*/React.createElement(BentoTile, {
    span: 2,
    tone: "sunken",
    k: "Audit",
    stat: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "14"), " log domains"),
    body: "Written to the local database."
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "modules",
    label: "02 Modules"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02 \xB7 Built from modules",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Start with the core. ", /*#__PURE__*/React.createElement("strong", null, "Snap on the rest.")),
    sub: "Each layer works on its own. Click a layer to see where it lives in the console."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(ModuleStack, {
    layers: layers,
    value: layer,
    onChange: setLayer
  }), /*#__PURE__*/React.createElement(Showcase, {
    src: '../../assets/product/' + shots[layer] + '.png',
    url: layers[layer].label.toLowerCase() + ' · console',
    tag: layers[layer].label,
    caption: layers[layer].tagline
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "usecases",
    label: "03 Use cases",
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "03 \xB7 LLM & agent deployments",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "How do you want ", /*#__PURE__*/React.createElement("strong", null, "to use AI?"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "uc-grid",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(UseCaseCard, {
    k: "Regulated",
    quote: "Our documents can't leave the building.",
    answer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Local RAG"), " on Ollama, inside the perimeter.")
  }), /*#__PURE__*/React.createElement(UseCaseCard, {
    k: "Operations",
    quote: "Our ERP is ageing and has no API.",
    answer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Agents with connectors"), " that act inside legacy systems.")
  }), /*#__PURE__*/React.createElement(UseCaseCard, {
    k: "ISV",
    quote: "We want to sell AI under our own brand.",
    answer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Embeddable engine"), " over REST, white-label ready.")
  })), /*#__PURE__*/React.createElement(IntentList, {
    items: [{
      label: 'Turn the GPU servers you bought into a secure AI platform'
    }, {
      label: 'Juggle LLM models, let open-weight take on the frontier labs'
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    id: "when",
    label: "04 Use it when"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "04 \xB7 Use it when",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Use getaamp ", /*#__PURE__*/React.createElement("strong", null, "when\u2026")),
    sub: "Four operational signals that you have outgrown simple SaaS tools."
  }), /*#__PURE__*/React.createElement(WhyGrid, {
    cols: 4
  }, /*#__PURE__*/React.createElement(WhyCard, {
    when: "01",
    text: "SaaS bills for AI decision loops spiral out of control"
  }), /*#__PURE__*/React.createElement(WhyCard, {
    when: "02",
    text: "A compliance audit blocks the rollout"
  }), /*#__PURE__*/React.createElement(WhyCard, {
    when: "03",
    text: "Your ERP is ageing and has no API"
  }), /*#__PURE__*/React.createElement(WhyCard, {
    when: "04",
    tone: "feature",
    text: "You want to sell AI under your own brand"
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "compare",
    label: "05 Compare"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "05 \xB7 How we compare",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One table, ", /*#__PURE__*/React.createElement("strong", null, "no small print."))
  }), /*#__PURE__*/React.createElement(ComparisonTable, {
    us: "getaamp",
    others: ['Cloud SaaS (e.g. Lindy, Make)', 'OS Frameworks (e.g. Dify, Flowise)', 'Scripts / Workflow (e.g. n8n)'],
    rows: [{
      param: 'Deployment model',
      us: 'Single Go Binary + SQLite',
      others: ['Pure SaaS Cloud', 'Docker / Cloud', 'Node.js / Docker']
    }, {
      param: 'Sovereignty and Air-Gap',
      us: '100% Native (Zero Telemetry)',
      others: ['None (data in the cloud)', 'Partial (needs configuration)', 'Partial']
    }, {
      param: 'Code execution isolation',
      us: 'Firecracker MicroVM (Hardware)',
      others: ['None (shared environment)', 'None (standard container)', 'None (container / Node)']
    }, {
      param: 'Billing model',
      us: '0% Step Tax + BYOK',
      others: ['Credit packs / Step Tax', 'Message or query count', 'Per workflow execution']
    }]
  })), /*#__PURE__*/React.createElement(CtaStrip, {
    plum: true,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Ready to ship ", /*#__PURE__*/React.createElement("strong", null, "your AI idea?")),
    sub: "Reply within 1 business day \xB7 or boot the sandbox now",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onDark: true,
      variant: "outline"
    }, "Talk to us"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "accent",
      arrow: true
    }, "Get started"))
  }), /*#__PURE__*/React.createElement(Footer, {
    tagline: "The control layer for AI agents. Runs on your infrastructure.",
    legal: "\xA9 2026 getaamp.com",
    columns: [{
      title: 'Product',
      links: ['Overview', 'Security', 'Cost control', 'Pricing']
    }, {
      title: 'Use cases',
      links: ['Local RAG', 'ERP & CRM', 'White-label']
    }, {
      title: 'Get going',
      links: ['Get started', 'Docs', 'Blog']
    }]
  }));
}
Object.assign(window, {
  UbeHomepage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/homepage-ube/UbeHomepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsArticles.jsx
try { (() => {
function Pager({
  prev,
  next,
  onPick
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "pager"
  }, prev ? /*#__PURE__*/React.createElement("a", {
    onClick: () => onPick(prev[0])
  }, /*#__PURE__*/React.createElement("span", {
    className: "dir"
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, prev[1])) : /*#__PURE__*/React.createElement("span", null), next ? /*#__PURE__*/React.createElement("a", {
    className: "next",
    onClick: () => onPick(next[0])
  }, /*#__PURE__*/React.createElement("span", {
    className: "dir"
  }, "Next \u2192"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, next[1])) : /*#__PURE__*/React.createElement("span", null));
}
function InstallBody({
  onPick
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", null, "Get going"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Install")), /*#__PURE__*/React.createElement("h1", null, "Install on a Linux host"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "TakeAny.AI ships as a single Go binary with a local SQLite database. Most technical teams install it before they talk to anyone \u2014 that is the intended path."), /*#__PURE__*/React.createElement("h2", null, "Requirements"), /*#__PURE__*/React.createElement("table", {
    className: "doc-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Item"), /*#__PURE__*/React.createElement("th", null, "Requirement"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "key"
  }, "host"), /*#__PURE__*/React.createElement("td", null, "Linux with ", /*#__PURE__*/React.createElement("strong", null, "KVM"), " enabled")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "key"
  }, "virtualization"), /*#__PURE__*/React.createElement("td", null, "Hardware virtualization (nested, for private cloud)")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "key"
  }, "secrets"), /*#__PURE__*/React.createElement("td", null, "A 32-byte secrets master key")))), /*#__PURE__*/React.createElement("h2", null, "Procedure"), /*#__PURE__*/React.createElement("div", {
    className: "proc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pstep"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "where"
  }, "Host shell"), /*#__PURE__*/React.createElement("h4", null, "Unpack the distribution bundle"), /*#__PURE__*/React.createElement("p", null, "Copy the distribution bundle to the host and extract it."))), /*#__PURE__*/React.createElement("div", {
    className: "pstep"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "where"
  }, "Config directory"), /*#__PURE__*/React.createElement("h4", null, "Drop in the license token"), /*#__PURE__*/React.createElement("p", null, "Place ", /*#__PURE__*/React.createElement("code", null, "takeany.license"), " next to the config file. No online activation."))), /*#__PURE__*/React.createElement("div", {
    className: "pstep"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "where"
  }, "Host shell"), /*#__PURE__*/React.createElement("h4", null, "Start the control plane"), /*#__PURE__*/React.createElement("p", null, "Run the binary. License status, validity dates and a manual refresh button sit in Mission Control.")))), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ct"
  }, "Note"), /*#__PURE__*/React.createElement("p", null, "The only outbound connection is license renewal over HTTPS. No prompts or documents travel over it.")), /*#__PURE__*/React.createElement(Pager, {
    prev: ['overview', 'What TakeAny.AI is'],
    next: ['license', 'License token'],
    onPick: onPick
  }));
}
function ShotBody(title, crumb, lede, img, cap, prev, next) {
  return function Body({
    onPick
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "crumb"
    }, /*#__PURE__*/React.createElement("span", null, crumb), /*#__PURE__*/React.createElement("span", {
      className: "sep"
    }, "/"), /*#__PURE__*/React.createElement("span", null, title)), /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", {
      className: "lede"
    }, lede), /*#__PURE__*/React.createElement("figure", {
      className: "doc-fig"
    }, /*#__PURE__*/React.createElement("div", {
      className: "shot"
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: title
    })), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", {
      className: "fc-tag"
    }, title), /*#__PURE__*/React.createElement("span", null, cap))), /*#__PURE__*/React.createElement("div", {
      className: "callout warn"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ct"
    }, "Recreation"), /*#__PURE__*/React.createElement("p", null, "Screens are product screenshots from the source repo. Article copy here is placeholder structure; take real copy from the docs.")), /*#__PURE__*/React.createElement(Pager, {
      prev: prev,
      next: next,
      onPick: onPick
    }));
  };
}
const DOCS_ARTICLES = {
  install: {
    Body: InstallBody,
    toc: ['Requirements', 'Procedure', 'First start']
  },
  overview: {
    Body: ShotBody('What TakeAny.AI is', 'Get going', 'A sovereign control plane for AI agents, on your own infrastructure.', '../../assets/product/workflow-editor.png', 'The workflow editor.', null, ['install', 'Install on a Linux host']),
    toc: ['Overview']
  },
  license: {
    Body: ShotBody('License token', 'Get going', 'One file, renewed in the background.', '../../assets/product/system-logs.png', 'License renewals appear in system logs.', ['install', 'Install on a Linux host'], ['workflows', 'Workflow editor']),
    toc: ['Token', 'Renewal']
  },
  workflows: {
    Body: ShotBody('Workflow editor', 'Build', 'Wire agents, tools and models on one canvas.', '../../assets/product/workflow-editor.png', 'Nodes, bindings and run history.', ['license', 'License token'], ['models', 'LLM providers']),
    toc: ['Canvas', 'Nodes']
  },
  models: {
    Body: ShotBody('LLM providers', 'Build', 'Bind any OpenAI-compatible model per agent.', '../../assets/product/llm-providers.png', 'Local and hosted providers side by side.', ['workflows', 'Workflow editor'], ['kb', 'Knowledge base']),
    toc: ['Providers', 'Binding']
  },
  kb: {
    Body: ShotBody('Knowledge base', 'Build', 'Documents for RAG, indexed inside the perimeter.', '../../assets/product/knowledge-base.png', 'Collections and ingestion status.', ['models', 'LLM providers'], ['logs', 'System logs']),
    toc: ['Collections']
  },
  logs: {
    Body: ShotBody('System logs', 'Operate', '14 log domains, written host-side.', '../../assets/product/system-logs.png', 'Filter by domain, agent and verdict.', ['kb', 'Knowledge base'], null),
    toc: ['Domains', 'Retention']
  }
};
DOCS_ARTICLES.firewalls = DOCS_ARTICLES.logs;
DOCS_ARTICLES.secrets = DOCS_ARTICLES.logs;
Object.assign(window, {
  DOCS_ARTICLES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsArticles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsShell.jsx
try { (() => {
const DOCS_NAV = [{
  n: '01',
  label: 'Get going',
  items: [['overview', 'What TakeAny.AI is'], ['install', 'Install on a Linux host'], ['license', 'License token']]
}, {
  n: '02',
  label: 'Build',
  items: [['workflows', 'Workflow editor'], ['models', 'LLM providers'], ['kb', 'Knowledge base']]
}, {
  n: '03',
  label: 'Operate',
  items: [['logs', 'System logs'], ['firewalls', 'Firewalls'], ['secrets', 'Secrets']]
}];
function DocsShell({
  active,
  onPick,
  toc = [],
  children
}) {
  const {
    Logo
  } = window.TakeAnyAIDesignSystem_365327;
  return /*#__PURE__*/React.createElement("div", {
    className: "docs-page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "../website/index.html",
    "aria-label": "TakeAny.AI"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 20
  })), /*#__PURE__*/React.createElement("span", {
    className: "docs-tag"
  }, "Docs"), /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search the docs\u2026"
  })), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "tlinks"
  }, /*#__PURE__*/React.createElement("a", {
    href: "../website/index.html"
  }, "Website"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Changelog"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Status")), /*#__PURE__*/React.createElement("span", {
    className: "ver"
  }, "EN")), /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, DOCS_NAV.map(g => /*#__PURE__*/React.createElement("div", {
    className: "side-group",
    key: g.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gn"
  }, g.n), g.label), /*#__PURE__*/React.createElement("ul", {
    className: "side-nav"
  }, g.items.map(([id, t]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    className: active === id ? 'active' : '',
    onClick: () => onPick(id)
  }, t))))))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("article", {
    className: "article"
  }, children)), /*#__PURE__*/React.createElement("aside", {
    className: "toc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl"
  }, "On this page"), /*#__PURE__*/React.createElement("ul", null, toc.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    className: i === 0 ? 'active' : '',
    href: "#"
  }, t)))))));
}
Object.assign(window, {
  DocsShell,
  DOCS_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DifferScreen.jsx
try { (() => {
const HD = window.TakeAnyAIDesignSystem_365327;
function DifferScreen({
  go
}) {
  const {
    PageHead,
    Section,
    SectionHead,
    Button,
    ComparisonTable,
    HeadToHead,
    HairlineGrid,
    HairlineCard,
    SubNav
  } = HD;
  const [tab, setTab] = React.useState('table');
  const rows = [{
    group: 'Architecture'
  }, ...window.cmpRows.slice(0, 3), {
    group: 'Security & cost'
  }, ...window.cmpRows.slice(3)];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "How we differ"
  }, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "How we differ",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Built for agents. ", /*#__PURE__*/React.createElement("strong", null, "Billed for results.")),
    lede: "A side-by-side of where TakeAny.AI sits against cloud SaaS, open-source frameworks and workflow tools \u2014 including where we are not the answer.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      arrow: true,
      onClick: () => go('start')
    }, "Get started"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: () => go('docs')
    }, "Browse the docs"))
  }), /*#__PURE__*/React.createElement(SubNav, {
    active: tab,
    onSelect: setTab,
    items: [{
      id: 'table',
      label: 'Comparison'
    }, {
      id: 'h2h',
      label: 'Head to head'
    }, {
      id: 'limits',
      label: 'Where we are not the answer'
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    id: "table",
    label: "Comparison"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "01 \xB7 The table",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Four categories, ", /*#__PURE__*/React.createElement("strong", null, "one boxed column."))
  }), /*#__PURE__*/React.createElement(ComparisonTable, {
    others: ['Cloud SaaS (e.g. Lindy, Make)', 'OS Frameworks (e.g. Dify, Flowise)', 'Scripts / Workflow (e.g. n8n)'],
    rows: rows
  })), /*#__PURE__*/React.createElement(Section, {
    id: "h2h",
    label: "Head to head"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02 \xB7 Head to head",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One difference ", /*#__PURE__*/React.createElement("strong", null, "per row."))
  }), /*#__PURE__*/React.createElement(HeadToHead, {
    rows: [{
      vs: 'vs n8n',
      text: /*#__PURE__*/React.createElement(React.Fragment, null, "Unlike n8n, TakeAny.AI is designed strictly for ", /*#__PURE__*/React.createElement("strong", null, "autonomous AI agents"), ". Instead of charging for every decision step in the loop, it bills for the completed task as a whole, with MicroVM hardware code isolation.")
    }, {
      vs: 'vs Dify.ai',
      text: /*#__PURE__*/React.createElement(React.Fragment, null, "Dify runs code in a ", /*#__PURE__*/React.createElement("strong", null, "standard container"), ". TakeAny.AI runs every tool call in a disposable Firecracker MicroVM.")
    }, {
      vs: 'vs Lindy.ai',
      text: /*#__PURE__*/React.createElement(React.Fragment, null, "Lindy is ", /*#__PURE__*/React.createElement("strong", null, "pure SaaS"), ". TakeAny.AI is a single binary you run in your own jurisdiction, with zero telemetry.")
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    id: "limits",
    label: "Limits"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "03 \xB7 Limits",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Where we are ", /*#__PURE__*/React.createElement("strong", null, "not the answer."))
  }), /*#__PURE__*/React.createElement(HairlineGrid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(HairlineCard, {
    k: "01",
    size: "h4",
    title: "A five-step Zap",
    body: "If a simple SaaS automation already works and the data is not sensitive, keep it."
  }), /*#__PURE__*/React.createElement(HairlineCard, {
    k: "02",
    size: "h4",
    title: "No Linux host",
    body: "Self-hosting needs a KVM-capable Linux machine. Without one, start in the sandbox."
  }), /*#__PURE__*/React.createElement(HairlineCard, {
    k: "03",
    size: "h4",
    title: "Model training",
    body: "We orchestrate and govern models. We do not train or fine-tune them for you."
  }))));
}
Object.assign(window, {
  DifferScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DifferScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GetStartedScreen.jsx
try { (() => {
const GS = window.TakeAnyAIDesignSystem_365327;
function GetStartedScreen({
  go
}) {
  const {
    Section,
    SectionHead,
    Eyebrow,
    FormCard,
    FormRow,
    Field,
    Checkbox,
    Button,
    StartGrid,
    StartStep,
    HairlineGrid,
    HairlineCard,
    EchoSignature
  } = GS;
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState('');
  const submit = e => {
    const f = e.target;
    if (!f.email.value || !f.first.value) {
      setErr('Fill in the required fields.');
      return;
    }
    setErr('');
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Get started"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero",
    style: {
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(EchoSignature, {
    style: {
      right: -60,
      top: -40
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 30px',
      paddingBottom: 26,
      borderBottom: '1px solid var(--line)',
      fontSize: 'clamp(34px,4vw,52px)',
      lineHeight: 1.02,
      letterSpacing: '-0.04em',
      fontWeight: 300
    }
  }, "Implement your AI ideas. ", /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontWeight: 800
    }
  }, "Safest. Cheapest. Sovereign.")), /*#__PURE__*/React.createElement(Eyebrow, null, "Get started"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(26px,2.4vw,34px)',
      fontWeight: 400,
      letterSpacing: '-0.04em',
      marginTop: 18,
      maxWidth: '20ch'
    }
  }, "Tell us what you're building."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--muted)',
      maxWidth: '40ch'
    }
  }, "One short message and we point you at the right starting point. No phone number, no company size."), /*#__PURE__*/React.createElement("ol", {
    className: "steps",
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "01"), /*#__PURE__*/React.createElement("span", null, "We reply within one business day \u2014 a person, not an autoresponder.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "02"), /*#__PURE__*/React.createElement("span", null, "Prefer to skip the conversation? Boot a sandbox or self-host below.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "03"), /*#__PURE__*/React.createElement("span", null, "Regulated environment or a deadline? Say so and we'll scope it.")))), /*#__PURE__*/React.createElement(FormCard, {
    onSubmit: submit,
    style: {
      maxWidth: 440
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginBottom: 8
    }
  }, "Thanks \u2014 message sent."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      fontSize: 15
    }
  }, "We reply within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormRow, null, /*#__PURE__*/React.createElement(Field, {
    name: "first",
    label: "First name",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    name: "last",
    label: "Last name"
  })), /*#__PURE__*/React.createElement(Field, {
    name: "email",
    label: "Work email",
    required: true,
    type: "email"
  }), /*#__PURE__*/React.createElement(Field, {
    name: "company",
    label: "Company name",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    name: "usecase",
    label: "Briefly describe your use case?",
    required: true,
    as: "textarea"
  }), /*#__PURE__*/React.createElement(Field, {
    name: "env",
    label: "Deployment environment (optional)",
    as: "select",
    options: ['Select one', 'On-prem', 'Private cloud', 'Evaluating', 'Not sure']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      margin: '0 0 8px'
    }
  }, "We care about your privacy."), /*#__PURE__*/React.createElement(Checkbox, null, "By checking the box, you agree that your data will be processed according to our Privacy Policy and Terms of Service."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      marginTop: 8
    }
  }, "Obviously, you can unsubscribe anytime.")), err && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--red-700)',
      fontSize: 13
    }
  }, err), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send message")))))), /*#__PURE__*/React.createElement(Section, {
    id: "options",
    label: "Two more ways"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "Or start on your own",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Two more ways ", /*#__PURE__*/React.createElement("strong", null, "to start.")),
    sub: "Not everyone wants to talk first. Boot a sandbox or self-host today."
  }), /*#__PURE__*/React.createElement(StartGrid, null, /*#__PURE__*/React.createElement(StartStep, {
    num: "Option \xB7 A",
    title: "Try in the sandbox.",
    body: "A hosted TakeAny.AI environment, ready in minutes. No credit card. Enough to see whether it fits your stack before you install anything.",
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      arrow: true
    }, "Boot the sandbox")
  }), /*#__PURE__*/React.createElement(StartStep, {
    num: "Option \xB7 B",
    title: "Self-host it.",
    body: "Install on your own Linux host and evaluate the architecture before you talk to anyone. Most technical teams start here \u2014 and we'd rather they did.",
    req: ['A Linux host with KVM', 'Hardware virtualization (nested, for private cloud)', 'A 32-byte secrets master key'],
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      arrow: true,
      onClick: () => go('docs')
    }, "Open docs")
  }), /*#__PURE__*/React.createElement(StartStep, {
    num: "Option \xB7 C",
    title: "Talk to us.",
    body: "Scoping, deployment planning, and a walk through your compliance footprint. Useful when there is a deadline attached or the environment is unusual.",
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, "Use the form above \u2191")
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "license",
    label: "Licensing"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "Licensing",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The license is ", /*#__PURE__*/React.createElement("strong", null, "not the hard part.")),
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "You get the distribution bundle and a token file named ", /*#__PURE__*/React.createElement("code", null, "takeany.license"), ". Drop it into the host config directory and start. No online activation, no portal, no seat reconciliation before you can run your first workflow.")
  }), /*#__PURE__*/React.createElement(HairlineGrid, {
    cols: 2
  }, /*#__PURE__*/React.createElement(HairlineCard, {
    k: "How it stays live",
    items: ['The token renews itself in the background, twice daily before expiry', 'One outbound HTTPS connection to the licensing server — no prompts or documents travel over it']
  }), /*#__PURE__*/React.createElement(HairlineCard, {
    k: "Where you see it",
    items: ['Status, validity dates and a manual refresh button sit in Mission Control', 'An active license also opens the distribution endpoints for updates and microVM components']
  }))));
}
Object.assign(window, {
  GetStartedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GetStartedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Section,
  SectionHead,
  Hero,
  IntentList,
  Button,
  CtaLink,
  HairlineGrid,
  HairlineCard,
  SummaryBar,
  MetricStrip,
  SegmentedPicker,
  Showcase,
  WhyGrid,
  WhyCard,
  ComparisonTable,
  Placeholder,
  FigureCaption,
  EchoSignature,
  Eyebrow
} = window.TakeAnyAIDesignSystem_365327;
const homeModels = [{
  label: 'Any OpenAI-compatible API model',
  img: '../../assets/product/llm-providers.png',
  url: 'settings · llm providers'
}, {
  label: 'Cloud + Local AI',
  img: '../../assets/product/workflow-editor.png',
  url: 'workflows · editor'
}, {
  label: 'Zero Lock-In & BYOK',
  img: '../../assets/product/llm-providers.png',
  url: 'settings · keys'
}, {
  label: 'Deterministic Logic (Starlark)',
  img: '../../assets/product/system-logs.png',
  url: 'operations · system logs'
}];
const cmpRows = [{
  param: 'Deployment model',
  us: 'Single Go Binary + SQLite',
  others: ['Pure SaaS Cloud', 'Docker / Cloud', 'Node.js / Docker']
}, {
  param: 'Sovereignty and Air-Gap',
  us: '100% Native (Zero Telemetry)',
  others: ['None (data in the cloud)', 'Partial (needs configuration)', 'Partial']
}, {
  param: 'Code execution isolation',
  us: 'Firecracker MicroVM (Hardware)',
  others: ['None (shared environment)', 'None (standard container)', 'None (container / Node)']
}, {
  param: 'LLM security',
  us: 'Dual Safety Firewalls (Prompt & PII)',
  others: ['Basic', 'Basic / none', 'None (needs external services)']
}, {
  param: 'Billing model',
  us: '0% Step Tax + BYOK',
  others: ['Credit packs / Step Tax', 'Message or query count', 'Per workflow execution']
}];
function HomeScreen({
  go
}) {
  const [model, setModel] = React.useState(0);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Home"
  }, /*#__PURE__*/React.createElement(Hero, {
    align: "center",
    echo: false,
    eyebrow: "Self-hosted AI agent orchestration",
    line1: "Ship Your AI Projects",
    lede: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "TakeAny.AI"), " is a self-hosted, air-gapped AI agent orchestration platform for LLM agents, RAG and workflows. It runs entirely on your own infrastructure \u2014 against local model engines (vLLM, Ollama, LocalAI, TGI) or cloud APIs. Nothing leaves your infrastructure unless you say it can."),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      arrow: true,
      onClick: () => go('start')
    }, "Get started"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: () => go('differ')
    }, "How we differ")),
    chips: ['Zero outbound telemetry', 'Local or frontier models', 'Single Go binary', 'Hardware-isolated sandboxing']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Hero illustration \xB7 inputs \u2192 TakeAny.AI \u2192 outcomes (redraw pending)",
    ratio: "16/7"
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "usecases",
    label: "01 Deployments"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "01 \xB7 LLM & agent deployments",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "How do you want ", /*#__PURE__*/React.createElement("strong", null, "to use AI?")),
    sub: "Planning to roll out AI, LLMs or ChatGPT in your company? With TakeAny.AI you can do it safely."
  }), /*#__PURE__*/React.createElement(IntentList, {
    items: [{
      label: 'Run RAG on documents that can’t leave the building'
    }, {
      label: 'Turn the GPU servers you bought into a secure AI platform'
    }, {
      label: 'Let agents into your ERP even when it is ageing and has no API'
    }, {
      label: 'Juggle LLM models, let open-weight take on the frontier labs'
    }, {
      label: 'Sell AI to your clients under your own brand'
    }],
    onSelect: () => go('start')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    onClick: () => go('start')
  }, "Deliver Your AI idea"))), /*#__PURE__*/React.createElement(Section, {
    id: "why-sovereignty",
    label: "02.1 Sovereignty"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02.1 \xB7 Why: Sovereignty",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "On your infrastructure. ", /*#__PURE__*/React.createElement("strong", null, "100% data sovereignty,"), " EU AI Act compliance."),
    sub: "Runs on your infrastructure, in your jurisdiction. No third party to trust. Full network and hardware isolation in a single binary \u2014 zero telemetry, no data leaving for the cloud."
  }), /*#__PURE__*/React.createElement(HairlineGrid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(HairlineCard, {
    k: "GDPR",
    title: "Zero PII transfer",
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "100% Native Air-Gap"), " \u2014 zero PII transfer to external clouds."), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Dual Safety Firewalls"), " \u2014 filter data leaks and Prompt Injection attacks.")]
  }), /*#__PURE__*/React.createElement(HairlineCard, {
    k: "EU AI Act (Art. 10 & 12)",
    title: "Full audit trail",
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Full Audit Trail"), " \u2014 14 log domains written to the local database."), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Zero Training Risk"), " \u2014 your prompts never feed external AI models.")]
  }), /*#__PURE__*/React.createElement(HairlineCard, {
    k: "NIS2 / DORA",
    title: "Cyber-resilience",
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Firecracker MicroVM"), " \u2014 KVM hardware isolation rules out the blast radius."), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "On-Premise Reliability"), " \u2014 processes keep running with no SaaS dependency.")]
  })), /*#__PURE__*/React.createElement(SummaryBar, {
    label: "Result"
  }, "Your own fully isolated AI Control Plane \u2014 no data leakage, no telemetry, no regulatory exposure.")), /*#__PURE__*/React.createElement(Section, {
    id: "why-cost",
    label: "02.2 Cost"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02.2 \xB7 Why: Cost",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Predictable AI costs: ", /*#__PURE__*/React.createElement("strong", null, "no token markup and no \u201CStep Tax\u201D.")),
    sub: "Pay only for completed business tasks, not for the agent's internal reasoning loops \u2014 with full freedom to plug in your own API keys or free local models."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(MetricStrip, {
    items: [{
      k: 'Step tax',
      v: '0%',
      lit: true,
      note: 'Execution-Based Billing — 1 completed run, not every loop.'
    }, {
      k: 'Token markup',
      v: '0%',
      lit: true,
      note: 'BYOK. Wholesale API rates, paid to the provider directly.'
    }, {
      k: 'Viewers',
      v: 'Unlimited',
      note: 'No per-user tax. VAT-compliant invoicing.'
    }]
  }), /*#__PURE__*/React.createElement(HairlineGrid, {
    cols: 1
  }, /*#__PURE__*/React.createElement(HairlineCard, {
    n: "01",
    size: "h4",
    title: "Agent loop",
    items: ['Execution-Based Billing', '1 Completed Run', '0% Step Tax']
  }), /*#__PURE__*/React.createElement(HairlineCard, {
    n: "02",
    size: "h4",
    title: "Token markup",
    items: ['0% Token Markup', 'BYOK (Bring Your Own Key)', 'Wholesale API Rates']
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "why-models",
    label: "02.3 Model selection"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02.3 \xB7 Why: Model Selection",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Test and compare any model, ", /*#__PURE__*/React.createElement("strong", null, "bound per agent.")),
    sub: "Any OpenAI-compatible model, bound per agent \u2014 local open weights, hosted frontier, or both."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SegmentedPicker, {
    options: homeModels.map(m => m.label),
    value: model,
    onChange: setModel
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Showcase, {
    src: homeModels[model].img,
    url: homeModels[model].url
  }), /*#__PURE__*/React.createElement(FigureCaption, {
    tag: "Binding"
  }, "One model per agent, swapped without touching the workflow")))), /*#__PURE__*/React.createElement(Section, {
    id: "when",
    label: "05 Use it when"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "05 \xB7 Use it when",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Use TakeAny.AI ", /*#__PURE__*/React.createElement("strong", null, "when\u2026")),
    sub: "Four operational signals that your organisation has outgrown simple SaaS tools and needs a production Control Plane."
  }), /*#__PURE__*/React.createElement(WhyGrid, {
    cols: 2
  }, /*#__PURE__*/React.createElement(WhyCard, {
    when: "01",
    expandable: true,
    text: "When SaaS bills for AI decision loops spiral out of control",
    body: "Your workflows in Make, Zapier or n8n rack up huge costs through the \u201CStep Tax\u201D \u2014 a fee for every step and every retry inside the agent\u2019s reasoning loop."
  }), /*#__PURE__*/React.createElement(WhyCard, {
    when: "02",
    expandable: true,
    text: "When a compliance audit (EU AI Act / GDPR / NIS2 / DORA) blocks the rollout",
    body: "Legal will not sign off on prompts and documents travelling to a US cloud."
  }), /*#__PURE__*/React.createElement(WhyCard, {
    when: "03",
    expandable: true,
    text: "When your ERP is ageing and has no API",
    body: "Agents need to read and act inside systems that were never built to be automated."
  }), /*#__PURE__*/React.createElement(WhyCard, {
    when: "04",
    tone: "feature",
    expandable: true,
    text: "When you want to sell AI to your clients under your own brand",
    body: "Embed a single Go binary over REST and ship AI features under your own name."
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "compare",
    label: "06 Compare"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "06 \xB7 How we compare",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One table, ", /*#__PURE__*/React.createElement("strong", null, "no small print."))
  }), /*#__PURE__*/React.createElement(ComparisonTable, {
    others: ['Cloud SaaS (e.g. Lindy, Make)', 'OS Frameworks (e.g. Dify, Flowise)', 'Scripts / Workflow (e.g. n8n)'],
    rows: cmpRows
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(CtaLink, {
    onClick: e => {
      e.preventDefault();
      go('differ');
    }
  }, "See the full comparison"))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    id: "partners",
    label: "07 Partners",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "07 \xB7 Partners",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Build on TakeAny.AI. ", /*#__PURE__*/React.createElement("strong", null, "Sell it as yours.")),
    sub: "Implementation partners and managed service providers deliver TakeAny.AI inside their clients' perimeters."
  }), /*#__PURE__*/React.createElement(Button, {
    onDark: true,
    variant: "outline",
    arrow: true
  }, "Become a Partner"), /*#__PURE__*/React.createElement(EchoSignature, {
    onDark: true,
    size: 220,
    style: {
      right: -10,
      bottom: -70
    }
  })));
}
Object.assign(window, {
  HomeScreen,
  cmpRows
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CtaLink = __ds_scope.CtaLink;

__ds_ns.EchoSignature = __ds_scope.EchoSignature;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.HairlineGrid = __ds_scope.HairlineGrid;

__ds_ns.HairlineCard = __ds_scope.HairlineCard;

__ds_ns.SummaryBar = __ds_scope.SummaryBar;

__ds_ns.UseCaseCard = __ds_scope.UseCaseCard;

__ds_ns.IntentList = __ds_scope.IntentList;

__ds_ns.StartStep = __ds_scope.StartStep;

__ds_ns.StartGrid = __ds_scope.StartGrid;

__ds_ns.WhyCard = __ds_scope.WhyCard;

__ds_ns.WhyGrid = __ds_scope.WhyGrid;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.RouterTable = __ds_scope.RouterTable;

__ds_ns.HeadToHead = __ds_scope.HeadToHead;

__ds_ns.MetricStrip = __ds_scope.MetricStrip;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.SegmentedPicker = __ds_scope.SegmentedPicker;

__ds_ns.FormCard = __ds_scope.FormCard;

__ds_ns.FormRow = __ds_scope.FormRow;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.PageHead = __ds_scope.PageHead;

__ds_ns.IntroStatement = __ds_scope.IntroStatement;

__ds_ns.CtaStrip = __ds_scope.CtaStrip;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.MonoLabel = __ds_scope.MonoLabel;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Showcase = __ds_scope.Showcase;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.FigureCaption = __ds_scope.FigureCaption;

__ds_ns.BentoGrid = __ds_scope.BentoGrid;

__ds_ns.BentoTile = __ds_scope.BentoTile;

__ds_ns.ModuleChip = __ds_scope.ModuleChip;

__ds_ns.ModuleStack = __ds_scope.ModuleStack;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SubNav = __ds_scope.SubNav;

})();

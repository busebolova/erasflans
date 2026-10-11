<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep shared industrial styles and semantic color tokens in src/styles.css so the reference design stays consistent across screen sizes.
- Keep verified product content in a browser-safe data module; product details and quotation actions use the shared catalog rather than duplicate values.
- Quotation requests open the company's email composer; do not imply server submission or persistence without a connected service.
- Keep Turkish/English strings in the shared translation dictionary and preserve canonical product values when switching languages to avoid breaking quotations.
- Hero video uses a bundled asset pointer, a poster fallback, muted inline playback and a pause control; respect reduced-motion preferences.
- Product photography is imported through the shared catalog; generated media remains separate from verified product specifications to keep visual refreshes from altering quotation data.

/**
 * AD Blue Thunder — library entry point.
 *
 * Consumers import components from here; the upstream package
 * `@kpmg-us/ad-design-lib2` is the source of truth for behavior and types.
 *
 * The library's stylesheet (tokens + component CSS) is imported as a side
 * effect. Open Sans must be loaded by the consuming app via a <link> tag in
 * the document head — see `.lovable/system.md`.
 */
import "@kpmg-us/ad-design-lib2/dist/ad-design-lib2.css";

export * from "@kpmg-us/ad-design-lib2";

# Image & media manifest — `lakehouse-client-experience.html`

The export is a single file with no outside dependencies. All fonts (KPMG Bold, Open Sans) are built into the styles, and the campus map SVG and KPMG logo are built in too. Each photo and video has been swapped for a gradient block in KPMG brand colours. Each block has a `data-placeholder` attribute with the ID below, so you can find it in the HTML.

## Placeholders in the exported HTML

| ID | Type | Name | Where it appears in the HTML | Location in codebase |
|---|---|---|---|---|
| IMG-01 | Photo | `cover.jpg` (Lakehouse at blue hour) | `#welcome`, the background of the main cover ("Know before you go. KPMG Lakehouse") | `src/assets/cover.jpg`, imported in `src/components/ClientExperience.tsx` (line 9) |
| IMG-02 | Video | `lakehouse-welcome.mp4` (welcome video) | The Welcome band directly below the cover (embedded video player) | `src/assets/client/lakehouse-welcome.mp4.asset.json` (CDN pointer), imported in `src/components/ClientExperience.tsx` (line 10) |
| IMG-02-poster | Video poster | `tour-the-landing-aerial.jpg` | Still frame for the welcome video (IMG-02) | `src/assets/v4/tour-the-landing-aerial.jpg`, imported in `src/components/ClientExperience.tsx` (line 6) |

## Built in (not replaced)

| Name | Where it appears | Location in codebase |
|---|---|---|
| `lakehouse-campus.svg` (campus map artwork) | `#explore`, interactive map | `src/assets/client/lakehouse-campus.svg`, imported in `src/components/LakehouseMap.tsx` (line 5); pins come from `src/content/campus-map.ts` |
| KPMG logo | Header and footer | Inline SVG in `src/components/ExperienceShell.tsx` |

## Used by the page but not in this export

These photos only appear when someone clicks something: the **List** view in Explore, or a destination's detail panel. The export captures how the page looks when it first opens, so they aren't part of it.

| Name | Used for | Location in codebase |
|---|---|---|
| `tour-common-ground.jpg` | Common Ground destination | `src/assets/v4/tour-common-ground.jpg` (ClientExperience.tsx line 4) |
| `tour-exchange-main.jpg` | The Exchange destination | `src/assets/v4/tour-exchange-main.jpg` (line 5) |
| `tour-the-landing-aerial.jpg` | The Landing destination | `src/assets/v4/tour-the-landing-aerial.jpg` (line 6) |
| `tour-blend-lounge.jpg` | Blend destination | `src/assets/v4/tour-blend-lounge.jpg` (line 7) |
| `tour-stretch-entrance.jpg` | Stretch destination | `src/assets/v4/tour-stretch-entrance.jpg` (line 8) |

Lakeside Park has no approved photo yet.

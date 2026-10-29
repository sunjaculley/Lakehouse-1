// Ambient module shim for @kpmg-us/ad-design-lib2 — the upstream package
// currently ships a JS-only bundle with no .d.ts declarations. Typed as
// `any` so strict TypeScript consumers compile. Replace with real types
// when upstream publishes them.
declare module "@kpmg-us/ad-design-lib2" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exports: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Accordion: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Avatar: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Badge: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const BreadcrumbItem: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Breadcrumbs: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Button: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Card: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Chat: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  export const Checkbox: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const CircularProgress: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const DatePicker: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Drawer: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const GlobalNotification: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Icon: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const ListItem: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Menu: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Modal: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Pagination: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const ProgressSteps: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const RadioGroup: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const RadioItem: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const SelectDropdown: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Slider: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Stepper: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Switch: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Table: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Tabs: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Tag: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const TextArea: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const TextField: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Tooltip: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const TopNavigation2: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const SideNavigation: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const SideNavigation2: any;

  // Icons — Fluent UI re-exports
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Add20Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Add24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Alert24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Checkmark24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const CheckmarkCircle24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const ChevronDown20Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const ChevronLeft20Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const ChevronRight20Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const ChevronUp20Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Delete24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Dismiss24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const DismissCircle20Filled: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Edit24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const ErrorCircle24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Filter24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Heart24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Info24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Mail24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Navigation24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Person24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Search20Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Search24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Settings24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Star24Filled: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Star24Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Subtract20Regular: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Warning24Regular: any;
  // App backgrounds & namespaces
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Backgrounds: any;
  export default exports;
}

declare module "@kpmg-us/ad-design-lib2/dist/ad-design-lib2.css";

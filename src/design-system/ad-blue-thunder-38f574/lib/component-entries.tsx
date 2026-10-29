import { useState } from "react";
import {
  Accordion,
  
  Avatar,
  Backgrounds,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  
  CircularProgress,
  DatePicker,
  Drawer,
  ListItem,
  Menu,
  Modal,
  Pagination,
  ProgressSteps,
  RadioGroup,
  RadioItem,
  SelectDropdown,
  
  Slider,
  Stepper,
  Switch,
  Table,
  Tabs,
  Tag,
  TextArea,
  TextField,
  Tooltip,
  

  Add20Regular,
  Filter24Regular,
  Heart24Regular,
  Info24Regular,
  Mail24Regular,
  Person24Regular,
  Settings24Regular,
  Star24Regular,
} from "@kpmg-us/ad-design-lib2";

export type ComponentEntry = {
  id: string;
  name: string;
  /** Name of the section heading in the upstream knowledge.md (defaults to `name`). */
  docName?: string;
  description: string;
  render: () => React.ReactNode;
};

const A = Accordion;

function TabsDemo() {
  const [active, setActive] = useState("overview");
  return (
    <Tabs
      activeKey={active}
      onChange={setActive}
      tabs={[
        { key: "overview", label: "Overview" },
        { key: "activity", label: "Activity", icon: <Heart24Regular /> },
        { key: "settings", label: "Settings" },
        { key: "archived", label: "Archived", disabled: true },
      ]}
    />
  );
}

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="primary" size="small" label="Open modal" onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} title="Confirm delete">
        <p style={{ font: "var(--body-medium-font)", color: "var(--color-text-secondary)" }}>
          This will permanently remove the engagement from your workspace. This action cannot be undone.
        </p>
      </Modal>
    </>
  );
}

function SliderDemo() {
  const [a, setA] = useState(40);
  const [b, setB] = useState(65);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Slider value={a} onChange={setA} />
      <Slider value={b} onChange={setB} showControls />
    </div>
  );
}

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" size="small" label="Open drawer" onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Quick links"
        items={[
          { icon: <Info24Regular />, label: "Overview", description: "Workspace summary" },
          { icon: <Person24Regular />, label: "Members", description: "Roles and access" },
          { icon: <Settings24Regular />, label: "Settings", description: "General preferences" },
        ]}
      />
    </>
  );
}
function StepperDemo() {
  const [qty, setQty] = useState(1);
  return (
    <div className="specimen__row">
      <Stepper label="Quantity" sublabel="Max 20" value={qty} max={20} onChange={setQty} />
    </div>
  );
}


function PaginationDemo() {
  const [page, setPage] = useState(3);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Pagination totalPages={12} currentPage={page} onPageChange={setPage} />
      <Pagination
        totalPages={12}
        currentPage={page}
        onPageChange={setPage}
        showRowsPerPage
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
        onRowsPerPageChange={setRowsPerPage}
      />
      <Pagination totalPages={12} currentPage={page} onPageChange={setPage} variant="compact" />
    </div>
  );
}

function DemoGroup({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="demo-group">
      <div className="demo-group__label">{label}</div>
      {hint ? <div className="demo-group__hint">{hint}</div> : null}
      <div className="demo-items">{children}</div>
    </div>
  );
}

function DemoItem({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="demo-item">
      {children}
      <div className="demo-item__caption">{caption}</div>
    </div>
  );
}

export const componentEntries: ComponentEntry[] = [
  {
    id: "button",
    name: "Button",
    description: "Primary action button with variants, sizes, shapes, and optional icons.",
    render: () => (
      <div className="demo-groups">
        <DemoGroup label="Variants" hint="Use one primary action per view; secondary, tertiary, and text support it.">
          <DemoItem caption='variant="primary"'>
            <Button variant="primary" size="medium" label="Save changes" />
          </DemoItem>
          <DemoItem caption='variant="secondary"'>
            <Button variant="secondary" size="medium" label="Save changes" />
          </DemoItem>
          <DemoItem caption='variant="tertiary"'>
            <Button variant="tertiary" size="medium" label="Save changes" />
          </DemoItem>
          <DemoItem caption='variant="text"'>
            <Button variant="text" size="medium" label="Save changes" />
          </DemoItem>
        </DemoGroup>

        <DemoGroup label="Sizes" hint="Four sizes across every variant.">
          <DemoItem caption='size="large"'>
            <Button variant="primary" size="large" label="Large" />
          </DemoItem>
          <DemoItem caption='size="medium"'>
            <Button variant="primary" size="medium" label="Medium" />
          </DemoItem>
          <DemoItem caption='size="small"'>
            <Button variant="primary" size="small" label="Small" />
          </DemoItem>
          <DemoItem caption='size="xsmall"'>
            <Button variant="primary" size="xsmall" label="XSmall" />
          </DemoItem>
        </DemoGroup>

        <DemoGroup label="Shapes" hint="Rounded is the default; rectangular suits dense toolbars.">
          <DemoItem caption='shape="rounded"'>
            <Button variant="primary" size="medium" shape="rounded" label="Rounded" />
          </DemoItem>
          <DemoItem caption='shape="rectangular"'>
            <Button variant="primary" size="medium" shape="rectangular" label="Rectangular" />
          </DemoItem>
        </DemoGroup>

        <DemoGroup label="With icon" hint="Pass an icon element alongside the label.">
          <DemoItem caption="primary + icon">
            <Button variant="primary" size="medium" label="Create" icon={<Add20Regular />} />
          </DemoItem>
          <DemoItem caption="secondary + icon">
            <Button variant="secondary" size="medium" label="Filter" icon={<Filter24Regular />} />
          </DemoItem>
          <DemoItem caption="tertiary + icon">
            <Button variant="tertiary" size="medium" label="Favourite" icon={<Heart24Regular />} />
          </DemoItem>
          <DemoItem caption="text + icon">
            <Button variant="text" size="medium" label="Favourite" icon={<Heart24Regular />} />
          </DemoItem>
        </DemoGroup>

        <DemoGroup label="Icon only" hint="Always supply an aria-label for icon-only buttons.">
          <DemoItem caption="primary">
            <Button variant="primary" size="medium" icon={<Add20Regular />} iconOnly aria-label="Create" />
          </DemoItem>
          <DemoItem caption="secondary">
            <Button variant="secondary" size="medium" icon={<Filter24Regular />} iconOnly aria-label="Filter" />
          </DemoItem>
          <DemoItem caption="tertiary">
            <Button variant="tertiary" size="medium" icon={<Settings24Regular />} iconOnly aria-label="Settings" />
          </DemoItem>
          <DemoItem caption="text">
            <Button variant="text" size="medium" icon={<Settings24Regular />} iconOnly aria-label="Settings" />
          </DemoItem>
          <DemoItem caption="rectangular">
            <Button variant="secondary" size="medium" shape="rectangular" icon={<Star24Regular />} iconOnly aria-label="Favourite" />
          </DemoItem>
        </DemoGroup>

        <DemoGroup label="States">
          <DemoItem caption="default">
            <Button variant="primary" size="medium" label="Submit" />
          </DemoItem>
          <DemoItem caption="disabled">
            <Button variant="primary" size="medium" label="Submit" disabled />
          </DemoItem>
          <DemoItem caption="secondary disabled">
            <Button variant="secondary" size="medium" label="Submit" disabled />
          </DemoItem>
          <DemoItem caption="icon only disabled">
            <Button variant="primary" size="medium" icon={<Add20Regular />} iconOnly aria-label="Create" disabled />
          </DemoItem>
        </DemoGroup>
      </div>
    ),
  },

  {
    id: "accordion",
    name: "Accordion",
    description: "Vertical stack of collapsible panels. Single or multiple open.",
    render: () => (
      <div style={{ width: "100%" }}>
        <A
          mode="single"
          defaultExpanded={["projects"]}
          items={[
            { key: "projects", label: "Open engagements", paragraph: "12 active projects", content: <div style={{ padding: 12 }}>Details about active projects.</div> },
            { key: "billing", label: "Billing summary", paragraph: "Q3 forecast on track", content: <div style={{ padding: 12 }}>Billing details.</div> },
            { key: "team", label: "Team", paragraph: "24 members", content: <div style={{ padding: 12 }}>Team roster.</div> },
          ]}
        />
      </div>
    ),
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "Circular user avatar with initials, image, and background variants.",
    render: () => (
      <>
        <div className="specimen__row">
          <Avatar size={32} background="primary" label="AZ" />
          <Avatar size={40} background="secondary" label="JS" />
          <Avatar size={48} background="tertiary" label="MK" />
          <Avatar size={48} background="success" label="OK" />
          <Avatar size={48} background="error" label="RE" />
          <Avatar size={56} background="warning" label="WA" />
          <Avatar size={64} background="neutral" label="NE" />
        </div>
        <div className="specimen__row">
          <Avatar size={32} imageSrc="https://i.pravatar.cc/128?img=15" alt="Ada Zimmer" />
          <Avatar size={40} imageSrc="https://i.pravatar.cc/128?img=32" alt="Jordan Smith" />
          <Avatar size={48} imageSrc="https://i.pravatar.cc/128?img=47" alt="Mika Kohli" />
          <Avatar size={56} imageSrc="https://i.pravatar.cc/128?img=68" alt="Priya Rao" />
          <Avatar size={64} imageSrc="https://i.pravatar.cc/128?img=12" alt="Leo Martin" />
        </div>
      </>
    ),
  },
  {
    id: "badge",
    name: "Badge",
    description: "Notification or hint badge. Renders as count, icon, or dot.",
    render: () => (
      <div className="specimen__row">
        <Badge count={3} />
        <Badge count={12} />
        <Badge count={128} />
        <Badge dot />
        <Badge icon={<Star24Regular />} />
      </div>
    ),
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description: "Multi-level breadcrumb navigation with a configurable separator, optional leading icons, and an optional submenu chevron on any level.",
    render: () => (
      <div style={{ display: "grid", gap: "var(--spacing-size-5)", width: "100%" }}>
        <Breadcrumbs items={[{ label: "Home", href: "#" }, { label: "Clients", href: "#" }, { label: "Acme Corp", href: "#" }, { label: "Engagements" }]} />
        <Breadcrumbs
          items={[
            { label: "Home", href: "#", showIcon: true },
            { label: "Clients", href: "#", showChevron: true },
            { label: "Acme Corp" },
          ]}
        />
      </div>
    ),
  },
  {
    id: "card",
    name: "Card",
    description: "Surface component with title, body, icon, and primary/secondary actions.",
    render: () => (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, width: "100%" }}>
        <Card className="card--demo-tight" title="Onboarding" body="Complete your workspace setup in three steps." primaryLabel="Continue" secondaryLabel="Skip" />
        <Card className="card--demo-tight" title="Assurance" body="Latest audit reports are ready for review." primaryLabel="Review" secondaryLabel="Later" icon="Star24Regular" />
      </div>
    ),
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Checkbox with four states including indeterminate.",
    render: () => (
      <div className="specimen__row">
        <Checkbox label="Unchecked" state="unselected" />
        <Checkbox label="Checked" state="selected" />
        <Checkbox label="Indeterminate" state="indeterminate" />
        <Checkbox label="Disabled" state="unselected" disabled />
      </div>
    ),
  },
  {
    id: "radio",
    name: "Radio",
    description: "RadioGroup renders a bordered list; RadioItem is a single row.",
    render: () => (
      <div style={{ display: "grid", gap: 16, width: "100%", gridTemplateColumns: "1fr 1fr" }}>
        <RadioGroup
          options={[
            { value: "monthly", label: "Monthly" },
            { value: "quarterly", label: "Quarterly" },
            { value: "annual", label: "Annual" },
          ]}
          value="monthly"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <RadioItem label="Standalone A" selected name="s" />
          <RadioItem label="Standalone B" name="s" />
          <RadioItem label="Standalone C (disabled)" name="s" disabled />
        </div>
      </div>
    ),
  },
  {
    id: "switch",
    name: "Switch",
    description: "Radix-based toggle switch with large/small sizes.",
    render: () => (
      <div className="specimen__row">
        <Switch defaultChecked aria-label="Notifications" />
        <Switch aria-label="Weekly digest" />
        <Switch size="small" defaultChecked aria-label="Compact" />
        <Switch disabled aria-label="Disabled" />
      </div>
    ),
  },
  {
    id: "tag",
    name: "Tag",
    description: "Static or actionable label with variants and dismiss.",
    render: () => (
      <div className="specimen__row">
        <Tag label="Primary" variant="primary" />
        <Tag label="Secondary" variant="secondary" />
        <Tag label="Tertiary" variant="tertiary" />
        <Tag label="With icon" leadingIcon={<Info24Regular />} />
        <Tag label="Dismissible" dismissible onDismiss={() => {}} />
      </div>
    ),
  },
  {
    id: "text-field",
    name: "TextField",
    description: "Text input with label, hint, error, and clear button.",
    render: () => (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16, width: "100%" }}>
        <TextField label="Email" placeholder="you@kpmg.com" type="email" />
        <TextField label="Search" placeholder="Search…" type="search" />
        <TextField label="Password" type="password" value="secret123" />
        <TextField label="With hint" placeholder="Type here" hint="This is a hint" />
        <TextField label="Error" placeholder="Invalid input" error="Required field" />
        <TextField label="Disabled" placeholder="Disabled" disabled />
      </div>
    ),
  },
  {
    id: "text-area",
    name: "TextArea",
    description: "Multi-line text input.",
    render: () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, width: "100%" }}>
        <TextArea label="Notes" placeholder="Leave a comment…" rows={4} />
        <TextArea label="With error" placeholder="Required" error="Please provide a summary" rows={4} />
      </div>
    ),
  },
  {
    id: "date-picker",
    name: "DatePicker",
    description: "Inline calendar with month navigation.",
    render: () => (
      <div style={{ maxWidth: 340 }}>
        <DatePicker label="Kickoff date" />
      </div>
    ),
  },
  {
    id: "slider",
    name: "Slider",
    description: "Numeric range input with optional +/- controls (built on Radix UI).",
    render: () => <SliderDemo />,
  },
  {
    id: "stepper",
    name: "Stepper",
    description: "Numeric counter with – / + controls.",
    render: () => <StepperDemo />,
  },
  {
    id: "select-dropdown",
    name: "SelectDropdown",
    description: "Single or multi-value dropdown, flat or categorized.",
    render: () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <SelectDropdown
          label="Service line"
          items={[
            { id: "adv", label: "Advisory" },
            { id: "tax", label: "Tax" },
            { id: "aud", label: "Audit" },
          ]}
        />
        <SelectDropdown
          label="Regions"
          leadingType="checkbox"
          items={[
            { id: "na", label: "North America" },
            { id: "eu", label: "EMEA" },
            { id: "apac", label: "APAC" },
          ]}
        />
      </div>
    ),
  },
  {
    id: "menu",
    name: "Menu",
    description: "Composable menu list with multiple item types.",
    render: () => (
      <div style={{ maxWidth: 320 }}>
        <Menu
          items={[
            { type: "header", label: "Workspace" },
            { type: "standard", label: "Overview", leadingIcon: <Info24Regular /> },
            { type: "standard", label: "Members", leadingIcon: <Person24Regular />, trailingLabel: "24" },
            { type: "divider" },
            { type: "standard", label: "Notifications", leadingIcon: <Mail24Regular />, hasSwitch: true, switchChecked: true },
            { type: "chevron", label: "Settings", leadingIcon: <Settings24Regular /> },
          ]}
        />
      </div>
    ),
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Horizontal tab bar with animated indicator.",
    render: () => <TabsDemo />,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Hover-triggered popover with optional label and CTA.",
    render: () => (
      <div className="specimen__row">
        <Tooltip description="This is helpful context." />
        <Tooltip description="Saved automatically" variant="with-label" label="Auto-save">
          <Button variant="secondary" size="small" label="Hover me" />
        </Tooltip>
        <Tooltip description="Learn how billing works" variant="full" label="Billing" ctaLabel="Learn more">
          <Button variant="tertiary" size="small" label="Full variant" />
        </Tooltip>
      </div>
    ),
  },
  {
    id: "modal",
    name: "Modal",
    description: "Dialog overlay with title, body, and actions.",
    render: () => <ModalDemo />,
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "Side panel that slides in from the left or right.",
    render: () => <DrawerDemo />,
  },
  {
    id: "circular-progress",
    name: "CircularProgress",
    description: "Circular progress indicator, determinate or spinning.",
    render: () => (
      <div className="specimen__row">
        <CircularProgress value={25} size={56} />
        <CircularProgress value={70} size={56} />
        <CircularProgress indeterminate size={56} />
      </div>
    ),
  },
  {
    id: "progress-steps",
    name: "ProgressSteps",
    description: "Multi-step progress indicator, horizontal or vertical.",
    render: () => (
      <ProgressSteps
        currentStep={1}
        steps={[
          { label: "Account", status: "completed" },
          { label: "Workspace", status: "active" },
          { label: "Invite team", status: "upcoming" },
          { label: "Done", status: "upcoming" },
        ]}
      />
    ),
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Page navigation, standard or compact.",
    render: () => <PaginationDemo />,
  },
  {
    id: "list-item",
    name: "ListItem",
    description: "Flexible list row with leading/trailing slots and multi-line text.",
    render: () => (
      <div style={{ width: "100%", background: "var(--color-bg-primary)", border: "var(--border-width-base) solid var(--color-semantic-border)", borderRadius: "var(--corner-medium)", overflow: "hidden" }}>
        <ListItem label="Ada Zimmer" paragraph="Partner · Advisory" leading={<Avatar size={40} label="AZ" />} leadingSize="avatar" trailing={<Tag label="Owner" variant="secondary" />} />
        <ListItem label="Jordan Smith" paragraph="Senior Manager · Tax" leading={<Avatar size={40} label="JS" background="secondary" />} leadingSize="avatar" trailing={<Tag label="Editor" variant="tertiary" />} />
        <ListItem label="Mika Kohli" paragraph="Analyst · Audit" leading={<Avatar size={40} label="MK" background="success" />} leadingSize="avatar" showDivider={false} />
      </div>
    ),
  },
  {
    id: "table",
    name: "Table",
    description: "Full-featured data table with sorting, selection, and density.",
    render: () => <TableDemo />,
  },
  {
    id: "top-navigation-2",
    name: "TopNavigation2",
    description:
      "Floating pill-shaped top navigation with glassmorphic background, collapsible title, and right-aligned avatar with icon actions.",
    render: () => (
      // The library drives the collapse off its own window's scroll position,
      // so the demo runs in an iframe: scrolling inside it is fully independent
      // of the documentation page's scroll.
      <div style={{ width: "100%" }}>
        <div
          style={{
            font: "var(--label-small-font)",
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--spacing-size-2)",
          }}
        >
          Scroll inside the panel — the bar collapses once the content moves
          beneath it.
        </div>
        <iframe
          src="/demo/top-navigation-2"
          title="TopNavigation2 scroll demo"
          style={{
            width: "100%",
            height: 480,
            border: "thin solid var(--color-border-strong)",
            borderRadius: "var(--corner-medium)",
            display: "block",
          }}
        />
      </div>
    ),

  },

  {
    id: "side-navigation",
    name: "SideNavigation",
    description:
      "Fixed 80px icon-above-label side column with an expanding 240px sub-panel, More menu, and bottom profile. Use either this or TopNavigation2 — never both.",
    render: () => (
      <div style={{ width: "100%" }}>
        <div
          style={{
            font: "var(--label-small-font)",
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--spacing-size-2)",
          }}
        >
          Click Clients, the More (⋯) button, or the profile avatar to open the
          sub-panel.
        </div>
        <iframe
          src="/demo/side-navigation"
          title="SideNavigation demo"
          style={{
            width: "100%",
            height: 600,
            border: "thin solid var(--color-border-strong)",
            borderRadius: "var(--corner-medium)",
            display: "block",
          }}
        />
      </div>
    ),
  },

  {
    id: "side-navigation-2",
    name: "SideNavigation2",
    description:
      "Floating icon rail that starts contracted at 80px and expands to 220px from its own logo/panel toggle, with collapsed-state tooltips and a bottom avatar.",
    render: () => (
      <div style={{ width: "100%" }}>
        <div
          style={{
            font: "var(--label-small-font)",
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--spacing-size-2)",
          }}
        >
          Click the logo button at the top of the rail to expand and collapse it.
        </div>
        <iframe
          src="/demo/side-navigation-2"
          title="SideNavigation2 demo"
          style={{
            width: "100%",
            height: 720,
            border: "thin solid var(--color-border-strong)",
            borderRadius: "var(--corner-medium)",
            display: "block",
          }}
        />
      </div>
    ),
  },

  {
    id: "global-notification",
    name: "GlobalNotification",
    description:
      "System-wide status message: a full-width fixed banner or a floating top-right toast. Variants: primary, success, error.",
    render: () => (
      // Both layouts are position: fixed, so the demo runs in an iframe to keep
      // them anchored to their own viewport.
      <div style={{ width: "100%" }}>
        <iframe
          src="/demo/global-notification"
          title="GlobalNotification demo"
          style={{
            width: "100%",
            height: 240,
            border: "thin solid var(--color-border-strong)",
            borderRadius: "var(--corner-medium)",
            display: "block",
            background: "var(--color-bg-primary)",
          }}
        />
      </div>
    ),
  },

  {
    id: "chat",
    name: "Chat",
    description:
      "Conversational assistant panel with greeting header, chat history menu, starter ideas, typing indicator and composer. Modes: anchored (fills its parent) and floating (docked bottom-right).",
    render: () => (
      // Floating mode is position: fixed and the panel is resizable, so the
      // demo runs in an iframe with its own viewport.
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--spacing-size-6)" }}>
        <div>
          <div style={{ fontSize: "var(--label-medium-size)", lineHeight: "var(--label-medium-line-height)", fontWeight: "var(--label-medium-weight)", color: "var(--color-dark-blue-600)", marginBottom: "var(--spacing-size-2)" }}>Anchored — fills its container, border, no shadow</div>
          <iframe
            src="/demo/chat"
            title="Chat anchored demo"
            style={{
              width: "100%",
              height: 680,
              border: "thin solid var(--color-border-strong)",
              borderRadius: "var(--corner-medium)",
              display: "block",
              background: "var(--color-bg-primary)",
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: "var(--label-medium-size)", lineHeight: "var(--label-medium-line-height)", fontWeight: "var(--label-medium-weight)", color: "var(--color-dark-blue-600)", marginBottom: "var(--spacing-size-2)" }}>Floating — docked bottom-right, shadow, no border</div>
          <iframe
            src="/demo/chat?mode=floating"
            title="Chat floating demo"
            style={{
              width: "100%",
              height: 680,
              border: "thin solid var(--color-border-strong)",
              borderRadius: "var(--corner-medium)",
              display: "block",
              background: "var(--color-bg-primary)",
            }}
          />
        </div>
      </div>
    ),
  },


  {
    id: "backgrounds",
    name: "Backgrounds",
    description: "Full-viewport fixed background complementing AppBackgrounds. Variants: midnight, sky, pearl, bloom.",
    render: () => {
      const variants = ["midnight", "sky", "pearl", "bloom"] as const;
      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "var(--spacing-size-4)", width: "100%" }}>
          {variants.map((v) => (
            <div
              key={v}
              style={{
                position: "relative",
                height: 180,
                borderRadius: "var(--corner-medium)",
                overflow: "hidden",
                isolation: "isolate",
                border: "thin solid var(--color-border-strong)",
              }}
            >
              <Backgrounds
                variant={v}
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "var(--spacing-size-3)",
                  fontFamily: "var(--label-medium-font-family)",
                  fontSize: "var(--label-medium-size)",
                  lineHeight: "var(--label-medium-line-height)",
                  fontWeight: "var(--label-medium-weight)",
                  color: v === "midnight" ? "var(--color-base-white)" : "var(--color-text-secondary)",
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      );
    },
  },
];

export function getComponentEntry(id: string): ComponentEntry | undefined {
  return componentEntries.find((e) => e.id === id);
}

type SortDir = "asc" | "desc" | "none";

function TableDemo() {
  const [sortKey, setSortKey] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<SortDir>("asc");

  const rows = [
    { name: "Acme Q3 Audit", owner: "Ada Zimmer", status: "Active", hours: 128 },
    { name: "Globex Advisory", owner: "Jordan Smith", status: "In Review", hours: 84 },
    { name: "Initech Tax Filing", owner: "Mika Kohli", status: "Complete", hours: 212 },
    { name: "Umbrella Risk Review", owner: "Sam Patel", status: "Active", hours: 56 },
  ];

  const sortedRows = (() => {
    if (sortDirection === "none" || !sortKey) return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = a[sortKey as keyof typeof a];
      const bv = b[sortKey as keyof typeof b];
      if (typeof av === "number" && typeof bv === "number") {
        return sortDirection === "asc" ? av - bv : bv - av;
      }
      return sortDirection === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
    return copy;
  })();

  return (
    <Table
      columns={[
        { key: "name", header: "Engagement", sortable: true },
        { key: "owner", header: "Owner", sortable: true },
        { key: "status", header: "Status", sortable: true },
        { key: "hours", header: "Hours", align: "right", sortable: true },
      ]}
      rows={sortedRows}
      sortKey={sortKey}
      sortDirection={sortDirection}
      onSort={(key: string, direction: SortDir) => {
        setSortKey(key);
        setSortDirection(direction);
      }}
      striped
      density="default"
    />
  );
}

import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode, type KeyboardEvent } from "react";
import { Button, Tabs } from "@/design-system/ad-blue-thunder-38f574";
import kpmgLogo from "@/design-system/ad-blue-thunder-38f574/assets/logos/kpmg-logo.svg";
import sourceGuide from "@/assets/source/guide-v4.pptx.asset.json";

export function ExperienceShell({ children, persona = "client" }: { children: ReactNode; persona?: "client" | "delivery" }) {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const movePersona = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const selected = event.key === "Home" || event.key === "ArrowLeft" ? buttons[0] : buttons[1];
    selected?.focus();
    selected?.click();
  };
  return <div className={`experience experience--${persona}`}>
    <a className="experience-skip" href="#experience-main">Skip to content</a>
    <header className="experience-header">
      <div className="experience-header__top">
        <Link to="/" className="experience-brand" aria-label="KPMG Lakehouse home"><img src={kpmgLogo} alt="KPMG" /><span>Lakehouse</span></Link>
        <div className="persona-switch" onKeyDown={movePersona} aria-label="Choose your experience"><Tabs tabs={[{ key: "client", label: "Visiting Lakehouse" }, { key: "delivery", label: "Delivery team" }]} activeKey={persona} onChange={(key: string) => { setMenu(false); navigate({ to: key === "delivery" ? "/delivery" : "/" }); }} /></div>
        <div className="experience-menu"><Button variant="tertiary" size="small" icon={<span aria-hidden="true">☰</span>} aria-expanded={menu} aria-controls="experience-navigation" label={menu ? "Close menu" : "Menu"} onClick={() => setMenu(!menu)} /></div>
      </div>
      <nav id="experience-navigation" aria-label={persona === "client" ? "Visitor navigation" : "Delivery navigation"} className={`experience-nav ${menu ? "is-open" : ""}`} onClick={() => setMenu(false)}>
        {persona === "client" ? <><a href="#welcome">Welcome</a><a href="#prepare">Prepare</a><a href="#arrival">Getting here</a><a href="#explore">Explore</a><a href="#questions">Questions</a><a href="#help">Help</a></> : <><Link to="/delivery" activeProps={{ className: "current" }}>Delivery hub</Link><Link to="/program/$slug" params={{ slug: "registration" }}>Running a session</Link><Link to="/spaces/$slug" params={{ slug: "philosophy" }}>The spaces</Link><Link to="/delivery" hash="around-lakehouse">Around Lakehouse</Link><Link to="/reset/$slug" params={{ slug: "innovation-lab" }}>Reset guides</Link><Link to="/ask" search={{ q: "" }}>Quick search</Link><Link to="/contacts">Who to call</Link><a href={sourceGuide.url} download>Original resource ↗</a></>}
      </nav>
    </header>
    <main id="experience-main">{children}</main>
    <footer className="experience-footer"><div className="experience-container experience-footer__inner"><div><div className="experience-logos"><img src={kpmgLogo} alt="KPMG" /></div><p>KPMG Lakehouse · {persona === "client" ? "Client experience" : "Ignition Delivery Hub"}</p></div><div><strong>Extended experience concept</strong><p>{persona === "client" ? "Provisional visitor content · approved resources and legal links pending." : "KPMG internal confidential · original delivery guides retained."}</p><p>Persona views are not access controls. Internal review only; not for public distribution.</p></div></div></footer>
  </div>;
}
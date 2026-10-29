import { useEffect, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { Accordion, Button, Modal, Tabs, Tag, TextField } from "@/design-system/ad-blue-thunder-38f574";
import { clientContent, clientMatches } from "@/content/client";
import commonGround from "@/assets/v4/tour-common-ground.jpg";
import exchange from "@/assets/v4/tour-exchange-main.jpg";
import landing from "@/assets/v4/tour-the-landing-aerial.jpg";
import blend from "@/assets/v4/tour-blend-lounge.jpg";
import stretch from "@/assets/v4/tour-stretch-entrance.jpg";
import cover from "@/assets/cover.jpg";
import welcomeVideo from "@/assets/client/lakehouse-welcome.mp4.asset.json";
import { Editable } from "./Editable";
import { LakehouseMap } from "./LakehouseMap";

type Destination = typeof clientContent.destinations[number];
const photos: Record<string, string> = { "common-ground": commonGround, "the-exchange": exchange, "the-landing": landing, blend, stretch, "lakeside-park": landing };
const pending = "Approved information pending";

function Status({ status }: { status: string }) { return <span className="content-status">{status === "draft" ? "Provisional · for review" : pending}</span>; }
function Questions({ ids, group }: { ids?: readonly string[]; group?: string }) {
  const items = clientContent.faqs.filter(q => ids ? ids.includes(q.id) : q.group === group);
  return <Accordion mode="multiple" items={items.map(q => ({ key: q.id, label: q.question, content: <><p>{q.answer}</p><Status status={q.status} /></> }))} />;
}

function DestinationDetail({ destination, select }: { destination: Destination; select: (id: string) => void }) {
  return <div className="experience-detail"><img src={photos[destination.id]} alt={destination.id === "lakeside-park" ? "Lakehouse lakeside setting; park-specific photograph pending" : destination.name} /><h3>{destination.name}</h3><p><Editable id={`client:destination:${destination.id}:description`} text={destination.short} /></p><Status status={destination.status} /><div className="experience-filters">{destination.tags.map(t => <Tag key={t} label={t} />)}</div>{"menu" in destination && destination.menu ? <p>Current menus · approved maintained link pending</p> : null}<Questions ids={destination.faqs} /><h3>Keep exploring</h3><div className="experience-actions">{destination.related.map(id => { const d = clientContent.destinations.find(x => x.id === id); return d ? <Button key={id} variant="tertiary" size="small" label={d.name} onClick={() => select(id)} /> : null; })}</div></div>;
}

export function ClientExperience() {
  const [topic, setTopic] = useState<string | null>(null);
  const [category, setCategory] = useState("all");
  const [mapView, setMapView] = useState("map");
  const [destination, setDestination] = useState<Destination | null>(null);
  const [question, setQuestion] = useState("");
  const [query, setQuery] = useState("");
  const [assistant, setAssistant] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setDestination(null); setAssistant(false); } }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  const moveMapTab = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const target = event.key === "Home" || event.key === "ArrowLeft" ? tabs[0] : tabs[1];
    target?.focus(); target?.click();
  };
  const selectedTopic = clientContent.preparationTopics.find(t => t.id === topic);
  const locations = clientContent.destinations.filter(d => category === "all" || d.categories.some(c => c === category));
  const results = clientMatches(query);
  const categoryLabel = (d: Destination) => d.categories.map(c => clientContent.categories.find(x => x.id === c)?.label).join(" / ");

  return <>
    <section id="welcome" className={`experience-hero ${paused ? "is-paused" : ""}`} aria-labelledby="hero-title">
      <img className="experience-hero__photo" src={cover} alt="KPMG Lakehouse overlooking the lake at blue hour" />
      <div className="experience-hero__shade" />
      <div className="experience-container experience-hero__content">
        <div className="experience-eyebrow">Your Lakehouse experience starts here</div>
        <h1 id="hero-title"><span>Know before you go.</span>KPMG Lakehouse</h1>
        <p>We look forward to welcoming you to Lakehouse.<br />Arrive ready. Connect deeply. Make bold moves.</p>
        <div className="experience-actions"><a href="#prepare" className="experience-hero__link">Prepare for your visit <span aria-hidden="true">↓</span></a><a href="#explore" className="experience-hero__link experience-hero__link--quiet">Explore Lakehouse <span aria-hidden="true">↓</span></a></div>
      </div>
      <div className="experience-motion"><Button variant="secondary" size="small" label={paused ? "Play motion" : "Pause motion"} pressed={paused} onClick={() => setPaused(!paused)} /></div>
    </section>

    <section className="experience-band" aria-labelledby="welcome-title"><div className="experience-container experience-editorial">
      <div><div className="experience-eyebrow">Welcome to Lakehouse</div><h2 id="welcome-title">A new setting.<br />A fresh perspective.</h2><p>{clientContent.welcome.text}</p><a href="#prepare" className="experience-textlink">Get ready for your visit ↓</a></div>
      <figure className="experience-video">
        <video controls preload="metadata" poster={landing} aria-label="Welcome to Lakehouse video"><source src={welcomeVideo.url} type="video/mp4" /></video>
        <figcaption className="content-status">Welcome film · captions and transcript pending</figcaption>
      </figure>
    </div></section>

    <section id="prepare" className="experience-band experience-band--mist experience-anchor" aria-labelledby="prepare-title"><div className="experience-container">
      <div className="experience-heading"><span className="experience-eyebrow">01 / Before you arrive</span><h2 id="prepare-title">Prepare for your visit</h2><p>The essentials, one topic at a time.</p></div>
      <div className={`preparation-layout ${selectedTopic ? "is-open" : ""}`}>
        <div className="experience-preparation">{clientContent.preparationTopics.map((t, i) => <article className={`preparation-topic preparation-topic--${i} ${topic === t.id ? "is-active" : ""}`} key={t.id}><span className="experience-number">{t.num}</span><h3><Editable id={`client:prepare:${t.id}:title`} text={t.title} /></h3><p>{t.summary}</p><Button variant={topic === t.id ? "primary" : "secondary"} size="small" aria-expanded={topic === t.id} aria-controls="preparation-detail" label={topic === t.id ? `Close ${t.title}` : `View ${t.title}`} onClick={() => setTopic(topic === t.id ? null : t.id)} /></article>)}</div>
        {selectedTopic ? <div className="preparation-details" id="preparation-detail" role="region" aria-label={selectedTopic.title}><div className="experience-heading--row"><h3>{selectedTopic.title}</h3><Button variant="tertiary" size="small" label="Close details" onClick={() => setTopic(null)} /></div><p><Editable id={`client:prepare:${selectedTopic.id}:details`} text={selectedTopic.details} /></p><Status status={selectedTopic.status} /><div className="experience-filters">{selectedTopic.tags.map(t => <Tag key={t} label={t} />)}</div><Questions ids={selectedTopic.faqs} />{selectedTopic.id === "app" ? <p>iOS and Android download links · approved resources pending</p> : null}</div> : null}
      </div>
    </div></section>

    <section id="arrival" className="experience-band experience-anchor" aria-labelledby="arrival-title"><div className="experience-container">
      <div className="experience-heading"><span className="experience-eyebrow">02 / Getting here</span><h2 id="arrival-title">Your arrival, from travel to check-in.</h2></div>
      <div className="experience-three">{clientContent.arrivalSteps.map(s => <article className="arrival-item" key={s.num}><span className="experience-number">{s.num}</span><h3>{s.title}</h3><p>{s.text}</p><Status status={s.status} /></article>)}</div>
      <div className="experience-faq"><h3>Arrival questions</h3><Questions group="arrival" /></div>
    </div></section>

    <section id="explore" className="experience-band experience-band--mist experience-anchor" aria-labelledby="explore-title"><div className="experience-container">
      <div className="experience-heading"><span className="experience-eyebrow">03 / Discover the campus</span><h2 id="explore-title">Explore Lakehouse</h2><p>A coffee. A conversation. A little time to recharge. Find your next stop.</p></div>
      <div className="experience-explore-bar">
        <div className="experience-filters" role="group" aria-label="Filter destinations"><Tag label="Show all" selected={category === "all"} onClick={() => setCategory("all")} />{clientContent.categories.map(c => <Tag key={c.id} label={c.label} selected={category === c.id} onClick={() => setCategory(c.id)} />)}</div>
        <div onKeyDown={moveMapTab}><Tabs tabs={[{ key: "map", label: "Map" }, { key: "list", label: "List" }]} activeKey={mapView} onChange={setMapView} /></div>
      </div>
      <p className="content-status" role="status">{locations.length ? `${locations.length} destinations shown` : "Approved work and recharge destinations are still to come."}</p>
      {mapView === "map" ? <LakehouseMap locations={locations} renderDetail={(d, select) => <DestinationDetail destination={d} select={select} />} /> : <div className="experience-destinations">{locations.map(d => <article className="destination-card" key={d.id}><img src={photos[d.id]} alt={d.id === "lakeside-park" ? "Lakehouse lakeside setting; park-specific photograph pending" : d.name} loading="lazy" /><div><span className="experience-eyebrow">{categoryLabel(d)}</span><h3>{d.name}</h3><p>{d.short}</p><Status status={d.status} /><Button variant="tertiary" size="small" label={`Discover ${d.name}`} onClick={() => setDestination(d)} /></div></article>)}</div>}
      <div className="experience-faq"><h3>Around Lakehouse</h3><Questions group="explore" /></div>
    </div></section>

    <section id="questions" className="experience-band experience-anchor" aria-labelledby="questions-title"><div className="experience-container">
      <div className="experience-heading"><span className="experience-eyebrow">04 / Questions</span><h2 id="questions-title">Find what you need.</h2></div>
      <form className="experience-search" role="search" onSubmit={e => { e.preventDefault(); setQuery(question); }}><TextField label="Find an answer" type="search" value={question} onChange={setQuestion} placeholder="Try coffee, packing or the app" /><Button variant="primary" size="medium" label="Search" type="submit" /></form>
      <div className="experience-filters" role="group" aria-label="Suggested questions">{clientContent.suggestedQueries.map(q => <Button key={q} variant="tertiary" size="small" label={q} onClick={() => { setQuestion(q); setQuery(q); }} />)}</div>
      <div aria-live="polite">{query ? <div className="experience-faq"><h3>{results.length ? "Answers from this page" : "No answer found"}</h3>{results.length ? <Accordion items={results.map(q => ({ key: q.id, label: q.question, content: <><p>{q.answer}</p><Status status={q.status} /></> }))} /> : <p>Try another topic. Unapproved information remains pending rather than being guessed.</p>}</div> : null}</div>
      <div className="experience-faq"><h3>Additional questions</h3><Questions group="residual" /></div>
    </div></section>

    <section id="help" className="experience-band experience-band--mist experience-anchor" aria-labelledby="help-title"><div className="experience-container">
      <div className="experience-heading"><span className="experience-eyebrow">05 / Support & resources</span><h2 id="help-title">Here when you need us.</h2></div>
      <div className="experience-three">{clientContent.help.map(h => <article className="help-resource" key={h.id}><h3>{h.title}</h3><p>{h.text}</p><Status status={h.status} /></article>)}</div>
      <div className="experience-assistant"><div><span className="experience-eyebrow">Future concept · not a live agent</span><h3>Ask Lakehouse</h3><p>A conversational way into the visitor information already on this site.</p></div><Button variant="secondary" size="medium" label="Try the concept" onClick={() => { setQuery(""); setQuestion(""); setAssistant(true); }} /></div>
    </div></section>

    <Modal open={destination !== null} title={destination?.name ?? "Destination"} onClose={() => setDestination(null)}>{destination ? <DestinationDetail destination={destination} select={id => setDestination(clientContent.destinations.find(d => d.id === id) ?? null)} /> : null}</Modal>
    <Modal open={assistant} title="Ask Lakehouse · future concept" onClose={() => setAssistant(false)}><p>This concept only matches visitor answers already on this site. It is not connected to AI, and your question is not sent anywhere.</p><form className="experience-search" onSubmit={e => { e.preventDefault(); setQuery(question); }}><TextField label="Your question" value={question} onChange={setQuestion} /><Button variant="secondary" size="small" label="Find answer" type="submit" /></form><div aria-live="polite">{query ? results.length ? results.map(r => <div key={r.id}><h3>{r.question}</h3><p>{r.answer}</p><Status status={r.status} /></div>) : <p>That information is not yet in the visitor concept.</p> : null}</div></Modal>
  </>;
}

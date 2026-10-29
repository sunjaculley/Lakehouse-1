import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/design-system/ad-blue-thunder-38f574";
import { clientContent } from "@/content/client";
import { campusPins, campusFullView, campusLevelTwoView, campusFocusView, campusMatchesLevel, type CampusLevel } from "@/content/campus-map";
import campusArtwork from "@/assets/client/lakehouse-campus.svg";
import "./lakehouse-map.css";

type Destination = typeof clientContent.destinations[number];
type View = typeof campusFullView;
export function LakehouseMap({ locations, renderDetail }: { locations: Destination[]; renderDetail: (destination: Destination, select: (id: string) => void) => ReactNode }) {
  const [level, setLevel] = useState<CampusLevel>("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [view, setView] = useState<View>(campusFullView);
  const currentView = useRef<View>(campusFullView);
  const visible = campusPins.filter(pin => locations.some(d => d.id === pin.id) && campusMatchesLevel(pin, level));
  const active = locations.find(d => d.id === selected && visible.some(p => p.id === d.id));
  const selectedPin = visible.find(p => p.id === active?.id);
  const target = selectedPin ? campusFocusView(selectedPin) : level === "2" ? campusLevelTwoView : campusFullView;

  useEffect(() => {
    const start = currentView.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { currentView.current = target; setView(target); return; }
    const began = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const progress = Math.min(1, (now - began) / 650);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = { x: start.x + (target.x - start.x) * eased, y: start.y + (target.y - start.y) * eased, w: start.w + (target.w - start.w) * eased, h: start.h + (target.h - start.h) * eased };
      currentView.current = next; setView(next);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target.x, target.y, target.w, target.h]);

  const select = (id: string) => { const pin = campusPins.find(p => p.id === id); if (!pin || !locations.some(d => d.id === id)) return; if (!campusMatchesLevel(pin, level)) setLevel("all"); setSelected(id); };
  const reset = () => { setSelected(null); setLevel("all"); setHovered(null); };
  return <div className="campus-interactive" onKeyDown={event => { if (event.key === "Escape") { setSelected(null); setHovered(null); } }}>
    <div className="experience-actions campus-controls" role="group" aria-label="Filter map by level">
      {([{ key: "all", label: "Show all levels" }, { key: "1", label: "Level 1 & grounds" }, { key: "2", label: "Level 2" }] as const).map(item => <Button key={item.key} variant={level === item.key ? "primary" : "secondary"} size="small" label={item.label} pressed={level === item.key} aria-pressed={level === item.key} onClick={() => { setLevel(item.key); setSelected(null); }} />)}
      <Button variant="tertiary" size="small" label="Reset view" onClick={reset} />
    </div>
    <div className="campus-interactive__layout">
      <figure className="campus-stage">
        <svg className="campus-svg" viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`} role="group" aria-labelledby="campus-title campus-description">
          <title id="campus-title">Interactive Lakehouse campus map</title><desc id="campus-description">Level 1, grounds and Level 2. The same destinations are available in the list beside the map.</desc>
          <image href={campusArtwork} width="712" height="559" aria-hidden="true" />
          {level !== "all" ? <path className="campus-dim" d={level === "2" ? "M0 0H712V559H0Z M358 0H712V245H670L560 205 470 184 358 178Z" : "M358 0H712V245H670L560 205 470 184 358 178Z"} fillRule="evenodd" /> : null}
          {visible.map(pin => {
            const d = locations.find(item => item.id === pin.id); if (!d) return null;
            const number = campusPins.findIndex(item => item.id === pin.id) + 1;
            return <g key={pin.id} className={`campus-pin ${pin.level === 2 ? "campus-pin--upper" : ""} ${active?.id === pin.id ? "is-selected" : ""} ${hovered === pin.id ? "is-hovered" : ""}`} transform={`translate(${pin.x} ${pin.y})`} tabIndex={0} role="button" aria-label={`${d.name}, Level ${pin.level}`} aria-pressed={active?.id === pin.id} aria-controls="campus-destination-detail" onClick={() => select(pin.id)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(pin.id); } }} onPointerEnter={() => setHovered(pin.id)} onPointerLeave={() => setHovered(null)} onFocus={() => setHovered(pin.id)} onBlur={() => setHovered(null)}>
              <title>{`${d.name}, Level ${pin.level}`}</title><circle className="campus-pin__hit" r="18" /><circle className="campus-pin__ring" r="8" /><circle className="campus-pin__dot" r="8" /><text className="campus-pin__number" y="3">{number}</text>
              <g className="campus-pin__label" transform={`translate(0 -15) scale(${view.w / campusFullView.w})`}><rect x="-62" y="-19" width="124" height="20" rx="4" /><text y="-9">{d.name}</text></g>
            </g>;
          })}
        </svg>
        <figcaption><div className="campus-legend"><span>1–4 · Level 1 & grounds</span><span>5–6 · Level 2</span></div><p className="content-status" role="status">{active ? `${active.name} · Level ${selectedPin?.level}` : `${visible.length} destinations shown`} · Interim map for orientation, not wayfinding</p></figcaption>
      </figure>
      <aside className="campus-destinations" aria-label="Campus destinations">
        {active ? <Button variant="tertiary" size="small" label="← All destinations" onClick={() => setSelected(null)} /> : <><h3>Destinations</h3><ol className="campus-destination-list">{visible.map(pin => { const d = locations.find(item => item.id === pin.id); if (!d) return null; return <li key={pin.id} onPointerEnter={() => setHovered(pin.id)} onPointerLeave={() => setHovered(null)}><Button variant="secondary" size="small" label={`${campusPins.findIndex(p => p.id === pin.id) + 1}. ${d.name}`} aria-pressed={false} aria-controls="campus-destination-detail" onClick={() => select(pin.id)} /><span className="content-status">Level {pin.level}</span></li>; })}</ol></>}
        <div id="campus-destination-detail" className="campus-selected-detail" aria-live="polite">{active ? renderDetail(active, select) : null}</div>
      </aside>
    </div>
  </div>;
}
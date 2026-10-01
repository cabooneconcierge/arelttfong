"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { copy, site } from "../data";

const fonts = [
  { id: "cormorant", label: "Cormorant", sample: '"Cormorant Garamond", serif' },
  { id: "montserrat", label: "Montserrat", sample: "Montserrat, sans-serif" },
  { id: "fraunces", label: "Fraunces", sample: "Fraunces, serif" }
];

export default function Site() {
  const [lang, setLang] = useState("es");
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState("cormorant");
  const [form, setForm] = useState({ name: "", phone: "", siteId: "healthy", reason: "" });
  const t = copy[lang];
  const office = site.locations.find((item) => item.id === form.siteId) || site.locations[1];

  useEffect(() => {
    document.documentElement.dataset.font = font;
  }, [font]);

  function onSubmit(event) {
    event.preventDefault();
    const place = office.name;
    const message = [
      lang === "es" ? "Hola, quiero agendar una valoraci\u00f3n." : "Hello, I would like to request a consultation.",
      (lang === "es" ? "Nombre" : "Name") + ": " + form.name,
      (lang === "es" ? "Tel\u00e9fono" : "Phone") + ": " + form.phone,
      (lang === "es" ? "Sede" : "Office") + ": " + place,
      (lang === "es" ? "Motivo" : "Reason") + ": " + form.reason
    ].join("\n");
    const number = office.whatsapp || "526241199241";
    window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <div className="topbar">
        <div className="wrap fontpick">
          <span>Tipograf\u00eda</span>
          {fonts.map((item) => (
            <button
              key={item.id}
              type="button"
              className={font === item.id ? "on" : ""}
              style={{ "--sample": item.sample }}
              onClick={() => setFont(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <header className="wrap nav">
        <a className="brand" href="#inicio">
          <span className="mark">AF</span>
          <span>
            <strong>Arlett Fong</strong>
            <span>{lang === "es" ? "Cirug\u00eda general" : "General surgery"}</span>
          </span>
        </a>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {t.nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label="Men\u00fa">Men\u00fa</button>
          <button className="lang" onClick={() => setLang(lang === "es" ? "en" : "es")}>{t.langLabel}</button>
        </div>
      </header>
      </div>

      <main id="inicio" className="wrap">
        <section className="hero">
          <div>
            <div className="eyebrow">{t.kicker}</div>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="actions">
              <a className="btn" href="#consulta">{t.ctaPrimary}</a>
              <a className="btn ghost" href="#procedimientos">{t.ctaSecondary}</a>
            </div>
            <div className="facts">
              {t.facts.map(([label, value]) => (
                <article key={label}><small>{label}</small><strong>{value}</strong></article>
              ))}
            </div>
          </div>
          <aside className="portrait">
            <span>Dra.</span>
            <p>Arlett Fong Hirales</p>
            <span>{lang === "es" ? "Directora m\u00e9dica de H+ Los Cabos durante cuatro a\u00f1os. Consulta en H+ y Healthy Cabo." : "Medical director of H+ Los Cabos for four years. Offices at H+ and Healthy Cabo."}</span>
          </aside>
        </section>

        <section id="enfoque">
          <div className="section-head">
            <div className="eyebrow">{t.approachEyebrow}</div>
            <h2>{t.approachTitle}</h2>
            <p>{t.approach}</p>
          </div>
          <div className="grid-4">
            {t.pillars.map(([n, title, body]) => (
              <article className="card" key={n}><i>{n}</i><b>{title}</b><span>{body}</span></article>
            ))}
          </div>
        </section>

        <section id="procedimientos">
          <div className="section-head">
            <div className="eyebrow">{t.procEyebrow}</div>
            <h2>{t.procTitle}</h2>
            <p className="note">{t.procNote}</p>
          </div>
          <div className="grid-3">
            {t.procedures.map(([title, body]) => (
              <article className="card" key={title}><b>{title}</b><span>{body}</span></article>
            ))}
          </div>
        </section>

        <section id="trayectoria" className="split">
          <div>
            <div className="eyebrow">{t.pathEyebrow}</div>
            <h2>{t.pathTitle}</h2>
            <p>{t.pathBody}</p>
            <p>{t.pathBody2}</p>
          </div>
          <div className="creds">
            {t.credentials.map(([label, value]) => (
              <div key={label}><small>{label}</small><strong>{value}</strong></div>
            ))}
          </div>
        </section>

        <section id="consulta" className="visit">
          <div>
            <div className="eyebrow">{t.visitEyebrow}</div>
            <h2>{t.visitTitle}</h2>
            <p>{t.visitBody}</p>
            <div className="locations">
              {site.locations.map((place) => (
                <article className="loc" key={place.id}>
                  <b>{place.name}</b>
                  <span>{place.area}</span>
                  <p>{place.address}</p>
                  <p>{lang === "es" ? place.noteEs : place.noteEn}</p>
                  <a href={"tel:" + place.phone}>{place.phoneDisplay}</a>
                  {" \u00b7 "}
                  <a href={place.maps} target="_blank" rel="noreferrer">Mapa</a>
                </article>
              ))}
            </div>
            <ul>
              {t.visitPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <form onSubmit={onSubmit}>
            <h2>{t.formTitle}</h2>
            <p className="note">{t.formLead}</p>
            <label>{t.name}<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>{t.phone}<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
            <label>
              {t.siteLabel}
              <select value={form.siteId} onChange={(e) => setForm({ ...form, siteId: e.target.value })}>
                {site.locations.map((place) => <option key={place.id} value={place.id}>{place.name}</option>)}
              </select>
            </label>
            <label>{t.reason}<textarea required rows={4} value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} /></label>
            <button className="btn" type="submit">{t.send}</button>
            <p className="notice">{t.urgent}</p>
          </form>
        </section>
      </main>

      <footer className="wrap">
        <div>
          <strong>{site.doctor}</strong>
          <div>{t.rights}</div>
          <div>{t.footerNote}</div>
        </div>
        <Link href="/aviso">{t.privacy}</Link>
      </footer>
    </>
  );
}

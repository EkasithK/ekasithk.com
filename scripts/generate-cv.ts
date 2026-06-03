/**
 * Generates a clean, ATS-friendly CV PDF from the single source of truth
 * (src/data/content.ts) using pdfkit — no browser required.
 *
 *   npm run cv      (or: node --import tsx scripts/generate-cv.ts)
 *
 * Output: public/cv/Ekasith_Kowcharoen_CV.pdf
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import { content } from "../src/data/content.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "cv");
const OUT_FILE = path.join(OUT_DIR, "Ekasith_Kowcharoen_CV.pdf");
const QR = path.join(ROOT, "public", "img", "qr-ekasithk.png");
const PHOTO = path.join(ROOT, "public", "img", "ekasith2.jpg");

const TEAL = "#0f766e";
const NAVY = "#0f172a";
const INK = "#1f2937";
const SUB = "#4b5563";
const GRAY = "#6b7280";
const RULE = "#e5e7eb";

const LEFT = 48;
const RIGHT = 48;

/** pdfkit's built-in Helvetica is WinAnsi — swap glyphs it can't render. */
const clean = (s: string): string => s.replace(/฿/g, "THB ").replace(/→/g, "->");

fs.mkdirSync(OUT_DIR, { recursive: true });

const doc = new PDFDocument({ size: "A4", margins: { top: 44, left: LEFT, right: RIGHT, bottom: 48 } });
doc.pipe(fs.createWriteStream(OUT_FILE));

const W = doc.page.width - LEFT - RIGHT;
const BOTTOM = doc.page.height - 48;

const { meta, about, skills, experience, projects, research, education, esports, contact, awards } = content;

// ---- header -------------------------------------------------------------
const top = doc.y;
const PHOTO_W = 62;
const PHOTO_H = 80;
const QR_W = 58;
const qrX = doc.page.width - RIGHT - QR_W;
const textX = LEFT + PHOTO_W + 16;
const textW = qrX - 14 - textX;

try {
  doc.save();
  doc.roundedRect(LEFT, top, PHOTO_W, PHOTO_H, 4).clip();
  doc.image(PHOTO, LEFT, top, { cover: [PHOTO_W, PHOTO_H] });
  doc.restore();
  doc.roundedRect(LEFT, top, PHOTO_W, PHOTO_H, 4).lineWidth(0.8).strokeColor(RULE).stroke();
} catch {
  /* photo optional */
}
try {
  doc.image(QR, qrX, top, { width: QR_W });
  doc.font("Helvetica").fontSize(6.5).fillColor(GRAY).text("ekasithk.com", qrX, top + QR_W + 3, { width: QR_W, align: "center" });
} catch {
  /* qr optional */
}

doc.font("Helvetica-Bold").fontSize(23).fillColor(NAVY).text(meta.fullName, textX, top, { width: textW, characterSpacing: 0.2 });
doc.font("Helvetica-Bold").fontSize(11).fillColor(TEAL).text(meta.tagline, textX, doc.y + 1, { width: textW });
doc.moveDown(0.35);
doc.font("Helvetica").fontSize(9).fillColor(SUB);
doc.text(`${contact.email}  ·  ekasith.ko@ku.th`, textX, doc.y, { width: textW });
doc.text(`${contact.location}  ·  ${contact.timezone}  ·  ${meta.siteUrl.replace("https://", "")}`, { width: textW });
doc.text(`github.com/EkasithK  ·  instagram.com/ekasith.k  ·  ORCID ${research.orcid}`, { width: textW });

const y = Math.max(doc.y, top + PHOTO_H) + 10;
doc.moveTo(LEFT, y).lineTo(LEFT + W, y).lineWidth(1.6).strokeColor(TEAL).stroke();
doc.y = y + 12;

// ---- helpers ------------------------------------------------------------
function heading(title: string) {
  doc.moveDown(0.65);
  if (doc.y > BOTTOM - 72) doc.addPage();
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(TEAL).text(title.toUpperCase(), LEFT, doc.y, { characterSpacing: 1.2 });
  const ly = doc.y + 2.5;
  doc.moveTo(LEFT, ly).lineTo(LEFT + W, ly).lineWidth(0.7).strokeColor(RULE).stroke();
  doc.moveDown(0.5);
}

function paragraph(text: string) {
  doc.font("Helvetica").fontSize(10).fillColor(INK).text(clean(text), LEFT, doc.y, { width: W, align: "left", lineGap: 1 });
  doc.moveDown(0.2);
}

function entryHead(title: string, date: string) {
  if (doc.y > BOTTOM - 44) doc.addPage();
  const t = doc.y;
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#111827").text(title, LEFT, t, { width: W - 110 });
  const titleBottom = doc.y;
  if (date) {
    doc.font("Helvetica").fontSize(9.5).fillColor(GRAY).text(date, LEFT, t, { width: W, align: "right" });
  }
  doc.y = Math.max(titleBottom, doc.y);
}

function sub(text: string) {
  doc.font("Helvetica-Oblique").fontSize(9.5).fillColor(SUB).text(clean(text), LEFT, doc.y, { width: W });
}

function bullets(items: string[]) {
  doc.font("Helvetica").fontSize(10).fillColor(INK);
  for (const it of items) {
    if (doc.y > BOTTOM - 24) doc.addPage();
    doc.text(`•  ${clean(it)}`, LEFT + 6, doc.y, { width: W - 6, lineGap: 1 });
  }
}

function labelLine(label: string, rest: string) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor("#111827").text(`${label}: `, LEFT, doc.y, { continued: true });
  doc.font("Helvetica").fillColor(INK).text(clean(rest), { width: W });
}

// ---- body (formal order) ------------------------------------------------
heading("Professional Summary");
paragraph(about.summary);

heading("Education");
for (const e of education) {
  entryHead(`${e.degree}  ${e.field}`, `${e.start} – ${e.end}`);
  sub(e.institution);
  if (e.details && e.details.length) bullets(e.details);
  doc.moveDown(0.35);
}

heading("Experience");
for (const j of experience) {
  entryHead(`${j.title} — ${j.org}`, `${j.start} – ${j.end}`);
  sub(j.location);
  doc.moveDown(0.15);
  bullets(j.bullets);
  doc.moveDown(0.4);
}

heading("Research & Publications");
for (const p of research.publications) {
  doc.font("Helvetica").fontSize(10).fillColor(INK);
  doc.text(`${p.title}. `, LEFT, doc.y, { width: W, continued: true });
  doc.font("Helvetica-Oblique").text(`${p.venue}`, { continued: true });
  doc.font("Helvetica").text(`, ${p.year}. DOI: ${p.doi}`);
  doc.moveDown(0.35);
}
labelLine("Doctoral research (in progress)", `${research.phd.field}, ${research.phd.institution}.`);
labelLine("Research interests", `${research.interests.join(", ")}.`);

heading("Awards & Honors");
for (const a of awards) {
  entryHead(a.title, a.year);
  sub(a.issuer);
  doc.moveDown(0.12);
  paragraph(a.detail);
  doc.moveDown(0.25);
}
doc.font("Helvetica-Bold").fontSize(10).fillColor("#111827").text("National Esports Champion — Blade & Soul (Thailand). ", LEFT, doc.y, { continued: true });
doc.font("Helvetica").fillColor(INK).text(
  clean(`Team ${esports[0].team}. BSTC 2017 & 2018 national champion (Natural Selection, then 200IQ); represented Thailand at the World Championship (4th place, 2018). Role: ${esports[0].role}.`),
  { width: W },
);

heading("Selected Projects");
for (const p of projects) {
  entryHead(p.name, p.status);
  sub(p.role);
  doc.moveDown(0.12);
  paragraph(p.description);
  doc.moveDown(0.25);
}

heading("Technical Skills");
for (const g of skills) {
  labelLine(g.title, g.items.join(", "));
  doc.moveDown(0.12);
}

doc.end();
console.log(`✓ CV written to ${path.relative(ROOT, OUT_FILE)}`);

#!/usr/bin/env node
// Generates public/resume.pdf using raw PDF primitives (no dependencies).
// Single page, Letter size, Helvetica/Helvetica-Bold text lines.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'resume.pdf');
mkdirSync(dirname(outPath), { recursive: true });

const esc = (s) => s.replace(/[\\()]/g, (c) => '\\' + c);

// Each line: [font(F1=Helvetica, F2=Helvetica-Bold), size, x, y, text]
const lines = [
  ['F2', 20, 72, 726, 'Tanaboon Jewriyavetch'],
  ['F1', 11, 72, 706, 'Software Developer'],
  ['F1', 10, 72, 690, 'tanaboon.jew@gmail.com  |  github.com/TanaboonJew  |  linkedin.com/in/tanaboonjew'],

  ['F2', 12, 72, 652, 'EXPERIENCE'],
  ['F2', 11, 72, 632, 'Western Digital'],
  ['F1', 10.5, 72, 617, 'Software Developer  |  Thailand  |  Sep 2025 - Present'],
  ['F1', 10.5, 72, 600, 'Building and maintaining internal software in a Linux-focused engineering environment.'],

  ['F2', 12, 72, 562, 'EDUCATION'],
  ['F2', 11, 72, 542, 'Thammasat University'],
  ['F1', 10.5, 72, 527, 'B.Eng Computer Engineering  |  2025'],

  ['F2', 12, 72, 489, 'SELECTED PROJECTS'],
  ['F2', 10.5, 72, 469, 'Foreman'],
  ['F1', 10.5, 90, 454, 'Goal-to-handoff orchestrator for AI agent pipelines (Rust, Tauri, Preact, YAML)'],
  ['F2', 10.5, 72, 434, 'Passenger Princess'],
  ['F1', 10.5, 90, 419, 'Persistent NPC passenger behavior mod for Cyberpunk 2077 (Lua, Cyber Engine Tweaks)'],
  ['F2', 10.5, 72, 399, 'PhotoModeOutfit-Songbird'],
  ['F1', 10.5, 90, 384, 'Photo Mode outfit patch generator + validation pipeline (Python, ArchiveXL, TweakXL)'],
  ['F1', 10.5, 72, 364, '40-project personal portfolio - see tanaboonjew.github.io/work'],

  ['F2', 12, 72, 326, 'TECHNICAL SKILLS'],
  ['F1', 10.5, 72, 306, 'Linux, Bash, Git, CI/CD, Rust, Python, C, JavaScript, AI agents and tooling'],

  ['F2', 12, 72, 268, 'CONTACT'],
  ['F1', 10.5, 72, 248, 'Email: tanaboon.jew@gmail.com'],
  ['F1', 10.5, 72, 231, 'GitHub: github.com/TanaboonJew'],
  ['F1', 10.5, 72, 214, 'LinkedIn: linkedin.com/in/tanaboonjew'],
];

const content = lines.map(([f, s, x, y, t]) => `BT /${f} ${s} Tf ${x} ${y} Td (${esc(t)}) Tj ET`).join('\n');

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
  `<< /Length ${Buffer.byteLength(content, 'latin1') + 1} >>\nstream\n${content}\nendstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
];

let pdf = '%PDF-1.4\n';
const offsets = [];
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf, 'latin1'));
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf, 'latin1');
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

writeFileSync(outPath, Buffer.from(pdf, 'latin1'), 'binary');
console.log(`Wrote ${outPath} (${Buffer.byteLength(pdf, 'latin1')} bytes)`);

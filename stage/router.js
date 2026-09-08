// ================================================================
//  stage/router.js — UNI-Router für NET.work
//  Leitet ALLE Hash-Pfade auf ROOT/index.html zurück,
//  rendert aber intern das gewünschte Modul.
// ================================================================

import { MODULES } from '../core/axiom.map.js';

export function uniRouter() {
  // Hash lesen
  const hash = location.hash.replace('#', '');

  // Wenn kein Hash → ROOT
  const target = hash || 'root';

  // Modul aus Axiom-Karte holen
  const mod = MODULES[target] || MODULES.root;

  // ROOT index.html ist immer die Basis
  const rootFile = './index.html';

  // Anzeige aktualisieren (z.B. Status, Label, Beschreibung)
  document.querySelector('#status').textContent = mod.label;
  document.querySelector('#desc').textContent = mod.desc;

  // Wenn Modul eine Datei hat → laden
  if (mod.file) {
    document.querySelector('#frame').src = mod.file;
  } else {
    document.querySelector('#frame').src = rootFile;
  }
}

// Router aktivieren
window.addEventListener('hashchange', uniRouter);
window.addEventListener('DOMContentLoaded', uniRouter);

// ================================================================
//  axiom.map.js — Gruppe 7: Module-Karte (optimiert)
//  Jetzt mit ATOM-Level, Resolver-Key und klarer Struktur.
// ================================================================

export const MODULES = {
  root: {
    label: 'ROOT',
    file: null,
    atom: '∞',
    key: '#ROOT',
    desc: 'BRAIN-Startzustand'
  },

  core: {
    label: 'CORE',
    file: null,
    atom: 81,
    key: '#CORE',
    desc: 'Kernel · Axiom · Vec · NC-Suite'
  },

  hdf: {
    label: 'HDF',
    file: null,
    atom: 3,
    key: '#HDF',
    desc: 'ROM-Speicher d/e/i/n/o/r/s/u/w'
  },

  // Stage-Module (eine Ebene über BRAIN/index.html)
  boerse: {
    label: 'BOERSE',
    file: '../BOERSE/index.html',
    atom: 9,
    key: '#BOERSE',
    desc: 'Börsen-Daten-Stage'
  },

  dom: {
    label: 'DOM',
    file: '../DOM/index.html',
    atom: 9,
    key: '#DOM',
    desc: 'Dom-Struktur / NC-Raum'
  },

  eos: {
    label: 'EOS',
    file: '../EOS/index.html',
    atom: 9,
    key: '#EOS',
    desc: 'EOS-Modul'
  },

  evo: {
    label: 'EVO',
    file: '../EVO/index.html',
    atom: 9,
    key: '#EVO',
    desc: 'Evolution / Axiom-Map'
  },

  markt: {
    label: 'MARKT',
    file: '../MARKT/index.html',
    atom: 9,
    key: '#MARKT',
    desc: 'Marktsystem'
  },

  respo: {
    label: 'RESPO',
    file: '../respo/index.html',
    atom: 81,
    key: '#RESPO',
    desc: '9×9-Respo-Mesh, 81 Slots'
  },

  tool48: {
    label: 'TOOL48',
    file: '../tool48/index.html',
    atom: 9,
    key: '#TOOL48',
    desc: 'Werkzeug 48'
  },

  // Achsen
  breite: {
    label: 'BREITE',
    file: null,
    atom: 1/12,

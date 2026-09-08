// ================================================================
//  api/sli.on.ready.js — Stage-Ready-System
//  Cache (kurzfristig), RAM (Kernel-State), Loop-Rohr (Eventfluss),
//  Schalten (Trigger). Minimal, sauber, NET.work-kompatibel.
// ================================================================

import { kernel } from '../js/core/OS_CORE.js';

const cache = {};       // Kurzfristige Werte (Cache)
const listeners = [];   // Loop-Rohr: alle Ready-Callbacks

// RAM-Schreiben (Kernel-State)
export function ramSet(key, value) {
  kernel.set(key, value);
}

// RAM-Lesen
export function ramGet(key) {
  return kernel.get(key);
}

// Cache-Schreiben
export function cacheSet(key, value) {
  cache[key] = value;
}

// Cache-Lesen
export function cacheGet(key) {
  return cache[key];
}

// Registrierung eines Ready-Callbacks (Loop-Rohr)
export function onStageReady(fn) {
  if (typeof fn === 'function') listeners.push(fn);
}

// Schalten: Stage ist bereit → alle Listener feuern
export function triggerStageReady(payload = {}) {
  cacheSet('stageReadyPayload', payload);   // Cache füllt sich
  ramSet('stageReady', true);               // RAM bekommt Zustand

  for (const fn of listeners) fn(payload);  // Loop-Rohr feuert
}

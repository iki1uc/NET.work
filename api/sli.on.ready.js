// ================================================================
//  api/sli.on.ready.js — Stage-Ready-Hook
//  Ein kleines Ready-System: Module können sich registrieren,
//  und sobald die Stage bereit ist, werden alle Listener aufgerufen.
// ================================================================

const listeners = [];

// Registrierung eines Ready-Callbacks
export function onStageReady(fn) {
  if (typeof fn === 'function') listeners.push(fn);
}

// Auslösen des Ready-Events
export function triggerStageReady(payload = {}) {
  for (const fn of listeners) fn(payload);
}

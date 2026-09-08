// api/sli.on.ready.js — Stage-Ready-Hook

const listeners = [];

export function onStageReady(fn) {
  if (typeof fn === 'function') listeners.push(fn);
}

export function triggerStageReady(payload = {}) {
  for (const fn of listeners) fn(payload);
}

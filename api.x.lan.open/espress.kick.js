// ================================================================
//  espress.kick.js — Express Kick Cache Fun
//  Schnell auslösen, Cache füllen, Funktion starten.
// ================================================================

const kickCache = {};

export function espressKick(key, value, fn) {
  // Cache füllen
  kickCache[key] = value;

  // Wenn Funktion vorhanden → ausführen
  if (typeof fn === 'function') {
    fn(value);
  }

  // Rückgabe für Debug / Vitality
  return {
    time: Date.now(),
    key,
    value,
    fun: typeof fn === 'function'
  };
}

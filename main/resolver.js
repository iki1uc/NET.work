import { ATOM } from './atom.js';
import { resolve } from './resolver.js';

console.log("Atom-Stufe aktiv:", ATOM.storage);
console.log("Resolver liefert:", resolve('#ID'));

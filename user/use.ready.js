// use.ready — TMP-geführtes USE-Atom für NET.work

import { NET_TMP } from "../NET_TMP.js";
import { VEC3_TMP } from "../vec3.js";
import { VEC9_TMP } from "../vec9.js";
import { qMode } from "./q.mode.js";

export function USE_READY(name = "unknown-use") {

    const READY = true;

    if (!READY) {
        return {
            id: crypto.randomUUID(),
            status: "NOT_READY",
            legal: "EU-DSGVO",
            time: Date.now(),
            atom: "USE"
        };
    }

    // Wenn READY → alle Module erzeugen
    const net = NET_TMP;
    const vec3 = VEC3_TMP();
    const vec9 = VEC9_TMP(9);       // Achse 9 = korrekt
    const mode = qMode();

    return {
        id: crypto.randomUUID(),     // anonym, EU-legal
        use: name,
        status: "READY",
        axis: 9,                     // TP9 oben
        contact: "TP9",              // TP9 unten
        time: Date.now(),
        legal: "EU-DSGVO",

        // Module
        net,
        vec3,
        vec9,
        mode,

        atom: "USE",
        synergy: true,
        vitality: 27                 // Tiefe aktiv
    };
}

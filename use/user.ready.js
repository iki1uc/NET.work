// user.ready — TMP-geführtes User-Atom für NET.work

import { NET_TMP } from "../NET_TMP.js";
import { VEC3_TMP } from "../vec3.js";
import { VEC9_TMP } from "../vec9.js";
import { qMode } from "../use/q.mode.js";

export function USER_READY(name = "unknown-user") {

    const READY = true;

    if (!READY) {
        return {
            id: crypto.randomUUID(),
            status: "NOT_READY",
            legal: "EU-DSGVO",
            time: Date.now()
        };
    }

    // Wenn READY → alle Module erzeugen
    const net = NET_TMP;
    const vec3 = VEC3_TMP();
    const vec9 = VEC9_TMP(9);       // Achse 9 = korrekt
    const mode = qMode();

    return {
        id: crypto.randomUUID(),     // anonym, EU-legal
        user: name,
        status: "READY",
        axis: 9,                     // TP9
        contact: "TP9",              // TP9 unten
        time: Date.now(),
        legal: "EU-DSGVO",

        // Module
        net,
        vec3,
        vec9,
        mode,

        atom: "USER",
        synergy: true,
        vitality: 27                 // Tiefe aktiv
    };
}

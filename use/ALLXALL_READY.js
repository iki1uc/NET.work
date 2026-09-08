// ALLXALL_READY — TMP-geführtes Atom-Modul für NET.work

import { NET_TMP } from "../NET_TMP.js";
import { VEC3_TMP } from "../vec3.js";
import { VEC9_TMP } from "../vec9.js";
import { qMode } from "../use/q.mode.js";

export function ALLXALL_READY(option){

    return {
        id: crypto.randomUUID(),     // anonym, EU-legal
        status: "READY",
        axis: 9,                     // TP9
        contact: "TP9",              // TP9 unten
        time: Date.now(),            // TMP
        legal: "EU-DSGVO",

        atom: "ALLXALL",
        option,                      // Sonne / Orbit / DS9 / Triangle / Matrix / Engine

        net: NET_TMP,                // Netzwerk-Atom
        vec3: VEC3_TMP("HY"),        // 3D-Atom
        vec9: VEC9_TMP(81),          // 9D-Atom
        mode: qMode(),               // TP-Pyramide

        synergy: true,
        vitality: 27                 // Tiefe aktiv
    };
}

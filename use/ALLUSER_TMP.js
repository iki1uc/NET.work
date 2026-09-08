// ALLUSER_TMP — globales TMP-geführtes User-Atom

import { USER_READY } from "../user/user.ready.js";

export function ALLUSER_TMP(list = []) {

    return {
        id: crypto.randomUUID(),     // anonym, EU-legal
        atom: "ALLUSER",
        status: "READY",
        axis: 9,
        contact: "TP9",
        time: Date.now(),
        legal: "EU-DSGVO",

        users: list.map(name => USER_READY(name)),  // alle User, aber TMP
        count: list.length,

        vitality: 27,
        synergy: true
    };
}

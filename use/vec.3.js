// VEC3_TMP — TMP-geführtes 3D-Atom

export function VEC3_TMP(type = "HY") {

    return {
        id: crypto.randomUUID(),     // anonym, EU-legal
        axis: 3,                     // 3D-Achse
        vec: VEC3_CORE[type],        // HY, PE, PER, TMP
        time: Date.now(),            // TMP
        legal: "EU-DSGVO",
        atom: "VEC3",
        vitality: 9,                 // Clock aktiv
        synergy: true
    };
}

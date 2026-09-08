// VEC_9x9x9 — TMP-geführtes 9×9×9-Atom

export const VEC_9x9x9 = {
    height: 9,
    width: 9,
    depth: 9,
    slots: 729,
    matrix: []
};

for(let h=0; h<9; h++){
    for(let w=0; w<9; w++){
        for(let d=0; d<9; d++){

            const atom = {
                id: crypto.randomUUID(),   // anonym, EU-legal
                axis: 9,                   // deine Achse
                coord: { h, w, d },        // Position
                time: Date.now(),          // TMP
                legal: "EU-DSGVO",         // neutral
                atom: "VEC9",              // Typ
                vitality: 27,              // Tiefe aktiv
                synergy: true              // Continuum aktiv
            };

            VEC_9x9x9.matrix.push(atom);
        }
    }
}

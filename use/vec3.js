
// use/vec3.js — 3D‑Vektoren für NET.work

export class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    magnitude() {
        return Math.sqrt(
            this.x*this.x +
            this.y*this.y +
            this.z*this.z
        );
    }

    add(v) {
        return new Vec3(
            this.x + v.x,
            this.y + v.y,
            this.z + v.z
        );
    }

    sub(v) {
        return new Vec3(
            this.x - v.x,
            this.y - v.y,
            this.z - v.z
        );
    }

    scale(s) {
        return new Vec3(
            this.x * s,
            this.y * s,
            this.z * s
        );
    }

    toComplex() {
        return `${this.x} + ${this.y}i + ${this.z}j`;
    }

    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}

// Beispiel-Vektoren (3→9→81 kompatibel)
export const VEC3_CORE = {
    HY:  new Vec3(3, 9, 81),
    PE:  new Vec3(9, 81, 756),
    PER: new Vec3(3, 9, 756),
    TMP: new Vec3(27, 81, 3)
};

// TMP-geführtes 3D-Atom
export function VEC3_TMP(type = "HY") {
    return {
        id: crypto.randomUUID(),
        axis: 3,
        vec: VEC3_CORE[type],
        time: Date.now(),
        legal: "EU-DSGVO",
        atom: "VEC3",
        vitality: 9,
        synergy: true
    };
}

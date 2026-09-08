// vec3.js — TMP‑Achsenmodul für NET.work

export class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    magnitude() {
        return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
    }

    add(v) { return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z); }
    sub(v) { return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z); }
    scale(s){ return new Vec3(this.x * s, this.y * s, this.z * s); }

    toString() { return `(${this.x}, ${this.y}, ${this.z})`; }
}

// TMP‑Führung (NEU)
export function VEC3_TMP(){
    return {
        id: crypto.randomUUID(),   // anonym, EU‑legal
        axis: "3x3x3",
        vec: new Vec3(3, 9, 27),   // dein Maßstab
        time: Date.now(),          // TMP‑Zeitpunkt
        legal: "EU-DSGVO"
    };
}


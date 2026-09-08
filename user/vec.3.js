// vec3.js — TMP‑Vektoren für NET · LAN · TMP · EU‑legal

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

    toComplex() { return `${this.x} + ${this.y}i + ${this.z}j`; }
    toString() { return `(${this.x}, ${this.y}, ${this.z})`; }
}

// TMP‑Ableitung (EU‑legal, anonym)
export function makeVEC3_TMP(){
    return {
        id: crypto.randomUUID(),   // anonym, nicht rückverfolgbar
        HY:  new Vec3(3, 9, 81),
        PE:  new Vec3(9, 81, 27),
        PER: new Vec3(3, 9, 27),
        TMP: new Vec3(27, 81, 3),
        time: Date.now(),          // TMP‑Zeitpunkt
        legal: "EU-DSGVO"          // Legitimation
    };
}

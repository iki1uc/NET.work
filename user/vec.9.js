export function makeNET_TMP(){
    return {
        fritz: {
            box: "router",
            id: crypto.randomUUID(),   // anonym, nicht rückverfolgbar
            down: 690,
            up: 86.3
        },

        lan: [
            { id: crypto.randomUUID(), speed: 1000 },
            { id: crypto.randomUUID(), speed: 1000 },
            { id: crypto.randomUUID(), speed: 1000 }
        ],

        wlan: [
            { id: crypto.randomUUID(), speed: 864 },
            { id: crypto.randomUUID(), speed: 540 }
        ],

        vpn: [
            { id: crypto.randomUUID(), type: "IPSec" }
        ]
    };
}

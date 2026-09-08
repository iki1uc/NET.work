// ALLXALL · TMP — anonym, EU-legal, DSGVO-konform
export const ALLXALL_TMP = {
  id: crypto.randomUUID(),   // anonym, nicht rückverfolgbar
  choice: null,              // TMP-Auswahl
  time: Date.now(),          // TMP-Zeitpunkt
  origin: "local",           // keine Netzwerkdaten
  legal: "EU-DSGVO",         // Legitimation
};

// Auswahl setzen
export function setChoice(opt){
  ALLXALL_TMP.choice = opt;
  ALLXALL_TMP.time = Date.now();
  localStorage.setItem("ALLXALL_LIGHT", JSON.stringify(ALLXALL_TMP));
}

// Auswahl löschen
export function clearChoice(){
  ALLXALL_TMP.choice = null;
  localStorage.removeItem("ALLXALL_LIGHT");
}

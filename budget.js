/* ================================================================
   Sol y Norte — trip budget (single source of truth for both the
   app and the /eclipse/ overview page).
   EDIT THIS FILE ONLY; both surfaces render from it.
   - eur items convert at eurUsd (edit the rate as reality moves)
   - status: "paid" (money gone) | "booked" (committed, not paid) | "estimate"
   ================================================================ */
window.TRIP_BUDGET = {
  totalUSD: 10000,
  eurUsd: 1.10,
  updated: "2026-08-28",
  note: "Splurge zone (Mike-approved, within reason): San Sebastián. Rule for everything still unbooked: refundable rates only.",
  items: [
    { cat:"Lodging",         name:"Jomarijo Boutique Rooms, Fuengirola — Sun 1 Aug (1 nt)",      eur:275,     status:"paid" },
    { cat:"Lodging",         name:"Catalonia Puerta del Mar, Málaga — Mon 2–Wed 4 (2 nts)",      eur:1054.62, status:"paid" },
    { cat:"Lodging",         name:"San Sebastián ×4 nts — THE SPLURGE (Convento San Martín tier)", usd:1400,  status:"estimate" },
    { cat:"Lodging",         name:"Bilbao ×3 nts",                                               usd:600,     status:"estimate" },
    { cat:"Flights",         name:"Outbound EUG→Málaga ×2 (Alaska/BA or KLM)",                   usd:1700,    status:"estimate" },
    { cat:"Flights",         name:"Return Bilbao→EUG ×2 (KLM via AMS–PDX)",                      usd:1400,    status:"estimate" },
    { cat:"Trains & transit",name:"Iryo Málaga→Madrid ×2 (car 3)",                               usd:120,     status:"estimate" },
    { cat:"Trains & transit",name:"Alvia Madrid→Donostia ×2 (Elige Confort)",                    usd:120,     status:"estimate" },
    { cat:"Trains & transit",name:"Cercanías · Euskotren · buses · Barik/Mugi · SS→Bilbao",      usd:160,     status:"estimate" },
    { cat:"Food & drink",    name:"Daily eating, 10 days ×2 — pintxos-forward",                  usd:1500,    status:"estimate" },
    { cat:"Food & drink",    name:"Splurge meal: Elkano (Getaria) turbot lunch",                 usd:350,     status:"estimate" },
    { cat:"Activities",      name:"Museums, funiculars, boats, Caminito, Guggenheim…",           usd:350,     status:"estimate" },
    { cat:"Misc",            name:"Taxis, eSIM, eclipse glasses, buffer",                        usd:400,     status:"estimate" },
  ],
};
window.budgetCalc = function(){
  const B=window.TRIP_BUDGET, r=B.eurUsd;
  const usd=i=> i.usd!=null? i.usd : Math.round(i.eur*r);
  let paid=0, committed=0, est=0;
  const rows=B.items.map(i=>{const u=usd(i); if(i.status==='paid')paid+=u; else if(i.status==='booked')committed+=u; else est+=u; return {...i,usdVal:u};});
  const projected=paid+committed+est;
  return {rows, paid, committed, est, projected, total:B.totalUSD, left:B.totalUSD-projected, pctPaid:Math.min(100,100*paid/B.totalUSD), pctProj:Math.min(100,100*projected/B.totalUSD)};
};

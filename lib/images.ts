/**
 * Banco de imagens do protótipo.
 * Fotografias do Unsplash usadas apenas para fins demonstrativos —
 * a Casa Araucá é um negócio fictício e estas imagens não retratam
 * o local, hóspedes ou colaboradores reais.
 */
function unsplash(id: string, w: number, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  hero: "photo-1470770841072-f978cf4d019e",
  experienceArchitecture: "photo-1618773928121-c32242e63f39",
  experienceVeranda: "photo-1495474472287-4d71bcdd2085",
  suiteMata: "photo-1591088398332-8a7791972843",
  suiteAraucaria: "photo-1618221195710-dd6b41faaea6",
  casaHorizonte: "photo-1600607687939-ce8a6c25118c",
  buildStayBackdrop: "photo-1476041800959-2f6bb412c8ce",
  moodDesacelerar: "photo-1571896349842-33c89424de2d",
  moodAventura: "photo-1502082553048-f009c37129b9",
  moodGastronomia: "photo-1414235077428-338989a2e8c0",
  moodRomance: "photo-1591088398332-8a7791972843",
  gastronomyHero: "photo-1414235077428-338989a2e8c0",
  dish1: "photo-1546069901-ba9599a7e63c",
  dish2: "photo-1544025162-d76694265947",
  dish3: "photo-1512058564366-18510be2db19",
  experienceTrail: "photo-1502082553048-f009c37129b9",
  experienceForestBath: "photo-1448375240586-882707db888b",
  experienceOutdoorDinner: "photo-1529193591184-b1d58069ecdd",
  experienceStars: "photo-1475274047050-1d0c0975c63e",
  experienceCoffee: "photo-1495474472287-4d71bcdd2085",
  experienceGuidedWalk: "photo-1441974231531-c6227db76b6e",
  galleryWide: "photo-1470770841072-f978cf4d019e",
  galleryTall1: "photo-1618773928121-c32242e63f39",
  gallerySquare1: "photo-1544161515-4ab6ce6db874",
  galleryTall2: "photo-1571896349842-33c89424de2d",
  gallerySquare2: "photo-1518602164578-cd0074062767",
  galleryWide2: "photo-1500534623283-312aade485b7",
  location: "photo-1470071459604-3b5ec3a7fe05",
  finalCta: "photo-1426604966848-d7adac402bff",
} as const;

export type ImageKey = keyof typeof images;

export function photo(key: ImageKey, w: number, q?: number) {
  return unsplash(images[key], w, q);
}

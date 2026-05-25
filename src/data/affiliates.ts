// ─────────────────────────────────────────────────────────────────────────
// AFFILIATE LINKS — Watch Hill Guide
// ─────────────────────────────────────────────────────────────────────────
// This is the single source of truth for every affiliate link on the site.
// To update an affiliate ID across every page, edit it here once.
//
// HOW TO USE IN A POST:
//   import { affiliates } from "../../data/affiliates";
//   <a href={affiliates.hotels.oceanHouse} rel="sponsored nofollow">...</a>
//
// PROGRAM SIGN-UP STATUS:
//   [ ] Stay22         — https://stay22.com/affiliates (aggregator, easiest start)
//   [ ] Booking.com    — https://www.booking.com/affiliate
//   [ ] VRBO/Expedia   — https://www.expediapartnercentral.com
//   [ ] GetYourGuide   — https://partner.getyourguide.com
//   [ ] Viator         — https://www.viatoraffiliates.com
//   [ ] Amazon         — https://affiliate-program.amazon.com (Associates)
//   [ ] OpenTable      — https://www.opentable.com/affiliate-program
//
// When you sign up, replace the corresponding *_ID constants below.
// Mark the checkbox above as done so future-you knows what's active.
// ─────────────────────────────────────────────────────────────────────────

// ─── PARTNER IDs (REPLACE THESE WITH YOUR REAL CODES) ───────────────────
const STAY22_ID = "watchhillguide";       // TODO: replace after Stay22 signup
const BOOKING_ID = "watchhillguide";      // TODO: replace after Booking signup
const VRBO_ID = "Gp7VBfs";                // TODO: replace after Expedia signup
const GETYOURGUIDE_ID = "watchhillguide"; // TODO: replace after GYG signup
const VIATOR_ID = "watchhillguide";       // TODO: replace after Viator signup
const AMAZON_TAG = "watchhillgd-20";      // TODO: replace after Amazon Associates approval
const OPENTABLE_ID = "watchhillguide";    // TODO: replace after OpenTable Affiliate signup

// ─── URL BUILDERS ───────────────────────────────────────────────────────
// Stay22 takes a destination and returns the best-available booking. Best
// for hotel links because it auto-aggregates Booking, Hotels.com, VRBO, etc.
const stay22 = (address: string) =>
  `https://www.stay22.com/embed/gm?aid=${STAY22_ID}&address=${encodeURIComponent(address)}`;

// Booking.com direct search — for when you want Booking specifically.
const booking = (query: string) =>
  `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(query)}&aid=${BOOKING_ID}`;

// VRBO direct search.
const vrbo = (query: string) =>
  `https://vrbo.com/affiliate/${VRBO_ID}`;

// GetYourGuide — for tours, activities, attractions.
const gyg = (query: string) =>
  `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}&partner_id=${GETYOURGUIDE_ID}`;

// Viator — alternative for tours.
const viator = (query: string) =>
  `https://www.viator.com/searchResults/all?text=${encodeURIComponent(query)}&pid=${VIATOR_ID}`;

// Amazon search with affiliate tag.
const amazon = (query: string) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

// OpenTable — restaurant reservations.
const opentable = (query: string) =>
  `https://www.opentable.com/s?term=${encodeURIComponent(query)}&ref=${OPENTABLE_ID}`;

// ─── EXPORTED LINKS ─────────────────────────────────────────────────────
// Add new affiliate links here. Group by category so they're easy to find.
export const affiliates = {
  // ── HOTELS (Watch Hill & surrounding area) ────────────────────────────
  hotels: {
    oceanHouse: stay22("Ocean House Watch Hill RI"),
    weekapaugInn: stay22("Weekapaug Inn Westerly RI"),
    watchHillInn: stay22("Watch Hill Inn Watch Hill RI"),
    breakers: stay22("The Breakers Hotel Spring Lake NJ"),
    pleasantViewInn: stay22("Pleasant View Inn Westerly RI"),
    villaInnWesterly: stay22("Villa at Westerly RI"),
    winnapaugInn: stay22("Winnapaug Inn Westerly RI"),
    andreaHotel: stay22("Andrea Hotel Misquamicut RI"),
    haversham: stay22("Haversham Tavern Inn Westerly RI"),

    // Aggregator searches — fallback links for "browse all options"
    allWatchHill: stay22("Watch Hill RI"),
    allWesterly: booking("Westerly Rhode Island"),
    allMisquamicut: booking("Misquamicut Rhode Island"),
  },

  // ── VACATION RENTALS ──────────────────────────────────────────────────
  rentals: {
    watchHillVRBO: vrbo("Watch Hill RI"),
    westerlyVRBO: vrbo("Westerly RI"),
    misquamicutVRBO: vrbo("Misquamicut RI"),
  },

  // ── TOURS, ACTIVITIES, EXPERIENCES ────────────────────────────────────
  tours: {
    watchHillBoatTours: gyg("watch hill boat tours"),
    mysticAquarium: gyg("mystic aquarium tickets"),
    mysticSeaport: gyg("mystic seaport museum"),
    newportMansions: gyg("newport mansions tours"),
    blockIslandFerry: viator("block island ferry"),
    fishingCharters: viator("rhode island fishing charter westerly"),
    sunsetCruise: gyg("watch hill sunset cruise"),
  },

  // ── RESTAURANTS (OpenTable reservations) ──────────────────────────────
  restaurants: {
    oceanHouseCoast: opentable("Coast at Ocean House Watch Hill"),
    oceanHouseBistro: opentable("The Bistro Ocean House Watch Hill"),
    weekapaugRestaurant: opentable("Weekapaug Inn Restaurant"),
    bridgeWesterly: opentable("Bridge Restaurant Westerly RI"),
    olympia: opentable("Olympia Tea Room Watch Hill"),
    paddysWesterly: opentable("Paddy's Beach Restaurant Westerly"),
    cookedGoose: opentable("The Cooked Goose Westerly"),
    twoLittleFish: opentable("Two Little Fish Misquamicut"),
    allWesterly: opentable("Westerly Rhode Island"),
  },

  // ── AMAZON PRODUCT SEARCHES ───────────────────────────────────────────
  amazon: {
    beachBag: amazon("beach tote bag waterproof"),
    binoculars: amazon("birding binoculars compact"),
    cooler: amazon("soft sided beach cooler"),
    beachChair: amazon("lightweight beach chair foldable"),
    beachUmbrella: amazon("beach umbrella heavy duty"),
    sunscreen: amazon("reef safe sunscreen spf 50"),
    sandToys: amazon("kids beach toys set"),
    waterShoes: amazon("water shoes adults"),
    travelGuide: amazon("rhode island travel guide"),
  },
} as const;

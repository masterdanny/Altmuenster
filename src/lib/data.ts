import {
  Waves,
  Mountain,
  Leaf,
  Landmark,
  Bike,
  Users,
  type LucideIcon,
} from "lucide-react";

export const OFFICIAL_CONTACT = {
  name: "Marktgemeinde Altmünster",
  address: "Marktstraße 21",
  postalCode: "4813",
  locality: "Altmünster",
  country: "Austria",
  phone: "+43 7612 87611",
  email: "gemeinde@altmuenster.ooe.gv.at",
  website: "https://www.altmuenster.at",
} as const;

export const OFFICIAL_LINKS = {
  accommodations:
    "https://www.altmuenster.at/Unser_Altmuenster/Altmuenster_erleben/Unterkuenfte",
  gastronomy:
    "https://www.altmuenster.at/system/web/gelbeseite.aspx?cmd=az&menuonr=227255870&typ=6",
  events:
    "https://www.altmuenster.at/Unser_Altmuenster/Aktuelles/Veranstaltungskalender",
  news: "https://www.altmuenster.at/Unser_Altmuenster/Aktuelles/Neuigkeiten",
  parking: "https://www.altmuenster.at/Parken_1",
  panorama: "https://traunsee.panomax.com/gmundnerberg",
  seebuehne: "https://www.altmuenster.at/Seebuehne",
  sights: "https://www.altmuenster.at/Sehenswertes_Altmuenster",
  openingHours:
    "https://www.altmuenster.at/Gemeinde/Gemeindeamt/Kontakt_Oeffnungszeiten",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/gemeindealtmuenster",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/marktgemeinde.altmuenster/",
  },
] as const;

export const NAV_LINKS = [
  { href: "#welcome", label: "Welcome" },
  { href: "#history", label: "History" },
  { href: "#map", label: "Map" },
  { href: "#whats-on", label: "What's On" },
] as const;

export const HISTORY_HIGHLIGHTS = [
  {
    era: "Origins",
    title: "The old monastery",
    text: "Altmünster — literally the “old minster” — takes its name from a former monastery that shaped the settlement. Faith and village life grew together here on the western shore of Lake Traunsee, leaving a legacy still visible in churches and traditional architecture.",
  },
  {
    era: "Built heritage",
    title: "Churches, houses & craft",
    text: "The parish church with its Romanesque tower anchors the historic centre. Nearby stand the Kalvarienberg church, the faithfully restored Eggerhaus farmhouse, and village churches in Neukirchen and Reindlmühl — each telling part of the Salzkammergut story.",
  },
  {
    era: "Landscape",
    title: "Lake, forest & nature park",
    text: "For centuries, life here revolved around Traunsee — Austria’s deepest lake — and the forests of the Naturpark Attersee-Traunsee. Fishing, farming, and later tourism wove the community into the wider Salzkammergut region.",
  },
  {
    era: "Today",
    title: "A market town of three villages",
    text: "Modern Altmünster brings together Altmünster, Neukirchen, and Reindlmühl under one municipality. It remains a place to live and visit — quieter than bustling Gmunden across the lake, yet deeply connected to Upper Austrian culture.",
  },
] as const;

export const GOOD_TO_KNOW = [
  {
    label: "Three districts, one town",
    detail:
      "The municipality covers Altmünster, Neukirchen, and Reindlmühl — each with its own character and churches.",
  },
  {
    label: "Getting here by train",
    detail:
      "Altmünster/Wörth station has direct ÖBB links to Linz (~45 min) and Vienna (~2.5 h).",
  },
  {
    label: "Where to stay & eat",
    detail: "Hotels, guesthouses, and restaurants are listed officially by the municipality.",
    href: OFFICIAL_LINKS.accommodations,
    linkLabel: "Official accommodation list",
  },
  {
    label: "Events & opening hours",
    detail: "The community calendar and town hall hours are always current on the official site.",
    href: OFFICIAL_LINKS.events,
    linkLabel: "Veranstaltungskalender",
  },
] as const;

export const HERO_FACTS = [
  { value: "191 m", label: "Austria's deepest lake" },
  { value: "45 min", label: "From Linz by train" },
  { value: "79 km²", label: "Protected nature park" },
] as const;

export const STATS = [
  {
    value: 10000,
    prefix: "~",
    suffix: "",
    label: "Residents",
    sublabel: "Warm community spirit",
  },
  {
    value: 79,
    prefix: "",
    suffix: " km²",
    label: "Nature Park",
    sublabel: "Naturpark Attersee-Traunsee",
  },
  {
    value: 88,
    prefix: "",
    suffix: " km",
    label: "Hiking Trails",
    sublabel: "Through alpine forests",
  },
  {
    value: 84,
    prefix: "",
    suffix: " km",
    label: "Cycling Paths",
    sublabel: "Along lake & mountains",
  },
] as const;

export interface OfficialNewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  officialUrl: string;
  image: string;
  imageAlt: string;
}

export const OFFICIAL_NEWS: OfficialNewsItem[] = [
  {
    id: "yoga-see",
    title: "Summer Yoga by the Lake",
    summary: "Free morning yoga sessions on the Esplanade overlooking Traunsee — bring your mat.",
    date: "From 25 June 2026",
    officialUrl: "https://www.altmuenster.at/Sommer_Yoga_beim_See",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileid=4312592&mode=T&width=600&height=400&cropping=CENTER",
    imageAlt: "Summer yoga by Lake Traunsee",
  },
  {
    id: "dorffest",
    title: "Dorffest Neukirchen",
    summary: "Traditional village festival in Neukirchen with live music, local food, and community spirit.",
    date: "11 July 2026",
    officialUrl: "https://www.altmuenster.at/Dorffest_Neukirchen_9",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileid=4240546&mode=T&width=600&height=400&cropping=CENTER",
    imageAlt: "Aerial view of Neukirchen near Altmünster",
  },
  {
    id: "kids-padel",
    title: "Kids Padel Tennis",
    summary: "Summer padel courses for children — multiple sessions in July and August.",
    date: "21–23 Jul · 27–29 Jul · 3–5 Aug",
    officialUrl: "https://www.altmuenster.at/Kids-Padeln",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileid=4313669&mode=T&width=600&height=400&cropping=CENTER",
    imageAlt: "Kids padel tennis in Altmünster",
  },
];

export interface DiningSpot {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  officialUrl: string;
  image: string;
  imageAlt: string;
}

export const DINING: DiningSpot[] = [
  {
    id: "fisch-moser",
    name: "Fischrestaurant Moser",
    cuisine: "Fish restaurant",
    description: "Fresh Traunsee fish and lakeside dining at Nachdemsee.",
    address: "Nachdemsee 26, 4813 Altmünster",
    email: "info@fischrestaurantmoser.at",
    website: "https://fischrestaurantmoser.at/",
    officialUrl: "https://www.altmuenster.at/Fischrestaurant_Moser",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191601&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Fischrestaurant Moser at Lake Traunsee",
  },
  {
    id: "maximilianstube",
    name: "Die Stube im Maximilianhof",
    cuisine: "Gasthof / Restaurant",
    description: "Regional cuisine in the Maximilianhof — reservations recommended.",
    address: "Maximilianstraße 1, 4813 Altmünster",
    phone: "+43 7612 87800",
    website: "https://maximilianstube.at/",
    officialUrl:
      "https://www.altmuenster.at/Die_Stube_im_Maximilianhof_-_Reservierung_erforderlich",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191913&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Die Stube im Maximilianhof restaurant",
  },
  {
    id: "urzn",
    name: "Berggasthof Urzn",
    cuisine: "Mountain inn",
    description: "Alpine guesthouse on the Gmundnerberg with panoramic views over Traunsee.",
    address: "Gmundnerberg 91, 4813 Altmünster",
    phone: "+43 7612 87214",
    website: "https://urzn.at/",
    officialUrl: "https://www.altmuenster.at/Berggasthof_Urzn",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191595&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Berggasthof Urzn on Gmundnerberg",
  },
  {
    id: "saegemuehle",
    name: "Gasthaus Sägemühle",
    cuisine: "Gasthof / Restaurant",
    description: "Traditional country inn in Neukirchen serving hearty Salzkammergut fare.",
    address: "Neukirchen 41, 4814 Altmünster",
    phone: "+43 7618 8209",
    website: "https://landgasthaus-saegemuehle.eatbu.com/",
    officialUrl: "https://www.altmuenster.at/Gasthaus_Saegemuehle",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191604&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Gasthaus Sägemühle in Neukirchen",
  },
  {
    id: "auszeit",
    name: "Auszeit",
    cuisine: "Café / Pub",
    description: "Relaxed café and pub in the heart of Altmünster.",
    address: "Ebenzweierstraße 4, 4813 Altmünster",
    phone: "+43 7612 89962",
    website: "https://www.cafe-auszeit.at/",
    officialUrl: "https://www.altmuenster.at/Auszeit",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191586&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Café Auszeit in Altmünster",
  },
  {
    id: "hocheck",
    name: "Hocheck Landgasthof",
    cuisine: "Gasthof / Restaurant",
    description: "Landgasthof on the Kalvarienbergweg — alpine dining close to town.",
    address: "Kalvarienbergweg 4, 4813 Altmünster",
    phone: "+43 7612 87461",
    website: "http://hocheck.at/",
    officialUrl: "https://www.altmuenster.at/Hocheck_Landgasthof_1",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191979&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Hocheck Landgasthof near Altmünster",
  },
];

export interface ExperienceCard {
  id: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  details: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceCard[] = [
  {
    id: "lake",
    title: "The Lake",
    shortDescription: "Crystal-clear waters for swimming, SUP, and serene boat days.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    imageAlt: "Serene alpine lake with mountain reflections on Traunsee",
    details:
      "Lake Traunsee is Austria's deepest lake, reaching 191 metres. Its waters invite you to swim at Solarbad beach, paddle on a SUP board, or drift across the surface on a traditional boat. Mornings bring mirror-still reflections; evenings glow with golden light across the Salzkammergut.",
    highlights: ["Solarbad Beach", "SUP & Kayaking", "Boat excursions", "Sunset swims"],
  },
  {
    id: "mountains",
    title: "The Mountains",
    shortDescription: "Summit views from Hochlecken and the Gmundnerberg panorama.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    imageAlt: "Alpine mountain peaks rising above green valleys near Altmünster",
    details:
      "Rise above the lake on trails leading to Hochlecken and the Gmundnerberg viewpoint. Each ascent rewards you with sweeping views across Traunsee, the Traunstein, and the entire Salzkammergut. Well-marked paths suit both gentle walkers and seasoned hikers.",
    highlights: ["Hochlecken summit", "Gmundnerberg viewpoint", "Panoramic trails", "Alpine flora"],
  },
  {
    id: "nature",
    title: "Nature & Wellness",
    shortDescription: "Forest trails, lakeside yoga, and horseback riding in nature.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    imageAlt: "Sunlit forest trail in the Austrian nature park",
    details:
      "Within the Naturpark Attersee-Traunsee, wellness unfolds naturally. Practice yoga by the water's edge, ride through forest clearings on horseback, or simply walk beneath ancient trees. This is slow travel at its finest — restorative, grounding, and deeply connected to the land.",
    highlights: ["Lakeside yoga", "Horseback riding", "Forest bathing", "Nature park trails"],
  },
  {
    id: "culture",
    title: "Culture & Heritage",
    shortDescription: "Historic churches, charming squares, and nearby castle treasures.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    imageAlt: "Traditional Austrian village architecture with church spire",
    details:
      "Altmünster's historic centre preserves centuries of Salzkammergut character. Visit the faithfully restored Eggerhaus, the Kalvarienberg church, the Romanesque parish church tower, and the lakeside Seebühne. Churches in Neukirchen and Reindlmühl are also well worth a detour.",
    highlights: ["Eggerhaus", "Kalvarienberg church", "Parish church", "Seebühne"],
  },
  {
    id: "adventures",
    title: "Active Adventures",
    shortDescription: "Cycling routes, tennis courts, and golf with lake views.",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
    imageAlt: "Cyclist on scenic alpine road overlooking a lake",
    details:
      "With 84 kilometres of cycling paths and countless outdoor pursuits, Altmünster is an active traveller's dream. Cycle the lakeside promenade, play tennis in the fresh mountain air, or tee off at a nearby golf course framed by alpine peaks.",
    highlights: ["Lakeside cycling", "Tennis courts", "Golf nearby", "Mountain biking"],
  },
  {
    id: "family",
    title: "Family Moments",
    shortDescription: "Playgrounds, wildlife encounters, and village festivals for all ages.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84b84e7?w=800&q=80",
    imageAlt: "Family enjoying a sunny day by an alpine lake",
    details:
      "Families find joy at every turn — safe swimming beaches, adventure playgrounds, and seasonal events that bring the community together. Children discover forest wildlife while parents savour the unhurried pace of lakeside life.",
    highlights: ["Solarbad for families", "Playgrounds", "Village festivals", "Wildlife watching"],
  },
];

export interface Accommodation {
  id: string;
  name: string;
  type: string;
  description: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  officialUrl: string;
  image: string;
  imageAlt: string;
}

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "traunstein",
    name: "Panoramahotel Traunstein",
    type: "Hotel",
    description: "Panoramic hotel on the Abteistraße with views over Lake Traunsee.",
    address: "Abteistraße 10, 4813 Altmünster",
    phone: "+43 7612 87402",
    email: "office@hotel-traunstein.at",
    website: "https://www.hotel-traunstein.at/",
    officialUrl: "https://www.altmuenster.at/Panormamahotel_Traunstein",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3192000&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Panoramahotel Traunstein",
  },
  {
    id: "wildschuetz",
    name: "Hotel Wildschütz",
    type: "Hotel",
    description: "Established hotel accommodation in Altmünster.",
    address: "Württembergstraße 41, 4813 Altmünster",
    phone: "+43 7612 20437",
    email: "info@hotel-wildschuetz.at",
    website: "https://www.hotel-wildschuetz.at/",
    officialUrl: "https://www.altmuenster.at/Hotel_Wildschuetz",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191989&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Hotel Wildschütz",
  },
  {
    id: "urzn",
    name: "Berggasthof Urzn",
    type: "Gasthof",
    description: "Mountain guesthouse on the Gmundnerberg with lake panoramas.",
    address: "Gmundnerberg 91, 4813 Altmünster",
    phone: "+43 7612 87214",
    email: "gasthaus@urzn.at",
    website: "https://urzn.at/",
    officialUrl: "https://www.altmuenster.at/Berggasthof_Urzn_1",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191969&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Berggasthof Urzn",
  },
  {
    id: "hocheck",
    name: "Hocheck Landgasthof",
    type: "Gasthof",
    description: "Landgasthof on the Kalvarienbergweg — rooms and regional dining.",
    address: "Kalvarienbergweg 4, 4813 Altmünster",
    phone: "+43 7612 87461",
    email: "info@hocheck.at",
    website: "http://hocheck.at/",
    officialUrl: "https://www.altmuenster.at/Hocheck_Landgasthof_1",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191979&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Hocheck Landgasthof",
  },
  {
    id: "windlegern",
    name: "Almgasthof Windlegern",
    type: "Gasthof",
    description: "Alpine guesthouse on the Kollmannsberg above Altmünster.",
    address: "Kollmannsberg 122, 4813 Altmünster",
    phone: "+43 7617 2844",
    email: "gasthof@windlegern.at",
    website: "https://www.windlegern.at/",
    officialUrl: "https://www.altmuenster.at/Almgasthof_Windlegern",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191961&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Almgasthof Windlegern",
  },
  {
    id: "altmuensterhof",
    name: "Altmünsterhof",
    type: "Private rooms",
    description: "Privatzimmer accommodation near the town centre.",
    address: "Ackerweg 2, 4813 Altmünster",
    phone: "+43 7612 87475",
    email: "hotel@altmuensterhof.at",
    website: "http://www.altmuensterhof.at/",
    officialUrl: "https://www.altmuenster.at/Altmuensterhof",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3192013&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Altmünsterhof",
  },
  {
    id: "fanni",
    name: "Café Pension Fanni",
    type: "Pension",
    description: "Pension and café in Neukirchen — breakfast pension with lakeside region charm.",
    address: "Niederaustraße 1, 4814 Altmünster",
    phone: "+43 7618 20044",
    email: "info@pension-fanni.at",
    website: "https://www.pension-fanni.at/",
    officialUrl: "https://www.altmuenster.at/Cafe_Pension_Fanni_1",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3191983&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Café Pension Fanni",
  },
  {
    id: "rittertal",
    name: "Hotel Rittertal",
    type: "Hotel",
    description: "Hotel on Lindenstraße in Altmünster.",
    address: "Lindenstraße 7, 4813 Altmünster",
    phone: "+43 7612 871310",
    email: "albecker.m@gmx.at",
    officialUrl: "https://www.altmuenster.at/Hotel_Rittertal",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3192006&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Hotel Rittertal",
  },
  {
    id: "grossalm",
    name: "Pension Großalm",
    type: "Private rooms",
    description: "Privatzimmer on the Großalm with a peaceful alpine setting.",
    address: "Großalm 44, 4814 Altmünster",
    phone: "+43 664 73970260",
    email: "grossalm@aon.at",
    website: "https://www.grossalm.at/",
    officialUrl: "https://www.altmuenster.at/Pension_Grossalm",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=3192235&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Pension Großalm",
  },
  {
    id: "schweizerhof",
    name: "Schweizerhof",
    type: "Gasthof",
    description: "Gasthof on Hauptstraße in Altmünster.",
    address: "Hauptstraße 17, 4813 Altmünster",
    phone: "+43 664 1387665",
    officialUrl: "https://www.altmuenster.at/Schweizerhof_1",
    image:
      "https://www.altmuenster.at/system/web/GetImage.ashx?fileId=9280&mode=T&height=400&width=600&cropping=CENTER",
    imageAlt: "Schweizerhof Gasthof",
  },
];

export interface Activity {
  id: string;
  title: string;
  category: "water" | "hiking" | "culture" | "wellness" | "family";
  description: string;
  duration: string;
  image: string;
  imageAlt: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: "sup",
    title: "Stand-Up Paddleboarding",
    category: "water",
    description: "Glide across mirror-still morning waters with Traunstein reflected below.",
    duration: "2–3 hours",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80",
    imageAlt: "Stand-up paddleboarding on calm lake water",
  },
  {
    id: "solarbad",
    title: "Solarbad Beach Day",
    category: "water",
    description: "Swim, sunbathe, and relax at Altmünster's beloved lakeside bathing area.",
    duration: "Half day",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    imageAlt: "Sunny beach on alpine lake shore",
  },
  {
    id: "boat",
    title: "Lake Boat Excursion",
    category: "water",
    description: "Cruise Traunsee and discover hidden coves along the western shore.",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    imageAlt: "Boat sailing on alpine lake",
  },
  {
    id: "hochlecken",
    title: "Hike to Hochlecken",
    category: "hiking",
    description: "A rewarding summit trail with panoramic views over the entire Salzkammergut.",
    duration: "4–5 hours",
    image: "https://images.unsplash.com/photo-1551632811-715109a704e8?w=600&q=80",
    imageAlt: "Hiker on mountain trail with valley view",
  },
  {
    id: "gmundnerberg",
    title: "Gmundnerberg Viewpoint",
    category: "hiking",
    description: "A gentler ascent to one of the region's most photographed panoramas.",
    duration: "2–3 hours",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=80",
    imageAlt: "Mountain viewpoint overlooking lake and town",
  },
  {
    id: "forest-trail",
    title: "Nature Park Forest Walk",
    category: "hiking",
    description: "Wander shaded paths through protected woodland within the nature park.",
    duration: "1–2 hours",
    image: "https://images.unsplash.com/photo-1448375248126-8825039c3c5f?w=600&q=80",
    imageAlt: "Peaceful forest path with dappled sunlight",
  },
  {
    id: "church-tour",
    title: "Historic Centre Walk",
    category: "culture",
    description: "Discover churches, traditional houses, and stories of alpine village life.",
    duration: "1–2 hours",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=600&q=80",
    imageAlt: "Historic church in Austrian village centre",
  },
  {
    id: "castle",
    title: "Castle Day Trip",
    category: "culture",
    description: "Visit Ort Castle and Schloss Weinberg — jewels of the Salzkammergut.",
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1590073242674-ac64c711f356?w=600&q=80",
    imageAlt: "Historic castle on lake island",
  },
  {
    id: "yoga",
    title: "Yoga by the Lake",
    category: "wellness",
    description: "Morning sessions on the shore — breathe, stretch, and find stillness.",
    duration: "1 hour",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    imageAlt: "Yoga practice by calm lake waters",
  },
  {
    id: "horseback",
    title: "Forest Horseback Riding",
    category: "wellness",
    description: "Guided rides through meadows and woodland trails around Altmünster.",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
    imageAlt: "Horseback riding through alpine meadow",
  },
  {
    id: "kids-beach",
    title: "Family Beach Morning",
    category: "family",
    description: "Shallow waters and playgrounds make Solarbad perfect for little explorers.",
    duration: "Half day",
    image: "https://images.unsplash.com/photo-1476514525535-07fa3f4c5f1d?w=600&q=80",
    imageAlt: "Children playing at lakeside beach",
  },
  {
    id: "wildlife",
    title: "Wildlife Discovery Walk",
    category: "family",
    description: "Spot deer, birds, and forest creatures on an easy nature park trail.",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1426604966848-d7ad8d13b033?w=600&q=80",
    imageAlt: "Deer in Austrian forest clearing",
  },
];

export const ACTIVITY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "water", label: "Water Sports" },
  { id: "hiking", label: "Hiking & Nature" },
  { id: "culture", label: "Culture" },
  { id: "wellness", label: "Wellness" },
  { id: "family", label: "Family" },
] as const;

export interface Event {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  location: string;
  description: string;
  category: string;
  officialUrl: string;
}

export const EVENTS: Event[] = [
  {
    id: "yoga-summer",
    title: "Summer Yoga by the Lake",
    date: "From 25 June 2026",
    month: "JUN",
    day: "25",
    location: "Esplanade",
    description: "Morning yoga sessions overlooking Traunsee. Bring your mat.",
    category: "Wellness",
    officialUrl: "https://www.altmuenster.at/Sommer_Yoga_beim_See",
  },
  {
    id: "dorffest",
    title: "Dorffest Neukirchen",
    date: "11 July 2026",
    month: "JUL",
    day: "11",
    location: "Neukirchen, Altmünster",
    description: "Traditional village festival with live music, local food, and community spirit.",
    category: "Festival",
    officialUrl: "https://www.altmuenster.at/Dorffest_Neukirchen_9",
  },
  {
    id: "kids-padel",
    title: "Kids Padel Tennis",
    date: "21–23 Jul · 27–29 Jul · 3–5 Aug",
    month: "JUL",
    day: "21",
    location: "Tennishalle",
    description: "Summer padel courses for children during the school holidays.",
    category: "Family",
    officialUrl: "https://www.altmuenster.at/Kids-Padeln",
  },
  {
    id: "ferienpass",
    title: "Ferien(s)pass 2026",
    date: "Throughout summer holidays",
    month: "JUL",
    day: "15",
    location: "Various venues",
    description: "Summer holiday programme with workshops, sports, and creative activities for children.",
    category: "Family",
    officialUrl: "https://www.altmuenster.at/Unser_Altmuenster/Aktuelles/Ferienpass",
  },
  {
    id: "jaeger",
    title: "Morning with the Hunter",
    date: "16 July 2026 · 09:00–12:00",
    month: "JUL",
    day: "16",
    location: "Marktgemeindeamt Altmünster",
    description: "Ferien(s)pass event — a morning learning about local wildlife and hunting traditions.",
    category: "Family",
    officialUrl:
      "https://www.altmuenster.at/Ferien_s_pass_2026_-_Vormittag_mit_dem_Jaeger",
  },
  {
    id: "seebuehne",
    title: "Seebühne Cultural Programme",
    date: "Seasonal programme",
    month: "AUG",
    day: "01",
    location: "Seebühne Altmünster",
    description: "Open-air concerts and cultural events on the lakeside stage.",
    category: "Culture",
    officialUrl: "https://www.altmuenster.at/Seebuehne",
  },
];

export const GALLERY_IMAGES = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Aerial view of alpine lake surrounded by mountains",
    span: "col-span-2 row-span-2",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    alt: "Snow-capped alpine peaks at sunrise",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Traditional Austrian village street",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Turquoise lake shore with gentle waves",
    span: "col-span-1 row-span-2",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    alt: "Sunbeams through ancient forest trees",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1590073242674-ac64c711f356?w=600&q=80",
    alt: "Historic castle reflected in still water",
    span: "col-span-2 row-span-1",
  },
] as const;

export type MapFilter = "all" | "nature" | "culture" | "practical";

export type MapMarkerCategory = Exclude<MapFilter, "all">;

export interface MapMarker {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  category: MapMarkerCategory;
  walkTime: string;
  image: string;
  imageAlt: string;
}

export const MAP_CATEGORY_LABELS: Record<MapMarkerCategory, string> = {
  nature: "Nature",
  culture: "Culture",
  practical: "Practical",
};

export const MAP_LEGEND = [
  { category: "nature" as const, label: "Nature & outdoors", color: "#2E5A3C" },
  { category: "culture" as const, label: "Culture & heritage", color: "#C9A227" },
  { category: "practical" as const, label: "Travel & services", color: "#0A3D62" },
];

export const MAP_MARKERS: MapMarker[] = [
  {
    id: "promenade",
    name: "Town Promenade & Pier",
    description: "Stroll the lakeside walkway and watch boats drift across Traunsee.",
    lat: 47.9022,
    lng: 13.7488,
    category: "nature",
    walkTime: "5 min from centre",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    imageAlt: "Lakeside promenade on Traunsee",
  },
  {
    id: "solarbad",
    name: "Solarbad Beach",
    description: "Altmünster's beloved bathing area with lawns, swimming, and lake access.",
    lat: 47.8998,
    lng: 13.7455,
    category: "nature",
    walkTime: "8 min from centre",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    imageAlt: "Sunny beach on alpine lake",
  },
  {
    id: "gmundnerberg",
    name: "Gmundnerberg Viewpoint",
    description: "Panoramic trail head with sweeping views over the lake and mountains.",
    lat: 47.9085,
    lng: 13.7620,
    category: "nature",
    walkTime: "25 min uphill",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80",
    imageAlt: "Mountain viewpoint over lake Traunsee",
  },
  {
    id: "historic",
    name: "Parish Church Altmünster",
    description: "Pfarrkirche Altmünster with its Romanesque tower — a landmark of the historic centre.",
    lat: 47.9014,
    lng: 13.7514,
    category: "culture",
    walkTime: "Town centre",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    imageAlt: "Historic Austrian village church",
  },
  {
    id: "eggerhaus",
    name: "Eggerhaus",
    description: "Faithfully restored traditional farmhouse — a typical old Gehöft dwelling.",
    lat: 47.9009,
    lng: 13.7522,
    category: "culture",
    walkTime: "Town centre",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    imageAlt: "Traditional Austrian farmhouse architecture",
  },
  {
    id: "kalvarienberg",
    name: "Kalvarienberg Church",
    description: "Kalvarienbergkirche overlooking Altmünster — a peaceful cultural landmark.",
    lat: 47.9042,
    lng: 13.7548,
    category: "culture",
    walkTime: "15 min uphill",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400&q=80",
    imageAlt: "Historic church on a hillside",
  },
  {
    id: "seebuehne",
    name: "Seebühne",
    description: "Lakeside open-air stage for concerts and cultural events on Traunsee.",
    lat: 47.9026,
    lng: 13.7492,
    category: "culture",
    walkTime: "6 min from centre",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    imageAlt: "Lakeside cultural venue on Traunsee",
  },
  {
    id: "hiking",
    name: "Hiking Trailheads",
    description: "Access points to Hochlecken and nature park forest trails.",
    lat: 47.9050,
    lng: 13.7580,
    category: "nature",
    walkTime: "10 min from centre",
    image: "https://images.unsplash.com/photo-1551632811-715109a704e8?w=400&q=80",
    imageAlt: "Forest hiking trail in the Alps",
  },
  {
    id: "station",
    name: "Train Station",
    description: "Altmünster/Wörth station — direct connections to Gmunden, Linz, and Vienna.",
    lat: 47.8965,
    lng: 13.7540,
    category: "practical",
    walkTime: "12 min from centre",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80",
    imageAlt: "Regional train at a small alpine station",
  },
  {
    id: "community",
    name: "Community Centre",
    description: "Events, tourist information, and local gatherings.",
    lat: 47.9008,
    lng: 13.7502,
    category: "practical",
    walkTime: "3 min from centre",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400&q=80",
    imageAlt: "Community building in Austrian town",
  },
  {
    id: "cycling",
    name: "Cycling Path Hub",
    description: "Starting point for the 84 km lakeside and mountain cycling network.",
    lat: 47.9035,
    lng: 13.7470,
    category: "practical",
    walkTime: "6 min from centre",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&q=80",
    imageAlt: "Cycling path along an alpine lake",
  },
];

export const MAP_CENTER: [number, number] = [47.9014, 13.7514];

export const YOUTUBE_VIDEO_ID = "kqdCCcr2oWc";
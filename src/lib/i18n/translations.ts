import type { Locale } from "./types";

const de = {
  meta: {
    title: "Altmünster am Traunsee | Salzkammergut",
    description:
      "Entdecken Sie Altmünster am Traunsee — ein ruhiges Seejuwel im Salzkammergut in Oberösterreich. Baden, Wandern, Kultur und alpine Natur am tiefsten See Österreichs.",
  },
  common: {
    chooseLanguage: "Sprache wählen",
    skipToContent: "Zum Inhalt springen",
    homeAria: "Altmünster am Traunsee — Startseite",
    officialSite: "Offizielle Seite",
    officialSiteShort: "Offizielle Seite →",
    openingHours: "Öffnungszeiten",
    readMore: "Mehr erfahren",
    showMore: "Mehr erfahren",
    showLess: "Weniger anzeigen",
    backToTop: "Nach oben",
    country: "Österreich",
    regionLine: "Naturpark Attersee-Traunsee · Salzkammergut · Oberösterreich",
  },
  nav: {
    main: "Hauptnavigation",
    mobile: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    welcome: "Willkommen",
    history: "Geschichte",
    map: "Karte",
    whatsOn: "Aktuelles",
  },
  hero: {
    region: "Salzkammergut · Oberösterreich",
    tagline: "Wo die Alpen auf Österreichs tiefsten See treffen",
    explore: "Ziel entdecken",
    history: "Geschichte erleben",
    scrollDown: "Zum Willkommensbereich scrollen",
    imageAlt:
      "Luftaufnahme des Traunsees mit Alpengipfeln im Salzkammergut, Österreich",
    facts: [
      { value: "191 m", label: "Tiefster See Österreichs" },
      { value: "45 Min.", label: "Mit dem Zug ab Linz" },
      { value: "79 km²", label: "Geschützter Naturpark" },
    ],
  },
  welcome: {
    eyebrow: "Willkommen",
    title: "Willkommen in Altmünster",
    description:
      "Am westlichen Ufer des Traunsees, im Herzen des Naturparks Attersee-Traunsee, bietet Altmünster einen sanfteren Rhythmus — wo alpine Gipfel auf kristallklares Wasser treffen und jeder Weg zu etwas Besonderem führt. Eine ruhige Alternative zum lebhaften Gmunden, und doch nah genug, um das ganze Salzkammergut zu erkunden.",
    shortDescription:
      "Ein ruhiges Seejuwel am westlichen Ufer des Traunsees — im Herzen des Salzkammerguts.",
    showStats: "Zahlen & Fakten",
    stats: [
      { label: "Einwohner", sublabel: "Lebendige Gemeinschaft" },
      { label: "Naturpark", sublabel: "Naturpark Attersee-Traunsee" },
      { label: "Wanderwege", sublabel: "Durch alpine Wälder" },
      { label: "Radwege", sublabel: "Am See und in den Bergen" },
    ],
  },
  history: {
    eyebrow: "Kultur & Geschichte",
    title: "Geschichte & Wissenswertes",
    description:
      "Der Name Altmünster erinnert an das klösterliche Erbe — heute eine Seeufer-Marktgemeinde in einer der schönsten Landschaften Österreichs.",
    shortDescription:
      "Vom alten Kloster zur Marktgemeinde am Traunsee — Salzkammergut-Geschichte seit Jahrhunderten.",
    goodToKnow: "Gut zu wissen",
    showAll: "Gesamte Geschichte",
    highlights: [
      {
        era: "Ursprung",
        title: "Das alte Kloster",
        text: "Altmünster — wörtlich das „alte Münster“ — verdankt seinen Namen einem ehemaligen Kloster, das die Siedlung prägte. Glaube und dörfliches Leben wuchsen hier am westlichen Traunseeufer zusammen — sichtbar bis heute in Kirchen und traditioneller Bausubstanz.",
      },
      {
        era: "Baukultur",
        title: "Kirchen, Häuser & Handwerk",
        text: "Die Pfarrkirche mit ihrem romanischen Turm prägt das historische Zentrum. In der Nähe stehen die Kalvarienbergkirche, das liebevoll restaurierte Eggerhaus und die Dorfkirchen in Neukirchen und Reindlmühl — jedes ein Stück Salzkammergut-Geschichte.",
      },
      {
        era: "Landschaft",
        title: "See, Wald & Naturpark",
        text: "Seit Jahrhunderten drehte sich das Leben um den Traunsee — Österreichs tiefsten See — und die Wälder des Naturparks Attersee-Traunsee. Fischerei, Landwirtschaft und später der Tourismus verbanden die Gemeinde mit der ganzen Region.",
      },
      {
        era: "Heute",
        title: "Marktgemeinde mit drei Orten",
        text: "Das heutige Altmünster vereint Altmünster, Neukirchen und Reindlmühl unter einer Gemeinde. Ein Ort zum Leben und zum Besuchen — ruhiger als das geschäftige Gmunden am gegenüberliegenden Ufer, und doch tief verwurzelt in der oberösterreichischen Kultur.",
      },
    ],
    tips: [
      {
        label: "Drei Ortsteile, eine Gemeinde",
        detail:
          "Die Marktgemeinde umfasst Altmünster, Neukirchen und Reindlmühl — jeder Ort mit eigenem Charakter und eigenen Kirchen.",
      },
      {
        label: "Anreise mit der Bahn",
        detail:
          "Bahnhof Altmünster/Wörth mit direkten ÖBB-Verbindungen nach Linz (~45 Min.) und Wien (~2,5 Std.).",
      },
      {
        label: "Übernachten & Essen",
        detail:
          "Hotels, Gasthöfe und Restaurants sind offiziell von der Gemeinde gelistet.",
        linkLabel: "Offizielle Unterkunftsliste",
      },
      {
        label: "Veranstaltungen & Öffnungszeiten",
        detail:
          "Gemeindekalender und Öffnungszeiten des Gemeindeamts sind stets aktuell auf der offiziellen Website.",
        linkLabel: "Veranstaltungskalender",
      },
    ],
  },
  map: {
    eyebrow: "Orientierung",
    title: "Karte erkunden",
    description:
      "Orte in der Liste oder auf der Karte durchstöbern — mit der Maus heranzoomen, Marker anklicken für Fotos und Wegbeschreibung.",
    shortDescription: "Entdecken Sie die schönsten Orte rund um den See.",
    showPlaces: "Orte anzeigen",
    hidePlaces: "Orte ausblenden",
    filters: {
      all: "Alle",
      nature: "Natur",
      culture: "Kultur",
      practical: "Praktisch",
    },
    categories: {
      nature: "Natur",
      culture: "Kultur",
      practical: "Praktisch",
    },
    legend: {
      nature: "Natur & Outdoor",
      culture: "Kultur & Denkmalpflege",
      practical: "Anreise & Service",
    },
    places: "Orte",
    hint: "Maus über Karte zum Zoomen · Marker für Details anklicken",
    hintMobile: "Zoomen mit zwei Fingern · Marker antippen für Details",
    loading: "Karte wird geladen…",
    getDirections: "Route planen",
    zoomIn: "Hineinzoomen",
    zoomOut: "Herauszoomen",
    ariaLabel: "Interaktive Karte von Altmünster am Traunsee",
    markers: {
      promenade: {
        name: "Stadtpromenade & Anlegestelle",
        description:
          "Spaziergang am Seeuferweg und Boote auf dem Traunsee beobachten.",
        walkTime: "5 Min. vom Zentrum",
        imageAlt: "Uferpromenade am Traunsee",
      },
      solarbad: {
        name: "Strandbad Solarbad",
        description:
          "Beliebtes Strandbad mit Wiesen, Baden und direktem Seezugang.",
        walkTime: "8 Min. vom Zentrum",
        imageAlt: "Sonniger Strand am Alpensee",
      },
      gmundnerberg: {
        name: "Aussicht Gmundnerberg",
        description:
          "Panoramawanderweg mit weitem Blick über See und Berge.",
        walkTime: "25 Min. bergauf",
        imageAlt: "Aussichtspunkt über den Traunsee",
      },
      historic: {
        name: "Pfarrkirche Altmünster",
        description:
          "Pfarrkirche Altmünster mit romanischem Turm — Wahrzeichen des Ortskerns.",
        walkTime: "Ortszentrum",
        imageAlt: "Historische Dorfkirche in Österreich",
      },
      eggerhaus: {
        name: "Eggerhaus",
        description:
          "Treu restauriertes Bauernhaus — ein typisches altes Gehöft.",
        walkTime: "Ortszentrum",
        imageAlt: "Traditionelle österreichische Bauernhaus-Architektur",
      },
      kalvarienberg: {
        name: "Kalvarienbergkirche",
        description:
          "Kalvarienbergkirche mit Blick über Altmünster — ein stiller Kulturort.",
        walkTime: "15 Min. bergauf",
        imageAlt: "Historische Kirche am Hang",
      },
      seebuehne: {
        name: "Seebühne",
        description:
          "Freilichtbühne am See für Konzerte und Kulturveranstaltungen.",
        walkTime: "6 Min. vom Zentrum",
        imageAlt: "Kulturstätte am Traunseeufer",
      },
      hiking: {
        name: "Wanderweg-Ausgangspunkte",
        description:
          "Zugänge zu Hochlecken und Waldwegen im Naturpark.",
        walkTime: "10 Min. vom Zentrum",
        imageAlt: "Wanderweg in den Alpen",
      },
      station: {
        name: "Bahnhof",
        description:
          "Bahnhof Altmünster/Wörth — direkte Verbindungen nach Gmunden, Linz und Wien.",
        walkTime: "12 Min. vom Zentrum",
        imageAlt: "Regionalzug an kleinem Alpenbahnhof",
      },
      community: {
        name: "Gemeindezentrum",
        description: "Veranstaltungen, Information und Begegnungen vor Ort.",
        walkTime: "3 Min. vom Zentrum",
        imageAlt: "Gemeindegebäude in österreichischer Marktgemeinde",
      },
      cycling: {
        name: "Radwege-Knotenpunkt",
        description:
          "Startpunkt für 84 km Radwege am See und in den Bergen.",
        walkTime: "6 Min. vom Zentrum",
        imageAlt: "Radweg entlang eines Alpensees",
      },
    },
  },
  whatsOn: {
    eyebrow: "Kalender",
    title: "Aktuelles",
    description:
      "Kommende Veranstaltungen und Neuigkeiten der Gemeinde — vollständige Listen immer auf altmuenster.at.",
    shortDescription: "Veranstaltungen und Neuigkeiten aus der Gemeinde.",
    showAllEvents: "Alle Veranstaltungen",
    showAllNews: "Alle News",
    eventsTitle: "Kommende Veranstaltungen",
    newsTitle: "Gemeinde-News",
    fullCalendar: "Gesamter Veranstaltungskalender",
    allNews: "Alle Gemeinde-News",
    events: {
      "yoga-summer": {
        title: "Sommer-Yoga am See",
        date: "Ab 25. Juni 2026",
        location: "Esplanade",
        description:
          "Morgendliches Yoga mit Blick auf den Traunsee. Bitte Matte mitbringen.",
      },
      dorffest: {
        title: "Dorffest Neukirchen",
        date: "11. Juli 2026",
        location: "Neukirchen, Altmünster",
        description:
          "Traditionelles Dorffest mit Live-Musik, regionaler Küche und Gemeinschaft.",
      },
      "kids-padel": {
        title: "Kids-Padel-Tennis",
        date: "21.–23. Jul. · 27.–29. Jul. · 3.–5. Aug.",
        location: "Tennishalle",
        description:
          "Padel-Kurse für Kinder während der Sommerferien.",
      },
      ferienpass: {
        title: "Ferien(s)pass 2026",
        date: "Während der Sommerferien",
        location: "Verschiedene Orte",
        description:
          "Ferienprogramm mit Workshops, Sport und kreativen Angeboten für Kinder.",
      },
      jaeger: {
        title: "Vormittag mit dem Jäger",
        date: "16. Juli 2026 · 09:00–12:00",
        location: "Marktgemeindeamt Altmünster",
        description:
          "Ferien(s)pass-Veranstaltung — Einblick in heimische Wildtiere und Jagdtradition.",
      },
      seebuehne: {
        title: "Kulturprogramm Seebühne",
        date: "Saisonales Programm",
        location: "Seebühne Altmünster",
        description:
          "Open-Air-Konzerte und Kulturveranstaltungen auf der Seebühne.",
      },
    },
    news: {
      "yoga-see": {
        title: "Sommer-Yoga am See",
        summary:
          "Kostenloses Morgen-Yoga auf der Esplanade mit Blick auf den Traunsee — Matte mitbringen.",
        date: "Ab 25. Juni 2026",
        imageAlt: "Sommer-Yoga am Traunsee",
      },
      dorffest: {
        title: "Dorffest Neukirchen",
        summary:
          "Traditionelles Dorffest in Neukirchen mit Live-Musik, regionaler Küche und Gemeinschaft.",
        date: "11. Juli 2026",
        imageAlt: "Luftaufnahme von Neukirchen bei Altmünster",
      },
      "kids-padel": {
        title: "Kids-Padel-Tennis",
        summary:
          "Padel-Kurse für Kinder — mehrere Termine im Juli und August.",
        date: "21.–23. Jul. · 27.–29. Jul. · 3.–5. Aug.",
        imageAlt: "Kids-Padel in Altmünster",
      },
    },
  },
  footer: {
    tagline:
      "Tourismusführer für Altmünster am Traunsee. Offizielle Informationen der Marktgemeinde auf",
    showContact: "Kontakt & Links",
    explore: "Entdecken",
    municipality: "Gemeinde",
    copyright:
      "Tourismuspräsentation — Details bitte auf altmuenster.at prüfen.",
  },
  theme: {
    toggle: "Design umschalten",
    switchTo: (mode: "light" | "dark") =>
      mode === "dark" ? "Helles Design aktivieren" : "Dunkles Design aktivieren",
  },
};

const en = {
  meta: {
    title: "Altmünster am Traunsee | Salzkammergut Tourism",
    description:
      "Discover Altmünster am Traunsee — a serene lakeside gem in Upper Austria's Salzkammergut. Swimming, hiking, culture, and alpine beauty on Austria's deepest lake.",
  },
  common: {
    chooseLanguage: "Choose language",
    skipToContent: "Skip to content",
    homeAria: "Altmünster am Traunsee — Home",
    officialSite: "Official Site",
    officialSiteShort: "Official German site →",
    openingHours: "Opening hours",
    readMore: "Read more",
    showMore: "Show more",
    showLess: "Show less",
    backToTop: "Back to top",
    country: "Austria",
    regionLine: "Naturpark Attersee-Traunsee · Salzkammergut · Upper Austria",
  },
  nav: {
    main: "Main navigation",
    mobile: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    welcome: "Welcome",
    history: "History",
    map: "Map",
    whatsOn: "What's On",
  },
  hero: {
    region: "Salzkammergut · Upper Austria",
    tagline: "Where the Alps meet the deepest lake in Austria",
    explore: "Explore the Destination",
    history: "Discover the History",
    scrollDown: "Scroll to welcome section",
    imageAlt:
      "Drone view of Lake Traunsee with alpine mountains in Salzkammergut, Austria",
    facts: [
      { value: "191 m", label: "Austria's deepest lake" },
      { value: "45 min", label: "From Linz by train" },
      { value: "79 km²", label: "Protected nature park" },
    ],
  },
  welcome: {
    eyebrow: "Welcome",
    title: "Welcome to Altmünster",
    description:
      "Nestled on the western shore of Lake Traunsee, within the protected landscapes of Naturpark Attersee-Traunsee, Altmünster offers a gentler rhythm of life — where alpine peaks meet crystal waters, and every path leads to wonder. A peaceful alternative to bustling Gmunden, yet close enough to explore the entire Salzkammergut.",
    shortDescription:
      "A serene lakeside gem on the western shore of Traunsee — in the heart of the Salzkammergut.",
    showStats: "Numbers & facts",
    stats: [
      { label: "Residents", sublabel: "Warm community spirit" },
      { label: "Nature Park", sublabel: "Naturpark Attersee-Traunsee" },
      { label: "Hiking Trails", sublabel: "Through alpine forests" },
      { label: "Cycling Paths", sublabel: "Along lake & mountains" },
    ],
  },
  history: {
    eyebrow: "Heritage",
    title: "History & Good to Know",
    description:
      "Altmünster's name recalls its monastic past — today a lakeside market town in one of Austria's most beloved landscapes.",
    shortDescription:
      "From old monastery to lakeside market town — centuries of Salzkammergut heritage.",
    goodToKnow: "Good to know",
    showAll: "Full history",
    highlights: [
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
    ],
    tips: [
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
        detail:
          "Hotels, guesthouses, and restaurants are listed officially by the municipality.",
        linkLabel: "Official accommodation list",
      },
      {
        label: "Events & opening hours",
        detail:
          "The community calendar and town hall hours are always current on the official site.",
        linkLabel: "Event calendar",
      },
    ],
  },
  map: {
    eyebrow: "Orientation",
    title: "Explore the Map",
    description:
      "Browse places on the list or map — hover to zoom, click a marker for photos and directions.",
    shortDescription: "Discover the best spots around the lake.",
    showPlaces: "Show places",
    hidePlaces: "Hide places",
    filters: { all: "All", nature: "Nature", culture: "Culture", practical: "Practical" },
    categories: { nature: "Nature", culture: "Culture", practical: "Practical" },
    legend: {
      nature: "Nature & outdoors",
      culture: "Culture & heritage",
      practical: "Travel & services",
    },
    places: "Places",
    hint: "Hover map to zoom · Click markers for details",
    hintMobile: "Pinch to zoom · Tap markers for details",
    loading: "Loading map…",
    getDirections: "Get directions",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    ariaLabel: "Interactive map of Altmünster am Traunsee",
    markers: {
      promenade: {
        name: "Town Promenade & Pier",
        description:
          "Stroll the lakeside walkway and watch boats drift across Traunsee.",
        walkTime: "5 min from centre",
        imageAlt: "Lakeside promenade on Traunsee",
      },
      solarbad: {
        name: "Solarbad Beach",
        description:
          "Altmünster's beloved bathing area with lawns, swimming, and lake access.",
        walkTime: "8 min from centre",
        imageAlt: "Sunny beach on alpine lake",
      },
      gmundnerberg: {
        name: "Gmundnerberg Viewpoint",
        description:
          "Panoramic trail head with sweeping views over the lake and mountains.",
        walkTime: "25 min uphill",
        imageAlt: "Mountain viewpoint over Lake Traunsee",
      },
      historic: {
        name: "Parish Church Altmünster",
        description:
          "Pfarrkirche Altmünster with its Romanesque tower — a landmark of the historic centre.",
        walkTime: "Town centre",
        imageAlt: "Historic Austrian village church",
      },
      eggerhaus: {
        name: "Eggerhaus",
        description:
          "Faithfully restored traditional farmhouse — a typical old Gehöft dwelling.",
        walkTime: "Town centre",
        imageAlt: "Traditional Austrian farmhouse architecture",
      },
      kalvarienberg: {
        name: "Kalvarienberg Church",
        description:
          "Kalvarienbergkirche overlooking Altmünster — a peaceful cultural landmark.",
        walkTime: "15 min uphill",
        imageAlt: "Historic church on a hillside",
      },
      seebuehne: {
        name: "Seebühne",
        description:
          "Lakeside open-air stage for concerts and cultural events on Traunsee.",
        walkTime: "6 min from centre",
        imageAlt: "Lakeside cultural venue on Traunsee",
      },
      hiking: {
        name: "Hiking Trailheads",
        description: "Access points to Hochlecken and nature park forest trails.",
        walkTime: "10 min from centre",
        imageAlt: "Forest hiking trail in the Alps",
      },
      station: {
        name: "Train Station",
        description:
          "Altmünster/Wörth station — direct connections to Gmunden, Linz, and Vienna.",
        walkTime: "12 min from centre",
        imageAlt: "Regional train at a small alpine station",
      },
      community: {
        name: "Community Centre",
        description: "Events, tourist information, and local gatherings.",
        walkTime: "3 min from centre",
        imageAlt: "Community building in Austrian town",
      },
      cycling: {
        name: "Cycling Path Hub",
        description:
          "Starting point for the 84 km lakeside and mountain cycling network.",
        walkTime: "6 min from centre",
        imageAlt: "Cycling path along an alpine lake",
      },
    },
  },
  whatsOn: {
    eyebrow: "Calendar",
    title: "What's On",
    description:
      "Upcoming events and news from the municipality — full listings always on altmuenster.at.",
    shortDescription: "Events and news from the municipality.",
    showAllEvents: "All events",
    showAllNews: "All news",
    eventsTitle: "Upcoming events",
    newsTitle: "Municipality news",
    fullCalendar: "Full event calendar",
    allNews: "All municipality news",
    events: {
      "yoga-summer": {
        title: "Summer Yoga by the Lake",
        date: "From 25 June 2026",
        location: "Esplanade",
        description:
          "Morning yoga sessions overlooking Traunsee. Bring your mat.",
      },
      dorffest: {
        title: "Dorffest Neukirchen",
        date: "11 July 2026",
        location: "Neukirchen, Altmünster",
        description:
          "Traditional village festival with live music, local food, and community spirit.",
      },
      "kids-padel": {
        title: "Kids Padel Tennis",
        date: "21–23 Jul · 27–29 Jul · 3–5 Aug",
        location: "Tennishalle",
        description: "Summer padel courses for children during the school holidays.",
      },
      ferienpass: {
        title: "Ferien(s)pass 2026",
        date: "Throughout summer holidays",
        location: "Various venues",
        description:
          "Summer holiday programme with workshops, sports, and creative activities for children.",
      },
      jaeger: {
        title: "Morning with the Hunter",
        date: "16 July 2026 · 09:00–12:00",
        location: "Marktgemeindeamt Altmünster",
        description:
          "Ferien(s)pass event — a morning learning about local wildlife and hunting traditions.",
      },
      seebuehne: {
        title: "Seebühne Cultural Programme",
        date: "Seasonal programme",
        location: "Seebühne Altmünster",
        description: "Open-air concerts and cultural events on the lakeside stage.",
      },
    },
    news: {
      "yoga-see": {
        title: "Summer Yoga by the Lake",
        summary:
          "Free morning yoga sessions on the Esplanade overlooking Traunsee — bring your mat.",
        date: "From 25 June 2026",
        imageAlt: "Summer yoga by Lake Traunsee",
      },
      dorffest: {
        title: "Dorffest Neukirchen",
        summary:
          "Traditional village festival in Neukirchen with live music, local food, and community spirit.",
        date: "11 July 2026",
        imageAlt: "Aerial view of Neukirchen near Altmünster",
      },
      "kids-padel": {
        title: "Kids Padel Tennis",
        summary:
          "Summer padel courses for children — multiple sessions in July and August.",
        date: "21–23 Jul · 27–29 Jul · 3–5 Aug",
        imageAlt: "Kids padel tennis in Altmünster",
      },
    },
  },
  footer: {
    tagline:
      "Tourism guide for Altmünster am Traunsee. Official municipal information is published at",
    showContact: "Contact & links",
    explore: "Explore",
    municipality: "Municipality",
    copyright:
      "Tourism presentation — verify details at altmuenster.at.",
  },
  theme: {
    toggle: "Toggle theme",
    switchTo: (mode: "light" | "dark") =>
      `Switch to ${mode === "dark" ? "light" : "dark"} mode`,
  },
};

export const translations: Record<Locale, typeof de> = { de, en: en as typeof de };

export type TranslationKeys = typeof de;
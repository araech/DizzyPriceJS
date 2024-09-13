/* This file is part of DizzyPriceJS
 * Copyright 2024 by Aubrey Raech
 *
 * This program is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 */

// Objects identical to every version
const General = {
    spellbooks: [
        ["dig", "", 20, 500],
        ["magic missile", "", 45, 200],
        ["fireball", "", 20, 400],
        ["cone of cold", "", 10, 400],
        ["finger of death", "", 5, 700],
        ["light", "", 45, 100],
        ["detect monsters", "", 43, 100],
        ["healing", "", 40, 100],
        ["cure blindness", "", 25, 200],
        ["drain life", "", 10, 200],
        ["slow monster", "", 30, 200],
        ["create monster", "", 35, 200],
        ["detect food", "", 30, 200],
        ["cause fear", "", 25, 300],
        ["clairvoyance", "", 15, 300],
        ["cure sickness", "", 32, 300],
        ["haste self", "", 33, 300],
        ["detect unseen", "", 20, 300],
        ["levitation", "", 20, 400],
        ["extra healing", "", 27, 300],
        ["restore ability", "", 25, 400],
        ["detect treasure", "", 20, 400],
        ["remove curse", "", 25, 300],
        ["magic mapping", "", 18, 500],
        ["identify", "", 20, 300],
        ["turn undead", "", 16, 600],
        ["polymorph", "", 10, 600],
        ["teleport away", "", 15, 600],
        ["create familiar", "", 10, 600],
        ["cancellation", "", 15, 700],
        ["protection", "", 18, 100],
        ["jumping", "", 20, 100],
        ["stone to flesh", "", 15, 300]
    ],
    wands: [
        ["light", "", 95, 100],
        ["secret door detection", "", 50, 150],
        ["enlightenment", "", 15, 150],
        ["create monster", "", 45, 200],
        ["wishing", "", 5, 500],
        ["nothing", "", 25, 100],
        ["striking", "", 75, 150],
        ["make invisible", "", 45, 150],
        ["slow monster", "", 50, 150],
        ["speed monster", "", 50, 150],
        ["undead turning", "", 50, 150],
        ["polymorph", "", 45, 200],
        ["cancellation", "", 45, 200],
        ["teleportation", "", 45, 200],
        ["opening", "", 25, 150],
        ["locking", "", 25, 150],
        ["probing", "", 30, 150],
        ["digging", "", 55, 150],
        ["magic missile", "", 50, 150],
        ["fire", "", 40, 175],
        ["cold", "", 40, 175],
        ["sleep", "", 50, 175],
        ["death", "", 5, 500],
        ["lightning", "", 40, 175]
    ],
    potions: [
        ["restore ability", "", 40, 100],
        ["invisibility", "", 40, 150],
        ["gain level", "", 20, 300],
        ["enlightenment", "", 20, 200],
        ["monster detection", "", 40, 150],
        ["full healing", "", 10, 200],
        ["polymorph", "", 10, 200],
        ["acid", "", 10, 250],
        ["oil", "", 30, 250]
    ],
    scrolls: [
        ["enchant armor", "",  63,  80],
        ["destroy armor", "",  45, 100],
        ["confuse monster", "",  53, 100],
        ["scare monster",   "",  35, 100],
        ["remove curse", "",  65,  80],
        ["enchant weapon", "",  80,  60],
        ["create monster", "",  45, 200],
        ["taming", "",  15, 200],
        ["genocide", "",  15, 300],
        ["light", "",  90,  50],
        ["teleportation", "",  55, 100],
        ["gold detection", "",  33, 100],
        ["food detection", "",  25, 100],
        ["identify", "", 180,  20],
        ["magic mapping", "",  45, 100],
        ["amnesia", "",  35, 200],
        ["fire", "",  30, 100],
        ["earth", "",  18, 200],
        ["punishment", "",  15, 300],
        ["charging", "",  15, 300],
        ["stinking cloud", "",  15, 300],
        ["blank paper", "",  28,  60]
    ],
    rings: [
        ["adornment", "", 1, 100],
        ["gain strength", "", 1, 150],
        ["gain constitution", "", 1, 150],
        ["increase accuracy", "", 1, 150],
        ["increase damage", "", 1, 150],
        ["protection", "", 1, 100],
        ["regeneration", "", 1, 200],
        ["searching", "", 1, 200],
        ["stealth", "", 1, 100],
        ["sustain ability", "", 1, 100],
        ["levitation", "", 1, 200],
        ["hunger", "", 1, 100],
        ["aggravate monster", "", 1, 150],
        ["conflict", "", 1, 300],
        ["warning", "", 1, 100],
        ["poison resistance", "", 1, 150],
        ["fire resistance", "", 1, 200],
        ["cold resistance", "", 1, 150],
        ["shock resistance", "", 1, 150],
        ["free action", "", 1, 200],
        ["slow digestion", "", 1, 200],
        ["teleportation", "", 1, 200],
        ["teleport control", "", 1, 300],
        ["polymorph", "", 1, 300],
        ["polymorph control", "", 1, 300],
        ["invisibility", "", 1, 150],
        ["see invisible", "", 1, 150],
        ["protection from shape changers", "", 1, 100]
    ],
    stones: [
        ["luckstone",  "",  10, 60],
        ["loadstone",  "",  10,  1],
        ["touchstone", "",   8, 45],
        ["flint",      "",  10,  1]
    ],
    weapons: [
        ["arrow", "", 55, 2],
        ["elven arrow", "runed arrow", 20, 2],
        ["orcish arrow", "crude arrow", 20, 2],
        ["silver arrow", "", 12, 5],
        ["ya", "bamboo arrow", 15, 4],
        ["crossbow bolt", "", 55, 2],
        ["dart", "", 60,   2],
        ["shuriken", "throwing star", 35,   5],
        ["boomerang", "", 15,  20],
        ["spear", "", 50,   3],
        ["elven spear", "runed spear", 10,   3],
        ["orcish spear", "crude spear", 13,   3],
        ["dwarvish spear", "stout spear", 12,   3],
        ["silver spear", "",  2,  40],
        ["javelin", "throwing spear", 10,   3],
        ["trident", "",  8,   5],
        ["dagger", "", 30,   4],
        ["elven dagger", "runed dagger", 10,   4],
        ["orcish dagger", "crude dagger", 12,   4],
        ["silver dagger", "",  3,  40],
        ["athame", "",  0,   4],
        ["scalpel", "",  0,   6],
        ["knife", "", 20,   4],
        ["stiletto", "",  5,   4],
        ["worm tooth", "",  0,   2],
        ["crysknife", "",  0, 100],
        ["axe", "", 40,   8],
        ["battle-axe", "double-headed axe", 10,  40],
        ["short sword", "",  8,  10],
        ["elven short sword", "runed short sword",  2,  10],
        ["orcish short sword", "crude short sword",  3,  10],
        ["dwarvish short sword", "broad short sword",  2,  10],
        ["scimitar", "curved sword", 15,  15],
        ["silver saber", "",  6,  75],
        ["broadsword", "",  8,  10],
        ["elven broadsword", "runed broadsword",  4,  10],
        ["long sword", "", 50,  15],
        ["two-handed sword", "", 22,  50],
        ["katana", "samurai sword",  4,  80],
        ["tsurugi", "long samurai sword",  0, 500],
        ["runesword", "runed broadsword",  0, 300],
        ["partisan", "vulgar polearm",  5,  10],
        ["ranseur", "hilted polearm",  5,   6],
        ["spetum", "forked polearm",  5,   5],
        ["glaive", "single-edged polearm",  8,   6],
        ["lance", "",  4,  10],
        ["halberd", "angled poleaxe",  8,  10],
        ["bardiche", "long poleaxe",  4,   7],
        ["voulge", "pole cleaver",  4,   5],
        ["dwarvish mattock", "broad pick", 13,  50],
        ["fauchard", "pole sickle",  6,   5],
        ["guisarme", "pruning hook",  6,   5],
        ["bill-guisarme", "hooked polearm",  4,   7],
        ["lucern hammer", "pronged polearm",  5,   7],
        ["bec de corbin", "beaked polearm",  4,   8],
        ["mace", "", 40,   5],
        ["morning star", "", 12,  10],
        ["war hammer", "", 15,   5],
        ["club", "", 12,   3],
        ["rubber hose", "",  0,   3],
        ["quarterstaff", "staff", 11,   5],
        ["aklys", "thonged club",  8,   4],
        ["flail", "", 40,   4],
        ["bullwhip", "",  2,   4],
        ["bow", "", 24, 60],
        ["elven bow", "runed bow", 12, 60],
        ["orcish bow", "crude bow", 12, 60],
        ["yumi", "long bow",  0, 60],
        ["sling", "", 40, 20],
        ["crossbow", "", 45, 40]
    ],
    armor: [
        ["elven leather helm", "leather hat",  6,  8],
        ["orcish helm", "iron skull cap",  6, 10],
        ["dwarvish iron helm", "hard hat",  6, 20],
        ["fedora", "",  0,  1],
        ["cornuthaum", "conical hat",  3, 80],
        ["dunce cap", "conical hat",  3,  1],
        ["dented pot", "",  2,  8],
        // HELMET SHUFFLE = plumed etched crested visored
        ["helmet", "plumed etched crested visored helmet", 10, 10],
        ["helm of opposite alignment", "plumed etched crested visored helmet",  6, 50],
        ["helm of telepathy", "plumed etched crested visored helmet",  2, 50],
        ["plate mail", "", 44, 600],
        ["crystal plate mail", "", 10, 820],
        ["bronze plate mail", "", 25, 400],
        ["splint mail", "", 62,  80],
        ["banded mail", "", 72,  90],
        ["dwarvish mithril-coat", "", 10, 240],
        ["elven mithril-coat", "", 15, 240],
        ["chain mail", "", 72,  75],
        ["orcish chain mail", "crude chain mail", 20,  75],
        ["scale mail", "", 72,  45],
        ["studded leather armor", "", 72,  15],
        ["ring mail", "", 72, 100],
        ["orcish ring mail", "crude ring mail", 20,  80],
        ["leather armor", "", 82,   5],
        ["leather jacket", "", 12,  10],
        ["Hawaiian shirt", "",  8,   3],
        ["T-shirt", "",  2,   2],
        ["mummy wrapping", "",  0,  2],
        ["elven cloak", "faded pall",  8, 60],
        ["orcish cloak", "coarse mantelet",  8, 40],
        ["dwarvish cloak", "hooded cloak",  8, 50],
        ["oilskin cloak", "slippery cloak",  8, 50],
        ["robe", "",  3, 50],
        ["alchemy smock", "apron",  9, 50],
        ["leather cloak", "",  8, 40],
        // CLOAK SHUFFLES = 'tattered cape', 'opera cloak', 'ornamental cope', 'piece of cloth'
        ["cloak of protection", "tattered cape opera cloak ornamental cope piece of cloth",  9, 50],
        ["cloak of invisibility", "tattered cape opera cloak ornamental cope piece of cloth", 10, 60],
        ["cloak of magic resistance", "tattered cape opera cloak ornamental cope piece of cloth",  2, 60],
        ["cloak of displacement", "tattered cape opera cloak ornamental cope piece of cloth", 10, 50],
        ["small shield", "", 6,  3],
        ["elven shield", "blue and green shield", 2,  7],
        ["Uruk-hai shield", "white-handed shield", 2,  7],
        ["orcish shield", "red-eyed shield", 2,  7],
        ["large shield", "", 7, 10],
        ["dwarvish roundshield", "large round shield", 4, 10],
        ["shield of reflection", "polished silver shield", 3, 50],
        // SHUFFLED GLOVES = old padded riding fencing
        ["leather gloves", "old padded riding fencing gloves", 16,  8],
        ["gauntlets of fumbling", "old padded riding fencing gloves",  8, 50],
        ["gauntlets of power", "old padded riding fencing gloves",  8, 50],
        ["gauntlets of dexterity", "old padded riding fencing gloves",  8, 50],
        ["low boots", "walking shoes", 25,  8],
        ["iron shoes", "hard shoes",  7, 16],
        ["high boots", "jackboots", 15, 12],
        // SHUFFLED BOOTS = combat jungle hiking mud buckled riding snow
        ["speed boots", "combat jungle hiking mud buckled riding snow boots", 12, 50],
        ["water walking boots", "combat jungle hiking mud buckled riding snow boots", 12, 50],
        ["jumping boots", "combat jungle hiking mud buckled riding snow boots", 12, 50],
        ["elven boots", "combat jungle hiking mud buckled riding snow boots", 12,  8],
        ["kicking boots", "combat jungle hiking mud buckled riding snow boots", 12,  8],
        ["fumble boots", "combat jungle hiking mud buckled riding snow boots", 12, 30],
        ["levitation boots", "combat jungle hiking mud buckled riding snow boots", 12, 30]
    ]
}

const Items34 = {
    spellbooks: [
        ["sleep", "", 50, 100],
        ["knock", "", 35, 100],
        ["force bolt", "", 35, 100],
        ["confuse monster", "", 30, 200],
        ["wizard lock", "", 30, 200],
        ["charm monster", "", 20, 300],
        ["invisibility", "", 25, 400],
        ...General.spellbooks
    ],
    wands: [
        ...General.wands
    ],
    potions: [
        ["gain ability", "", 42, 300],
        ["confusion", "", 42, 100],
        ["blindness", "", 40, 150],
        ["paralysis", "", 42, 300],
        ["speed", "", 42, 200],
        ["levitation", "", 42, 200],
        ["hallucination", "", 40, 100],
        ["see invisible", "", 42, 50],
        ["healing", "", 57, 100],
        ["extra healing", "", 47, 100],
        ["object detection", "", 42, 150],
        ["gain energy", "", 42, 150],
        ["sleeping", "", 42, 100],
        ["booze", "", 42, 50],
        ["sickness", "", 42, 50],
        ["fruit juice", "", 42, 50],
        ["(un)holy water", "", 92, 100],
        ...General.potions
    ],
    scrolls: [
        ...General.scrolls
    ],
    rings: [
        ...General.rings
    ],
    tools: [
        ["sack", "bag", 35, 2],
        ["oilskin sack", "bag", 5, 100],
        ["bag of holding", "bag", 20, 100],
        ["bag of tricks", "bag", 20, 100],
        ["oil lamp", "lamp", 45, 10],
        ["magic lamp", "lamp", 15, 50],
        ["tin whistle", "whistle", 100, 10],
        ["magic whistle", "whistle", 30, 10],
        ["wooden flute", "flute", 4, 12],
        ["magic flute", "flute", 2, 36],
        ["tooled horn", "horn", 5, 15],
        ["frost horn", "horn", 2, 50],
        ["fire horn", "horn", 2, 50],
        ["horn of plenty", "horn", 2, 50],
        ["wooden harp", "harp", 4, 50],
        ["magic harp", "harp", 2, 50],
        ["leather drum", "drum", 4, 25],
        ["drum of earthquake", "drum", 2, 25]
    ],
    stones: [
        ...General.stones
    ],
    weapons: [
        ...General.weapons
    ],
    armor: [
        ["helm of brilliance", "plumed etched crested visored helmet",  6, 50],
        ...General.armor
    ]
};

const Items36  = {
    spellbooks: [
        ["sleep", "", 50, 100],
        ["knock", "", 35, 100],
        ["force bolt", "", 35, 100],
        ["confuse monster", "", 30, 200],
        ["wizard lock", "", 30, 200],
        ["charm monster", "", 20, 300],
        ["invisibility", "", 25, 400],
        ["blank paper", "", 18, 0],
        ...General.spellbooks
    ],

    wands: [
        ...General.wands
    ],

    potions: [
        ["gain ability", "", 42, 300],
        ["confusion", "", 42, 100],
        ["blindness", "", 40, 150],
        ["paralysis", "", 42, 300],
        ["speed", "", 42, 200],
        ["levitation", "", 42, 200],
        ["hallucination", "", 40, 100],
        ["see invisible", "", 42,  50],
        ["healing", "", 57, 100],
        ["extra healing", "", 47, 100],
        ["object detection", "", 42, 150],
        ["gain energy", "", 42, 150],
        ["sleeping", "", 42, 100],
        ["booze", "", 42,  50],
        ["sickness", "", 42,  50],
        ["fruit juice", "", 42,  50],
        ["(un)holy water", "", 92, 100],
        ...General.potions
    ],

    scrolls: [
        ...General.scrolls
    ],

    rings: [
        ...General.rings
    ],

    tools: [
        ["sack",           "bag", 35,   2],
        ["oilskin sack",   "bag",  5, 100],
        ["bag of holding", "bag", 20, 100],
        ["bag of tricks",  "bag", 20, 100],
        ["tallow candle",   "candle", 20, 10],
        ["wax candle",      "candle",  5, 20],
        ["oil lamp",          "lamp", 45, 10],
        ["magic lamp",        "lamp", 15, 50],
        ["tin whistle",    "whistle",100, 10],
        ["magic whistle",  "whistle", 30, 10],
        ["wooden flute",     "flute",  4, 12],
        ["magic flute",      "flute",  2, 36],
        ["tooled horn",       "horn",  5, 15],
        ["frost horn",        "horn",  2, 50],
        ["fire horn",         "horn",  2, 50],
        ["horn of plenty",    "horn",  2, 50],
        ["wooden harp",       "harp",  4, 50],
        ["magic harp",        "harp",  2, 50],
        ["leather drum",      "drum",  4, 25],
        ["drum of earthquake","drum",  2, 25],
    ],

    stones: [
        ...General.stones
    ],

    weapons: [
        ...General.weapons
    ],

    armor: [
        ["helm of brilliance", "plumed etched crested visored helmet",  6, 50],
        ...General.armor
    ]
};

const Items37 = {
    spellbooks: [
        ["sleep",           "", 30, 300],
        ["knock",           "", 25, 100],
        ["force bolt",      "", 30, 100],
        ["confuse monster", "", 49, 100],
        ["wizard lock",     "", 25, 200],
        ["charm monster",   "", 20, 500],
        ["invisibility",    "", 20, 400],
        ["chain lightning", "", 25, 200],
        ...General.spellbooks
    ],
    wands: [
        ...General.wands
    ],
    potions: [
        ["gain ability",      "", 40, 300],
        ["confusion",         "", 40, 100],
        ["blindness",         "", 30, 150],
        ["paralysis",         "", 40, 300],
        ["speed",             "", 40, 200],
        ["levitation",        "", 40, 200],
        ["hallucination",     "", 30, 100],
        ["see invisible",     "", 40, 50],
        ["healing",           "", 115, 20],
        ["extra healing",     "", 45, 100],
        ["object detection",  "", 40, 150],
        ["gain energy",       "", 40, 150],
        ["sleeping",          "", 40, 100],
        ["booze",             "", 40,  50],
        ["sickness",          "", 40,  50],
        ["fruit juice",       "", 40,  50],
        ["(un)holy water*",    "", 80, 100],
        ...General.potions
    ],
    scrolls: [
        ...General.scrolls
    ],
    rings: [
        ...General.rings
    ],
    tools: [
        ["sack",           "bag", 35,  2],
        ["oilskin sack",   "bag", 5,  100],
        ["bag of holding", "bag", 20,  100],
        ["bag of tricks",  "bag", 20,  100],
        ["oil lamp",          "lamp",  45, 10],
        ["magic lamp",        "lamp",  15, 50],
        ["wooden flute",     "flute",  4, 12],
        ["magic flute",      "flute",  2, 36],
        ["tooled horn",       "horn",  5, 15],
        ["frost horn",        "horn",  2, 50],
        ["fire horn",         "horn",  2, 50],
        ["horn of plenty",    "horn",  2, 50]
    ],
    stones: [
        ...General.stones
    ],
    weapons: [
        ...General.weapons
    ],
    armor: [
        ["helm of brilliance", "crystal helmet", 3, 50],
        ["helm of caution", "plumed etched crested visored helmet", 3, 50],
        ...General.armor
    ]
};

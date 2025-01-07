import { LocationData } from '@/types/locations';

export const locationData: LocationData = {
  austria: {
    name: "Austria",
    legal: {
      status: "legal",
      details: "Legal with age restrictions in some states."
    },
    purchasable: {
      status: true,
      details: "Available through various retail channels with age verification required."
    },
    brands: [],
    popularity: {
      level: "medium",
      details: "Rapidly expanding market with growing consumer interest."
    },
    cities: {}
  },
  slovakia: {
    name: "Slovakia",
    legal: {
      status: "legal",
      details: "Legal with notification requirements for manufacturers and importers."
    },
    purchasable: {
      status: true,
      details: "Available through authorized retailers and specialty stores."
    },
    brands: [],
    popularity: {
      level: "high",
      details: "Rapidly expanding market with strong consumer adoption."
    },
    cities: {}
  },
  united_states: {
    name: "United States",
    legal: {
      status: "legal",
      details: "Nicotine pouches are legal in the United States and regulated by the FDA."
    },
    purchasable: {
      status: true,
      details: "Widely available through tobacco shops, convenience stores, and online retailers."
    },
    brands: ["ZYN", "VELO", "On!", "Rogue", "Juice Head", "FRE", "Sesh", "Lucy", "Zone", "Grizzly"],
    popularity: {
      level: "high",
      details: "Rapidly growing popularity, especially among young adults."
    },
    cities: {}
  },
  sweden: {
    name: "Sweden",
    legal: {
      status: "legal",
      details: "Nicotine pouches are fully legal and widely accepted in Sweden."
    },
    purchasable: {
      status: true,
      details: "Readily available through numerous retailers and specialized stores."
    },
    brands: ["ZYN", "VELO", "Nordic Spirit", "Skruf", "White Fox", "LOOP", "KLINT", "FIX"],
    popularity: {
      level: "high",
      details: "Integral part of Swedish tobacco culture, credited with low smoking rates."
    },
    cities: {}
  },
  united_kingdom: {
    name: "United Kingdom",
    legal: {
      status: "legal",
      details: "Nicotine pouches are legal in the UK and regulated as tobacco-related products."
    },
    purchasable: {
      status: true,
      details: "Widely available through specialized tobacco shops, vape stores, and most highstreet convenience stores."
    },
    brands: ["VELO", "ZYN", "Nordic Spirit", "On!", "LOOP", "Helwit", "XQS", "Skruf", "White Fox", "Avant", "BAOW", "Elf Bar Tacja", "Fumi", "It's", "Klint", "NEAFS", "Siberia", "VID", "UBBS"],
    popularity: {
      level: "medium",
      details: "Gaining popularity as an alternative to traditional tobacco products."
    },
    cities: {
      london: {
        name: "London",
        description: "London offers numerous locations to purchase nicotine pouches, with a growing number of specialized stores and vape shops stocking popular brands.",
        buyingGuide: "Finding nicotine pouches in London is relatively straightforward, with many vape shops and tobacco specialists now stocking a wide range of brands. Central London is well-served, with multiple stores although prices will be expensive in tourist areas. Most shops require ID proving you're over 18, and it's recommended to call ahead to check specific brand availability.",
        locations: [
          {
            title: "News Agents and Supermarkets",
            address: "Most highstreets",
            description: "You can purchase nicotine pouches in most UK supermarkets and highstreet news agents",
            type: "vape_shop",
          }
        ]
      },
      birmingham: {
        name: "Birmingham",
        description: "Birmingham offers numerous locations to purchase nicotine pouches, with a growing number of specialized stores and vape shops stocking popular brands.",
        buyingGuide: "Finding nicotine pouches in Birmingham is relatively straightforward, with many vape shops and tobacco specialists now stocking a wide range of brands. Most shops require ID proving you're over 18, and it's recommended to call ahead to check specific brand availability.",
        locations: [
          {
            title: "News Agents and Supermarkets",
            address: "Most highstreets",
            description: "You can purchase nicotine pouches in most supermarkets and highstreet news agents in Birmingham",
            type: "vape_shop",
          }
        ]
      }
    }
  },
  netherlands: {
    name: "Netherlands",
    legal: {
      status: "illegal",
      details: "Nicotine pouches are banned in the Netherlands."
    },
    purchasable: {
      status: false,
      details: "Not available for purchase due to national ban."
    },
    brands: [],
    popularity: {
      level: "low",
      details: "Low popularity due to ban."
    },
    cities: {}
  },
  germany: {
    name: "Germany",
    legal: {
      status: "illegal",
      details: "Nicotine pouches are banned and classified as unauthorized food products."
    },
    purchasable: {
      status: false,
      details: "Not available for purchase due to classification as unauthorized food."
    },
    brands: [],
    popularity: {
      level: "low",
      details: "Low popularity due to ban."
    },
    cities: {}
  },
  france: {
    name: "France",
    legal: {
      status: "legal",
      details: "Nicotine pouches are still legal although the government has said their intention of banning nicotine pouches."
    },
    purchasable: {
      status: true,
      details: "Available through authorized retailers and specialty stores. Although this might soon change owing to upcoming ban on nicotine pouch products in France."
    },
    brands: ["ZYN", "VELO", "Nordic Spirit"],
    popularity: {
      level: "medium",
      details: "Growing popularity, especially among younger adults."
    },
    cities: {}
  },
  denmark: {
    name: "Denmark",
    legal: {
    status: "legal",
    details: "Nicotine pouches are legal in Denmark, but subject to regulations."
    },
    purchasable: {
    status: true,
    details: "Available through authorized retailers, but with restrictions on advertising and display so often not particularly obvious where to purchase them."
    },
    brands: ["ZYN", "VELO", "Nordic Spirit"],
    popularity: {
    level: "medium",
    details: "Growing popularity, with concerns about youth usage leading to stricter regulations."
    },
    cities: {
      copenhagen: {
        name: "Copenhagen",
        description: "Copenhagen has good availability of nicotine pouches, with various brands found in many locations throughout the city.",
        buyingGuide: "Nicotine pouches are readily available in Copenhagen at convenience stores, kiosks, gas stations, and some tobacco shops. Popular brands like VELO are widely stocked.",
        locations: [
        {
        title: "7-Eleven stores",
        address: "Various locations across Copenhagen",
        description: "Offers a decent selection of nicotine pouches.",
        type: "store"
        },
        {
        title: "Kiosks",
        address: "Throughout Copenhagen",
        description: "Many kiosks stock nicotine pouches, but may need to ask if they provide these products.",
        type: "store"
        },
        {
        title: "Copenhagen Airport",
        address: "Lufthavnsboulevarden 6, 2770 Kastrup",
        description: "7-Eleven in the landside area stocks nicotine pouches.",
        type: "store"
        },
        ]
        },
        
      aarhus: {
        name: "Aarhus",
        description: "Aarhus has decent availability of nicotine pouches, with products found in various kiosks and tobacco stores across the city.",
        buyingGuide: "Nicotine pouches can be found in many kiosks and tobacco stores in Aarhus. Prices may vary, with some stores offering more competitive rates than others.",
        locations: [
        {
        title: "Kiosk 25",
        address: "Stjernepladsen, Aarhus, Denmark",
        description: "Offers a selection of nicotine pouches and snus products.",
        type: "store"
        },
        {
        title: "Langelandsgade Kiosk",
        address: "Langelandsgade, Aarhus, Denmark",
        description: "Stocks various nicotine pouch brands.",
        type: "store"
        },
        {
        title: "Various Kiosks",
        address: "Throughout Aarhus",
        description: "Many kiosks in Aarhus stock nicotine pouches, with prices around 60 kr per pack.",
        type: "store"
        }
        ]
        },
        odense: {
          name: "Odense",
          description: "Odense has limited availability of nicotine pouches, with products found in some local shops and kiosks.",
          buyingGuide: "Nicotine pouches can be found in various kiosks and local shops in Odense. The selection may be limited compared to larger cities, but popular brands are generally available.",
          locations: [
          {
          title: "Local Kiosks",
          address: "Various locations throughout Odense",
          description: "Many kiosks in Odense stock nicotine pouches and chew bags.",
          type: "store"
          },
          {
          title: "Tobacco Shops",
          address: "Various locations in Odense",
          description: "Specialized tobacco shops may offer a wider selection of nicotine pouches.",
          type: "store"
          }
          ]
          }
          }
        },
   
  japan: {
    name: "Japan",
    legal: {
      status: "restricted",
      details: "Legal with some restrictions, regulated under pharmaceutical guidelines."
    },
    purchasable: {
      status: true,
      details: "Available through select retailers, with VELO being the primary brand."
    },
    brands: ["VELO"],
    popularity: {
      level: "medium",
      details: "Growing popularity, especially among younger consumers."
    },
    cities: {
      tokyo: {
        name: "Tokyo",
        description: "Tokyo has slightly limited availability of nicotine pouches, however many convenience stores and tobacco shops carrying products.",
        buyingGuide: "Nicotine pouches are readily available in Tokyo. VELO can be found in most Family Mart stores. Specialized tobacco shops, convenience stores, and Ploom Stations also stock various brands. Online purchasing is also an option, with websites offering a wide range of products.",
        locations: [
          {
          title: "Family Mart (Various Locations)",
          address: "Multiple locations across Tokyo",
          description: "Carries VELO nicotine pouches.",
          type: "store"
          }
        ]
      },
      osaka: {
name: "Osaka",
description: "Osaka, does not have particularly good availability of nicotine pouches in stores and tobacco shops although can be found in in some specialised stores.",
buyingGuide: "Nicotine pouches can be found in Osaka although only within niche shops. Products are not usually found within mainstream conveniance stores.",
locations: [
{
title: "Shikō",
address: "1 Chome-2-1 Namba, Chuo Ward, Osaka, 542-0076, Japan",
description: "Carries VELO nicotine pouches.",
type: "store"
}
]
}
    }
  },
  poland: {
    name: "Poland",
    legal: {
      status: "legal",
      details: "Nicotine pouches are legal and regulated in Poland."
    },
    purchasable: {
      status: true,
      details: "Widely available through various retail channels."
    },
    brands: ["ZYN", "VELO", "LOOP", "White Fox", "Skruf"],
    popularity: {
      level: "high",
      details: "Rapidly expanding market with strong consumer adoption."
    },
    cities: {}
  },
  czech_republic: {
    name: "Czech Republic",
    legal: {
      status: "legal",
      details: "Nicotine pouches are legal and regulated in the Czech Republic."
    },
    purchasable: {
      status: true,
      details: "Widely available through various retail channels."
    },
    brands: ["Velo", "Dope", "Snatch", "Kurwa", "Aroma King", "Lyft", "ZYN", "Skruf", "Extreme", "Killa", "XQS", "FEDRS", "77", "GRITT", "ACE"],
    popularity: {
      level: "high",
      details: "Rapidly expanding market with an anticipated 15% surge in usage in 2023 compared to the previous year."
    },
    cities: {}
  },
  italy: {
    name: "Italy",
    legal: {
      status: "legal",
      details: "Legal and taxed since January 1, 2023."
    },
    purchasable: {
      status: true,
      details: "Nicotine pouches can sometimes be found in Tobacco Shops (Tabaccai) although availability is inconsistent."
    },
    brands: ["VELO"],
    popularity: {
      level: "medium",
      details: "Growing popularity with increasing consumer adoption."
    },
    cities: {
      "rome": {
        "name": "Rome",
        "description": "Rome has limited availability of nicotine pouches, but they can be found in some specialized tobacco shops and through online retailers.",
        "buyingGuide": "While nicotine pouches are not widely available in physical stores in Rome, some tobacco shops (tabaccherie) may stock them. It's advisable to ask for 'nicotine pouches' or 'tobacco-free snus' when inquiring. Online ordering remains the most reliable option for a wider variety of products, with several websites offering delivery to Rome.",
        "locations": [
          {
            "title": "Tabaccheria Centrale",
            "address": "Via del Corso, Rome, Italy",
            "description": "Central tobacco shop that occasionally stocks nicotine pouches, including VELO brand.",
            "type": "store"
          },
          {
            "title": "Tabbachi e Souvenirs",
            "address": "Via Nazionale, Rome, Italy",
            "description": "Tobacco and souvenir shop that may carry a limited selection of nicotine pouches.",
            "type": "store"
          }
        ]
      },
      "milan": {
        "name": "Milan",
        "description": "Milan has slightly better availability of nicotine pouches compared to other Italian cities, but options are still limited. Some tobacco shops and specialized stores carry these products.",
        "buyingGuide": "While nicotine pouches are not widely available in physical stores in Milan, some tobacco shops (tabaccherie) may stock them. It's advisable to ask for 'nicotine pouches' or 'tobacco-free snus' when inquiring. Online ordering remains the most reliable option for a wider variety of products.",
        "locations": [
          {
            "title": "Tabaccheria Centrale",
            "address": "Piazza del Duomo, Milan, Italy",
            "description": "Central tobacco shop that occasionally stocks nicotine pouches, including VELO brand.",
            "type": "store"
          },
          {
            "title": "Tabaccheria Piola",
            "address": "Piazzale Gabrio Piola 12, 20131 Milan, Italy",
            "description": "Tobacco shop that occasionally stocks nicotine pouches.",
            "type": "store"
          }
        ]
      },
      "florence": {
        "name": "Florence",
        "description": "Florence has limited availability of nicotine pouches, with only a few specialized shops carrying these products.",
        "buyingGuide": "Finding nicotine pouches in Florence can be challenging. Some specialized tobacco shops may stock them, but availability is inconsistent. Asking for 'tobacco-free snus' or 'nicotine pouches' in English might help. Online ordering remains the most reliable option.",
        "locations": [
          {
            "title": "Castellana",
            "address": "Via dei Servi, Florence, Italy",
            "description": "Specialized tobacco shop known to carry various tobacco products, including some nicotine pouches.",
            "type": "store"
          }
        ]
      }
    }
  }
};
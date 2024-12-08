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
      details: "Widely available through specialized tobacco shops, vape stores, and some convenience stores."
    },
    brands: ["VELO", "ZYN", "Nordic Spirit", "On!", "LOOP", "Helwit", "XQS", "Skruf", "White Fox", "Avant", "BAOW", "Elf Bar Tacja", "Fumi", "It's", "Klint", "NEAFS", "Siberia", "VID", "ZONE X", "UBBS"],
    popularity: {
      level: "medium",
      details: "Gaining popularity as an alternative to traditional tobacco products."
    },
    cities: {
      london: {
        name: "London",
        description: "London offers numerous locations to purchase nicotine pouches, with a growing number of specialized stores and vape shops stocking popular brands.",
        buyingGuide: "Finding nicotine pouches in London is relatively straightforward, with many vape shops and tobacco specialists now stocking a wide range of brands. The Soho and Shoreditch areas are particularly well-served, with multiple stores offering competitive prices and knowledgeable staff. Most shops require ID proving you're over 18, and it's recommended to call ahead to check specific brand availability.",
        locations: [
          {
            title: "Tobacco Dock Vapes",
            address: "Unit 4, Tobacco Dock, Wapping Lane, London E1W 2SF",
            description: "Large selection of nicotine pouches and knowledgeable staff.",
            type: "vape_shop",
            website: "https://tobaccodockvapes.co.uk",
            phone: "+44 20 7123 4567",
            hours: "Mon-Sat: 10:00-19:00, Sun: 11:00-17:00"
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
      details: "Nicotine pouches are legal and regulated in France."
    },
    purchasable: {
      status: true,
      details: "Available through authorized retailers and specialty stores."
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
      details: "Nicotine pouches are legal in Denmark."
    },
    purchasable: {
      status: true,
      details: "Available through various retail channels."
    },
    brands: ["Ace", "ZYN", "VELO", "Nordic Spirit"],
    popularity: {
      level: "medium",
      details: "Increasing popularity as a smoking alternative."
    },
    cities: {}
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
      details: "Available through authorized retailers."
    },
    brands: ["Redmuule", "VELO", "LYFT", "ZYN", "KILLA", "Pablo", "White Fox"],
    popularity: {
      level: "medium",
      details: "Growing popularity with increasing consumer adoption."
    },
    cities: {}
  }
};
/**
 * The 1916 Company - Coast to Coast Tour
 * Event Data
 *
 * To add/update events, modify the events array below.
 * Images should be hosted on Cloudinary.
 */

const tourData = {
  // Site metadata
  meta: {
    title: "Coast to Coast Tour",
    tagline: "A Celebration of Rolex Certified Pre-Owned Watches",
    description: "Experience a curated selection of more than 100 collectible Rolex Certified Pre-Owned watches, including beloved discontinued models, distinctive stone dials, gem-set cases, unique configurations, and more."
  },

  // Tour events
  events: [
    {
      id: "denver-2026",
      location: "Denver",
      venue: "Location TBD",
      address: "Denver, CO",
      dates: {
        start: "2026-04-16",
        end: "2026-04-18"
      },
      status: "upcoming",
      description: "Join us in Denver for our next Coast to Coast Tour stop. Experience over 100 Rolex Certified Pre-Owned timepieces, meet our expert team, and discover your next collectible watch.",
      highlights: [
        "Guided tours with Tim Mosso",
        "Expert consultations with Mike Manjos",
        "Trade-in evaluations",
        "Private appointment availability"
      ],
      heroImage: "https://strapi-five.imgix.net/page-maker/Denver_fd8e24d2a8.jpg?w=1920&auto=format,compress",
      thumbnailImage: "https://strapi-five.imgix.net/page-maker/Denver_fd8e24d2a8.jpg?w=800&auto=format,compress",
      registerUrl: "https://www.the1916company.com/about-us/coast-to-coast-tour/",
      gallery: []
    },
    {
      id: "manhattan-beach-2026",
      location: "Manhattan Beach",
      venue: "The 1916 Company Manhattan Beach",
      address: "Manhattan Beach, CA",
      dates: {
        start: "2026-03-24",
        end: "2026-03-26"
      },
      status: "upcoming",
      description: "Join us in Manhattan Beach for an exclusive Coast to Coast Tour experience on the California coast. Experience over 100 Rolex Certified Pre-Owned timepieces.",
      highlights: [
        "West Coast location",
        "Curated Rolex CPO selection",
        "Expert consultations",
        "Private appointments available"
      ],
      heroImage: "https://watchbox-sfcc.imgix.net/locations/202501_ManhattanBeach_ComingSoonv2.png?w=1920&auto=format,compress",
      thumbnailImage: "https://watchbox-sfcc.imgix.net/locations/202501_ManhattanBeach_ComingSoonv2.png?w=800&auto=format,compress",
      registerUrl: "https://www.the1916company.com/about-us/coast-to-coast-tour/",
      gallery: []
    },
    {
      id: "philadelphia-dec-2025",
      location: "Philadelphia",
      venue: "The 1916 Company Philadelphia",
      address: "1616 Walnut Street, Philadelphia, PA",
      dates: {
        start: "2025-12-11",
        end: "2025-12-13"
      },
      status: "completed",
      description: "Our Philadelphia event brought together watch enthusiasts and collectors for an unforgettable experience. Guests explored our curated selection of Rolex Certified Pre-Owned timepieces.",
      highlights: [
        "Over 100 Rolex CPO watches on display",
        "Exclusive discontinued models",
        "One-on-one consultations",
        "Trade-in opportunities"
      ],
      heroImage: "https://strapi-five.imgix.net/page-maker/Philadelphia_v2_c794e80d68.jpg?w=1920&auto=format,compress",
      thumbnailImage: "https://strapi-five.imgix.net/page-maker/Philadelphia_v2_c794e80d68.jpg?w=800&auto=format,compress",
      gallery: [
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Gallery+Image+1",
          caption: "Guests exploring the collection"
        },
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Gallery+Image+2",
          caption: "Rolex CPO display"
        },
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Gallery+Image+3",
          caption: "Expert consultation"
        }
      ]
    },
    {
      id: "ardmore-nov-2025",
      location: "Ardmore",
      venue: "The 1916 Company Ardmore",
      address: "Ardmore, PA",
      dates: {
        start: "2025-11-13",
        end: "2025-11-15"
      },
      status: "completed",
      description: "The Ardmore stop of our Coast to Coast Tour welcomed collectors to experience our exceptional selection of Rolex Certified Pre-Owned watches in an intimate setting.",
      highlights: [
        "Curated Rolex CPO selection",
        "Meet the expert team",
        "Private viewings available",
        "Watch trade-in evaluations"
      ],
      heroImage: "https://strapi-five.imgix.net/page-maker/Ardmore_PA_cd8c4ddb34.jpg?w=1920&auto=format,compress",
      thumbnailImage: "https://strapi-five.imgix.net/page-maker/Ardmore_PA_cd8c4ddb34.jpg?w=800&auto=format,compress",
      gallery: [
        {
          url: "https://res.cloudinary.com/dtuhrunyd/image/upload/v1765825040/Events/Ardmore/11.14.2025%20%7C%20Ardmore%20RCPO%20event/2025_11_14_Ardmore_Rolex_CPO_Event_01.jpg",
          caption: "Ardmore RCPO Event"
        },
        {
          url: "https://res.cloudinary.com/dtuhrunyd/image/upload/v1765825061/Events/Ardmore/11.14.2025%20%7C%20Ardmore%20RCPO%20event/2025_11_14_Ardmore_Rolex_CPO_Event_15.jpg",
          caption: "Event atmosphere"
        },
        {
          url: "https://res.cloudinary.com/dtuhrunyd/image/upload/v1765825073/Events/Ardmore/11.14.2025%20%7C%20Ardmore%20RCPO%20event/2025_11_14_Ardmore_Rolex_CPO_Event_26.jpg",
          caption: "Rolex CPO collection"
        },
        {
          url: "https://res.cloudinary.com/dtuhrunyd/image/upload/v1765825091/Events/Ardmore/11.14.2025%20%7C%20Ardmore%20RCPO%20event/2025_11_14_Ardmore_Rolex_CPO_Event_36.jpg",
          caption: "Watch showcase"
        },
        {
          url: "https://res.cloudinary.com/dtuhrunyd/image/upload/v1765825095/Events/Ardmore/11.14.2025%20%7C%20Ardmore%20RCPO%20event/2025_11_14_Ardmore_Rolex_CPO_Event_39.jpg",
          caption: "Guest experience"
        }
      ]
    },
    {
      id: "newport-beach-nov-2025",
      location: "Newport Beach",
      venue: "Fashion Island",
      address: "Newport Beach, CA",
      dates: {
        start: "2025-11-06",
        end: "2025-11-08"
      },
      status: "completed",
      description: "Our Newport Beach event at Fashion Island brought the Coast to Coast Tour to Southern California, featuring an exceptional array of Rolex Certified Pre-Owned timepieces.",
      highlights: [
        "West Coast debut",
        "Rare and discontinued models",
        "Expert-led tours",
        "Complimentary consultations"
      ],
      heroImage: "https://strapi-five.imgix.net/page-maker/Newport_Beach_v2_65cb968333.jpg?w=1920&auto=format,compress",
      thumbnailImage: "https://strapi-five.imgix.net/page-maker/Newport_Beach_v2_65cb968333.jpg?w=800&auto=format,compress",
      gallery: [
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Newport+Gallery+1",
          caption: "Fashion Island venue"
        },
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Newport+Gallery+2",
          caption: "Collection highlights"
        }
      ]
    },
    {
      id: "scottsdale-oct-2025",
      location: "Scottsdale",
      venue: "Scottsdale Location",
      address: "Scottsdale, AZ",
      dates: {
        start: "2025-10-22",
        end: "2025-10-23"
      },
      status: "completed",
      description: "The Scottsdale tour stop brought our curated collection of Rolex Certified Pre-Owned watches to Arizona's premier luxury destination.",
      highlights: [
        "Southwest premiere",
        "100+ Rolex CPO pieces",
        "Personalized service",
        "Trade-in opportunities"
      ],
      heroImage: "https://strapi-five.imgix.net/page-maker/Scottsdale_d9906bbfca.jpg?w=1920&auto=format,compress",
      thumbnailImage: "https://strapi-five.imgix.net/page-maker/Scottsdale_d9906bbfca.jpg?w=800&auto=format,compress",
      gallery: [
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Scottsdale+Gallery+1",
          caption: "Arizona event"
        }
      ]
    },
    {
      id: "baltimore-sep-2025",
      location: "Baltimore",
      venue: "The 1916 Company Baltimore",
      address: "Baltimore, MD",
      dates: {
        start: "2025-09-18",
        end: "2025-09-20"
      },
      status: "completed",
      description: "The inaugural Coast to Coast Tour event in Baltimore set the standard for our traveling exhibition of Rolex Certified Pre-Owned watches.",
      highlights: [
        "Tour launch event",
        "First look at the collection",
        "Tim Mosso guided tours",
        "Mike Manjos consultations"
      ],
      heroImage: "https://strapi-five.imgix.net/page-maker/Baltimore_4c93acb4dc.jpg?w=1920&auto=format,compress",
      thumbnailImage: "https://strapi-five.imgix.net/page-maker/Baltimore_4c93acb4dc.jpg?w=800&auto=format,compress",
      gallery: [
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Baltimore+Gallery+1",
          caption: "Tour launch"
        },
        {
          url: "https://via.placeholder.com/1200x800/dfddd2/000000?text=Baltimore+Gallery+2",
          caption: "Grand opening"
        }
      ]
    }
  ],

  // Team members featured in the tour
  team: [
    {
      name: "Tim Mosso",
      role: "Guided Tour Host",
      description: "Tim leads engaging guided tours through our collection, sharing insights on each timepiece's history and significance.",
      image: "https://res.cloudinary.com/dtuhrunyd/image/upload/c_fill,g_face,w_400,h_400,q_auto:best/v1643056387/00_Headshots/Show%20Talent/Tim/Tim_Headshots-37.jpg"
    },
    {
      name: "Mike Manjos",
      role: "Pre-Owned Watch Expert",
      description: "Mike offers personalized consultations, helping collectors find the perfect addition to their collection.",
      image: "https://res.cloudinary.com/dtuhrunyd/image/upload/c_fill,g_face,w_400,h_400,q_auto:best/v1643057354/00_Headshots/Sales/Mike%20Manjos/Manjos_Color-17.jpg"
    }
  ],

  // External links to The 1916 Company website
  links: {
    cpoInventory: "https://www.the1916company.com/rolex-certified-pre-owned/our-selection",
    cpoProgram: "https://www.the1916company.com/rolex-certified-pre-owned/program",
    tradeIn: "https://www.the1916company.com/sell-and-trade/",
    mainSite: "https://www.the1916company.com/",
    tourPage: "https://www.the1916company.com/about-us/coast-to-coast-tour/"
  },

  // Experience highlights shown on the about page
  experience: [
    {
      title: "Guided Tours",
      description: "Join Tim Mosso for an intimate guided tour through our collection of over 100 Rolex Certified Pre-Owned watches."
    },
    {
      title: "Expert Consultations",
      description: "Schedule a one-on-one consultation with Mike Manjos, our pre-owned watch specialist, to discuss your collecting goals."
    },
    {
      title: "Trade-In Evaluations",
      description: "Bring your current timepiece for a complimentary evaluation and discover trade-in opportunities."
    },
    {
      title: "Private Appointments",
      description: "Request a private viewing of specific pieces from our collection for an exclusive experience."
    }
  ]
};

// Utility functions for working with event data
const TourUtils = {
  /**
   * Get all events
   */
  getAllEvents() {
    return tourData.events;
  },

  /**
   * Get upcoming events only
   */
  getUpcomingEvents() {
    return tourData.events.filter(event => event.status === 'upcoming');
  },

  /**
   * Get past/completed events only
   */
  getPastEvents() {
    return tourData.events.filter(event => event.status === 'completed');
  },

  /**
   * Get a single event by ID
   */
  getEventById(id) {
    return tourData.events.find(event => event.id === id);
  },

  /**
   * Format date range for display
   */
  formatDateRange(dates) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const start = new Date(dates.start);
    const end = new Date(dates.end);

    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}-${end.getDate()}, ${end.getFullYear()}`;
    }

    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
  },

  /**
   * Get the next upcoming event
   */
  getNextEvent() {
    const upcoming = this.getUpcomingEvents();
    if (upcoming.length === 0) return null;

    return upcoming.sort((a, b) => new Date(a.dates.start) - new Date(b.dates.start))[0];
  },

  /**
   * Get all gallery images across all events
   */
  getAllGalleryImages() {
    const images = [];
    tourData.events.forEach(event => {
      if (event.gallery && event.gallery.length > 0) {
        event.gallery.forEach(img => {
          images.push({
            ...img,
            eventId: event.id,
            eventLocation: event.location
          });
        });
      }
    });
    return images;
  }
};

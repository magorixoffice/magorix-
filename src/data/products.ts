/** Magorix product lineup — used on home and /products. */

export type ProductEntry = {
  id: string;
  name: string;
  /** One line for /products hero card — emphasizes it as its own product */
  heroIntro: string;
  /** Shorter blurb for homepage */
  teaser: string;
  /** Full description on /products */
  description: string;
  status: string;
  exploreLabel: string;
  exploreHref: string;
  exploreExternal: boolean;
};

export const PRODUCTS: ProductEntry[] = [
  {
    id: "wise-student",
    name: "Wise Student",
    heroIntro:
      "A standalone financial-literacy product for India's schools, students, and families—not a module inside something else.",
    teaser:
      "Wise Student isn't just an app. It's a movement to build a healthier, financially smarter generation—starting from the students who need it the most.",
    description:
      "Wise Student isn't just an app. It's a movement to build a healthier, financially smarter generation—starting from the students who need it the most.",
    status: "Private beta",
    exploreLabel: "Explore the product",
    exploreHref: "https://www.wisestudent.org/",
    exploreExternal: true,
  },
  {
    id: "inavora",
    name: "Inavora",
    heroIntro:
      "A standalone interactive presentation platform for live sessions—real-time slides and audience responses, built for presenters.",
    teaser:
      "Real-time interactive presentations—like Mentimeter—with live audience responses. Built for presenters who want engagement, not noise.",
    description:
      "Inavora is a real-time interactive presentation platform similar to Mentimeter, built with React, Node.js, Socket.IO, and MongoDB. It enables presenters to create engaging presentations with various interactive slide types and collect real-time audience responses.",
    status: "Available",
    exploreLabel: "Explore the product",
    exploreHref: "https://www.inavora.com/",
    exploreExternal: true,
  },
];

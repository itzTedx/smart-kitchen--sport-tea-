import { Route } from "next";

// Helper function to create step objects
const createStep = (stepNumber: number, description: string) => ({
  title: `Step ${stepNumber}`,
  description,
});

// Helper function to create FAQ objects
const createFAQ = (id: string, title: string, content: string) => ({
  id,
  title,
  content,
});

// Helper function to create footer section objects
const createFooterSection = (heading: string) => ({
  heading,
});

// Helper function to create navigation menu items
const createNavItem = (label: string, href?: Route) => ({
  label,
  href: href ?? null,
});

export const BREWING_STEPS = [
  createStep(1, "Boil 240 ml of fresh water"),
  createStep(2, "Add 1 teaspoon of Smart Kitchen"),
  createStep(3, "Cover and steep for 2–3 minutes"),
  createStep(4, "Inhale aroma, add milk/sugar if desired"),
  createStep(5, "Sip hot or pour over ice"),
];

export const FAQS = [
  createFAQ(
    "01",
    "What is the best way to brew Smart Kitchen?",
    "The best way to brew Smart Kitchen is to boil 240 ml of fresh water, add 1 teaspoon of Smart Kitchen, cover and steep for 2–3 minutes, inhale aroma, add milk/sugar if desired, and sip hot or pour over ice."
  ),
  createFAQ("02", "Are your teas organic?", "Yes, all our teas are 100% certified organic and pesticide-free."),
  createFAQ("03", "Do you ship across India?", "Yes, we offer nationwide delivery. Orders over ₹500 ship free."),
  createFAQ("04", "Do you offer bulk or wholesale options?", "Absolutely! Please contact us for special pricing."),
  createFAQ("05", "Can I brew it with milk?", "Yes — our teas taste great with or without milk."),
];

export const FOOTER = [createFooterSection("Products")];

export const NAV_LINKS = [
  createNavItem("Products", "/products"),
  createNavItem("About", "/#about"),
  createNavItem("Contact", "/contact"),
];

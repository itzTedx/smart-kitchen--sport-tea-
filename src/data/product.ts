export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  unit: string;
  overview: string;
  benefits: Array<{
    id: number;
    title: string;
  }>;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Black Tea",
    image: "/images/products/tea-box.png",
    price: 349,
    unit: "100g",
    overview: `Grown in high-altitude, pesticide-free soil and harvested at peak bloom, our Chamomile Calm Tea is a gentle blend crafted for your moments of rest. Known for its natural calming properties, this brew helps ease stress, support better sleep, and reduce digestive discomfort — all without making you drowsy during the day.
    
    Whether it’s your post-lunch wind-down or your bedtime brew, this cup does more than comfort — it restores.`,

    benefits: [
      {
        id: 1,
        title: "Naturally calming, caffeine-free",
      },
      {
        id: 2,
        title: "Supports restful sleep and relaxation",
      },
      {
        id: 3,
        title: "Organically grown and hand-picked",
      },
      {
        id: 4,
        title: "Lab-tested for purity and safety",
      },
    ],
  },
  {
    id: 2,
    title: "Premium Strong Black Tea",
    image: "/images/products/tea-1.png",
    price: 349,
    unit: "100g",
    overview: `Grown in high-altitude, pesticide-free soil and harvested at peak bloom, our Chamomile Calm Tea is a gentle blend crafted for your moments of rest. Known for its natural calming properties, this brew helps ease stress, support better sleep, and reduce digestive discomfort — all without making you drowsy during the day.
    
    Whether it’s your post-lunch wind-down or your bedtime brew, this cup does more than comfort — it restores.`,

    benefits: [
      {
        id: 1,
        title: "Naturally calming, caffeine-free",
      },
      {
        id: 2,
        title: "Supports restful sleep and relaxation",
      },
      {
        id: 3,
        title: "Organically grown and hand-picked",
      },
      {
        id: 4,
        title: "Lab-tested for purity and safety",
      },
    ],
  },
  {
    id: 3,
    title: "Premium Green Tea",
    image: "/images/products/tea-2.png",
    price: 349,
    unit: "100g",
    overview: `Grown in high-altitude, pesticide-free soil and harvested at peak bloom, our Chamomile Calm Tea is a gentle blend crafted for your moments of rest. Known for its natural calming properties, this brew helps ease stress, support better sleep, and reduce digestive discomfort — all without making you drowsy during the day.
    
    Whether it’s your post-lunch wind-down or your bedtime brew, this cup does more than comfort — it restores.`,

    benefits: [
      {
        id: 1,
        title: "Naturally calming, caffeine-free",
      },
      {
        id: 2,
        title: "Supports restful sleep and relaxation",
      },
      {
        id: 3,
        title: "Organically grown and hand-picked",
      },
      {
        id: 4,
        title: "Lab-tested for purity and safety",
      },
    ],
  },
];

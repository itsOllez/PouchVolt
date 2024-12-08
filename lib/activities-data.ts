import { Activity } from '@/types/activities';

export const activities: Record<string, Activity> = {
  running: {
    slug: "running",
    title: "Can You Use Nicotine Pouches While Running?",
    description: "Learn about the safety and considerations of using nicotine pouches while running.",
    safety: "Caution",
    heroImage: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571",
    content: `
# Using Nicotine Pouches While Running

While it's technically possible to use nicotine pouches while running, there are several factors to consider...

## Impact on Performance

Nicotine can affect your heart rate and blood pressure...

## Safety Considerations

When exercising, it's important to...
    `,
    genericWarning: "Exercise increases heart rate and blood pressure. Since nicotine also affects these factors, use caution when combining nicotine pouches with running. Consider reducing nicotine strength or avoiding usage during intense exercise."
  },
  swimming: {
    slug: "swimming",
    title: "Can You Use Nicotine Pouches While Swimming?",
    description: "Understanding the risks and safety concerns of using nicotine pouches while swimming.",
    safety: "Warning",
    heroImage: "https://images.unsplash.com/photo-1519315901367-f34ff9154487",
    genericWarning: "Swimming with nicotine pouches is not recommended. There's a risk of swallowing the pouch while swimming, and the activity requires full attention to safety. Additionally, pool chemicals could interact with the pouch material."
  },
  driving: {
    slug: "driving",
    title: "Can You Use Nicotine Pouches While Driving?",
    description: "Guidelines and safety information about using nicotine pouches while driving.",
    safety: "OK",
    heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    genericWarning: "Using nicotine pouches while driving is generally safe, but always ensure you're alert and focused on the road. If you're new to nicotine pouches, test your tolerance in a stationary setting first."
  }
};
export type AchievementIcon = 'trophy' | 'rocket' | 'code' | 'zap'

export type Achievement = {
  year: string
  category: string
  title: string
  body: string
  icon: AchievementIcon
}

export const achievements: Achievement[] = [
  {
    year: '2026',
    category: 'Recognition',
    title: 'Best Research Paper Award',
    body: 'Recognized for the Diabetic Care study on Fuzzy C-Means wound segmentation and measurable healing progress.',
    icon: 'trophy',
  },
  {
    year: '2026',
    category: 'Milestone',
    title: 'Production Deliveries',
    body: 'Delivered Dewandra Grup, Dewandra Stok, and Diabetic Care end to end within one semester.',
    icon: 'rocket',
  },
  {
    year: '2026',
    category: 'Technical',
    title: 'Production Code Contributions',
    body: 'Built multi-store commerce and inventory systems with TanStack Start, PostgreSQL, Drizzle, and Better Auth.',
    icon: 'code',
  },
  {
    year: '2025',
    category: 'Innovation',
    title: 'ML Wound Segmentation',
    body: 'Developed a Fuzzy C-Means pipeline with ROI cropping, HSV features, and repeatable area estimates for clinical review.',
    icon: 'zap',
  },
]

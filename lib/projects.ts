export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  index: string
  title: string
  category: string
  year: string
  role: string
  description: string
  problem: string
  approach: string
  outcome: string
  features: string[]
  stack: string[]
  cover: ProjectImage
  gallery: ProjectImage
  repoUrl: string
  note?: string
}

export const projects: Project[] = [
  {
    slug: 'dewandra-grup',
    index: '01',
    title: 'Dewandra Grup',
    category: 'Commerce / Multi-store Retail',
    year: '2026',
    role: 'Solo Full-Stack Developer',
    description:
      'A five-store retail platform that unifies catalog, orders, cashier, inventory, and owner reporting.',
    problem:
      'One owner ran five stores with separate catalogs, manual stock checks, and no shared view of revenue or incoming orders. Cashiers and the owner needed different levels of access without duplicating data.',
    approach:
      'Built a TanStack Start application with typed server routes, PostgreSQL, and Drizzle. Better Auth sessions enforce owner and cashier permissions per store, while shared catalog and transaction services keep stock and reporting consistent.',
    outcome:
      'One operational hub for all five stores: a public catalog and order tracking, a cashier flow, and an owner dashboard with revenue, stock value, and performance across locations.',
    features: [
      'Public catalog with search, store filters, checkout, and order tracking',
      'Cashier sales, receipts, payment status, and safe cancellation',
      'Owner dashboard for revenue, stock value, and trends across stores',
      'Role-based access for owner and cashier accounts',
      'Docker-backed PostgreSQL setup with Playwright checks',
    ],
    stack: ['TanStack Start', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Better Auth', 'Tailwind CSS'],
    cover: {
      src: '/images/projects/dewandra-grup-cover.webp',
      alt: 'Dewandra Grup public homepage with five store categories and store list',
    },
    gallery: {
      src: '/images/projects/dewandra-grup-dashboard.webp',
      alt: 'Dewandra Grup owner dashboard showing sales, purchases, stock value, and per-store performance',
    },
    repoUrl: 'https://github.com/amarzikra/Dewandra-Grup',
  },
  {
    slug: 'diabetic-care',
    index: '02',
    title: 'Diabetic Care',
    category: 'Healthcare / Computer Vision',
    year: '2026',
    role: 'Solo Full-Stack Developer',
    description:
      'A clinical research app that segments diabetic foot ulcers and tracks wound measurements over time.',
    problem:
      'Manual wound-area measurement is subjective and inconsistent between observers. Clinicians need a repeatable way to compare healing progress without losing the original image or patient context.',
    approach:
      'Implemented a Fuzzy C-Means pipeline over HSV features with ROI cropping, 512×512 normalization, filtering, and morphology. A React and FastAPI workspace stores exams, estimates area from a 1×1 cm reference, and evaluates masks with DSC, IoU, and pixel accuracy.',
    outcome:
      'A reproducible research workflow that turns wound photos into segment masks, area estimates, and comparable exam history. Patient identifiers are anonymized in the public screenshots; the repo documents the method and interface.',
    features: [
      'Drag-and-drop wound image upload with ROI cropping',
      'Median and Gaussian filtering with RGB to HSV preprocessing',
      'Fuzzy C-Means segmentation with tissue composition review',
      'Area estimates from a 1×1 cm calibration reference',
      'Patient records, exam history, and Excel or PDF exports',
      'DSC, IoU, and pixel-accuracy evaluation against manual masks',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'OpenCV', 'Fuzzy C-Means'],
    cover: {
      src: '/images/projects/diabetic-care-cover.webp',
      alt: 'Diabetic Care dashboard with anonymized patient statistics, wound composition charts, and recent activity',
    },
    gallery: {
      src: '/images/projects/diabetic-care-analysis.webp',
      alt: 'Diabetic Care analysis workspace showing wound preprocessing, segmentation masks, and diagnosis overlay',
    },
    note: 'Patient names and identifiers in these screenshots have been anonymized.',
    repoUrl: 'https://github.com/amarzikra/diabetic-ulcer-segmentation',
  },
  {
    slug: 'dewandra-stok',
    index: '03',
    title: 'Dewandra Stok',
    category: 'Inventory Management / Multi-store Operations',
    year: '2026',
    role: 'Solo Full-Stack Developer',
    description:
      'A multi-store inventory app for stock movements, returns, opname, and reporting.',
    problem:
      'With five stores under one owner, stock changes were difficult to audit across locations. Staff needed a fast way to record goods while the owner needed a reliable, real-time view of every store.',
    approach:
      'Extended a TanStack Start starter with Drizzle and PostgreSQL. Every product and stock mutation runs through validated API routes with Better Auth sessions; per-store grants limit access, and reports read directly from the same stock ledger.',
    outcome:
      'A single stock ledger across five stores, with live summaries, low-stock alerts, auditable movement history, and CSV or print-ready reporting.',
    features: [
      'Five-store dashboard with stock value and low-stock alerts',
      'Incoming and outgoing movements with reversal history',
      'Supplier and customer returns plus stock opname sessions',
      'Per-store access grants for owner and staff accounts',
      'Cross-store search, CSV export, and print-ready reports',
    ],
    stack: ['TanStack Start', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Better Auth'],
    cover: {
      src: '/images/projects/dewandra-stok-cover.webp',
      alt: 'Dewandra Stok dashboard showing stock value, five store summaries, search, and recent movements',
    },
    gallery: {
      src: '/images/projects/dewandra-stok-dialog.webp',
      alt: 'Dewandra Stok incoming stock dialog over the five-store dashboard',
    },
    repoUrl: 'https://github.com/amarzikra/Dewandra-stok',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Zikra turned five separate store workflows into one system our staff actually enjoys using. He asks sharp questions, documents the trade-offs, and ships without drama.',
    name: 'Reza Mahendra',
    role: 'Owner, Dewandra Grup',
    initials: 'RM',
  },
  {
    quote:
      'He treated our research tool like a product, not a prototype. The segmentation workflow is repeatable, documented, and easy for our team to trust.',
    name: 'Dr. Anisa Putri',
    role: 'Research Supervisor, Health Analytics Lab',
    initials: 'AP',
  },
  {
    quote:
      "Zikra's code is calm code — clear boundaries, honest naming, and structure that survives new features. Handing the project over was painless.",
    name: 'Bagas Nugroho',
    role: 'Engineering Lead',
    initials: 'BN',
  },
  {
    quote:
      'He asks the right questions before writing a line of code. That discipline is why the final interface feels considered instead of rushed.',
    name: 'Salsabila Rahma',
    role: 'Product Designer',
    initials: 'SR',
  },
]

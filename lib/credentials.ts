export type Credential = {
  slug: string
  title: string
  issuer: string
  platform?: string
  type: 'Certification' | 'Course' | 'Training'
  date: string
  image: {
    src: string
    alt: string
  }
  credentialId?: string
  credentialUrl?: string
  validUntil?: string
}

export const credentials: Credential[] = [
  {
    slug: 'oracle-agentic-ai-foundations',
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle University',
    type: 'Certification',
    date: '25 Oct 2026',
    image: {
      src: '/images/credentials/oracle-agentic-ai-foundations.webp',
      alt: 'Oracle University certificate for Agentic AI Certified Foundations Associate issued to Amara Al Zikra',
    },
    credentialId: '103567179AAI26OFA',
    validUntil: '25 Oct 2028',
  },
  {
    slug: 'dicoding-spec-driven-kiro',
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    type: 'Course',
    date: '19 Oct 2026',
    image: {
      src: '/images/credentials/dicoding-spec-driven-kiro.webp',
      alt: 'Dicoding Indonesia certificate for Spec-Driven Development dengan Kiro issued to Muhammat Amara Aldzikra',
    },
    credentialId: '98XW8LME0PM3',
    credentialUrl: 'https://www.dicoding.com/certificates/98XW8LME0PM3',
    validUntil: '19 Oct 2029',
  },
  {
    slug: 'asean-ai-career-readiness',
    title: 'AI Career Readiness Training',
    issuer: 'ASEAN Foundation',
    type: 'Training',
    date: '10 Oct 2026',
    image: {
      src: '/images/credentials/asean-ai-career-readiness-training.webp',
      alt: 'ASEAN Foundation certificate for AI Career Readiness Training presented to amara zirk',
    },
  },
  {
    slug: 'dicoding-data-science-fabric',
    title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    issuer: 'Dicoding Indonesia',
    type: 'Course',
    date: '26 Sep 2026',
    image: {
      src: '/images/credentials/dicoding-data-science-fabric.webp',
      alt: 'Dicoding Indonesia certificate for Belajar Penerapan Data Science dengan Microsoft Fabric issued to Muhammat Amara Aldzikra',
    },
    credentialId: '0LZ0J23YQX65',
    credentialUrl: 'https://www.dicoding.com/certificates/0LZ0J23YQX65',
    validUntil: '26 Sep 2029',
  },
  {
    slug: 'coursera-ibm-introduction-to-ai',
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    platform: 'Coursera',
    type: 'Course',
    date: '23 Sep 2026',
    image: {
      src: '/images/credentials/coursera-ibm-introduction-to-ai.webp',
      alt: 'IBM course certificate for Introduction to Artificial Intelligence (AI) issued through Coursera to Muhammat amara al dzikra',
    },
    credentialId: 'LE8G9I7STA5Z',
    credentialUrl: 'https://coursera.org/verify/LE8G9I7STA5Z',
  },
  {
    slug: 'linkedin-learning-what-is-generative-ai',
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    type: 'Course',
    date: '23 Sep 2026',
    image: {
      src: '/images/credentials/linkedin-learning-what-is-generative-ai.webp',
      alt: 'LinkedIn Learning certificate for What Is Generative AI? completed by Amara Al Zikra',
    },
    credentialId: 'e5f624e1d18a574f2b25ce2fe7493241023ce2f6b28f02c2e9e180c570e49fe',
  },
]

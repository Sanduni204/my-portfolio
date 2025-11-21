import Link from 'next/link'
import { notFound } from 'next/navigation'
import certs from '../../../data/certifications.json'

export default function CertificationPage({ params }: { params: { slug: string } }) {
  const cert: any = (certs as any).find((c: any) => c.slug === params.slug)

  if (!cert) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <Link href="/" className="text-sm text-brand-primary underline">Back</Link>
      <h1 className="text-2xl font-semibold mt-4">{cert.title}</h1>
      <p className="text-sm text-textc-secondary mt-2">Provider: {cert.provider}</p>
      <div className="mt-6 bg-brand-background-grey p-4 rounded">
        <p className="text-textc-primary">This is a placeholder page for the certification. You can add more details (date, certificate image, verification link) here.</p>
      </div>
    </div>
  )
}

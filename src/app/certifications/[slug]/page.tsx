import Link from 'next/link'
import { notFound } from 'next/navigation'
import certs from '../../../data/certifications.json'

export default function CertificationPage({ params }: { params: { slug: string } }) {
  const cert: any = (certs as any).find((c: any) => c.slug === params.slug)

  if (!cert) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 cert-detail-page">
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="cert-back-link">Back</Link>
      </div>

      <div className="max-w-3xl mx-auto cert-card">
        <header>
          <h1 className="cert-title-lg">{cert.title}</h1>
          <p className="cert-meta">Provider: {cert.provider}</p>
        </header>

        <section className="mt-6">
          <p className="text-textc-primary">This page contains details for the selected certification. You can place the certificate image, issuing date, short description, and verification links here. Edit <code>src/data/certifications.json</code> to add a `url` (external certificate link) and other metadata.</p>

          <div className="mt-6 flex items-center gap-4">
            {cert.url ? (
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-verify-btn">View Certificate</a>
            ) : (
              <span className="text-textc-secondary">No external certificate link provided.</span>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

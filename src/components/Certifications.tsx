'use client'
import AnimateSection from './AnimateSection'
import certs from '../data/certifications.json'
export default function Certifications(){return (<AnimateSection><section id="certifications"><h2 className="text-2xl font-poppins mb-4">Certifications</h2><div className="grid md:grid-cols-2 gap-4">{certs.map((c:any)=>(<div key={c.title} className="bg-white p-4 rounded-lg border"><h3 className="font-semibold">{c.title}</h3><p className="text-sm">{c.provider}</p></div>))}</div></section></AnimateSection>)}
'use client'
import AnimateSection from './AnimateSection'
import skills from '../data/skills.json'
export default function Skills(){return (<AnimateSection><section id="skills"><h2 className="text-2xl font-poppins mb-4">Skills</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {Object.entries(skills).map(([cat,items])=>(<div key={cat} className="p-4 bg-white rounded-lg border"><h3 className="font-semibold mb-2">{cat}</h3><ul className="text-sm space-y-1">{items.map((it:any)=>(<li key={it}>{it}</li>))}</ul></div>))}</div></section></AnimateSection>)}
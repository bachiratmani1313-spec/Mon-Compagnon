import React from 'react';
import { ArrowLeft, Home, Droplets, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AblutionsPage() {
  const steps = [
    { id: 1, title: "L'intention (Niyyah)", desc: "Formuler l'intention dans son cœur et dire 'Bismillah'." },
    { id: 2, title: "Les mains", desc: "Laver les mains jusqu'aux poignets 3 fois." },
    { id: 3, title: "La bouche", desc: "Rincer la bouche 3 fois." },
    { id: 4, title: "Le nez", desc: "Inspirer l'eau par le nez et l'expulser 3 fois." },
    { id: 5, title: "Le visage", desc: "Laver le visage entièrement 3 fois." },
    { id: 6, title: "Les bras", desc: "Laver les bras jusqu'aux coudes 3 fois (droite puis gauche)." },
    { id: 7, title: "La tête et les oreilles", desc: "Passer les mains mouillées sur la tête et l'intérieur des oreilles 1 fois." },
    { id: 8, title: "Les pieds", desc: "Laver les pieds jusqu'aux chevilles 3 fois (droite puis gauche)." },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-10">
      <nav className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <Link href="/" className="flex items-center text-cyan-600 font-medium">
          <ArrowLeft className="mr-2" size={20} />
          Retour
        </Link>
        <span className="font-bold text-gray-800">Module 3</span>
        <Link href="/">
          <Home className="text-gray-400" size={20} />
        </Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <header className="mb-8 flex items-center gap-4">
          <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-600">
            <Droplets size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Le Woudou</h1>
            <p className="text-gray-500 italic text-sm">La purification avant la prière</p>
          </div>
        </header>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="relative pl-10">
              {step.id !== steps.length && (
                <div className="absolute left-[19px] top-10 w-0.5 h-12 bg-slate-200"></div>
              )}
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-cyan-500 flex items-center justify-center font-bold text-cyan-600 z-10">
                {step.id}
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-cyan-600 rounded-3xl text-white shadow-lg flex items-center gap-4">
          <CheckCircle2 size={40} className="flex-shrink-0 text-cyan-200" />
          <p className="text-sm font-medium">
            Une fois ces étapes terminées, vous êtes en état de pureté pour accomplir votre prière.
          </p>
        </div>
      </div>
    </main>
  );
}

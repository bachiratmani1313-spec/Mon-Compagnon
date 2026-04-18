import React from 'react';
import { ArrowLeft, Home, Star, Heart, Coins, Coffee, Map } from 'lucide-react';
import Link from 'next/link';

export default function PiliersPage() {
  const pillars = [
    { id: 1, name: 'La Shahada', desc: "L'attestation de foi en un Dieu unique.", icon: <Heart className="text-rose-500" /> },
    { id: 2, name: 'La Salat', desc: "Les cinq prières quotidiennes obligatoires.", icon: <Star className="text-amber-500" /> },
    { id: 3, name: 'La Zakat', desc: "L'aumône annuelle pour les nécessiteux.", icon: <Coins className="text-emerald-500" /> },
    { id: 4, name: 'Le Sawm', desc: "Le jeûne durant le mois de Ramadan.", icon: <Coffee className="text-orange-500" /> },
    { id: 5, name: 'Le Hajj', desc: "Le pèlerinage à la Mecque (une fois).", icon: <Map className="text-blue-500" /> },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10">
        <Link href="/" className="flex items-center text-emerald-600 font-medium">
          <ArrowLeft className="mr-2" size={20} />
          Retour
        </Link>
        <span className="font-bold text-gray-800">Module 2</span>
        <Link href="/">
          <Home className="text-gray-400" size={20} />
        </Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Les 5 Piliers</h1>
          <p className="text-gray-500 text-lg">Les fondements de la pratique religieuse.</p>
        </header>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mr-4 text-2xl shadow-inner">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{pillar.id}. {pillar.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-emerald-600 rounded-3xl text-white shadow-lg">
          <p className="font-medium italic">
            "L'Islam est bâti sur ces cinq piliers. Ils soutiennent la foi de chaque musulman."
          </p>
        </div>
      </div>
    </main>
  );
}

import React from 'react';
import { ArrowLeft, Home, User, MoveDown } from 'lucide-react';
import Link from 'next/link';

export default function GestesPage() {
  const positions = [
    { id: 1, title: "Takbir al-Ihram", desc: "Se tenir debout, lever les mains aux oreilles et dire 'Allahu Akbar'." },
    { id: 2, title: "Qiyam", desc: "Poser la main droite sur la gauche sur la poitrine et réciter le Coran." },
    { id: 3, title: "Ruku' (L'inclinaison)", desc: "S'incliner à l'horizontale, mains sur les genoux, dos droit." },
    { id: 4, title: "Sujud (La prosternation)", desc: "Poser le front, le nez, les mains, les genoux et les pieds au sol." },
    { id: 5, title: "Tachahoud", desc: "S'asseoir sur les jambes pour les salutations finales." },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      <nav className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <Link href="/" className="flex items-center text-emerald-600 font-medium">
          <ArrowLeft className="mr-2" size={20} />
          Retour
        </Link>
        <span className="font-bold text-gray-800">Module 5</span>
        <Link href="/">
          <Home className="text-gray-400" size={20} />
        </Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <header className="mb-10 flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-2xl text-amber-600">
            <User size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Les Gestes</h1>
            <p className="text-gray-500 text-sm">La posture du corps pendant la prière</p>
          </div>
        </header>

        <div className="space-y-4">
          {positions.map((pos) => (
            <div key={pos.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                {pos.id}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{pos.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-center">
          <MoveDown className="mx-auto text-slate-300 mb-2" />
          <p className="text-slate-500 text-sm italic">
            Chaque mouvement doit être fait avec calme et sérénité (At-Toumanina).
          </p>
        </div>
      </div>
    </main>
  );
}

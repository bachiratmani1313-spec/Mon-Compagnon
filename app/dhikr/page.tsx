import React from 'react';
import { ArrowLeft, Home, Moon, Heart } from 'lucide-react';
import Link from 'next/link';

export default function DhikrPage() {
  const adhkars = [
    { id: 1, arabic: "سُبْحَانَ اللهِ", phonetique: "SubhanAllah", traduction: "Gloire à Allah", count: "33 fois" },
    { id: 2, arabic: "الْحَمْدُ لِلَّهِ", phonetique: "Alhamdulillah", traduction: "Louange à Allah", count: "33 fois" },
    { id: 3, arabic: "اللهُ أَكْبَرُ", phonetique: "Allahu Akbar", traduction: "Allah est le plus Grand", count: "33 fois" },
  ];

  return (
    <main className="min-h-screen bg-indigo-50 pb-12">
      <nav className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <Link href="/" className="flex items-center text-indigo-600 font-medium">
          <ArrowLeft className="mr-2" size={20} />
          Retour
        </Link>
        <span className="font-bold text-gray-800">Module 6</span>
        <Link href="/">
          <Home className="text-gray-400" size={20} />
        </Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-block p-4 bg-white text-purple-600 rounded-3xl shadow-sm mb-4">
            <Moon size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Le Dhikr</h1>
          <p className="text-gray-500 mt-2">L'apaisement du cœur après la prière.</p>
        </header>

        <div className="space-y-6">
          {adhkars.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-indigo-100 text-center relative overflow-hidden">
              <div className="absolute top-4 right-6 text-indigo-100 font-black text-5xl select-none">
                {item.count}
              </div>
              <p className="text-3xl font-serif text-gray-800 mb-4 pt-4" dir="rtl">
                {item.arabic}
              </p>
              <p className="text-indigo-600 font-bold tracking-wide mb-1">
                {item.phonetique}
              </p>
              <p className="text-gray-400 text-sm italic">
                "{item.traduction}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8">
          <Heart className="mx-auto text-rose-400 mb-4" fill="currentColor" size={30} />
          <p className="text-gray-600 leading-relaxed italic text-sm">
            "N'est-ce pas par l'évocation d'Allah que les cœurs s'apaisent ?"
          </p>
        </div>
      </div>
    </main>
  );
}

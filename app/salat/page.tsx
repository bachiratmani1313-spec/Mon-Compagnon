import React from 'react';
import { ArrowLeft, Home, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SalatPage() {
  const prayers = [
    { name: 'Fajr', units: '2 Rak\'ahs', time: 'Aube', color: 'border-blue-200 bg-blue-50' },
    { name: 'Dhuhr', units: '4 Rak\'ahs', time: 'Midi', color: 'border-yellow-200 bg-yellow-50' },
    { name: 'Asr', units: '4 Rak\'ahs', time: 'Après-midi', color: 'border-orange-200 bg-orange-50' },
    { name: 'Maghrib', units: '3 Rak\'ahs', time: 'Coucher du soleil', color: 'border-rose-200 bg-rose-50' },
    { name: 'Isha', units: '4 Rak\'ahs', time: 'Nuit', color: 'border-indigo-200 bg-indigo-50' },
  ];

  return (
    <main className="min-h-screen bg-white pb-12">
      <nav className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <Link href="/" className="flex items-center text-emerald-600 font-medium">
          <ArrowLeft className="mr-2" size={20} />
          Retour
        </Link>
        <span className="font-bold text-gray-800">Module 4</span>
        <Link href="/">
          <Home className="text-gray-400" size={20} />
        </Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-block p-3 bg-indigo-100 text-indigo-600 rounded-2xl mb-4">
            <BookOpen size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">La Salat</h1>
          <p className="text-gray-500 mt-2">Le lien direct avec le Créateur.</p>
        </header>

        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <Clock className="mr-2 text-indigo-500" size={24} />
          Les 5 prières quotidiennes
        </h2>

        <div className="grid gap-4">
          {prayers.map((prayer) => (
            <div key={prayer.name} className={`p-5 rounded-3xl border-2 ${prayer.color} flex justify-between items-center shadow-sm`}>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{prayer.name}</h3>
                <p className="text-sm text-gray-500">{prayer.time}</p>
              </div>
              <div className="bg-white px-4 py-2 rounded-2xl shadow-inner font-bold text-indigo-600 font-sans">
                {prayer.units}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white">
          <p className="text-lg italic opacity-90 text-center">
            "La prière est la lumière de mon cœur."
          </p>
        </div>
      </div>
    </main>
  );
}

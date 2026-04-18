import React from 'react';
import { BookOpen, UserCheck, Droplets, Moon, Info, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const modules = [
    { id: 1, title: 'Shahada', icon: <UserCheck />, color: 'bg-blue-500', link: '/shahada' },
    { id: 2, title: '5 Piliers', icon: <Info />, color: 'bg-emerald-500', link: '/piliers' },
    { id: 3, title: 'Ablutions', icon: <Droplets />, color: 'bg-cyan-500', link: '/ablutions' },
    { id: 4, title: 'La Salat', icon: <BookOpen />, color: 'bg-indigo-500', link: '/salat' },
    { id: 5, title: 'Les Gestes', icon: <ShieldCheck />, color: 'bg-amber-500', link: '/gestes' },
    { id: 6, title: 'Dhikr', icon: <Moon />, color: 'bg-purple-500', link: '/dhikr' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-10 mt-8">
        <h1 className="text-3xl font-bold text-gray-800">Mon Compagnon</h1>
      </header>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {modules.map((mod) => (
          <Link href={mod.link} key={mod.id}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className={`p-3 rounded-full text-white mb-3 ${mod.color}`}>{mod.icon}</div>
              <h2 className="font-semibold text-gray-700">{mod.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/pret" className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-bold">
          Prêt pour la prière ?
        </Link>
      </div>
    </main>
  );
}

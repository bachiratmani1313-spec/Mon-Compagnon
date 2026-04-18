import React from 'react';
import { ArrowLeft, Home, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ShahadaPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <nav className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10">
        <Link href="/" className="flex items-center text-blue-600 font-medium">
          <ArrowLeft className="mr-2" size={20} />
          Retour
        </Link>
        <span className="font-bold text-gray-800">Module 1</span>
        <Link href="/"><Home className="text-gray-400" size={20} /></Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-block p-4 bg-white text-blue-500 rounded-full shadow-sm mb-4">
            <Heart size={40} fill="currentColor" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">La Shahada</h1>
          <p className="text-gray-500 mt-2 text-lg">Le premier pilier de l'Islam</p>
        </header>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-100 text-center">
          <p className="text-2xl font-serif text-gray-800 mb-6 leading-loose" dir="rtl">
            أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ
          </p>
          <div className="space-y-4 text-left border-t pt-6">
            <p className="text-blue-600 font-bold italic text-center text-lg">
              "Ach-hadou an la ilaha illa Allah, wa ach-hadou anna Mouhammadan rassoulou Allah"
            </p>
            <p className="text-gray-600 text-md leading-relaxed text-center">
              "J'atteste qu'il n'y a de divinité d'autre qu'Allah et j'atteste que Mouhammad est Son messager."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

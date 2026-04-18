import React from 'react';
import { PlayCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PretPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 text-emerald-600">
        <CheckCircle size={80} />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Configuration prête</h1>
      <div className="max-w-md bg-emerald-50 p-8 rounded-3xl border border-emerald-100 mb-8">
        <p className="text-gray-700 text-lg mb-6">Sourates 112 et 113 sélectionnées.</p>
        <div className="flex items-start text-left bg-white p-4 rounded-xl shadow-sm">
          <PlayCircle className="text-emerald-600 mr-3 mt-1" size={24} />
          <p className="text-gray-800 text-sm">
            <strong>CONSIGNE :</strong> Une fois sur le site, allez en bas et appuyez sur <strong>PLAY</strong>.
          </p>
        </div>
      </div>
      <a href="https://imamvirtuel.com" target="_blank" className="bg-emerald-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg flex items-center">
        Ouvrir le guide <ArrowRight className="ml-2" />
      </a>
      <Link href="/" className="mt-8 text-gray-400 text-sm underline">Retour à l'accueil</Link>
    </div>
  );
}

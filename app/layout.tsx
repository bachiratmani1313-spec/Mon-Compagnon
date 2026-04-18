import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Mon Compagnon',
  description: 'Apprendre la prière sereinement',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

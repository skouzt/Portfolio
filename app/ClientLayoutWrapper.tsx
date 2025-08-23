'use client';

import React from 'react';
import Navbar from '@/components/ui/navbar';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
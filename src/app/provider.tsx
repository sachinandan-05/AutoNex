'use client';
import {ReactNode} from 'react';
import { Toaster } from 'sonner';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster position='bottom-center'/>
      {children}
    </>
  );
}

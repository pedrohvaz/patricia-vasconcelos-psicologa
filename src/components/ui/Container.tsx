import type { ReactNode } from 'react';

type ContainerProps = { children: ReactNode; className?: string; wide?: boolean };

export function Container({ children, className = '', wide = false }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${wide ? 'max-w-7xl' : 'max-w-6xl'} px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

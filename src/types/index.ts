import { type LucideProps } from 'lucide-react';
import React from 'react';
export type Capability = {
  title: string;
  name: string;
  description: string;
  image: string;
};

export type Card = {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
};

export type Feature = {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  description: string;
};

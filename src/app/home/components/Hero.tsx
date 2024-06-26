'use client';
import TypingEffect from '@/components/animation/TypingEffect';
import GradientButton from '@/components/shared/GradientButton';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Hero: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <section className="hero relative flex h-full flex-col items-center">
      <article
        className={cn(
          'absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center',
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-background md:text-6xl">
            Chat with Document
          </h1>
          <span className="text-md gradient shrink-0 rounded-full px-4 py-2 font-bold text-background">
            Powered by AI
          </span>
        </div>
        <TypingEffect
          speed={30}
          className="text-md mt-6 min-h-[120px] w-full overflow-auto break-words bg-gradient-to-r from-secondary to-muted-foreground bg-clip-text font-semibold text-transparent md:min-h-[100px] md:w-[600px] md:text-lg"
        >
          Leverage AI to analyze your PDFs. Experience the freedom to talk to
          your papers, reports, and textbooks at no cost. Revolutionize your PDF
          experience with ease.
        </TypingEffect>
        <Link href={PAGES_ROUTES.register}>
          <GradientButton>Get Started</GradientButton>
        </Link>
      </article>
    </section>
  );
};

export default Hero;

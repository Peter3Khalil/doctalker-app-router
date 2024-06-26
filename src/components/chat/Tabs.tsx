'use client';
import { cn } from '@/lib/utils';
import { useGlobalState } from '@/providers/state-provider';
import React from 'react';

const Tabs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { currentTap } = useGlobalState();
  return (
    <div
      className={cn(
        'flex w-full shrink-0 items-center justify-start gap-3 px-6 text-accent md:hidden',
        className,
      )}
      {...props}
    >
      <a
        href="#chat"
        className={cn(
          'transition-class rounded-full px-6 py-1 text-sm font-semibold text-muted/50',
          {
            'bg-primary/15 text-secondary': currentTap === 'chat',
          },
        )}
      >
        Chat
      </a>
      <a
        href="#document"
        className={cn(
          'transition-class rounded-full px-6 py-1 text-sm font-semibold text-muted/50',
          {
            'bg-primary/15 text-secondary': currentTap === 'document',
          },
        )}
      >
        Document
      </a>
    </div>
  );
};

export default Tabs;

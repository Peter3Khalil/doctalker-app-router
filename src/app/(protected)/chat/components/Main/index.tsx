'use client';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import ChatHeader from './ChatHeader';
import ChatViewer from './ChatViewer';
import DocumentViewer from './DocumentViewer';
import Taps from './Taps';

const Main: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-3">
      <ChatHeader />
      <Taps />
      <main
        className={cn(
          'hide-scrollbar flex h-full snap-x snap-mandatory overflow-auto bg-accent-foreground md:snap-none',
          className,
        )}
        {...props}
      >
        <ChatViewer />
        <DocumentViewer
          className="ml-2"
          src="https://peterkhalil.netlify.app/pdf.pdf"
        />
      </main>
    </div>
  );
};

export default Main;

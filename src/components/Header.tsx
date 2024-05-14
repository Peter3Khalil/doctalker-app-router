import Logo from '@/components/shared/Logo';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import { SECTIONS } from '@/constants/sections';
import useScroll from '@/hooks/useScroll';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Header: FC<ComponentProps> = ({ className, ...props }) => {
  const { move } = useScroll();
  return (
    <header
      className={cn(
        'fixed left-[50%] top-0 z-20 h-16 w-[90%] translate-x-[-50%] translate-y-[30px] rounded-full border-2 border-primary/70 text-background opacity-100 backdrop-blur-3xl transition-all duration-200 ease-linear md:h-20',
        className,
        {
          '-translate-y-full opacity-0': move === 'down',
        },
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-between px-6 md:px-12 lg:px-20">
        <Logo />
        <nav className="">
          <ul className="hidden items-center gap-6 md:flex">
            {SECTIONS.map((section, index) => (
              <li key={index}>
                <Link href={`#${section.id}`} className="capitalize">
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href={PAGES_ROUTES['login']} className="btn">
            Login
          </Link>
          <button className="btn">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

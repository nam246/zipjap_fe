'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { Button } from '@/components/ui/button';


export default function Navbar() {
    const isMobile = useIsMobile();
    return (
        <nav className="h-16 bg-background border-b border-accent">
            <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
                {/* Desktop Menu */}
                <NavMenu className="hidden md:block" />

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden sm:inline-flex">
                        Sign In
                    </Button>
                    <Button className="hidden xs:inline-flex">Get Started</Button>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <NavigationSheet />
                    </div>
                </div>
            </div>
        </nav>
    )
}
"use client";

import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const learningMenuItems: {
  title: string;
  items: { level: string; href: string; description: string }[];
}[] = [
  {
    title: "Grammar",
    items: [
      {
        level: "n5",
        href: "/learning/n5/grammar",
        description: "Minna no Nihongo",
      },
      {
        level: "n4",
        href: "/learning/n4/grammar",
        description: "Minna no Nihongo",
      },
      {
        level: "n3",
        href: "/learning/n3/grammar",
        description: "Soumatome",
      },
      {
        level: "n2",
        href: "/learning/n2/grammar",
        description: "Soumatome",
      },
      {
        level: "n1",
        href: "/learning/n1/grammar",
        description: "Soumatome",
      },
    ],
  },
  {
    title: "Vocabulary",
    items: [
      {
        level: "n5",
        href: "/learning/n5/vocabulary",
        description: "Minna no Nihongo",
      },
      {
        level: "n4",
        href: "/learning/n4/vocabulary",
        description: "Minna no Nihongo",
      },
      {
        level: "n3",
        href: "/learning/n3/vocabulary",
        description: "Soumatome",
      },
      {
        level: "n2",
        href: "/learning/n2/vocabulary",
        description: "Soumatome",
      },
      {
        level: "n1",
        href: "/learning/n1/vocabulary",
        description: "Soumatome",
      },
    ],
  },
  {
    title: "Kanji",
    items: [
      {
        level: "n5",
        href: "/learning/n5/kanji",
        description: "Minna no Nihongo",
      },
      {
        level: "n4",
        href: "/learning/n4/kanji",
        description: "Minna no Nihongo",
      },
      {
        level: "n3",
        href: "/learning/n3/kanji",
        description: "Soumatome",
      },
      {
        level: "n2",
        href: "/learning/n2/kanji",
        description: "Soumatome",
      },
      {
        level: "n1",
        href: "/learning/n1/kanji",
        description: "Soumatome",
      },
    ],
  },
];
const navLinks = [
  { href: "/", title: "Trang chủ" },
  { href: "/learning", title: "Học tập" },
  { href: "/practice", title: "Luyện tập" },
  { href: "/leaderboard", title: "Bảng xếp hạng" },
];

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <>
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          {/* Navigation Item 3 */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Navigation Item 4 */}
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Learning</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                {learningMenuItems.map((item, index) => (
                  <ul key={item.title + index} className="">
                    {item.items.map((i, itr) => (
                      <li key={itr}>
                        <NavigationMenuLink asChild>
                          <Link href={i.href}>
                            <div className="font-medium">
                              {item.title + ` ` + i.level}
                            </div>
                            <div className="text-muted-foreground">
                              {i.description}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Navigation Item 4 */}
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>List</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Components</div>
                      <div className="text-muted-foreground">
                        Browse all components in the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Documentation</div>
                      <div className="text-muted-foreground">
                        Learn how to use the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Blog</div>
                      <div className="text-muted-foreground">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Navigation Item 5 */}
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Blocks</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Navigation Item 6 */}
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                      <CircleHelpIcon />
                      Backlog
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                      <CircleIcon />
                      To Do
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                      <CircleCheckIcon />
                      Done
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Login Button */}
      <Button className="rounded-lg max-md:hidden" asChild>
        <a href="#">Login</a>
      </Button>

      {/* Navigation for small screens */}
      <div className="flex gap-4 md:hidden">
        <Button className="rounded-lg" asChild>
          <a href="#">Login</a>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            {navLinks.map((item, index) => (
              <DropdownMenuItem key={index}>
                <a href={item.href}>{item.title}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

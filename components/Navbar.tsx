"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <nav className="z-[400] sticky top-0 h-14 w-full px-4 sm:px-6 md:px-12 lg:px-24 bg-purple-800 text-white backdrop-blur-sm dark:bg-purple-900/90">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            width={40}
            height={40}
            src="/images/finallogo.jpg"
            alt="Logo"
            className="rounded-xl"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden h-full items-center space-x-1 md:flex">
          <Link
            href="/"
            className="flex h-full items-center px-4 transition-colors hover:bg-purple-700"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="flex h-full items-center px-4 transition-colors hover:bg-purple-700"
          >
            Services
          </Link>

          <div className="relative group h-full ">
            {/* Parent Link */}
            <button className="flex items-center gap-1 px-4 py-2 h-full text-white transition-all duration-300  hover:bg-purple-700">
              Taxes and Process <span className="ml-1">▼</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full  -mt-1  w-56 bg-purple-900/90 backdrop-blur-sm text-white  shadow-lg  scale-95 hidden group-hover:block transform transition-all duration-300   ">
              <Link
                href="/home"
                className="block px-5 py-3 hover:bg-purple-600 rounded-md transition"
              >
                Taxes
              </Link>
              <Link
                href="/rajroka.com.np"
                className="block px-5 py-3 hover:bg-purple-600 rounded-md transition"
              >
                Adit Process
              </Link>
              <a
                href="https://rajroka.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-3 hover:bg-purple-600 rounded-md transition"
              >
                Visit Raj Roka
              </a>
              <Link
                href="/contact"
                className="block px-5 py-3 hover:bg-purple-600 rounded-md transition"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block px-5 py-3 hover:bg-purple-600 rounded-md transition"
              >
                Blog
              </Link>
              <Link
                href="/book-appointment"
                className="block px-5 py-3 hover:bg-purple-600 rounded-md transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex h-full items-center px-4 transition-colors hover:bg-purple-700"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="flex h-full items-center px-4 transition-colors hover:bg-purple-700"
          >
            Blogs
          </Link>
          <Link
            href="/bookaappointment"
            className="flex h-full items-center px-4 transition-colors hover:bg-purple-700"
          >
            Book Appointment
          </Link>
          <div className="ml-4">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-white transition-colors hover:text-purple-200 focus:outline-none"
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] z-[500] bg-white dark:bg-gray-900"
            >
              <SheetHeader>
                <nav className="flex flex-col space-y-3 py-6">
                  <Link
                    href="/"
                    className="px-4 py-2 text-gray-800 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-800/50"
                    onClick={closeSheet}
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="px-4 py-2 text-gray-800 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-800/50"
                    onClick={closeSheet}
                  >
                    Services
                  </Link>

                  <Link
                    href="/contact"
                    className="px-4 py-2 text-gray-800 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-800/50"
                    onClick={closeSheet}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/blog"
                    className="px-4 py-2 text-gray-800 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-800/50"
                    onClick={closeSheet}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/bookaappointment"
                    className="px-4 py-2 text-gray-800 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-800/50"
                    onClick={closeSheet}
                  >
                    Book Appointment
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

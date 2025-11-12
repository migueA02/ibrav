"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION } from "@/utils/constans";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { classNames } from "@/utils/utils";

const NavbarComponent = () => {
  const router = useRouter();
  const pathname = usePathname()?.split("/")![1];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReadirect = (patch: string) => {
    router?.push(patch);
    setMobileMenuOpen(false);
  };
  
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/10 backdrop-blur-lg shadow-md" : "bg-transparent "
      }`}
    >
      <nav className="flex items-center justify-between py-3 px-6 lg:px-8">
        {/* Logo */}
        <Image
          src="/images/logo.jpg"
          alt="Logo IBRAV"
          width={50}
          height={50}
          className="rounded-full cursor-pointer"
          onClick={() => router?.push("/")}
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {NAVIGATION.map((item) => (
            <button
              key={item.name}
              onClick={() => router?.push(item?.href)}
              className={classNames(
                pathname === item.name?.toLowerCase()
                  ? "text-gray-500"
                  : "text-white",
                `text-sm/6 font-semibold transition-colors duration-300  hover:text-gray-500 cursor-pointer`
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 text-white`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/10 backdrop-blur-lg p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/images/logo.jpg"
                alt="Logo IBRAV"
                width={50}
                height={50}
                className="rounded-full"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleReadirect  (item?.href)}
                    className={classNames(
                      pathname === item.name?.toLowerCase() ? "" : "",
                      "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white cursor-pointer"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default NavbarComponent;

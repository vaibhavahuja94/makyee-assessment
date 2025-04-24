import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { LanguageSwitch } from "../../../../components/LanguageSwitch";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

export const NavBar = (): JSX.Element => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.faqs"), href: "#faqs" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [isMenuOpen]);

  return (
    <header className="container mx-auto sticky top-0 left-0 w-full z-50 !px-0">
      <nav className="flex items-center justify-center py-4 w-full bg-makyeetestframerwebsitewhite-20 backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)]">
        <div className="relative flex items-center justify-between w-full px-4 md:px-0">
          {/* Logo - Always visible */}
          <div className="flex items-center">
            <div className="w-[97px] h-[24.08px] overflow-hidden">
              <img
                className="w-[98.62px] h-[24.08px] ml-[-0.81px] mr-[-0.81px]"
                alt="Logo"
                src="/ahni4yn5jnpgbnnpdsz8xv4h9u4-svg-1.svg"
              />
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="inline-flex items-center px-5 py-4 rounded-xl font-makyeetest-framer-website-semantic-link font-[number:var(--makyeetest-framer-website-semantic-link-font-weight)] text-makyeetestframerwebsitewoodsmoke text-[length:var(--makyeetest-framer-website-semantic-link-font-size)] tracking-[var(--makyeetest-framer-website-semantic-link-letter-spacing)] leading-[var(--makyeetest-framer-website-semantic-link-line-height)] whitespace-nowrap [font-style:var(--makyeetest-framer-website-semantic-link-font-style)]"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <LanguageSwitch />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Contact Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Button className="bg-[#ea223c] rounded-xl font-makyeetest-framer-website-semantic-link font-[number:var(--makyeetest-framer-website-semantic-link-font-weight)] text-white text-[length:var(--makyeetest-framer-website-semantic-link-font-size)] tracking-[var(--makyeetest-framer-website-semantic-link-letter-spacing)] leading-[var(--makyeetest-framer-website-semantic-link-line-height)] whitespace-nowrap [font-style:var(--makyeetest-framer-website-semantic-link-font-style)] hover:bg-[#ea223c]/90">
              {t("nav.contact")}
            </Button>
          </div>

          {/* Mobile Hamburger Button - Only visible on mobile */}
          <div className="flex md:hidden">
            <LanguageSwitch />
            <button
              className="relative z-50"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event propagation
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-black block"></span>
                <span className="w-full h-0.5 bg-black block"></span>
                <span className="w-full h-0.5 bg-black block"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Absolutely positioned overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 md:hidden pt-16_"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="p-5 flex justify-end w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </div>
          <div className="flex flex-col p-5 space-y-5">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-center border-b border-gray-200"
              >
                {item.label}
              </a>
            ))}
            <div className="py-2 flex justify-center border-b border-gray-200">
              <LanguageSwitch />
            </div>
            <Button
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[#ea223c] text-white"
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

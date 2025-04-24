import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Benefits", href: "#" },
    { title: "Features", href: "#" },
    { title: "Testimonials", href: "#" },
    { title: "FAQ's", href: "#" },
    { title: "Contact us", href: "#" },
  ];

  // Social media icons data
  const socialIcons = [
    { src: "/e29n3ck4a9kvbpgl9yhdr9urve0-svg.svg", alt: "Social media icon" },
    { src: "/1z5ncicmnm2erwz5qutnwfds1uc-svg.svg", alt: "Social media icon" },
    { src: "/4i0uo5wpisday2apxhk8kb9hac-svg.svg", alt: "Social media icon" },
  ];

  return (
    <footer className="flex flex-col items-center pt-20 pb-0 px-[60px] bg-makyeetestframerwebsitealabaster">
      <div className="relative w-full max-w-[1320px]">
        {/* Logo and tagline section */}
        <div className="flex flex-col items-center gap-6 mx-auto max-w-[440px]">
          <div className="relative w-[198px] h-11 overflow-hidden">
            <img
              className="absolute w-[198px] h-12 -top-0.5 left-0"
              alt="Makyee logo"
              src="/ahni4yn5jnpgbnnpdsz8xv4h9u4-svg.svg"
            />
          </div>

          <p className="font-makyeetest-framer-website-semantic-item font-[number:var(--makyeetest-framer-website-semantic-item-font-weight)] text-black text-[length:var(--makyeetest-framer-website-semantic-item-font-size)] text-center tracking-[var(--makyeetest-framer-website-semantic-item-letter-spacing)] leading-[var(--makyeetest-framer-website-semantic-item-line-height)] [font-style:var(--makyeetest-framer-website-semantic-item-font-style)]">
            Buy / Sell Property on the Go. <br />
            Anywhere, Anytime.
          </p>
        </div>

        {/* Email contact button */}
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="relative flex items-center gap-1.5 px-5 py-4 bg-[#18181a] text-white rounded-xl border-[#28282c] h-auto w-auto"
          >
            <MailIcon className="w-6 h-6" />
            <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[17px] leading-[25.5px]">
              hello@makyee.com
            </span>
          </Button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col md:flex-row justify-center items-center gap-4 mt-16">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.title}>
              <a
                href={link.href}
                className="[font-family:'Instrument_Sans',Helvetica] font-medium text-makyeetestframerwebsitemanatee text-lg text-center tracking-[-0.54px] leading-[27px]"
              >
                {link.title}
              </a>
              {index < navLinks.length - 1 && (
                <div className="w-1 h-1 bg-[#28282c] rounded" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Footer bottom section */}
        <div className="mt-20 pt-12 border-t border-[#1d1d20]">
          <div className="flex flex-col md:flex-row  justify-between items-center">
            <div className="[font-family:'Instrument_Sans',Helvetica] font-medium text-makyeetestframerwebsitemanatee text-[17px] leading-[25.5px]">
              Design by π
            </div>

            <div className="flex gap-3">
              {socialIcons.map((icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="p-2.5 bg-[#18181a] rounded-xl border-none"
                >
                  <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
                </Button>
              ))}
            </div>

            <a
              href="#"
              className="[font-family:'Instrument_Sans',Helvetica] font-medium text-makyeetestframerwebsitemanatee text-[17px] leading-[25.5px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

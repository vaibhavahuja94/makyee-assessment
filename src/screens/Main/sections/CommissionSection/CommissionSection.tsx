import OnScrollAnimation from "../../../../components/ui/OnScrollAnimation";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";

const CommissionSection = () => {
  const { t } = useTranslation();
  // Withdraw options data
  const withdrawOptions = [
    { icon: "/svg46687310-3124.svg", name: "Bank transfer" },
    { icon: "/clip-path-group-3.png", name: "Crypto" },
    { icon: "/clip-path-group-4.png", name: "Cheque" },
    { icon: "/clip-path-group-5.png", name: "Cash" },
  ];

  return (
    <div>
      {/* Commission Section */}
      <div className="relative w-full mt-[100px] py-16">
        <div className="container mx-auto relative">
          {/* Background Gradient */}
          <div className="absolute md:w-[812px] md:h-[796px] top-0 right-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(253,146,146,1)_0%,rgba(255,255,255,1)_100%)] opacity-20" />

          {/* Section Header */}
          <div className="flex flex-col md:max-w-[656px] items-center gap-[15.5px] mx-auto text-center mb-16">
            <span className="font-semibold text-[#ea223c] text-base leading-6">
              Our newest, your highest
            </span>
            <h2 className="font-bold text-makyeetestframerwebsitebig-stone text-5xl tracking-[-0.96px] leading-[57.6px]">
              {t("commission.title")}
            </h2>
            <span className="font-semibold text-black text-base leading-6">
              {t("commission.subtitle")}
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Phone Image */}
            <OnScrollAnimation variant="fadeInLeft">
              <div className="md:block hidden w-full md:w-[318px] h-[50vh] _w-[100vw] md:h-[724px] bg-[url(/b0fqht7rys74wnzjf0kblqvlvm-png.png)] bg-cover bg-[50%_50%]" />
              <img
                className="block md:hidden"
                src="/b0fqht7rys74wnzjf0kblqvlvm-png.png"
                width="200px"
              />
            </OnScrollAnimation>

            {/* 80% Immediate Withdraw Card */}
            <Card className="w-full md:w-[530px] p-0 md:p-6 rounded-3xl bg-gradient-to-r from-white to-[#f8f8f8]">
              <CardContent className="p-0">
                <div className="flex flex-col w-full gap-6">
                  <h3 className="font-[600] text-makyeetestframerwebsitebig-stone text-[48px] tracking-[-1.92px] leading-[48px]">
                    {t("commission.immediate.title")}
                  </h3>
                  <p className="text-makyeetestframerwebsiteshuttle-gray text-[18px] leading-[27px]">
                    {t("commission.immediate.description")}
                  </p>
                  <Button className="w-full bg-makyeetestframerwebsitealizarin-crimson text-white rounded-[58px] py-3 border border-[#ffffff26] relative">
                    <span className="font-medium tracking-[-0.40px]">
                      {t("buttons.learnMore")}
                    </span>
                    <div className="absolute right-5 w-5 h-5">
                      <img className="w-5 h-5" alt="Arrow" src="/image-2.svg" />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 100% Commission Section */}
      <div className="relative w-full py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row gap-8 items-center justify-center">
          {/* 100% Commission Card */}
          <Card className="w-full md:w-[530px] md:h-[407px] rounded-3xl bg-gradient-to-r from-[#f8f8f8] to-white">
            <CardContent className="p-0 md:p-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h3 className="font-bold text-makyeetestframerwebsitebig-stone text-4xl tracking-[-0.72px] leading-[43.2px]">
                    {t("commission.completion.title")}
                  </h3>
                  <p className="text-makyeetestframerwebsiteshuttle-gray text-[18px] leading-[27px]">
                    {t("commission.completion.description")}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-3xl leading-9">
                    <span className="font-bold text-[#121b2f]">
                      Never seen,{" "}
                    </span>
                    <span className="font-bold text-[#ea223c]">100%</span>
                  </h4>
                  <p className="font-semibold text-makyeetestframerwebsiteoslo-gray text-base leading-6">
                    With MAKYEE PRO, keeping 100% of your commission <br />
                    becomes effortless.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5 mt-4">
                  <img
                    className="w-[185px] h-[55px]"
                    alt="App Store"
                    src="/svg-682879982-18174.svg"
                  />
                  <img
                    className="w-[185px] h-[55px]"
                    alt="Google Play"
                    src="/clip-path-group-2.png"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone Image */}
          <OnScrollAnimation variant="fadeInRight">
            <div className="md:block hidden w-full md:w-[328px] md:h-[761px] bg-[url(/k6ejypasjoujjobgc5ab3lzbfro-png.png)] bg-cover bg-[50%_50%]" />
            <img
              className="block md:hidden"
              src="/b0fqht7rys74wnzjf0kblqvlvm-png.png"
              width="200px"
            />
          </OnScrollAnimation>
        </div>
      </div>

      {/* Multiple Withdraw Options Section */}
      <div className="relative w-full py-16">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Phone Image with Decorations */}
          <OnScrollAnimation variant="fadeInLeft">
            <div className="md:block hidden relative w-full md:w-[318px] md:h-[724px] bg-[url(/iupizpbg2j5qope2zh3sbhrqenw-png.png)] bg-cover bg-[50%_50%]">
              <div className="absolute w-[59px] h-[63px] top-20 md:left-[250px] rotate-[11.17deg] bg-[url(/irkkml5rbrsmyycwhmmvydso-png.png)] bg-cover bg-[50%_50%]" />
              <div className="absolute w-[57px] h-[55px] top-[635px] md:left-[254px] rotate-[-5.72deg] bg-[url(/ypf1cuna2qok72aqwfdskoxn0hq-png.png)] bg-cover bg-[50%_50%]" />
              <div className="absolute w-[90px] h-[85px] top-[385px] left-4 rotate-[-2.88deg] bg-[url(/agpd4n598olo6bmiraxmrtq3f0-png.png)] bg-cover bg-[50%_50%]" />
            </div>
            <img
              className="block md:hidden"
              src="/irkkml5rbrsmyycwhmmvydso.png"
              width={240}
            />
          </OnScrollAnimation>
          {/* Withdraw Options Card */}
          <Card className="w-full md:w-[530px] md:p-6 rounded-3xl bg-gradient-to-r from-white to-[#f8f8f8]">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-makyeetestframerwebsitebig-stone text-4xl tracking-[-0.72px] leading-[43.2px]">
                  Multiple Withdraw <br />
                  Options
                </h3>
                <p className="text-makyeetestframerwebsiteshuttle-gray text-[18px] leading-[27px]">
                  Get instant access to 80% of your commission as <br />
                  soon as the transaction is confirmed. No long waits, <br />
                  just fast payouts!
                </p>
                <div className="flex flex-wrap gap-4">
                  {withdrawOptions.slice(0, 2).map((option, index) => (
                    <Badge
                      key={index}
                      className="flex items-center gap-[23px] px-[18.39px] py-[13.79px] bg-makyeetestframerwebsitezircon text-black rounded-[28px]"
                    >
                      {index === 0 ? (
                        <div className="relative w-6 h-6 bg-[url(/svg46687310-3124.svg)] bg-[100%_100%]" />
                      ) : (
                        <div className="relative self-stretch w-6">
                          <div className="relative h-6 bg-makyeetestframerwebsitewhite">
                            <img
                              className="absolute w-6 h-[23px] top-0 left-0"
                              alt="Crypto icon"
                              src={option.icon}
                            />
                          </div>
                        </div>
                      )}
                      <span className="font-medium text-black">
                        {option.name}
                      </span>
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {withdrawOptions.slice(2).map((option, index) => (
                    <Badge
                      key={index + 2}
                      className="flex items-center gap-[23px] px-[18.39px] py-[13.79px] bg-makyeetestframerwebsitezircon text-black rounded-[28px]"
                    >
                      <div className="relative self-stretch w-6">
                        <div className="relative h-6 bg-makyeetestframerwebsitewhite">
                          <img
                            className="absolute w-[23px] h-6 top-0 left-px"
                            alt={`${option.name} icon`}
                            src={option.icon}
                          />
                        </div>
                      </div>
                      <span className="font-medium text-black">
                        {option.name}
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommissionSection;

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";
import { Separator } from "../../../../components/ui/separator";
import AnimatedCounter from "../../../../components/AnimatedCounter";

const DifferencesSection = () => {
  const { t } = useTranslation();

  // Statistics data
  const statistics = [
    { value: 5993, label: t("stats.property") },
    { value: 3243, label: t("stats.users") },
    { value: 43, label: t("stats.developers") },
  ];
  return (
    <div>
      {/* The Differences Section */}
      <div className="relative w-full py-16 bg-gradient-to-b from-white to-transparent">
        <div className="container mx-auto">
          {/* Background Gradients */}
          <div className="absolute md:w-[812px] md:h-[796px] top-0 left-0 [background:radial-gradient(50%_50%_at_39%_48%,rgba(253,146,146,1)_0%,rgba(255,252,252,0.03)_100%,rgba(255,255,255,1)_100%)] opacity-20" />
          <div className="absolute md:w-[812px] md:h-[797px] top-0 right-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(253,146,146,1)_0%,rgba(255,255,255,1)_100%)] opacity-20" />

          {/* Section Header */}
          <div className="flex flex-col items-center gap-[15.5px] text-center mb-16">
            <span className="font-semibold text-[#ea223c] text-base leading-6">
              Your Commission
            </span>
            <h2 className="font-bold text-makyeetestframerwebsitebig-stone text-5xl tracking-[-0.96px] leading-[57.6px]">
              The Differences
            </h2>
            <span className="font-semibold text-black text-base leading-6">
              with our MAKYEE PRO
            </span>
          </div>

          {/* Commission Comparison */}
          <div className="flex justify-center gap-8 mb-16">
            <div className="flex flex-col items-center justify-center gap-4 w-full md:w-[300px]">
              <span className="text-center md:text-start font-semibold text-black text-base leading-6">
                Average brokerage
              </span>
              <span className="font-semibold text-makyeetestframerwebsitebig-stone text-5xl">
                50%
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 w-full md:w-[300px]">
              <span className="font-semibold text-black text-base leading-6">
                MAKYEE Pro
              </span>
              <span className="font-bold text-[#ea223c] text-[64px] leading-[57.6px]">
                80%
              </span>
              <div className="flex md:flex-row flex-col items-center">
                <span className="font-bold text-makyeetestframerwebsitebig-stone text-2xl">
                  up to
                </span>
                <span className="font-bold text-makyeetestframerwebsitebig-stone text-5xl ml-2">
                  100%
                </span>
              </div>
            </div>
          </div>

          {/* Featured Section */}
          <Card className="w-full md:max-w-[820px] mx-auto bg-transparent">
            <CardContent className="flex flex-col items-center gap-[30px] pt-[60px] pb-[50px] [background:radial-gradient(50%_50%_at_50%_0%,rgba(242,242,242,1)_0%,rgba(255,255,255,1)_100%)]">
              <span className="font-medium text-[#131315] text-center">
                We were featured in
              </span>
              <img
                className="max-w-full md:h-[42px]"
                alt="Featured partners"
                src="/section-mask-group.svg"
              />
              <div className="w-full h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_0%,rgba(227,227,227,1)_100%)] absolute top-0 left-0" />
            </CardContent>
          </Card>

          {/* Property Stats Section */}
          <div className="container mx-auto mt-16">
            <div className="flex flex-col items-center mb-16">
              <div className="w-[108px] h-[108px] mb-8">
                <div className="relative w-[108px] h-[108px] bg-[url(/group.png)] bg-[100%_100%]">
                  <img
                    className="absolute w-[39px] h-10 top-[34px] left-[34px]"
                    alt="Vector"
                    src="/vector-1.svg"
                  />
                </div>
              </div>

              <h2 className="font-bold text-black text-xl md:text-[45.4px] text-center md:leading-[57.6px] mb-2">
                Seamless, transparent property transactions
              </h2>
              <p className="font-bold text-black text-xl md:text-[44.625px] text-center md:leading-[57.6px]">
                for a smarter real estate experience
              </p>
            </div>

            {/* Statistics */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
              {statistics.map((stat, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <Separator
                      orientation="vertical"
                      className="hidden md:block h-[99px] mx-8 bg-makyeetestframerwebsitefrench-gray"
                    />
                  )}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center">
                      <AnimatedCounter
                        to={stat.value}
                        className="font-bold text-black text-[50px] leading-[60px]"
                        duration={4 - index}
                      />

                      <span className="font-bold text-black text-[50px]">
                        +
                      </span>
                    </div>
                    <span className="font-medium text-makyeetestframerwebsitestorm-gray text-center mt-4">
                      {stat.label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferencesSection;

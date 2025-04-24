import { Badge } from "../../../../components/ui/badge";
import OnScrollAnimation from "../../../../components/ui/OnScrollAnimation";
import { useTranslation } from "react-i18next";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute w-full md:h-[832px] top-0 left-0">
        <div className="absolute container md:h-[715px] top-[79px] left-0 [background:radial-gradient(50%_50%_at_30%_50%,rgba(253,146,146,1)_0%,rgba(255,255,255,1)_100%)] opacity-20" />
      </div>

      {/* Hero Main Content */}
      <div className="relative w-full bg-contain bg-no-repeat bg-right  container md:h-[742px] mx-auto flex items-center">
        <div className="relative ">
          <div className="relative">
            {/* Hero Header */}
            <div className="flex flex-col md:flex-row items-center justify-between text-center">
              <div className="w-full md:w-[696px]">
                <Badge className="inline-flex items-center px-3.5 py-2 bg-white rounded-[100px] overflow-hidden backdrop-blur-[3px] border border-solid border-[#ea223c]">
                  <span className="font-medium text-black text-base text-center whitespace-nowrap">
                    {t("hero.trustedBy")}
                  </span>
                </Badge>

                <h1 className="mt-[62px] font-bold text-[#121b2f] text-[76.8px] leading-[92.2px] tracking-[-2.36px]">
                  {t("hero.title")}
                  <span className="text-[#ea223c]">MAKYEE</span>
                </h1>

                <p className="mt-[23px] font-medium text-makyeetestframerwebsitebig-stone text-[19.2px] tracking-[-0.38px] leading-[23.0px]">
                  {t("hero.subtitle")}
                </p>
                <OnScrollAnimation variant="fadeIn">
                  <div className="flex mt-[23px] gap-5 flex-col justify-center items-center md:flex-row">
                    <img
                      className="w-[185px] h-[55px]"
                      alt="App Store"
                      src="/svg-682879982-18174.svg"
                    />
                    <img
                      className="w-[185px] h-[55px]"
                      alt="Google Play"
                      src="/clip-path-group.png"
                    />
                  </div>
                </OnScrollAnimation>
              </div>

              <div className="py-5 md: py-0">
                <img src={"/Hero_Background.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

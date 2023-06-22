import { BuyButtonDiv } from "@/app/(site)/components/content";
import { ContentImage } from "@/app/(site)/components/content/content-image";
import { BuyContainer } from "@/app/(site)/components/content/content-left/content-left-item";
import { SvgContentCircle } from "@/app/(site)/components/icons/SvgContentCircle";

export const ContentItem = ({
  title = "Veckans webbdeal: DeoDoc",
  category = "Intimvård",
}: any) => (
  <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
    <div className="flex flex-col gap-6 h-full p-4">
      <a
        className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
        href="/erbjudanden/deodoc/"
      >
        <div className="sc-poi0qa-4 finCVp">
          <div className="sc-poi0qa-1 iQTqDB">
            <span data-testid="splash-container">
              <div className="sc-1uj7ubf-0 bvPhgT">
                <SvgContentCircle />
                <BuyContainer>
                  <span className="_big">25%</span>
                </BuyContainer>
              </div>
            </span>
          </div>
          <picture>
            <source
              type="image/webp"
              srcSet="https://images.ctfassets.net/azr0vzx7gzjb/6ZNcrVPazIK8sc1x9xQwus/8b30d210e1d8cd53706eb75cf9eff2cf/2023_Banners_K6_1000x1000px_DeoDoc.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/6ZNcrVPazIK8sc1x9xQwus/8b30d210e1d8cd53706eb75cf9eff2cf/2023_Banners_K6_1000x1000px_DeoDoc.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/6ZNcrVPazIK8sc1x9xQwus/8b30d210e1d8cd53706eb75cf9eff2cf/2023_Banners_K6_1000x1000px_DeoDoc.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
            />
            <ContentImage alt="2023 Banners K6 1000x1000px DeoDoc" />
          </picture>
        </div>
        <div className="sc-poi0qa-3 ftbkQW">
          <p className="sc-poi0qa-6 jSPnnK">{title}</p>
          <p className="sc-poi0qa-7 hpjYda">{category}</p>
        </div>
        <div className="sc-poi0qa-5 bSCcMs">
          <BuyButtonDiv />
        </div>
      </a>
    </div>
  </div>
);

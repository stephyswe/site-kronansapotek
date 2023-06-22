import {
  ArticleLarge,
  ContentArticleBase,
} from "@/app/(site)/components/content/content-article";
import { ContentCarousel } from "@/app/(site)/components/content/content-carousel";
import { CarouselImage } from "@/app/(site)/components/content/content-image";
import { ContentLeft } from "@/app/(site)/components/content/content-left";
import { BuyContainer } from "@/app/(site)/components/content/content-left/content-left-item";
import { ContentMiddle } from "@/app/(site)/components/content/content-middle";
import { ContentNavBase } from "@/app/(site)/components/content/content-nav";
import { ContentRight } from "@/app/(site)/components/content/content-right";
import { SvgContentCircle } from "@/app/(site)/components/icons/SvgContentCircle";

const Content = () => (
  <div className="content-container sc-1kfcalm-0 cNcisV">
    <div className="sc-GhhNo LOXOt">
      <ContentSection>
        <div className="sc-GhhNo LOXOt">
          <ContentLeft />
          <ContentRight />
        </div>
      </ContentSection>
      <ContentMiddle />
      <SectionArticles />
      <SectionProductsLarge />
    </div>
  </div>
);

export const ProductLargeCarouselItem = () => (
  <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
    <div className="flex flex-col gap-6 h-full p-4">
      <a
        className="sc-bBABsx eHSqcr sc-ejetxn-0 UYDDN"
        href="/erbjudanden/2-for-30-sol/"
      >
        <div className="sc-ejetxn-8 clIjbm">
          <div className="sc-ejetxn-1 eHcvai">
            <span data-testid="splash-container">
              <div className="sc-1uj7ubf-0 bvPhgT">
                <SvgContentCircle />
                <BuyContainer>
                  Köp <span className="_big">2</span> få{" "}
                  <span className="_big">30%</span>
                </BuyContainer>
              </div>
            </span>
          </div>
          <div className="sc-ejetxn-9 kmjJmV">
            <p className="sc-jfvxQR eOPIIs">Njut säkert av solen</p>
          </div>
          <div className="sc-ejetxn-3 eKuCCN">
            <picture>
              <source
                type="image/webp"
                srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=150&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=300&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=450&q=60&fit=fill 3x"
              />
              <CarouselImage />
            </picture>
          </div>
        </div>
        <div className="sc-ejetxn-10 OLPro">
          <div className="sc-ejetxn-5 keKWiw">
            <p className="sc-ejetxn-6 eNfIQE">Solvård</p>
            <p className="sc-ejetxn-7 hZQBAQ">Flera varumärken</p>
          </div>
          <div className="sc-ejetxn-4 cqAYao">
            <BuyButtonDiv />
          </div>
        </div>
      </a>
    </div>
  </div>
);

export const BuyButtonDiv = () => (
  <div className="sc-pyfCe fDKrIW">Handla nu</div>
);

export const ContentSection = ({ children }: any) => (
  <div className="sc-fbYMXx eCGKNa">{children}</div>
);

const SectionProductsLarge = () => (
  <ContentSection>
    <div className="sc-rqq63o-0 jCFpDk">
      <ContentCarousel type="large">
        <ProductLargeCarouselItem />
        <ProductLargeCarouselItem />
        <ProductLargeCarouselItem />
      </ContentCarousel>
      <ContentNavBase />
    </div>
  </ContentSection>
);

const SectionArticles = () => (
  <ContentSection>
    <ContentArticleBase
      Content={
        <div className="sc-1ipdl2c-0 fMXJco">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              <ArticleLarge />
            </div>
          ))}
        </div>
      }
    />
  </ContentSection>
);

export default Content;

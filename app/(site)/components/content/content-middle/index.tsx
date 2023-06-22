import { ContentSection } from "@/app/(site)/components/content";
import { ContentCarousel } from "@/app/(site)/components/content/content-carousel";
import { ContentItem } from "@/app/(site)/components/content/content-item";
import { ContentNavBase } from "@/app/(site)/components/content/content-nav";

export const ContentMiddle = () => (
  <ContentSection>
    <div className="sc-rqq63o-0 jCFpDk">
      <ContentCarousel>
        {[...Array(5)].map((_, index) => (
          <ContentItem key={index} />
        ))}
      </ContentCarousel>
      <ContentNavBase />
    </div>
  </ContentSection>
);

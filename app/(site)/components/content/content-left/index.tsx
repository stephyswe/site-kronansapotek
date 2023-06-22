import {
  ArticleLarge,
  ContentArticleBase,
} from "@/app/(site)/components/content/content-article";
import { ContentCarousel } from "@/app/(site)/components/content/content-carousel";
import { ContentLeftItem } from "@/app/(site)/components/content/content-left/content-left-item";
import { ContentNavBase } from "@/app/(site)/components/content/content-nav";

export const ContentLeft = () => (
  <div className="sc-fbYMXx hTlcoJ">
    <ContentArticleBase
      Content={
        <ArticleLarge
          anchor="Hitta våra midsommarfavoriter"
          href="/erbjudanden/midsommar/"
          title="Har du allt du behöver?"
          subtitle="Redo att fira midsommar? Ladda ditt husapotek och njut av livet före, under och efter midsommarafton!"
          src="https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?w=580&h=260&q=100&fit=fill&f=face"
          srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?fm=webp&w=580&h=260&q=100&fit=fill&f=face, https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?fm=webp&w=1160&h=520&q=100&fit=fill&f=face 2x, https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?fm=webp&w=1740&h=780&q=100&fit=fill&f=face 3x"
        />
      }
    />
    <div className="sc-rqq63o-0 jCFpDk">
      <ContentCarousel type="left">
        <ContentLeftItem />
        <ContentLeftItem />
        <ContentLeftItem />
      </ContentCarousel>
      <ContentNavBase />
    </div>
  </div>
);

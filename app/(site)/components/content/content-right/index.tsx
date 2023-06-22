import {
  ArticleLarge,
  ContentArticleBase,
} from "@/app/(site)/components/content/content-article";
import { ContentItem } from "@/app/(site)/components/content/content-item";

export const ContentRight = () => (
  <div className="sc-fbYMXx bGrmbN">
    <div className="sc-rqq63o-0 jCFpDk">
      <div aria-roledescription="karusell" className="sc-sbkcmx-0 fmGJQr">
        <div className="sc-sbkcmx-2 fQRWgY">
          <div className="sc-fXqpFg zgdLu sc-sbkcmx-1 llIABk">
            <ContentItem />
            <ContentItem />
            <ContentItem />
          </div>
        </div>
      </div>
    </div>
    <ContentArticleBase Content={<ArticleLarge />} />
    <div className="sc-rqq63o-0 jCFpDk">
      <div aria-roledescription="karusell" className="sc-sbkcmx-0 fmGJQr">
        <div className="sc-sbkcmx-2 fQRWgY">
          <div className="sc-fXqpFg zgdLu sc-sbkcmx-1 llIABk">
            <ContentItem />
            <ContentItem />
            <ContentItem />
          </div>
        </div>
      </div>
    </div>
  </div>
);

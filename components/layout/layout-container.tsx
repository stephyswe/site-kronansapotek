import Nav from "@/app/nav";
import { Suspense } from "react";

export const LayoutContainer = ({ Nav, Content }: any) => (
  <>
    <div id="kronan-modal-root" className="sc-ckEbSK ldHTBG"></div>
    <div id="kronan-sidebar-root" className="sc-ckEbSK ldHTBG"></div>
    <Suspense fallback="...">
      <div data-theme="default">
        <div className="gatsby-focus-wrapper">
          <button className="sc-5race9-0 jSxApR">
            <span className="sc-5race9-1 fSWhXl">Hoppa till sök</span>
          </button>
          <button className="sc-5race9-0 jSxApR">
            <span className="sc-5race9-1 fSWhXl">Hoppa till innehåll</span>
          </button>
          {Nav}
          {Content}
          {/* <Footer /> */}
          {/* <Analytics /> */}
        </div>
      </div>
    </Suspense>
  </>
);

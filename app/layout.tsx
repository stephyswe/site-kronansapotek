import { Suspense } from "react";
import Nav from "@/app/nav";

import "./globals.css";
import "./common.css";
import "./styles.css";
import "./custom.css";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
              <Nav />
              <main>{children}</main>
              {/* <Footer /> */}
              {/* <Analytics /> */}
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}

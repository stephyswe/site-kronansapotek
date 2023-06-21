import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

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
      <body className={cx(sfPro.variable, inter.variable)}>
        <div id="kronan-modal-root" className="sc-ckEbSK ldHTBG"></div>
        <div id="kronan-sidebar-root" className="sc-ckEbSK ldHTBG"></div>
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          {/*  <Nav /> */}
        </Suspense>

        <main>{children}</main>
        {/* <Footer /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}

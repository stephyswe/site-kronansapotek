"use client";

import useScroll from "@/lib/hooks/use-scroll";
import cn from "classnames";
import { useState } from "react";

const Nav = () => {
  //TODO: Check for scroll position and add class to nav
  const scrolled = useScroll(110);
  return (
    <div className="sticky top-0 z-10 flex flex-col">
      <Banner isScroll={scrolled} />
      <TopHeader />
      <TopLinks isScroll={scrolled} />
      <div className="flex flex-col gap-3 bg-white"></div>
    </div>
  );
};

export default Nav;

const TopLinks = ({ isScroll }: { isScroll: boolean }) => (
  <div
    className={cn(
      "flex bg-background py-3 shadow-[rgba(63,63,68,0.1)] md:bg-white md:py-5 md:shadow-sm",
      isScroll ? "hidden" : "flex"
    )}
  >
    <div className="content-container">
      <div className="hidden justify-between md:flex">
        <div className="flex gap-7">
          <button className="cursor-pointer border-none bg-none flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]">
            Produkter
          </button>
          <a
            className="sc-bBABsx eHSqcr flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]"
            href="/erbjudanden/"
          >
            Erbjudanden
          </a>
          <a
            className="sc-bBABsx eHSqcr flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]"
            href="/recept/logga-in/"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 30 29"
              style={{ color: "#47645a" }}
              className="sc-hLBbgP jbaWzw"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.27734 8.64709L12.3168 2.71934C13.5574 1.26001 15.7407 1.06902 17.2158 2.29077L18.1318 3.04938C19.6341 4.29358 19.8294 6.52578 18.5659 8.01193L13.5849 13.871L7.27734 8.64709Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.585 13.8711L8.54554 19.7988C7.3049 21.2582 5.12165 21.4492 3.64647 20.2274L2.73049 19.4688C1.22821 18.2246 1.03293 15.9924 2.29636 14.5063L7.27741 8.64717L13.585 13.8711Z"
                fill="currentColor"
                fillOpacity="0.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.846 18.7679L20.5567 25.3027C21.521 27.0007 23.6882 27.5814 25.3721 26.5929L26.2177 26.0965C27.8678 25.1279 28.4342 23.0137 27.4894 21.3499L23.7289 14.7275L16.846 18.7679Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.729 14.7275L20.0182 8.19263C19.054 6.49461 16.8868 5.91398 15.2028 6.90251L14.3573 7.39887C12.7072 8.36749 12.1408 10.4817 13.0856 12.1455L16.8461 18.7679L23.729 14.7275Z"
                fill="currentColor"
                fillOpacity="0.5"
              />
            </svg>
            Logga in på Mina recept
          </a>
        </div>
        <div className="flex gap-7">
          <a
            className="sc-bBABsx eHSqcr flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]"
            href="/hitta-apotek/"
          >
            Hitta apotek
          </a>
          <a
            className="sc-bBABsx eHSqcr flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]"
            href="/tjanster/"
          >
            Tjänster
          </a>
          <a
            className="sc-bBABsx eHSqcr flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]"
            href="/tipsochrad/"
          >
            Tips &amp; råd
          </a>
        </div>
      </div>
      <div className="block md:hidden">
        <div style={{ gridArea: "searchbar" }}>
          <form role="search" className="sc-1mb87g1-4 jCUVKA">
            <div className="sc-1mb87g1-0 gGEBEL">
              <input
                placeholder="Sök produkt"
                autoComplete="off"
                type="text"
                name="q"
                className="sc-1mb87g1-1 eyRcIz"
                value=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const TopHeader = () => (
  <div className="bg-background">
    <div className="content-container">
      <div className="flex items-center justify-between gap-3 py-3 md:gap-5 md:py-4">
        <div>
          <div className="md:hidden">
            <button className="cursor-pointer border-none bg-none flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sc-hLBbgP jbaWzw"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </svg>
              Meny
            </button>
          </div>
          <div className="hidden md:flex">
            <div className="m-0 w-[17.7rem] flex-initial">
              <a
                aria-current="page"
                className="sc-bBABsx eHSqcr sc-1yk6ry8-0 ecddQJ "
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 226.77 35.96"
                  fill="currentColor"
                  role="img"
                  aria-label="Kronans Apotek"
                >
                  <path d="M67.15,6.92h0c-3.5,0-6.2,3.24-6.95,4.23a4.8,4.8,0,0,0-4.12-2.38,4.7,4.7,0,0,0-3.55,1.59.42.42,0,0,0,0,.59,6.44,6.44,0,0,1,2.09,5.13,7,7,0,0,1-7.23,6.17,5.33,5.33,0,0,1-.57,0c-4-.28-7.12-3.51-6.86-7.18a6.63,6.63,0,0,1,4.26-5.6.45.45,0,0,0,.24-.25.41.41,0,0,0,0-.34,4.76,4.76,0,0,0-7-1.55c0-1.24-.27-5.43-3.45-7.25L33.9,0h-.12a.42.42,0,0,0-.21.06c-3.18,1.82-3.44,6-3.45,7.25a4.76,4.76,0,0,0-7,1.55.41.41,0,0,0,0,.34.45.45,0,0,0,.24.25,6.64,6.64,0,0,1,4.27,5.6c.26,3.67-2.82,6.9-6.86,7.18a5.52,5.52,0,0,1-.58,0c-3.8,0-7-2.71-7.22-6.17A6.43,6.43,0,0,1,15,11a.42.42,0,0,0,0-.59,4.73,4.73,0,0,0-3.55-1.59,4.81,4.81,0,0,0-4.13,2.38c-.74-1-3.45-4.23-6.94-4.23h0a.44.44,0,0,0-.37.21.42.42,0,0,0,0,.42,130,130,0,0,1,9.69,21,.42.42,0,0,0,.39.28h0l.82-.1a216.57,216.57,0,0,1,22.77-1.35h0a216.38,216.38,0,0,1,22.77,1.35l.82.1h.05a.42.42,0,0,0,.39-.28,129.36,129.36,0,0,1,9.68-21,.39.39,0,0,0,.07-.23.41.41,0,0,0-.41-.42" />
                  <path d="M56.31,31.31h-.07A211.33,211.33,0,0,0,33.78,30a210.92,210.92,0,0,0-22.45,1.34h-.08a.44.44,0,0,0-.3.2.42.42,0,0,0,0,.36c.29.86.56,1.7.81,2.47a.43.43,0,0,0,.4.3h.05c5.15-.56,13.91-1.22,21.61-1.22s16.46.66,21.62,1.22h0a.41.41,0,0,0,.4-.3c.25-.77.52-1.61.82-2.47a.44.44,0,0,0-.35-.56" />
                  <path d="M88.08,25.71,83,14.39h-.21l-5,11.32ZM69.36,34.47,82.05,6.66a.94.94,0,0,1,.7-.45h.41a.94.94,0,0,1,.7.45L96.47,34.47a.73.73,0,0,1-.71,1.07h-2.6a1,1,0,0,1-1-.62l-2.56-5.66H76.14c-.83,1.9-1.7,3.76-2.52,5.66a1.05,1.05,0,0,1-1,.62H70.06a.73.73,0,0,1-.7-1.07" />
                  <path d="M110.83,21a5.27,5.27,0,0,0,5.25-5.29,5.1,5.1,0,0,0-5.25-5h-5.7V21Zm-10-13.6a.78.78,0,0,1,.79-.78h9.42a9.22,9.22,0,1,1,0,18.43h-6v9.71a.81.81,0,0,1-.79.78h-2.68a.78.78,0,0,1-.79-.78Z" />
                  <path d="M138.87,31.82a10.74,10.74,0,1,0-10.7-10.7,10.74,10.74,0,0,0,10.7,10.7m0-25.61A14.88,14.88,0,1,1,124,21.12,14.85,14.85,0,0,1,138.87,6.21" />
                  <path d="M163.43,10.5H156a.79.79,0,0,1-.79-.78V7.4a.79.79,0,0,1,.79-.78h19.14a.78.78,0,0,1,.79.78V9.72a.78.78,0,0,1-.79.78h-7.42V34.76a.81.81,0,0,1-.79.78h-2.72a.82.82,0,0,1-.79-.78Z" />
                  <path d="M181.27,7.4a.78.78,0,0,1,.78-.78h16.53a.77.77,0,0,1,.78.78V9.72a.77.77,0,0,1-.78.78H185.53v8.43h11a.81.81,0,0,1,.78.79V22a.78.78,0,0,1-.78.79h-11V31.7h13.05a.77.77,0,0,1,.78.78v2.28a.77.77,0,0,1-.78.78H182.05a.78.78,0,0,1-.78-.78Z" />
                  <path d="M205.42,7.61a1,1,0,0,1,1-1h2.39a1,1,0,0,1,1,1V19.06L221.46,7a1,1,0,0,1,.78-.41h3.1a.86.86,0,0,1,.58,1.49L214,20.25l12.64,13.93a.87.87,0,0,1-.74,1.36h-3.31a.87.87,0,0,1-.74-.29l-12-13.55V34.55a1,1,0,0,1-1,1h-2.39a1,1,0,0,1-1-1Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-auto md:w-full lg:w-auto w-auto">
          <div style={{ gridArea: "searchbar" }} className="md:block hidden">
            <form role="search" className="sc-1mb87g1-4 jCUVKA">
              <div className="sc-1mb87g1-0 gGEBEL">
                <input
                  placeholder="Sök produkt"
                  autoComplete="off"
                  type="text"
                  name="q"
                  className="sc-1mb87g1-1 eyRcIz"
                  value=""
                />
              </div>
            </form>
          </div>
          <div className="mx-auto max-w-[17.7rem] md:hidden block">
            <a
              aria-current="page"
              className="sc-bBABsx eHSqcr sc-1yk6ry8-0 ecddQJ "
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 226.77 35.96"
                fill="currentColor"
                role="img"
                aria-label="Kronans Apotek"
              >
                <path d="M67.15,6.92h0c-3.5,0-6.2,3.24-6.95,4.23a4.8,4.8,0,0,0-4.12-2.38,4.7,4.7,0,0,0-3.55,1.59.42.42,0,0,0,0,.59,6.44,6.44,0,0,1,2.09,5.13,7,7,0,0,1-7.23,6.17,5.33,5.33,0,0,1-.57,0c-4-.28-7.12-3.51-6.86-7.18a6.63,6.63,0,0,1,4.26-5.6.45.45,0,0,0,.24-.25.41.41,0,0,0,0-.34,4.76,4.76,0,0,0-7-1.55c0-1.24-.27-5.43-3.45-7.25L33.9,0h-.12a.42.42,0,0,0-.21.06c-3.18,1.82-3.44,6-3.45,7.25a4.76,4.76,0,0,0-7,1.55.41.41,0,0,0,0,.34.45.45,0,0,0,.24.25,6.64,6.64,0,0,1,4.27,5.6c.26,3.67-2.82,6.9-6.86,7.18a5.52,5.52,0,0,1-.58,0c-3.8,0-7-2.71-7.22-6.17A6.43,6.43,0,0,1,15,11a.42.42,0,0,0,0-.59,4.73,4.73,0,0,0-3.55-1.59,4.81,4.81,0,0,0-4.13,2.38c-.74-1-3.45-4.23-6.94-4.23h0a.44.44,0,0,0-.37.21.42.42,0,0,0,0,.42,130,130,0,0,1,9.69,21,.42.42,0,0,0,.39.28h0l.82-.1a216.57,216.57,0,0,1,22.77-1.35h0a216.38,216.38,0,0,1,22.77,1.35l.82.1h.05a.42.42,0,0,0,.39-.28,129.36,129.36,0,0,1,9.68-21,.39.39,0,0,0,.07-.23.41.41,0,0,0-.41-.42" />
                <path d="M56.31,31.31h-.07A211.33,211.33,0,0,0,33.78,30a210.92,210.92,0,0,0-22.45,1.34h-.08a.44.44,0,0,0-.3.2.42.42,0,0,0,0,.36c.29.86.56,1.7.81,2.47a.43.43,0,0,0,.4.3h.05c5.15-.56,13.91-1.22,21.61-1.22s16.46.66,21.62,1.22h0a.41.41,0,0,0,.4-.3c.25-.77.52-1.61.82-2.47a.44.44,0,0,0-.35-.56" />
                <path d="M88.08,25.71,83,14.39h-.21l-5,11.32ZM69.36,34.47,82.05,6.66a.94.94,0,0,1,.7-.45h.41a.94.94,0,0,1,.7.45L96.47,34.47a.73.73,0,0,1-.71,1.07h-2.6a1,1,0,0,1-1-.62l-2.56-5.66H76.14c-.83,1.9-1.7,3.76-2.52,5.66a1.05,1.05,0,0,1-1,.62H70.06a.73.73,0,0,1-.7-1.07" />
                <path d="M110.83,21a5.27,5.27,0,0,0,5.25-5.29,5.1,5.1,0,0,0-5.25-5h-5.7V21Zm-10-13.6a.78.78,0,0,1,.79-.78h9.42a9.22,9.22,0,1,1,0,18.43h-6v9.71a.81.81,0,0,1-.79.78h-2.68a.78.78,0,0,1-.79-.78Z" />
                <path d="M138.87,31.82a10.74,10.74,0,1,0-10.7-10.7,10.74,10.74,0,0,0,10.7,10.7m0-25.61A14.88,14.88,0,1,1,124,21.12,14.85,14.85,0,0,1,138.87,6.21" />
                <path d="M163.43,10.5H156a.79.79,0,0,1-.79-.78V7.4a.79.79,0,0,1,.79-.78h19.14a.78.78,0,0,1,.79.78V9.72a.78.78,0,0,1-.79.78h-7.42V34.76a.81.81,0,0,1-.79.78h-2.72a.82.82,0,0,1-.79-.78Z" />
                <path d="M181.27,7.4a.78.78,0,0,1,.78-.78h16.53a.77.77,0,0,1,.78.78V9.72a.77.77,0,0,1-.78.78H185.53v8.43h11a.81.81,0,0,1,.78.79V22a.78.78,0,0,1-.78.79h-11V31.7h13.05a.77.77,0,0,1,.78.78v2.28a.77.77,0,0,1-.78.78H182.05a.78.78,0,0,1-.78-.78Z" />
                <path d="M205.42,7.61a1,1,0,0,1,1-1h2.39a1,1,0,0,1,1,1V19.06L221.46,7a1,1,0,0,1,.78-.41h3.1a.86.86,0,0,1,.58,1.49L214,20.25l12.64,13.93a.87.87,0,0,1-.74,1.36h-3.31a.87.87,0,0,1-.74-.29l-12-13.55V34.55a1,1,0,0,1-1,1h-2.39a1,1,0,0,1-1-1Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-initial items-center justify-between gap-5">
          <div className="hidden md:block">
            <a
              className="sc-bBABsx eHSqcr flex flex-col items-center gap-0 font-medium text-black hover:underline md:flex-row md:gap-2 lg:underline-offset-[10px]"
              href="/kundklubb/login/"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                style={{ color: "#47645a" }}
                className="sc-hLBbgP jbaWzw"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 9C13.3807 9 14.5 7.88071 14.5 6.5C14.5 5.11929 13.3807 4 12 4C10.6193 4 9.5 5.11929 9.5 6.5C9.5 7.88071 10.6193 9 12 9ZM12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11ZM7.2491 15.5628C5.27808 17.0199 4 19.3607 4 22C4 22.5523 3.55228 23 3 23C2.44772 23 2 22.5523 2 22C2 16.4772 6.47715 12 12 12C17.5228 12 22 16.4772 22 22C22 22.5523 21.5523 23 21 23C20.4477 23 20 22.5523 20 22C20 19.3607 18.7219 17.0199 16.7509 15.5628C16.0947 17.5589 14.2156 19 12 19C9.78436 19 7.90532 17.5589 7.2491 15.5628ZM9.05229 14.5606C9.31481 15.9495 10.5347 17 12 17C13.4653 17 14.6852 15.9495 14.9477 14.5606C14.0355 14.1988 13.041 14 12 14C10.959 14 9.96448 14.1988 9.05229 14.5606Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sc-9t8u3c-0 hsTVKo">Logga in i kundklubben</span>
            </a>
          </div>
          <button
            id="cart-cta"
            aria-label="Varukorg. Inga varor. Öppna varukorg"
            aria-expanded="false"
            aria-haspopup="dialog"
            className="sc-1myo3ws-8 gIDLTk"
          >
            <div className="sc-1myo3ws-1 dizEbR">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="sc-hLBbgP jbaWzw"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
              </svg>
            </div>
            <div className="sc-1myo3ws-6 ctrnom">
              <span className="sc-1myo3ws-4 eGAZkq">Varukorg</span>{" "}
              <span id="no-products" className="sc-1myo3ws-5 jtxPuX">
                Inga&nbsp;varor
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Banner = ({ isScroll }: { isScroll: boolean }) => {
  return (
    <div
      aria-hidden={isScroll ? "true" : "false"}
      className={cn(
        "bg-primary hidden text-white md:flex",
        isScroll ? "h-0 opacity-50" : "h-10 opacity-100"
      )}
      style={{
        transition: "height 0.2s ease-in-out, opacity 0.5s ease-in-out",
      }}
    >
      <div className="content-container flex flex-1 items-center justify-between">
        <div className="flex gap-10">
          <div className="flex items-center gap-1 py-3 font-medium text-white">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "text-top" }}
              className="sc-hLBbgP jbaWzw"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Fri frakt på receptbelagt
          </div>
          <div className="flex items-center gap-1 py-3 font-medium text-white">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "text-top" }}
              className="sc-hLBbgP jbaWzw"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Brett utbud
          </div>
          <div className="flex items-center gap-1 py-3 font-medium text-white">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "text-top" }}
              className="sc-hLBbgP jbaWzw"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Hälsosamma priser
          </div>
        </div>
        <div className="flex gap-10">
          <a
            href="/vardkund-foretag"
            className="sc-bBABsx eHSqcr flex items-center gap-1 py-3 font-medium text-white underline"
          >
            Vårdkund &amp; Företag
          </a>
        </div>
      </div>
    </div>
  );
};

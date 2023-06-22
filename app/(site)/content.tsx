"use client";

import ContentItem from "@/app/(site)/components/content-item";
import { useState } from "react";

const SvgArrowLeft = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sc-hLBbgP jbaWzw"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1={19} y1={12} x2={5} y2={12} />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const SvgArrowRight = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sc-hLBbgP jbaWzw"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1={5} y1={12} x2={19} y2={12} />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ContentButton = ({ Icon, title = "Nästa", ...rest }: any) => {
  return (
    <button aria-label="Nästa kampanj" className="sc-iBYQkv bgpZmg" {...rest}>
      {title === "Nästa" ? (
        <>
          <span className="hidden md:flex">{title}</span>
          <SvgArrowRight />
        </>
      ) : (
        <>
          <SvgArrowLeft />
          <span className="hidden md:flex">{title}</span>
        </>
      )}
    </button>
  );
};

const Content = ({ data }: any) => {
  const [isClick, setIsClick] = useState(0);
  const getNextIndex = (
    currentIndex: number,
    isPrevious: boolean,
    maxIndex: number
  ): number => {
    if (isPrevious) {
      return currentIndex === 0 ? maxIndex : currentIndex - 1;
    }

    return currentIndex === maxIndex ? 0 : currentIndex + 1;
  };

  const onClick = ({ prev }: any) => {
    setIsClick((currentIsClick: number) => {
      const maxIndex = data.length - 1;
      const nextIndex = getNextIndex(currentIsClick, prev, maxIndex);
      return nextIndex;
    });
  };

  const calcWidth = () => {
    const width = (isClick + 1) * (100 / data.length);
    return `${width}%`;
  };

  return (
    <div className="content-container px-0 sc-1kfcalm-1 iRmRvp">
      <div aria-roledescription="karusell" className="sc-sbkcmx-0 fmGJQr">
        <div className="sc-sbkcmx-2 fQRWgY">
          <div className="sc-fXqpFg fvVFHK sc-sbkcmx-1 llIABk">
            {data.map((item: any, index: number) => (
              <a
                key={item.id}
                className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR transition-all"
                tabIndex={isClick === index ? 0 : -1}
                aria-hidden={isClick === index ? "true" : "false"}
                aria-live="polite"
                role="group"
                href="/erbjudanden/eucerin-sol/"
                style={{
                  display: index === isClick ? "block" : "none",
                  transition: "all 2 ease",
                }}
              >
                <ContentItem key={item.id} {...item} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="sc-i6rw15-1 kxDzAb">
        <ContentButton
          title="Föregående"
          aria-label="Föregående kampanj"
          onClick={() => onClick({ prev: true })}
        />
        <p className="sr-only">`Kampanj ${isClick} av 9</p>
        <div
          aria-live="polite"
          aria-controls="carousel"
          className="sc-i6rw15-4 bqOrht"
        >
          <div className="h-2 w-48 rounded-md bg-green-50">
            <div
              className="h-2 rounded-md bg-green-800 transition-all"
              style={{ width: calcWidth() }}
            />
          </div>
        </div>
        <ContentButton aria-label="Nästa kampanj" onClick={onClick} />
      </div>
    </div>
  );
};

export default Content;

"use client";

import { HeroButton } from "@/app/(site)/components/hero/hero-button";
import HeroItem from "@/app/(site)/components/hero/hero-item";
import { useState } from "react";

const Hero = ({ data }: any) => {
  const maxIndex = data.length - 1;
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
                <HeroItem key={item.id} {...item} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="sc-i6rw15-1 kxDzAb">
        <HeroButton
          title="Föregående"
          aria-label="Föregående kampanj"
          onClick={() => onClick({ prev: true })}
        />
        <p className="sr-only">
          `Kampanj ${isClick} av {maxIndex}
        </p>
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
        <HeroButton aria-label="Nästa kampanj" onClick={onClick} />
      </div>
    </div>
  );
};

export default Hero;

import cn from "classnames";

interface ContentCarouselProps {
  children: React.ReactNode;
  type?: "default" | "left" | "large";
}

type TypeData = {
  default: string;
  left: string;
  large: string;
};

export const ContentCarousel = ({
  children,
  type = "default",
}: ContentCarouselProps) => {
  const typeData: TypeData = {
    default: "dNqIMR",
    left: "hSThcY",
    large: "lircLF",
  };

  return (
    <div aria-roledescription="karusell" className="sc-sbkcmx-0 fmGJQr">
      <div className="sc-sbkcmx-2 fQRWgY">
        <div
          className={cn(
            "sc-fXqpFg",
            typeData[type] || typeData.default,
            "sc-sbkcmx-1 llIABk"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

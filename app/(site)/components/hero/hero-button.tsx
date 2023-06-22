import { SvgArrowLeft } from "@/app/(site)/components/icons/SvgArrowLeft";
import { SvgArrowRight } from "@/app/(site)/components/icons/SvgArrowRight";

export const HeroButton = ({ Icon, title = "Nästa", ...rest }: any) => {
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

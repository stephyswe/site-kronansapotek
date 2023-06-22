import { SvgArrowLeftSmall } from "@/app/(site)/components/icons/SvgArrowLeftSmall";
import { SvgArrowRightSmall } from "@/app/(site)/components/icons/SvgArrowRightSmall";
import cn from "classnames";

export const ContentNavBase = () => (
  <div className="sc-i6rw15-2 iOKLgb">
    <ContentNav isPrev label="Föregående" icon={<SvgArrowLeftSmall />} />
    <ContentNav label="Nästa" icon={<SvgArrowRightSmall />} />
  </div>
);

export const ContentNav = ({ isPrev, label, icon }: any) => {
  const containerClasses = cn("sc-i6rw15-7", {
    fPXTEX: isPrev,
    fCqcvx: !isPrev,
  });

  const iconContainerClasses = cn("sc-i6rw15-6 _controls-button-icon", {
    uuJon: isPrev,
    iogIpo: !isPrev,
  });

  const labelClasses = cn("pb-2 md:pb-0", {
    "md:pl-2": isPrev,
    "md:pr-2": !isPrev,
  });

  return (
    <button type="button" className="sc-i6rw15-0 iLwOsH">
      <span className={containerClasses}>
        {isPrev ? (
          <>
            <div className={iconContainerClasses}>{icon}</div>
            <span className={labelClasses} aria-label={label}>
              {label}
            </span>
          </>
        ) : (
          <>
            <span className={labelClasses} aria-label={label}>
              {label}
            </span>
            <div className={iconContainerClasses}>{icon}</div>
          </>
        )}
      </span>
    </button>
  );
};

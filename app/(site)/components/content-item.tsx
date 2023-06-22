import cn from "classnames";

const SvgContentItemWhite = () => (
  <svg
    viewBox="0 0 375 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sc-hg64kz-3 eNntOj"
  >
    <path
      d="M0 12.1307C43.1176 27.2498 126 86.583 217 33.3669C289.211 -8.86112 343.421 -4.24675 375 12.1307V299.316H0V12.1307Z"
      fill="white"
    />
  </svg>
);

const SvgContentItemWave = () => (
  <svg
    viewBox="0 0 100 401"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sc-hg64kz-2 gTMrFH"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.4949 110.136C34.4739 67.894 41.0399 28.1504 0.523926 0.750488L0.524048 400.751H90.3409C106.537 368.993 106.024 300 44.0239 226C14.2289 190.438 21.0389 149.218 27.4949 110.136Z"
      fill="white"
    />
  </svg>
);

const SvgContentItemCircle = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    style={{
      color: "#92253e",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "100%",
      width: "100%",
    }}
    className="sc-hLBbgP jbaWzw"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={50} cy={50} r={50} />
  </svg>
);

const ContentItem = ({ title, subtitle, price, picture, tag }: any) => (
  <div className="sc-jtfxai-2 SdrfY">
    <div className="sc-hg64kz-1 ghltkC">
      <SvgContentItemWhite />
    </div>
    <div className="sc-jtfxai-4 gyHpKb">
      <div className="sc-jtfxai-7 ibZWLp">
        <div className="sc-jtfxai-8 aUTa-D">
          <p className="sc-jtfxai-12 iLiFMI">{tag}</p>
          <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
            {title}
          </h2>
          <div className="sc-jtfxai-5 bMldCn">
            <p className="sc-jtfxai-6 djmmPy">{subtitle}</p>
          </div>
        </div>
        <div className="sc-jtfxai-10 kpqjsz">
          <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
        </div>
      </div>
    </div>
    <div className="sc-hg64kz-0 iotCsn">
      <SvgContentItemWave />
    </div>
    <div className="sc-jtfxai-16 hwxwSe">
      <div className="sc-jtfxai-13 cgJzQJ">
        <ContentItemSlashContainer
          parentClassName="sc-jtfxai-15 bSaFnm"
          itemClassName="bXUzSz"
          price={price}
        />
        <ContentItemSlashContainer
          parentClassName="sc-jtfxai-14 ctxvZv"
          itemClassName="exVIvN"
          price={price}
        />
      </div>
      <ContentItemMedia data={picture} />
    </div>
  </div>
);

const ContentItemSlashContainer = ({
  parentClassName,
  itemClassName,
  price,
}: any) => (
  <div className={parentClassName}>
    <span data-testid="splash-container">
      <div className={cn("sc-1uj7ubf-0", itemClassName)}>
        <SvgContentItemCircle />
        <span
          className="sc-1uj7ubf-1 cjGIQh"
          dangerouslySetInnerHTML={{ __html: price }}
        />
      </div>
    </span>
  </div>
);

const ContentItemMedia = ({ data }: { data: any }) => (
  <div
    className="sc-jtfxai-0 dQtbtO"
    dangerouslySetInnerHTML={{ __html: data }}
  />
);

export default ContentItem;

import { SvgHeroCircle } from "@/app/(site)/components/icons/SvgHeroCircle";
import SvgContentItemWave from "@/app/(site)/components/icons/SvgContentItemWave";
import SvgContentItemWhite from "@/app/(site)/components/icons/SvgContentItemWhite";
import cn from "classnames";

const HeroItem = ({ title, subtitle, price, picture, tag }: any) => (
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
        <HeroPrice
          parentClassName="sc-jtfxai-15 bSaFnm"
          itemClassName="bXUzSz"
          price={price}
        />
        <HeroPrice
          parentClassName="sc-jtfxai-14 ctxvZv"
          itemClassName="exVIvN"
          price={price}
        />
      </div>
      <HeroMedia data={picture} />
    </div>
  </div>
);

const HeroPrice = ({ parentClassName, itemClassName, price }: any) => (
  <div className={parentClassName}>
    <span data-testid="splash-container">
      <div className={cn("sc-1uj7ubf-0", itemClassName)}>
        <SvgHeroCircle />
        <span
          className="sc-1uj7ubf-1 cjGIQh"
          dangerouslySetInnerHTML={{ __html: price }}
        />
      </div>
    </span>
  </div>
);

const HeroMedia = ({ data }: { data: any }) => (
  <div
    className="sc-jtfxai-0 dQtbtO"
    dangerouslySetInnerHTML={{ __html: data }}
  />
);

export default HeroItem;

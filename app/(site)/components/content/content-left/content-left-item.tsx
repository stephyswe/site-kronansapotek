import { SvgContentCircle } from "@/app/(site)/components/icons/SvgContentCircle";

export const BuyContainer = ({ children }: any) => (
  <span className="sc-1uj7ubf-1 cjGIQh">{children}</span>
);

export const ContentLeftItem = () => (
  <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
    <div className="flex flex-col gap-6 h-full p-4">
      <div className="sc-1cs31k4-8 caqxlK">
        <a
          className="sc-bBABsx eHSqcr"
          href="/la-roche-posay-anthelios-uvmune-ultra-creme-spf-50/p/793688/"
        >
          <div className="sc-1cs31k4-7 kYfPwl">
            <span data-testid="splash-container">
              <div className="sc-1uj7ubf-0 bvPhgT">
                <SvgContentCircle type="red" />
                <BuyContainer>
                  Köp <span className="_big">2</span> få{" "}
                  <span className="_big">30%</span>
                </BuyContainer>
              </div>
            </span>
          </div>
          <div className="sc-1cs31k4-5 vXLD">
            <img // eslint-disable-line @next/next/no-img-element
              src="https://www.kronansapotek.se/k2/images/793688/medium/0.jpg"
              alt=""
              className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy"
              aria-hidden="true"
            />
          </div>
          <div className="h-5">
            <div className="flex items-center gap-1">
              <span className="sr-only">4.9 av 5 i omdöme.</span>
              <div className="flex w-[100px] gap-1" aria-hidden="true">
                <svg height="16px" version="2.0">
                  <use xlinkHref="#rating-star-100" />
                </svg>
                <svg height="16px" version="2.0">
                  <use xlinkHref="#rating-star-100" />
                </svg>
                <svg height="16px" version="2.0">
                  <use xlinkHref="#rating-star-100" />
                </svg>
                <svg height="16px" version="2.0">
                  <use xlinkHref="#rating-star-100" />
                </svg>
                <svg height="16px" version="2.0">
                  <use xlinkHref="#rating-star-70" />
                </svg>
              </div>
            </div>
          </div>
          <p className="sc-1cs31k4-0 gFgqMC">
            La Roche-Posay Anthelios Uvmune Ultra Creme SPF 50+
          </p>
          <p className="sc-1cs31k4-1 fekXPS">Solskydd för ansiktet 50 ml</p>
        </a>
        <div className="sc-1cs31k4-6 jEKDcl">
          <a
            className="sc-bBABsx eHSqcr"
            aria-hidden="true"
            tabIndex={-1}
            href="/la-roche-posay-anthelios-uvmune-ultra-creme-spf-50/p/793688/"
          >
            <div className="sc-1cs31k4-10 hFGZnj">
              <div className="sc-1nliwg8-1 iCqujQ">
                <span className="sc-1nliwg8-2 csiLnn">Pris online</span>
                <span
                  data-testid="current-price"
                  className="sc-1nliwg8-0 bgcUZe"
                >
                  <span>185&nbsp;kr</span>
                </span>
              </div>
            </div>
          </a>
          <div className="sc-1cs31k4-3 dZzjqj">
            <button
              aria-label="Köp La Roche-Posay Anthelios Uvmune Ultra Creme SPF 50+, 185 kr."
              type="button"
              className="sc-iBYQkv dtkngZ"
            >
              <span data-testid="793688-buy-button">
                Köp
                <span className="sr-only">
                  {" "}
                  La Roche-Posay Anthelios Uvmune Ultra Creme SPF 50+, 185 kr.
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

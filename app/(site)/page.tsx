import { DEPLOY_URL } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import Image from "next/image";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="">
        <div id="gatsby-focus-wrapper">
          <button className="sc-5race9-0 jSxApR">
            <span className="sc-5race9-1 fSWhXl">Hoppa till sök</span>
          </button>
          <button className="sc-5race9-0 jSxApR">
            <span className="sc-5race9-1 fSWhXl">Hoppa till innehåll</span>
          </button>
          <div className="sticky top-0 z-10 flex flex-col">
            <Banner />
            <TopHeader />
            <TopLinks />
            <div className="flex flex-col gap-3 bg-white"></div>
          </div>
          <main>
            <Content />
            <ContentBottom />
          </main>
        </div>
      </div>
    </>
  );
}

const ContentBottom = () => (
  <div className="content-container sc-1kfcalm-0 cNcisV">
    <div className="sc-GhhNo LOXOt">
      <div className="sc-fbYMXx eCGKNa">
        <div className="sc-GhhNo LOXOt">
          <div className="sc-fbYMXx hTlcoJ">
            <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl mb-2 shadow-base">
              <div className="flex flex-col gap-6 h-full p-4">
                <div className="sc-17jters-2 cwsJVb">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?fm=webp&w=580&h=260&q=100&fit=fill&f=face, https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?fm=webp&w=1160&h=520&q=100&fit=fill&f=face 2x, https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?fm=webp&w=1740&h=780&q=100&fit=fill&f=face 3x"
                    />
                    <img
                      src="https://images.ctfassets.net/azr0vzx7gzjb/2hubBImBU6X5Ah0aN3Rmab/84ec5e2e8e8cc4dfd0611105519d642c/midsommar-754x320.jpg?w=580&h=260&q=100&fit=fill&f=face"
                      alt=""
                      className="sc-kImNAt dgZtvx sc-17jters-0 bFBsgN"
                    />
                  </picture>
                  <div className="sc-17jters-1 kkvHeL">
                    <div className="sc-17jters-3 laiymN">
                      <h3 className="sc-bcXHqe fawONg">
                        Har du allt du behöver?
                      </h3>
                      <p className="sc-hBxehG hAbZzJ">
                        Redo att fira midsommar? Ladda ditt husapotek och njut
                        av livet före, under och efter midsommarafton!{" "}
                      </p>
                    </div>
                    <div className="w-fit pb-1">
                      <a
                        className="sc-ftTHYK fohUGO"
                        href="/erbjudanden/midsommar/"
                      >
                        Hitta våra midsommarfavoriter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-rqq63o-0 jCFpDk">
              <div
                aria-roledescription="karusell"
                className="sc-sbkcmx-0 fmGJQr"
              >
                <div className="sc-sbkcmx-2 fQRWgY">
                  <div className="sc-fXqpFg hSThcY sc-sbkcmx-1 llIABk">
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
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(235, 0, 76)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    Köp <span className="_big">2</span> få{" "}
                                    <span className="_big">30%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="https://www.kronansapotek.se/k2/images/793688/medium/0.jpg"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="h-5">
                              <div className="flex items-center gap-1">
                                <span className="sr-only">
                                  4.9 av 5 i omdöme.
                                </span>
                                <div
                                  className="flex w-[100px] gap-1"
                                  aria-hidden="true"
                                >
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-70" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              La Roche-Posay Anthelios Uvmune Ultra Creme SPF
                              50+
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Solskydd för ansiktet 50 ml
                            </p>
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
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
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
                                    La Roche-Posay Anthelios Uvmune Ultra Creme
                                    SPF 50+, 185 kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <div className="sc-1cs31k4-8 caqxlK">
                          <a
                            className="sc-bBABsx eHSqcr"
                            href="/Eucerin-Anti-Pigment-Day-Cream-SPF-30/p/775102/"
                          >
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="https://www.kronansapotek.se/k2/images/775102/medium/0.jpg"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="h-5">
                              <div className="flex items-center gap-1">
                                <span className="sr-only">
                                  4.4 av 5 i omdöme.
                                </span>
                                <div
                                  className="flex w-[100px] gap-1"
                                  aria-hidden="true"
                                >
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-40" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              Eucerin Anti-Pigment Day Cream SPF 30
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Dagkräm, 50 ml
                            </p>
                          </a>
                          <div className="sc-1cs31k4-6 jEKDcl">
                            <a
                              className="sc-bBABsx eHSqcr"
                              aria-hidden="true"
                              tabIndex={-1}
                              href="/Eucerin-Anti-Pigment-Day-Cream-SPF-30/p/775102/"
                            >
                              <div className="sc-1cs31k4-10 hFGZnj">
                                <div className="sc-1nliwg8-1 iCqujQ">
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
                                  <span
                                    data-testid="current-price"
                                    className="sc-1nliwg8-0 bgcUZe"
                                  >
                                    <span>249&nbsp;kr</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="sc-1cs31k4-3 dZzjqj">
                              <button
                                aria-label="Köp Eucerin Anti-Pigment Day Cream SPF 30, 249 kr."
                                type="button"
                                className="sc-iBYQkv dtkngZ"
                              >
                                <span data-testid="775102-buy-button">
                                  Köp
                                  <span className="sr-only">
                                    {" "}
                                    Eucerin Anti-Pigment Day Cream SPF 30, 249
                                    kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <div className="sc-1cs31k4-8 caqxlK">
                          <a
                            className="sc-bBABsx eHSqcr"
                            href="/la-roche-posay-anthelios-uvmune-ultra-light-creme-spf-50/p/793687/"
                          >
                            <div className="sc-1cs31k4-7 kYfPwl">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(235, 0, 76)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    Köp <span className="_big">2</span> få{" "}
                                    <span className="_big">30%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy _is-loading"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="h-5">
                              <div className="flex items-center gap-1">
                                <span className="sr-only">
                                  4.8 av 5 i omdöme.
                                </span>
                                <div
                                  className="flex w-[100px] gap-1"
                                  aria-hidden="true"
                                >
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-70" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              La Roche-Posay Anthelios Uvmune Ultra Light Creme
                              SPF 50+
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Solskydd för ansiktet 50 ml
                            </p>
                          </a>
                          <div className="sc-1cs31k4-6 jEKDcl">
                            <a
                              className="sc-bBABsx eHSqcr"
                              aria-hidden="true"
                              tabIndex={-1}
                              href="/la-roche-posay-anthelios-uvmune-ultra-light-creme-spf-50/p/793687/"
                            >
                              <div className="sc-1cs31k4-10 hFGZnj">
                                <div className="sc-1nliwg8-1 iCqujQ">
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
                                  <span
                                    data-testid="current-price"
                                    className="sc-1nliwg8-0 bgcUZe"
                                  >
                                    <span>189&nbsp;kr</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="sc-1cs31k4-3 dZzjqj">
                              <button
                                aria-label="Köp La Roche-Posay Anthelios Uvmune Ultra Light Creme SPF 50+, 189 kr."
                                type="button"
                                className="sc-iBYQkv dtkngZ"
                              >
                                <span data-testid="793687-buy-button">
                                  Köp
                                  <span className="sr-only">
                                    {" "}
                                    La Roche-Posay Anthelios Uvmune Ultra Light
                                    Creme SPF 50+, 189 kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <div className="sc-1cs31k4-8 caqxlK">
                          <a
                            className="sc-bBABsx eHSqcr"
                            href="/Sjö--Hav/p/769872/"
                          >
                            <div className="sc-1cs31k4-7 kYfPwl">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(235, 0, 76)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    <span className="_big">3</span> för{" "}
                                    <span className="_big">2</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy _is-loading"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              Sjö&amp;Hav Mygg + Fästing
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Mygg- och fästing Spray 75 ml
                            </p>
                          </a>
                          <div className="sc-1cs31k4-6 jEKDcl">
                            <a
                              className="sc-bBABsx eHSqcr"
                              aria-hidden="true"
                              tabIndex={-1}
                              href="/Sjö--Hav/p/769872/"
                            >
                              <div className="sc-1cs31k4-10 hFGZnj">
                                <div className="sc-1nliwg8-1 iCqujQ">
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
                                  <span
                                    data-testid="current-price"
                                    className="sc-1nliwg8-0 bgcUZe"
                                  >
                                    <span>135&nbsp;kr</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="sc-1cs31k4-3 dZzjqj">
                              <button
                                aria-label="Köp Sjö&Hav Mygg + Fästing, 135 kr."
                                type="button"
                                className="sc-iBYQkv dtkngZ"
                              >
                                <span data-testid="769872-buy-button">
                                  Köp
                                  <span className="sr-only">
                                    {" "}
                                    Sjö&amp;Hav Mygg + Fästing, 135 kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <div className="sc-1cs31k4-8 caqxlK">
                          <a
                            className="sc-bBABsx eHSqcr"
                            href="/EVY-TECHNOLOGY/p/760110/"
                          >
                            <div className="sc-1cs31k4-7 kYfPwl">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(235, 0, 76)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    Köp <span className="_big">2</span> få{" "}
                                    <span className="_big">30%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy _is-loading"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="h-5">
                              <div className="flex items-center gap-1">
                                <span className="sr-only">
                                  4.8 av 5 i omdöme.
                                </span>
                                <div
                                  className="flex w-[100px] gap-1"
                                  aria-hidden="true"
                                >
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-70" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              EVY Technology Solskydd Mousse SPF30
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Solskydd 150 ml
                            </p>
                          </a>
                          <div className="sc-1cs31k4-6 jEKDcl">
                            <a
                              className="sc-bBABsx eHSqcr"
                              aria-hidden="true"
                              tabIndex={-1}
                              href="/EVY-TECHNOLOGY/p/760110/"
                            >
                              <div className="sc-1cs31k4-10 hFGZnj">
                                <div className="sc-1nliwg8-1 iCqujQ">
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
                                  <span
                                    data-testid="current-price"
                                    className="sc-1nliwg8-0 bgcUZe"
                                  >
                                    <span>177&nbsp;kr</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="sc-1cs31k4-3 dZzjqj">
                              <button
                                aria-label="Köp EVY Technology Solskydd Mousse SPF30, 177 kr."
                                type="button"
                                className="sc-iBYQkv dtkngZ"
                              >
                                <span data-testid="760110-buy-button">
                                  Köp
                                  <span className="sr-only">
                                    {" "}
                                    EVY Technology Solskydd Mousse SPF30, 177
                                    kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <div className="sc-1cs31k4-8 caqxlK">
                          <a
                            className="sc-bBABsx eHSqcr"
                            href="/The-Ordinary-Niacinamide/p/775851/"
                          >
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy _is-loading"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="h-5">
                              <div className="flex items-center gap-1">
                                <span className="sr-only">
                                  4.5 av 5 i omdöme.
                                </span>
                                <div
                                  className="flex w-[100px] gap-1"
                                  aria-hidden="true"
                                >
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-50" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              The Ordinary Niacinamide
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Niacinamide 10% + Zinc 1% 30ml
                            </p>
                          </a>
                          <div className="sc-1cs31k4-6 jEKDcl">
                            <a
                              className="sc-bBABsx eHSqcr"
                              aria-hidden="true"
                              tabIndex={-1}
                              href="/The-Ordinary-Niacinamide/p/775851/"
                            >
                              <div className="sc-1cs31k4-10 hFGZnj">
                                <div className="sc-1nliwg8-1 iCqujQ">
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
                                  <span
                                    data-testid="current-price"
                                    className="sc-1nliwg8-0 bgcUZe"
                                  >
                                    <span>89&nbsp;kr</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="sc-1cs31k4-3 dZzjqj">
                              <button
                                aria-label="Köp The Ordinary Niacinamide, 89 kr."
                                type="button"
                                className="sc-iBYQkv dtkngZ"
                              >
                                <span data-testid="775851-buy-button">
                                  Köp
                                  <span className="sr-only">
                                    {" "}
                                    The Ordinary Niacinamide, 89 kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <div className="sc-1cs31k4-8 caqxlK">
                          <a
                            className="sc-bBABsx eHSqcr"
                            href="/Eucerin-Hyaluron-Filler--Elasticity-Night-Cream/p/768684/"
                          >
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy _is-loading"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="h-5">
                              <div className="flex items-center gap-1">
                                <span className="sr-only">
                                  4.7 av 5 i omdöme.
                                </span>
                                <div
                                  className="flex w-[100px] gap-1"
                                  aria-hidden="true"
                                >
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-70" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              Eucerin Hyaluron Filler + Elasticity Night Cream
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Nattkräm, 50 ml
                            </p>
                          </a>
                          <div className="sc-1cs31k4-6 jEKDcl">
                            <a
                              className="sc-bBABsx eHSqcr"
                              aria-hidden="true"
                              tabIndex={-1}
                              href="/Eucerin-Hyaluron-Filler--Elasticity-Night-Cream/p/768684/"
                            >
                              <div className="sc-1cs31k4-10 hFGZnj">
                                <div className="sc-1nliwg8-1 iCqujQ">
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
                                  <span
                                    data-testid="current-price"
                                    className="sc-1nliwg8-0 bgcUZe"
                                  >
                                    <span>299&nbsp;kr</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="sc-1cs31k4-3 dZzjqj">
                              <button
                                aria-label="Köp Eucerin Hyaluron Filler + Elasticity Night Cream, 299 kr."
                                type="button"
                                className="sc-iBYQkv dtkngZ"
                              >
                                <span data-testid="768684-buy-button">
                                  Köp
                                  <span className="sr-only">
                                    {" "}
                                    Eucerin Hyaluron Filler + Elasticity Night
                                    Cream, 299 kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base overflow-hidden">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <div className="sc-1cs31k4-8 caqxlK">
                          <a
                            className="sc-bBABsx eHSqcr"
                            href="/EVY-Technology-solskydd-mousse/p/760113/"
                          >
                            <div className="sc-1cs31k4-7 kYfPwl">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(235, 0, 76)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    Köp <span className="_big">2</span> få{" "}
                                    <span className="_big">30%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <div className="sc-1cs31k4-5 vXLD">
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt=""
                                className="sc-kImNAt dgZtvx sc-1cs31k4-4 cUDnFy _is-loading"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="h-5">
                              <div className="flex items-center gap-1">
                                <span className="sr-only">
                                  4.5 av 5 i omdöme.
                                </span>
                                <div
                                  className="flex w-[100px] gap-1"
                                  aria-hidden="true"
                                >
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-100" />
                                  </svg>
                                  <svg height="16px" version={2.0}>
                                    <use xlinkHref="#rating-star-50" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="sc-1cs31k4-0 gFgqMC">
                              EVY Technology Solskydd Mousse SPF50
                            </p>
                            <p className="sc-1cs31k4-1 fekXPS">
                              Solskydd 100 ml
                            </p>
                          </a>
                          <div className="sc-1cs31k4-6 jEKDcl">
                            <a
                              className="sc-bBABsx eHSqcr"
                              aria-hidden="true"
                              tabIndex={-1}
                              href="/EVY-Technology-solskydd-mousse/p/760113/"
                            >
                              <div className="sc-1cs31k4-10 hFGZnj">
                                <div className="sc-1nliwg8-1 iCqujQ">
                                  <span className="sc-1nliwg8-2 csiLnn">
                                    Pris online
                                  </span>
                                  <span
                                    data-testid="current-price"
                                    className="sc-1nliwg8-0 bgcUZe"
                                  >
                                    <span>169&nbsp;kr</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="sc-1cs31k4-3 dZzjqj">
                              <button
                                aria-label="Köp EVY Technology Solskydd Mousse SPF50, 169 kr."
                                type="button"
                                className="sc-iBYQkv dtkngZ"
                              >
                                <span data-testid="760113-buy-button">
                                  Köp
                                  <span className="sr-only">
                                    {" "}
                                    EVY Technology Solskydd Mousse SPF50, 169
                                    kr.
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-i6rw15-2 iOKLgb">
                <button type="button" className="sc-i6rw15-0 iLwOsH">
                  <span className="sc-i6rw15-7 fPXTEX">
                    <div className="sc-i6rw15-6 uuJon _controls-button-icon">
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
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </div>
                    <span
                      className="pb-2 md:pb-0 md:pl-2"
                      aria-label="Föregående kampanj"
                    >
                      Föregående
                    </span>
                  </span>
                </button>
                <button type="button" className="sc-i6rw15-0 iLwOsH">
                  <span className="sc-i6rw15-7 fCqcvx">
                    <span
                      className="pb-2 md:pb-0 md:pr-2"
                      aria-label="Nästa kampanj"
                    >
                      Nästa
                    </span>
                    <div className="sc-i6rw15-6 iogIpo _controls-button-icon">
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
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="sc-fbYMXx bGrmbN">
            <div className="sc-rqq63o-0 jCFpDk">
              <div
                aria-roledescription="karusell"
                className="sc-sbkcmx-0 fmGJQr"
              >
                <div className="sc-sbkcmx-2 fQRWgY">
                  <div className="sc-fXqpFg zgdLu sc-sbkcmx-1 llIABk">
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <a
                          className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                          href="/erbjudanden/satisfyer/"
                        >
                          <div className="sc-poi0qa-4 finCVp">
                            <div className="sc-poi0qa-1 iQTqDB">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(146, 37, 62)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    <span className="_big">25%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <picture>
                              <source
                                type="image/webp"
                                srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2WOCuy26acGHJvGIyZ1q6e/f47caa391f89faad2eafb03989eeb7b1/2023_Banners_K7_1000x1000px_Satisfyer___Viamax.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/2WOCuy26acGHJvGIyZ1q6e/f47caa391f89faad2eafb03989eeb7b1/2023_Banners_K7_1000x1000px_Satisfyer___Viamax.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/2WOCuy26acGHJvGIyZ1q6e/f47caa391f89faad2eafb03989eeb7b1/2023_Banners_K7_1000x1000px_Satisfyer___Viamax.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                              />
                              <img
                                src="https://images.ctfassets.net/azr0vzx7gzjb/2WOCuy26acGHJvGIyZ1q6e/f47caa391f89faad2eafb03989eeb7b1/2023_Banners_K7_1000x1000px_Satisfyer___Viamax.png?w=190&h=190&q=60&fit=fill"
                                alt="2023 Banners K7 1000x1000px Satisfyer & Viamax"
                                className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM"
                              />
                            </picture>
                          </div>
                          <div className="sc-poi0qa-3 ftbkQW">
                            <p className="sc-poi0qa-6 jSPnnK">
                              Veckans webbdeal: Satisfyer &amp; Via max
                            </p>
                            <p className="sc-poi0qa-7 hpjYda">
                              Intim &amp; sex
                            </p>
                          </div>
                          <div className="sc-poi0qa-5 bSCcMs">
                            <div className="sc-pyfCe fDKrIW">Handla nu</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <a
                          className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                          href="/erbjudanden/makeprem/"
                        >
                          <div className="sc-poi0qa-4 finCVp">
                            <div className="sc-poi0qa-1 iQTqDB">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(146, 37, 62)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    <span className="_big">25%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <picture>
                              <source
                                type="image/webp"
                                srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2E3CZoDmvioiOvlcfMacRY/1bbc815288b11b567c214955083cbf7c/2023_Banners_K7_1000x1000px_Make_Prem.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/2E3CZoDmvioiOvlcfMacRY/1bbc815288b11b567c214955083cbf7c/2023_Banners_K7_1000x1000px_Make_Prem.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/2E3CZoDmvioiOvlcfMacRY/1bbc815288b11b567c214955083cbf7c/2023_Banners_K7_1000x1000px_Make_Prem.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                              />
                              <img
                                src="https://images.ctfassets.net/azr0vzx7gzjb/2E3CZoDmvioiOvlcfMacRY/1bbc815288b11b567c214955083cbf7c/2023_Banners_K7_1000x1000px_Make_Prem.png?w=190&h=190&q=60&fit=fill"
                                alt="2023 Banners K7 1000x1000px Make Prem"
                                className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM"
                              />
                            </picture>
                          </div>
                          <div className="sc-poi0qa-3 ftbkQW">
                            <p className="sc-poi0qa-6 jSPnnK">
                              Veckans webbdeal: Make P:rem
                            </p>
                            <p className="sc-poi0qa-7 hpjYda">Hudvård</p>
                          </div>
                          <div className="sc-poi0qa-5 bSCcMs">
                            <div className="sc-pyfCe fDKrIW">Handla nu</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <a
                          className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                          href="/erbjudanden/kronans-apotek-justnu/"
                        >
                          <div className="sc-poi0qa-4 finCVp">
                            <div className="sc-poi0qa-1 iQTqDB">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(146, 37, 62)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    <span className="_big">39</span> kr
                                  </span>
                                </div>
                              </span>
                            </div>
                            <picture>
                              <source
                                type="image/webp"
                                srcSet="https://images.ctfassets.net/azr0vzx7gzjb/4VCtEMlRQQ2OJH4xXt0R4k/75f6dc8f111e9f1ca23b8497d330a1ac/2023_Banners_K7_1000x1000px_KRONANS_l40-.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/4VCtEMlRQQ2OJH4xXt0R4k/75f6dc8f111e9f1ca23b8497d330a1ac/2023_Banners_K7_1000x1000px_KRONANS_l40-.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/4VCtEMlRQQ2OJH4xXt0R4k/75f6dc8f111e9f1ca23b8497d330a1ac/2023_Banners_K7_1000x1000px_KRONANS_l40-.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                              />
                              <img
                                src="https://images.ctfassets.net/azr0vzx7gzjb/4VCtEMlRQQ2OJH4xXt0R4k/75f6dc8f111e9f1ca23b8497d330a1ac/2023_Banners_K7_1000x1000px_KRONANS_l40-.png?w=190&h=190&q=60&fit=fill"
                                alt="2023 Banners K7 1000x1000px KRONANS l40-"
                                className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM"
                              />
                            </picture>
                          </div>
                          <div className="sc-poi0qa-3 ftbkQW">
                            <p className="sc-poi0qa-6 jSPnnK">
                              Just nu! Utvalt från Kronans Apotek
                            </p>
                            <p className="sc-poi0qa-7 hpjYda">
                              Sår, bett &amp; stick
                            </p>
                          </div>
                          <div className="sc-poi0qa-5 bSCcMs">
                            <div className="sc-pyfCe fDKrIW">Handla nu</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl mb-2 shadow-base">
              <div className="flex flex-col gap-6 h-full p-4">
                <div className="sc-17jters-2 cwsJVb">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?fm=webp&w=580&h=260&q=100&fit=fill&f=face, https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?fm=webp&w=1160&h=520&q=100&fit=fill&f=face 2x, https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?fm=webp&w=1740&h=780&q=100&fit=fill&f=face 3x"
                    />
                    <img
                      src="https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?w=580&h=260&q=100&fit=fill&f=face"
                      alt=""
                      className="sc-kImNAt dgZtvx sc-17jters-0 bFBsgN"
                    />
                  </picture>
                  <div className="sc-17jters-1 kkvHeL">
                    <div className="sc-17jters-3 laiymN">
                      <h3 className="sc-bcXHqe fawONg">
                        Skydda huden mot solen
                      </h3>
                      <p className="sc-hBxehG hAbZzJ">
                        Många tror att man inte behöver solskydd i början på
                        solsäsongen. Det är faktiskt tvärtom. Här kan du läsa om
                        hur du skyddar din hud mot vårsolen.
                      </p>
                    </div>
                    <div className="w-fit pb-1">
                      <a
                        className="sc-ftTHYK fohUGO"
                        href="/tipsochrad/sol/skydda-huden-pa-vintern-och-varen/"
                      >
                        Hitta rätt solskydd
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-rqq63o-0 jCFpDk">
              <div
                aria-roledescription="karusell"
                className="sc-sbkcmx-0 fmGJQr"
              >
                <div className="sc-sbkcmx-2 fQRWgY">
                  <div className="sc-fXqpFg zgdLu sc-sbkcmx-1 llIABk">
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <a
                          className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                          href="/erbjudanden/deodoc/"
                        >
                          <div className="sc-poi0qa-4 finCVp">
                            <div className="sc-poi0qa-1 iQTqDB">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(146, 37, 62)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    <span className="_big">25%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <picture>
                              <source
                                type="image/webp"
                                srcSet="https://images.ctfassets.net/azr0vzx7gzjb/6ZNcrVPazIK8sc1x9xQwus/8b30d210e1d8cd53706eb75cf9eff2cf/2023_Banners_K6_1000x1000px_DeoDoc.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/6ZNcrVPazIK8sc1x9xQwus/8b30d210e1d8cd53706eb75cf9eff2cf/2023_Banners_K6_1000x1000px_DeoDoc.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/6ZNcrVPazIK8sc1x9xQwus/8b30d210e1d8cd53706eb75cf9eff2cf/2023_Banners_K6_1000x1000px_DeoDoc.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                              />
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt="2023 Banners K6 1000x1000px DeoDoc"
                                className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                              />
                            </picture>
                          </div>
                          <div className="sc-poi0qa-3 ftbkQW">
                            <p className="sc-poi0qa-6 jSPnnK">
                              Veckans webbdeal: DeoDoc
                            </p>
                            <p className="sc-poi0qa-7 hpjYda">Intimvård</p>
                          </div>
                          <div className="sc-poi0qa-5 bSCcMs">
                            <div className="sc-pyfCe fDKrIW">Handla nu</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <a
                          className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                          href="/erbjudanden/biomd/"
                        >
                          <div className="sc-poi0qa-4 finCVp">
                            <div className="sc-poi0qa-1 iQTqDB">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(146, 37, 62)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    <span className="_big">25%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <picture>
                              <source
                                type="image/webp"
                                srcSet="https://images.ctfassets.net/azr0vzx7gzjb/4OBJDQQefgx4Xio2jlAGJE/87b58cacf04318882571fe736f5eceba/2023_Banners_K5_1000x1000px_BIOMD.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/4OBJDQQefgx4Xio2jlAGJE/87b58cacf04318882571fe736f5eceba/2023_Banners_K5_1000x1000px_BIOMD.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/4OBJDQQefgx4Xio2jlAGJE/87b58cacf04318882571fe736f5eceba/2023_Banners_K5_1000x1000px_BIOMD.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                              />
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt="2023 Banners K5 1000x1000px BIOMD"
                                className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                              />
                            </picture>
                          </div>
                          <div className="sc-poi0qa-3 ftbkQW">
                            <p className="sc-poi0qa-6 jSPnnK">BioMD</p>
                            <p className="sc-poi0qa-7 hpjYda">Ansiktsvård</p>
                          </div>
                          <div className="sc-poi0qa-5 bSCcMs">
                            <div className="sc-pyfCe fDKrIW">Handla nu</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                      <div className="flex flex-col gap-6 h-full p-4">
                        <a
                          className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                          href="/erbjudanden/biosalma/"
                        >
                          <div className="sc-poi0qa-4 finCVp">
                            <div className="sc-poi0qa-1 iQTqDB">
                              <span data-testid="splash-container">
                                <div className="sc-1uj7ubf-0 bvPhgT">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 100 100"
                                    className="sc-hLBbgP jbaWzw"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      color: "rgb(146, 37, 62)",
                                      position: "absolute",
                                      inset: "0px",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <circle cx={50} cy={50} r={50} />
                                  </svg>
                                  <span className="sc-1uj7ubf-1 cjGIQh">
                                    <span className="_big">30%</span>
                                  </span>
                                </div>
                              </span>
                            </div>
                            <picture>
                              <source
                                type="image/webp"
                                srcSet="https://images.ctfassets.net/azr0vzx7gzjb/23HS6Tuv43VM5XXxnKIwIi/413fe8dbd6f7637f144dc49fe3781b5f/2023_Banners_K6_1000x1000px_BioSalma.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/23HS6Tuv43VM5XXxnKIwIi/413fe8dbd6f7637f144dc49fe3781b5f/2023_Banners_K6_1000x1000px_BioSalma.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/23HS6Tuv43VM5XXxnKIwIi/413fe8dbd6f7637f144dc49fe3781b5f/2023_Banners_K6_1000x1000px_BioSalma.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                              />
                              <img
                                src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                alt="2023 Banners K6 1000x1000px BioSalma"
                                className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                              />
                            </picture>
                          </div>
                          <div className="sc-poi0qa-3 ftbkQW">
                            <p className="sc-poi0qa-6 jSPnnK">Biosalma</p>
                            <p className="sc-poi0qa-7 hpjYda">Kosttillskott</p>
                          </div>
                          <div className="sc-poi0qa-5 bSCcMs">
                            <div className="sc-pyfCe fDKrIW">Handla nu</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-fbYMXx eCGKNa">
        <div className="sc-rqq63o-0 jCFpDk">
          <div aria-roledescription="karusell" className="sc-sbkcmx-0 fmGJQr">
            <div className="sc-sbkcmx-2 fQRWgY">
              <div className="sc-fXqpFg dNqIMR sc-sbkcmx-1 llIABk">
                <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                  <div className="flex flex-col gap-6 h-full p-4">
                    <a
                      className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                      href="/erbjudanden/tangle-teezer/"
                    >
                      <div className="sc-poi0qa-4 finCVp">
                        <div className="sc-poi0qa-1 iQTqDB">
                          <span data-testid="splash-container">
                            <div className="sc-1uj7ubf-0 bvPhgT">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 100 100"
                                className="sc-hLBbgP jbaWzw"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  color: "rgb(146, 37, 62)",
                                  position: "absolute",
                                  inset: "0px",
                                  height: "100%",
                                  width: "100%",
                                }}
                              >
                                <circle cx={50} cy={50} r={50} />
                              </svg>
                              <span className="sc-1uj7ubf-1 cjGIQh">
                                <span className="_big">25%</span>
                              </span>
                            </div>
                          </span>
                        </div>
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2FC4IquMW2nMGdIPpLn5wP/433f419bb5cdfe3a82bb9fcbe583d7de/Banners_K12_1000x1000px_tangleteezer.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/2FC4IquMW2nMGdIPpLn5wP/433f419bb5cdfe3a82bb9fcbe583d7de/Banners_K12_1000x1000px_tangleteezer.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/2FC4IquMW2nMGdIPpLn5wP/433f419bb5cdfe3a82bb9fcbe583d7de/Banners_K12_1000x1000px_tangleteezer.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                          />
                          <img
                            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                            alt="Banners K12 1000x1000px tangleteezer"
                            className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                          />
                        </picture>
                      </div>
                      <div className="sc-poi0qa-3 ftbkQW">
                        <p className="sc-poi0qa-6 jSPnnK">Tangle Teezer</p>
                        <p className="sc-poi0qa-7 hpjYda">Hårvård</p>
                      </div>
                      <div className="sc-poi0qa-5 bSCcMs">
                        <div className="sc-pyfCe fDKrIW">Handla nu</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                  <div className="flex flex-col gap-6 h-full p-4">
                    <a
                      className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                      href="/erbjudanden/veet/"
                    >
                      <div className="sc-poi0qa-4 finCVp">
                        <div className="sc-poi0qa-1 iQTqDB">
                          <span data-testid="splash-container">
                            <div className="sc-1uj7ubf-0 bvPhgT">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 100 100"
                                className="sc-hLBbgP jbaWzw"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  color: "rgb(146, 37, 62)",
                                  position: "absolute",
                                  inset: "0px",
                                  height: "100%",
                                  width: "100%",
                                }}
                              >
                                <circle cx={50} cy={50} r={50} />
                              </svg>
                              <span className="sc-1uj7ubf-1 cjGIQh">
                                <span className="_big">25%</span>
                              </span>
                            </div>
                          </span>
                        </div>
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://images.ctfassets.net/azr0vzx7gzjb/15K5sT4KmLhJMB1ZYowu9P/38680e9cb26caa65fcbcf49c8fe4abe2/Banners_K1_1000x1000px_veet.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/15K5sT4KmLhJMB1ZYowu9P/38680e9cb26caa65fcbcf49c8fe4abe2/Banners_K1_1000x1000px_veet.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/15K5sT4KmLhJMB1ZYowu9P/38680e9cb26caa65fcbcf49c8fe4abe2/Banners_K1_1000x1000px_veet.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                          />
                          <img
                            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                            alt="Banners K1 1000x1000px veet"
                            className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                          />
                        </picture>
                      </div>
                      <div className="sc-poi0qa-3 ftbkQW">
                        <p className="sc-poi0qa-6 jSPnnK">Veet</p>
                        <p className="sc-poi0qa-7 hpjYda">Hårborttagning</p>
                      </div>
                      <div className="sc-poi0qa-5 bSCcMs">
                        <div className="sc-pyfCe fDKrIW">Handla nu</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                  <div className="flex flex-col gap-6 h-full p-4">
                    <a
                      className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                      href="/erbjudanden/bare_feet/"
                    >
                      <div className="sc-poi0qa-4 finCVp">
                        <div className="sc-poi0qa-1 iQTqDB">
                          <span data-testid="splash-container">
                            <div className="sc-1uj7ubf-0 bvPhgT">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 100 100"
                                className="sc-hLBbgP jbaWzw"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  color: "rgb(146, 37, 62)",
                                  position: "absolute",
                                  inset: "0px",
                                  height: "100%",
                                  width: "100%",
                                }}
                              >
                                <circle cx={50} cy={50} r={50} />
                              </svg>
                              <span className="sc-1uj7ubf-1 cjGIQh">
                                <span className="_big">25%</span>
                              </span>
                            </div>
                          </span>
                        </div>
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://images.ctfassets.net/azr0vzx7gzjb/wiaXJJl6GGLIYYLOuDmkN/c81f99e0072e9f7acb510a1abef57103/2023_Banners_K5_1000x1000px_BareFeet.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/wiaXJJl6GGLIYYLOuDmkN/c81f99e0072e9f7acb510a1abef57103/2023_Banners_K5_1000x1000px_BareFeet.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/wiaXJJl6GGLIYYLOuDmkN/c81f99e0072e9f7acb510a1abef57103/2023_Banners_K5_1000x1000px_BareFeet.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                          />
                          <img
                            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                            alt="2023 Banners K5 1000x1000px BareFeet"
                            className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                          />
                        </picture>
                      </div>
                      <div className="sc-poi0qa-3 ftbkQW">
                        <p className="sc-poi0qa-6 jSPnnK">Bare Feet</p>
                        <p className="sc-poi0qa-7 hpjYda">
                          Handvård och fotvård
                        </p>
                      </div>
                      <div className="sc-poi0qa-5 bSCcMs">
                        <div className="sc-pyfCe fDKrIW">Handla nu</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                  <div className="flex flex-col gap-6 h-full p-4">
                    <a
                      className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                      href="/erbjudanden/depend/"
                    >
                      <div className="sc-poi0qa-4 finCVp">
                        <div className="sc-poi0qa-1 iQTqDB">
                          <span data-testid="splash-container">
                            <div className="sc-1uj7ubf-0 bvPhgT">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 100 100"
                                className="sc-hLBbgP jbaWzw"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  color: "rgb(146, 37, 62)",
                                  position: "absolute",
                                  inset: "0px",
                                  height: "100%",
                                  width: "100%",
                                }}
                              >
                                <circle cx={50} cy={50} r={50} />
                              </svg>
                              <span className="sc-1uj7ubf-1 cjGIQh">
                                <span className="_big">20%</span>
                              </span>
                            </div>
                          </span>
                        </div>
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://images.ctfassets.net/azr0vzx7gzjb/1xZ7qMiZsQEiBtUGigggnr/427ac475feaa51c0edd9c83b84ffb045/Banners_K2_1000x1000px_depend.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/1xZ7qMiZsQEiBtUGigggnr/427ac475feaa51c0edd9c83b84ffb045/Banners_K2_1000x1000px_depend.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/1xZ7qMiZsQEiBtUGigggnr/427ac475feaa51c0edd9c83b84ffb045/Banners_K2_1000x1000px_depend.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                          />
                          <img
                            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                            alt="Banners K2 1000x1000px depend"
                            className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                          />
                        </picture>
                      </div>
                      <div className="sc-poi0qa-3 ftbkQW">
                        <p className="sc-poi0qa-6 jSPnnK">Depend</p>
                        <p className="sc-poi0qa-7 hpjYda">Skönhet</p>
                      </div>
                      <div className="sc-poi0qa-5 bSCcMs">
                        <div className="sc-pyfCe fDKrIW">Handla nu</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                  <div className="flex flex-col gap-6 h-full p-4">
                    <a
                      className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                      href="/erbjudanden/tommee-tippee/"
                    >
                      <div className="sc-poi0qa-4 finCVp">
                        <div className="sc-poi0qa-1 iQTqDB">
                          <span data-testid="splash-container">
                            <div className="sc-1uj7ubf-0 bvPhgT">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 100 100"
                                className="sc-hLBbgP jbaWzw"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  color: "rgb(146, 37, 62)",
                                  position: "absolute",
                                  inset: "0px",
                                  height: "100%",
                                  width: "100%",
                                }}
                              >
                                <circle cx={50} cy={50} r={50} />
                              </svg>
                              <span className="sc-1uj7ubf-1 cjGIQh">
                                <span className="_big">20%</span>
                              </span>
                            </div>
                          </span>
                        </div>
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://images.ctfassets.net/azr0vzx7gzjb/1oUOC22DRY0Q1hASvNLSrd/ef8b4b1a05b6d42d4a2c2d0dfcb5f1b6/2023_Banners_K7_1000x1000px_Tommee_Tippee.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/1oUOC22DRY0Q1hASvNLSrd/ef8b4b1a05b6d42d4a2c2d0dfcb5f1b6/2023_Banners_K7_1000x1000px_Tommee_Tippee.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/1oUOC22DRY0Q1hASvNLSrd/ef8b4b1a05b6d42d4a2c2d0dfcb5f1b6/2023_Banners_K7_1000x1000px_Tommee_Tippee.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                          />
                          <img
                            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                            alt="2023 Banners K7 1000x1000px Tommee Tippee"
                            className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                          />
                        </picture>
                      </div>
                      <div className="sc-poi0qa-3 ftbkQW">
                        <p className="sc-poi0qa-6 jSPnnK">Tommee Tippee</p>
                        <p className="sc-poi0qa-7 hpjYda">Föräldrar och barn</p>
                      </div>
                      <div className="sc-poi0qa-5 bSCcMs">
                        <div className="sc-pyfCe fDKrIW">Handla nu</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                  <div className="flex flex-col gap-6 h-full p-4">
                    <a
                      className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                      href="/erbjudanden/twistshake/"
                    >
                      <div className="sc-poi0qa-4 finCVp">
                        <div className="sc-poi0qa-1 iQTqDB">
                          <span data-testid="splash-container">
                            <div className="sc-1uj7ubf-0 bvPhgT">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 100 100"
                                className="sc-hLBbgP jbaWzw"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  color: "rgb(146, 37, 62)",
                                  position: "absolute",
                                  inset: "0px",
                                  height: "100%",
                                  width: "100%",
                                }}
                              >
                                <circle cx={50} cy={50} r={50} />
                              </svg>
                              <span className="sc-1uj7ubf-1 cjGIQh">
                                <span className="_big">25%</span>
                              </span>
                            </div>
                          </span>
                        </div>
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://images.ctfassets.net/azr0vzx7gzjb/1DwFBMTGa9TlVAGrm0F1ET/a766f993d4aed5b6cd9d76b052e53f49/2023_Banners_K5_1000x1000px_Twistshake.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/1DwFBMTGa9TlVAGrm0F1ET/a766f993d4aed5b6cd9d76b052e53f49/2023_Banners_K5_1000x1000px_Twistshake.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/1DwFBMTGa9TlVAGrm0F1ET/a766f993d4aed5b6cd9d76b052e53f49/2023_Banners_K5_1000x1000px_Twistshake.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                          />
                          <img
                            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                            alt="2023 Banners K5 1000x1000px Twistshake"
                            className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                          />
                        </picture>
                      </div>
                      <div className="sc-poi0qa-3 ftbkQW">
                        <p className="sc-poi0qa-6 jSPnnK">Twistshake</p>
                        <p className="sc-poi0qa-7 hpjYda">Barn och föräldrar</p>
                      </div>
                      <div className="sc-poi0qa-5 bSCcMs">
                        <div className="sc-pyfCe fDKrIW">Handla nu</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl shadow-base">
                  <div className="flex flex-col gap-6 h-full p-4">
                    <a
                      className="sc-bBABsx eHSqcr sc-poi0qa-0 blAtVL"
                      href="/erbjudanden/vartfri/"
                    >
                      <div className="sc-poi0qa-4 finCVp">
                        <div className="sc-poi0qa-1 iQTqDB">
                          <span data-testid="splash-container">
                            <div className="sc-1uj7ubf-0 bvPhgT">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 100 100"
                                className="sc-hLBbgP jbaWzw"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  color: "rgb(146, 37, 62)",
                                  position: "absolute",
                                  inset: "0px",
                                  height: "100%",
                                  width: "100%",
                                }}
                              >
                                <circle cx={50} cy={50} r={50} />
                              </svg>
                              <span className="sc-1uj7ubf-1 cjGIQh">
                                <span className="_big">25%</span>
                              </span>
                            </div>
                          </span>
                        </div>
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://images.ctfassets.net/azr0vzx7gzjb/3baj4QFOALdJfCLlVFAhCa/fa3f71219c436aa30c4c86d0212fb118/2023_Banners_K5_1000x1000px_v__rtfri-nalox.png?fm=webp&w=190&h=190&q=60&fit=fill, https://images.ctfassets.net/azr0vzx7gzjb/3baj4QFOALdJfCLlVFAhCa/fa3f71219c436aa30c4c86d0212fb118/2023_Banners_K5_1000x1000px_v__rtfri-nalox.png?fm=webp&w=380&h=380&q=60&fit=fill 2x, https://images.ctfassets.net/azr0vzx7gzjb/3baj4QFOALdJfCLlVFAhCa/fa3f71219c436aa30c4c86d0212fb118/2023_Banners_K5_1000x1000px_v__rtfri-nalox.png?fm=webp&w=570&h=570&q=60&fit=fill 3x"
                          />
                          <img
                            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='150px' height='150px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' %3E%3C!-- Generator: Sketch 61 (89581) - https://sketch.com --%3E%3Ctitle%3EProduktbild/Fallback%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Produktbild/Fallback' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect x='0' y='0' width='200' height='200'%3E%3C/rect%3E%3Cg id='Group' transform='translate(50.000000, 75.000000)'%3E%3Cpolygon id='path-1' points='0.000114192368 -7.29786602e-14 99.4611071 -7.29786602e-14 99.4611071 42.41075 0.000114192368 42.41075'%3E%3C/polygon%3E%3Cpath d='M98.8440858,10.168125 L98.8419582,10.168125 L98.815717,10.168125 C93.6681993,10.1674167 89.6908943,14.936625 88.5951497,16.398625 C87.3384121,14.2403333 85.0114617,12.8994583 82.5213908,12.8994583 C80.5001142,12.8994583 78.6433766,13.729625 77.2951497,15.2355417 C77.0717454,15.484875 77.0880575,15.8666667 77.3320291,16.0954583 C79.4774192,18.1120833 80.5951497,20.8618333 80.399405,23.640625 C80.0391213,28.7314167 75.3667809,32.7193333 69.7625255,32.7193333 C69.4781284,32.7193333 69.1937312,32.7094167 68.9171355,32.6902917 C62.9674901,32.27025 58.4384121,27.5286667 58.8199723,22.1205417 C59.0752915,18.5186667 61.4823837,15.3665833 65.1015326,13.8939583 C65.2653624,13.827375 65.3923128,13.6942083 65.451178,13.5284583 C65.5100433,13.362 65.4951497,13.1785417 65.4093341,13.024125 C64.1738731,10.7879167 61.815717,9.39816667 59.2561426,9.39816667 C57.7667809,9.39816667 56.3362844,9.86566667 55.1213908,10.750375 C55.1121709,8.925 54.7164262,2.760375 50.0369936,0.0814583333 C49.9951497,0.057375 49.9504688,0.0410833333 49.905788,0.027625 C49.899405,0.0255 49.8944404,0.0219583333 49.8887667,0.0205416667 C49.8362844,0.00708333333 49.7838021,-7.29786602e-14 49.7299014,-7.29786602e-14 L49.7299014,-7.29786602e-14 C49.6235184,-7.29786602e-14 49.5171355,0.0269166667 49.4221,0.0814583333 C44.7433766,2.760375 44.3483411,8.925 44.3384121,10.750375 C43.1228092,9.86566667 41.6937312,9.39816667 40.2036603,9.39816667 C37.6440858,9.39816667 35.2859298,10.7879167 34.0504688,13.024125 C33.9646532,13.1785417 33.9497596,13.362 34.0086248,13.5284583 C34.0674901,13.6942083 34.1944404,13.827375 34.357561,13.8939583 C37.9767099,15.3665833 40.3845114,18.5186667 40.6398305,22.1205417 C41.0221,27.5286667 36.4923128,32.27025 30.5426674,32.6902917 C30.2660716,32.7094167 29.9816745,32.7193333 29.6972773,32.7193333 C24.093022,32.7193333 19.4206816,28.7314167 19.0603979,23.640625 C18.8646532,20.8618333 19.9823837,18.1120833 22.1277738,16.0954583 C22.3717454,15.8666667 22.3880575,15.484875 22.1646532,15.2355417 C20.8164262,13.729625 18.9603979,12.8994583 16.9384121,12.8994583 C14.4490504,12.8994583 12.1213908,14.2403333 10.8646532,16.398625 C9.7681993,14.9359167 5.79160355,10.168125 0.645504263,10.168125 L0.617844689,10.168125 C0.395858873,10.168125 0.190894334,10.287125 0.0809652562,10.4797917 C-0.0289638218,10.6724583 -0.0268361622,10.9090417 0.0866390151,11.1002917 C6.49656809,21.879 11.3823837,33.8562083 14.3518872,42.004875 C14.4412489,42.2499583 14.6752915,42.41075 14.9320291,42.41075 C14.9561426,42.41075 14.9816745,42.408625 15.0064972,42.4057917 L16.215717,42.2605833 C21.9391213,41.5699583 36.3093341,40.2645 49.7299014,40.2637917 L49.7299014,40.2637917 C63.1504688,40.2645 77.5206816,41.5699583 83.2440858,42.2605833 L84.4533057,42.4057917 C84.4788376,42.408625 84.5029511,42.41075 84.5277738,42.41075 C84.7845114,42.41075 85.0185539,42.2499583 85.1079156,42.004875 C88.0752915,33.8625833 92.9547241,21.898125 99.357561,11.1257917 C99.4228092,11.0280417 99.4611071,10.9111667 99.4611071,10.7850833 C99.4611071,10.444375 99.1852206,10.168125 98.8440858,10.168125' id='Fill-5' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M82.8923837,46.0413125 L82.7881284,46.0292708 C77.1420291,45.3492708 62.967561,44.0615208 49.7299723,44.0608125 L49.7299723,44.0608125 C36.4916745,44.0615208 22.3172064,45.3492708 16.6718163,46.0292708 L16.567561,46.0413125 C16.3824546,46.0632708 16.2179156,46.1681042 16.1186248,46.3246458 C16.0193341,46.4826042 15.9959298,46.6759792 16.0562135,46.8523542 C16.490256,48.1308958 16.8916745,49.3548958 17.2519582,50.4917708 C17.3335184,50.7503125 17.573944,50.9224375 17.8406106,50.9224375 C17.8625965,50.9224375 17.8852915,50.9217292 17.9079865,50.9188958 C25.4973482,50.0880208 38.3845823,49.1190208 49.7299723,49.1176042 L49.7299723,49.1176042 C61.0753624,49.1190208 73.9625965,50.0880208 81.5519582,50.9188958 C81.573944,50.9217292 81.5973482,50.9224375 81.6193341,50.9224375 C81.8860007,50.9224375 82.1264262,50.7503125 82.2079865,50.4917708 C82.567561,49.3548958 82.9703979,48.1308958 83.4037312,46.8523542 C83.4633057,46.6759792 83.4399014,46.4826042 83.3406106,46.3246458 C83.2413199,46.1681042 83.0767809,46.0632708 82.8923837,46.0413125' id='Fill-8' fill='%2387807B' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                            alt="2023 Banners K5 1000x1000px vårtfri-nalox"
                            className="sc-kImNAt dgZtvx sc-poi0qa-2 gOZbrM _is-loading"
                          />
                        </picture>
                      </div>
                      <div className="sc-poi0qa-3 ftbkQW">
                        <p className="sc-poi0qa-6 jSPnnK">Vårtfri och Nalox</p>
                        <p className="sc-poi0qa-7 hpjYda">
                          Svamp- och vårtbehandling
                        </p>
                      </div>
                      <div className="sc-poi0qa-5 bSCcMs">
                        <div className="sc-pyfCe fDKrIW">Handla nu</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-i6rw15-2 iOKLgb">
            <button type="button" className="sc-i6rw15-0 iLwOsH">
              <span className="sc-i6rw15-7 fPXTEX">
                <div className="sc-i6rw15-6 uuJon _controls-button-icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sc-hLBbgP jbaWzw"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </div>
                <span
                  className="pb-2 md:pb-0 md:pl-2"
                  aria-label="Föregående kampanj"
                >
                  Föregående
                </span>
              </span>
            </button>
            <button type="button" className="sc-i6rw15-0 iLwOsH">
              <span className="sc-i6rw15-7 fCqcvx">
                <span
                  className="pb-2 md:pb-0 md:pr-2"
                  aria-label="Nästa kampanj"
                >
                  Nästa
                </span>
                <div className="sc-i6rw15-6 iogIpo _controls-button-icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sc-hLBbgP jbaWzw"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>
);

const Content = () => (
  <div className="content-container px-0 sc-1kfcalm-1 iRmRvp">
    <div aria-roledescription="karusell" className="sc-sbkcmx-0 fmGJQr">
      <div className="sc-sbkcmx-2 fQRWgY">
        <div className="sc-fXqpFg fvVFHK sc-sbkcmx-1 llIABk">
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={0}
            aria-hidden="false"
            aria-live="polite"
            role="group"
            href="/erbjudanden/eucerin-sol/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">Eucerin</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      Effektiva och skonsamma solskydd
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        30% vid köp av 2 Eucerin solskydd t.o.m. 11 juli.
                        Rabatten gäller både online och i butik, men priserna
                        kan skilja sig åt. Gäller så länge lagret räcker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Köp <span className="_big">2</span> få{" "}
                          <span className="_big">30%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Köp <span className="_big">2</span> få{" "}
                          <span className="_big">30%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/ohz0QnTHSjZ6TlDW2jacR/305538942b51afbba56ee75ce53d7144/2023_Banners_K7_1000x1000px_Eucerin-sol.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/ohz0QnTHSjZ6TlDW2jacR/305538942b51afbba56ee75ce53d7144/2023_Banners_K7_1000x1000px_Eucerin-sol.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/ohz0QnTHSjZ6TlDW2jacR/305538942b51afbba56ee75ce53d7144/2023_Banners_K7_1000x1000px_Eucerin-sol.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/ohz0QnTHSjZ6TlDW2jacR/305538942b51afbba56ee75ce53d7144/2023_Banners_K7_1000x1000px_Eucerin-sol.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/ohz0QnTHSjZ6TlDW2jacR/305538942b51afbba56ee75ce53d7144/2023_Banners_K7_1000x1000px_Eucerin-sol.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/ohz0QnTHSjZ6TlDW2jacR/305538942b51afbba56ee75ce53d7144/2023_Banners_K7_1000x1000px_Eucerin-sol.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/ohz0QnTHSjZ6TlDW2jacR/305538942b51afbba56ee75ce53d7144/2023_Banners_K7_1000x1000px_Eucerin-sol.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/lrp-vichy-cerave/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">
                      La Roche-Posay, Vichy &amp; CeraVe
                    </p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      Noga utvald ansiktsvård
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        20% på utvalt från La Roche-Posay, Vichy &amp; CeraVe
                        t.o.m. 11 juli. Gäller både online och i fysiska apotek,
                        men priserna kan skilja sig åt. Gäller så länge lagret
                        räcker.
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">20%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">20%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/7maJ0UPKpI6yRbvcZ8bPjj/806e1e3abde55f31b5affdaf12a0b1b7/2023_Banners_K7_1000x1000px_Vichy__LRP___Cerave.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/7maJ0UPKpI6yRbvcZ8bPjj/806e1e3abde55f31b5affdaf12a0b1b7/2023_Banners_K7_1000x1000px_Vichy__LRP___Cerave.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/7maJ0UPKpI6yRbvcZ8bPjj/806e1e3abde55f31b5affdaf12a0b1b7/2023_Banners_K7_1000x1000px_Vichy__LRP___Cerave.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/7maJ0UPKpI6yRbvcZ8bPjj/806e1e3abde55f31b5affdaf12a0b1b7/2023_Banners_K7_1000x1000px_Vichy__LRP___Cerave.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/7maJ0UPKpI6yRbvcZ8bPjj/806e1e3abde55f31b5affdaf12a0b1b7/2023_Banners_K7_1000x1000px_Vichy__LRP___Cerave.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/7maJ0UPKpI6yRbvcZ8bPjj/806e1e3abde55f31b5affdaf12a0b1b7/2023_Banners_K7_1000x1000px_Vichy__LRP___Cerave.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/7maJ0UPKpI6yRbvcZ8bPjj/806e1e3abde55f31b5affdaf12a0b1b7/2023_Banners_K7_1000x1000px_Vichy__LRP___Cerave.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/cetaphil/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">Cetaphil</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      För torr och känslig hy
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        25% på allt från Cetaphil t.o.m. 11 juli. Rabatten
                        gäller både online och i butik, men priserna kan skilja
                        sig åt. Gäller så länge lagret räcker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2nh6Y8Zz0EsNtJAk6rndne/923091b33153424ab43a816522221375/2023_Banners_K7_1000x1000px_Cetaphil.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/2nh6Y8Zz0EsNtJAk6rndne/923091b33153424ab43a816522221375/2023_Banners_K7_1000x1000px_Cetaphil.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/2nh6Y8Zz0EsNtJAk6rndne/923091b33153424ab43a816522221375/2023_Banners_K7_1000x1000px_Cetaphil.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2nh6Y8Zz0EsNtJAk6rndne/923091b33153424ab43a816522221375/2023_Banners_K7_1000x1000px_Cetaphil.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/2nh6Y8Zz0EsNtJAk6rndne/923091b33153424ab43a816522221375/2023_Banners_K7_1000x1000px_Cetaphil.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/2nh6Y8Zz0EsNtJAk6rndne/923091b33153424ab43a816522221375/2023_Banners_K7_1000x1000px_Cetaphil.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/2nh6Y8Zz0EsNtJAk6rndne/923091b33153424ab43a816522221375/2023_Banners_K7_1000x1000px_Cetaphil.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/rfsu/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">RFSU</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      För bättre intimhälsa och sexliv
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        25% på allt från RFSU t.o.m. 11 juli. Rabatten gäller
                        både online och i butik, men priserna kan skilja sig åt.
                        Gäller så länge lagret räcker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/353XlvW78y3CLofpTRcJZf/c209c50818c95935684456c2129e7632/2023_Banners_K7_1000x1000px_RFSU.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/353XlvW78y3CLofpTRcJZf/c209c50818c95935684456c2129e7632/2023_Banners_K7_1000x1000px_RFSU.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/353XlvW78y3CLofpTRcJZf/c209c50818c95935684456c2129e7632/2023_Banners_K7_1000x1000px_RFSU.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/353XlvW78y3CLofpTRcJZf/c209c50818c95935684456c2129e7632/2023_Banners_K7_1000x1000px_RFSU.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/353XlvW78y3CLofpTRcJZf/c209c50818c95935684456c2129e7632/2023_Banners_K7_1000x1000px_RFSU.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/353XlvW78y3CLofpTRcJZf/c209c50818c95935684456c2129e7632/2023_Banners_K7_1000x1000px_RFSU.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/353XlvW78y3CLofpTRcJZf/c209c50818c95935684456c2129e7632/2023_Banners_K7_1000x1000px_RFSU.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/no7/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">No7</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      Nyhet hos Kronans Apotek!
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        25% på allt från No7 t.o.m. 11 juli. Rabatten gäller
                        både online och i butik, men priserna kan skilja sig åt.
                        Gäller så länge lagret räcker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/1fy1b1RjFPnWI6Fmi9eY9J/b3cfcb519579dd9de973c180789c8499/2023_Banners_K7_1000x1000px_NO7.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/1fy1b1RjFPnWI6Fmi9eY9J/b3cfcb519579dd9de973c180789c8499/2023_Banners_K7_1000x1000px_NO7.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/1fy1b1RjFPnWI6Fmi9eY9J/b3cfcb519579dd9de973c180789c8499/2023_Banners_K7_1000x1000px_NO7.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/1fy1b1RjFPnWI6Fmi9eY9J/b3cfcb519579dd9de973c180789c8499/2023_Banners_K7_1000x1000px_NO7.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/1fy1b1RjFPnWI6Fmi9eY9J/b3cfcb519579dd9de973c180789c8499/2023_Banners_K7_1000x1000px_NO7.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/1fy1b1RjFPnWI6Fmi9eY9J/b3cfcb519579dd9de973c180789c8499/2023_Banners_K7_1000x1000px_NO7.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/1fy1b1RjFPnWI6Fmi9eY9J/b3cfcb519579dd9de973c180789c8499/2023_Banners_K7_1000x1000px_NO7.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/2-for-30-sol/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">Solvård</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      Njut säkert av solen
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        Gäller t.o.m. 11 juli. Rabatten gäller både online och i
                        fysiska apotek, men priserna kan skilja sig åt. Gäller
                        så länge lagret räcker.
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Köp <span className="_big">2</span> få{" "}
                          <span className="_big">30%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Köp <span className="_big">2</span> få{" "}
                          <span className="_big">30%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/2gEslPAWiiJRdIjzjSi3cf/4ddcba55b7e51e31b529c67945cf702a/2023_Banners_K7_1000x1000px_sol2.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/djurvard/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">Djurvård</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      För ett aktivt djurliv
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        Upp till 20% på utvalt inom djurvård t.o.m. 11 juli.
                        Rabatten gäller både online och i butik, men priserna
                        kan skilja sig åt. Gäller så länge lagret räcker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Upp till <span className="_big">20%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Upp till <span className="_big">20%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/4jkJVxYPD9ZuYxmzgjo7Uo/e5f01ec3b2f523715d971ca37d8a97e6/2023_Banners_K7_1000x1000px_Samlingssida_Djur.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/4jkJVxYPD9ZuYxmzgjo7Uo/e5f01ec3b2f523715d971ca37d8a97e6/2023_Banners_K7_1000x1000px_Samlingssida_Djur.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/4jkJVxYPD9ZuYxmzgjo7Uo/e5f01ec3b2f523715d971ca37d8a97e6/2023_Banners_K7_1000x1000px_Samlingssida_Djur.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/4jkJVxYPD9ZuYxmzgjo7Uo/e5f01ec3b2f523715d971ca37d8a97e6/2023_Banners_K7_1000x1000px_Samlingssida_Djur.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/4jkJVxYPD9ZuYxmzgjo7Uo/e5f01ec3b2f523715d971ca37d8a97e6/2023_Banners_K7_1000x1000px_Samlingssida_Djur.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/4jkJVxYPD9ZuYxmzgjo7Uo/e5f01ec3b2f523715d971ca37d8a97e6/2023_Banners_K7_1000x1000px_Samlingssida_Djur.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/4jkJVxYPD9ZuYxmzgjo7Uo/e5f01ec3b2f523715d971ca37d8a97e6/2023_Banners_K7_1000x1000px_Samlingssida_Djur.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/mun-tand-/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">Munvård</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      En renare känsla varje dag
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        Upp till 25% på utvalt inom munvård t.o.m. 11 juli.
                        Rabatten gäller både online och i butik, men priserna
                        kan skilja sig åt. Gäller så länge lagret räcker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Upp till <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          Upp till <span className="_big">25%</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/ItrTaEWDaUJB2MQ5jFXUJ/3f16a183875a5fcd2c5825ba176c6a29/2023_Banners_K7_1000x1000px_Samlingssida_Mun___Ta__nder.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/ItrTaEWDaUJB2MQ5jFXUJ/3f16a183875a5fcd2c5825ba176c6a29/2023_Banners_K7_1000x1000px_Samlingssida_Mun___Ta__nder.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/ItrTaEWDaUJB2MQ5jFXUJ/3f16a183875a5fcd2c5825ba176c6a29/2023_Banners_K7_1000x1000px_Samlingssida_Mun___Ta__nder.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/ItrTaEWDaUJB2MQ5jFXUJ/3f16a183875a5fcd2c5825ba176c6a29/2023_Banners_K7_1000x1000px_Samlingssida_Mun___Ta__nder.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/ItrTaEWDaUJB2MQ5jFXUJ/3f16a183875a5fcd2c5825ba176c6a29/2023_Banners_K7_1000x1000px_Samlingssida_Mun___Ta__nder.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/ItrTaEWDaUJB2MQ5jFXUJ/3f16a183875a5fcd2c5825ba176c6a29/2023_Banners_K7_1000x1000px_Samlingssida_Mun___Ta__nder.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/ItrTaEWDaUJB2MQ5jFXUJ/3f16a183875a5fcd2c5825ba176c6a29/2023_Banners_K7_1000x1000px_Samlingssida_Mun___Ta__nder.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
          <a
            className="sc-bBABsx sc-jtfxai-1 eHSqcr jZdALR"
            tabIndex={-1}
            aria-hidden="true"
            aria-live="polite"
            role="group"
            href="/erbjudanden/kronans/"
          >
            <div className="sc-jtfxai-2 SdrfY">
              <div className="sc-hg64kz-1 ghltkC">
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
              </div>
              <div className="sc-jtfxai-4 gyHpKb">
                <div className="sc-jtfxai-7 ibZWLp">
                  <div className="sc-jtfxai-8 aUTa-D">
                    <p className="sc-jtfxai-12 iLiFMI">Kronans Apotek</p>
                    <h2 color="#47645a" className="sc-jtfxai-9 dyPWvV">
                      Fyll på ditt semesterapotek
                    </h2>
                    <div className="sc-jtfxai-5 bMldCn">
                      <p className="sc-jtfxai-6 djmmPy">
                        3 för 2 på utvalt från vårt eget varumärke t.o.m. 11
                        juli. Billigaste på köpet. Rabatten gäller både online
                        och i butik, men priserna kan skilja sig åt. Gäller så
                        länge lagret räcker.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sc-jtfxai-10 kpqjsz">
                    <div className="sc-pyfCe kPecoB">Till erbjudandet</div>
                  </div>
                </div>
              </div>
              <div className="sc-hg64kz-0 iotCsn">
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
              </div>
              <div className="sc-jtfxai-16 hwxwSe">
                <div className="sc-jtfxai-13 cgJzQJ">
                  <div className="sc-jtfxai-15 bSaFnm">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 bXUzSz">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">3</span> för{" "}
                          <span className="_big">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="sc-jtfxai-14 ctxvZv">
                    <span data-testid="splash-container">
                      <div className="sc-1uj7ubf-0 exVIvN">
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
                        <span className="sc-1uj7ubf-1 cjGIQh">
                          <span className="_big">3</span> för{" "}
                          <span className="_big">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="sc-jtfxai-0 dQtbtO">
                  <picture>
                    <source
                      media="screen and (max-width: 600px)"
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/6JufEFsfMB47Wo8kbeEPQo/6ed1bfcde792434c2593939b0071f01e/2023_Banners_K7_1000x1000px_EMV_Kronans.png?fm=webp&w=120&q=60, https://images.ctfassets.net/azr0vzx7gzjb/6JufEFsfMB47Wo8kbeEPQo/6ed1bfcde792434c2593939b0071f01e/2023_Banners_K7_1000x1000px_EMV_Kronans.png?fm=webp&w=240&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/6JufEFsfMB47Wo8kbeEPQo/6ed1bfcde792434c2593939b0071f01e/2023_Banners_K7_1000x1000px_EMV_Kronans.png?fm=webp&w=360&q=60 3x"
                    />
                    <source
                      type="image/webp"
                      srcSet="https://images.ctfassets.net/azr0vzx7gzjb/6JufEFsfMB47Wo8kbeEPQo/6ed1bfcde792434c2593939b0071f01e/2023_Banners_K7_1000x1000px_EMV_Kronans.png?fm=webp&w=300&q=60, https://images.ctfassets.net/azr0vzx7gzjb/6JufEFsfMB47Wo8kbeEPQo/6ed1bfcde792434c2593939b0071f01e/2023_Banners_K7_1000x1000px_EMV_Kronans.png?fm=webp&w=600&q=60 2x, https://images.ctfassets.net/azr0vzx7gzjb/6JufEFsfMB47Wo8kbeEPQo/6ed1bfcde792434c2593939b0071f01e/2023_Banners_K7_1000x1000px_EMV_Kronans.png?fm=webp&w=900&q=60 3x"
                    />
                    <img src="https://images.ctfassets.net/azr0vzx7gzjb/6JufEFsfMB47Wo8kbeEPQo/6ed1bfcde792434c2593939b0071f01e/2023_Banners_K7_1000x1000px_EMV_Kronans.png?w=300&q=60" />
                  </picture>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="sc-i6rw15-1 kxDzAb">
      <button aria-label="Föregående kampanj" className="sc-iBYQkv bgpZmg">
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
        <span className="hidden md:flex">Föregående</span>
      </button>
      <p className="sr-only">Kampanj 1 av 9</p>
      <div
        aria-live="polite"
        aria-controls="carousel"
        className="sc-i6rw15-4 bqOrht"
      >
        <div className="h-2 w-48 rounded-md bg-green-50">
          <div
            className="h-2 rounded-md bg-green-800 transition-all"
            style={{ width: "11.1111%" }}
          />
        </div>
      </div>
      <button aria-label="Nästa kampanj" className="sc-iBYQkv bgpZmg">
        <span className="hidden md:flex">Nästa</span>
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
      </button>
    </div>
  </div>
);

const TopLinks = () => (
  <div className="flex bg-background py-3 shadow-[rgba(63,63,68,0.1)] md:bg-white md:py-5 md:shadow-sm flex">
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
                defaultValue
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
                  defaultValue
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

const Banner = () => (
  <div
    aria-hidden="false"
    className="bg-primary hidden h-10 text-white opacity-100 md:flex"
    style={{ transition: "height 0.2s ease-in-out, opacity 0.5s ease-in-out" }}
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

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];

export const ContentArticleBase = ({ Content }: any) => (
  <div className="relative flex w-full flex-col last:mb-0 bg-white rounded-2xl mb-2 shadow-base">
    <div className="flex flex-col gap-6 h-full p-4">{Content}</div>
  </div>
);

export const ArticleLarge = ({
  anchor = "Hitta rätt solskydd",
  href = "/tipsochrad/sol/skydda-huden-pa-vintern-och-varen/",
  title = "Skydda huden mot solen",
  subtitle = "Många tror att man inte behöver solskydd i början på solsäsongen. Det är faktiskt tvärtom. Här kan du läsa om hur du skyddar din hud mot vårsolen.",
  src = "https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?w=580&h=260&q=100&fit=fill&f=face",
  srcSet = "https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?fm=webp&w=580&h=260&q=100&fit=fill&f=face, https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?fm=webp&w=1160&h=520&q=100&fit=fill&f=face 2x, https://images.ctfassets.net/azr0vzx7gzjb/2fFSmB9CCf7tYtAxJtc3La/34ea76144e43ec938ed19f092fa9611c/kvinna-pojke-sol.jpg?fm=webp&w=1740&h=780&q=100&fit=fill&f=face 3x",
}) => (
  <div className="sc-17jters-2 cwsJVb">
    <picture>
      <source type="image/webp" srcSet={srcSet} />
      <img src={src} alt="" className="sc-kImNAt dgZtvx sc-17jters-0 bFBsgN" />
    </picture>
    <div className="sc-17jters-1 kkvHeL">
      <div className="sc-17jters-3 laiymN">
        <h3 className="sc-bcXHqe fawONg">{title}</h3>
        <p className="sc-hBxehG hAbZzJ">{subtitle}</p>
      </div>
      <div className="w-fit pb-1">
        <a className="sc-ftTHYK fohUGO" href={href}>
          {anchor}
        </a>
      </div>
    </div>
  </div>
);

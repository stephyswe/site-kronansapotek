interface Props {
  type?: "red" | "default";
}

type TypeData = {
  red: string;
  default: string;
};

export const SvgContentCircle = ({ type = "default" }: Props) => {
  const typeData: TypeData = {
    red: "rgb(235, 0, 76)",
    default: "rgb(146, 37, 62)",
  };
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      //xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      className="sc-hLBbgP jbaWzw"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        color: typeData[type] || typeData.default,
        position: "absolute",
        inset: "0px",
        height: "100%",
        width: "100%",
      }}
    >
      <circle cx={50} cy={50} r={50} />
    </svg>
  );
};

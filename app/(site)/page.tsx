
import jsonData from "../../data/data.json";
import Hero from "@/app/(site)/components/hero";
import Content from "@/app/(site)/components/content";

export default async function Home() {
  const data = jsonData;

  return (
    <>
      <Hero data={data.slider.data} />
      <Content />
    </>
  );
}

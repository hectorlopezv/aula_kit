import Card from "@/components/Card";
import CarrouselPools from "@/components/CarrouselPools";
import Header from "@/components/Header";
import Image from "next/image";
import UAParser from "ua-parser-js";

const images = [
  {
    image: "/images/logo_abajo.svg",
    alt: "logo_abajo",
    width: 377,
    height: 93,
  },
  {
    image: "/images/connect.svg",
    alt: "connect",
    width: 550,
    height: 100,
  },
  {
    image: "/images/vector_1.svg",
    alt: "vector_1",
    width: 37,
    height: 37,
  },
  {
    image: "/images/vector_2.svg",
    alt: "vector_2",
    width: 37,
    height: 37,
  },
  {
    image: "/images/vector_3.svg",
    alt: "vector_3",
    width: 37,
    height: 37,
  },
  {
    image: "/images/vector_4.svg",
    alt: "vector_4",
    width: 37,
    height: 37,
  },
];

const cards = [
  {
    image: "/images/rb_1.svg",
    title: "3D Pool Remodel Design Services",
    subTitle: " Visualize your new swimming pool before you build it.",
    description:
      "We offer 3D pool remodel design services for pool builders, architects, developers, and homeowners. We can design your pool remodel project from start to finish. We can also provide you with a 3D rendering of your pool remodel project. We can also provide you with a 3D rendering of your pool remodel project.",
    link: "/",
  },

  {
    image: "/images/rb_2.svg",
    title: "3D Pool Remodel Design Services",
    subTitle: " Visualize your new swimming pool before you build it.",
    description:
      "We offer 3D pool remodel design services for pool builders, architects, developers, and homeowners. We can design your pool remodel project from start to finish. We can also provide you with a 3D rendering of your pool remodel project. We can also provide you with a 3D rendering of your pool remodel project.",
    link: "/",
  },
  {
    image: "/images/rb_3.svg",
    title: "Web Design and SMM",
    subTitle: "Obtain higher revenues with our web design and SMM services.",
    description:
      "We offer 3D pool remodel design services for pool builders, architects, developers, and homeowners. We can design your pool remodel project from start to finish. We can also provide you with a 3D rendering of your pool remodel project. We can also provide you with a 3D rendering of your pool remodel project.",
    link: "/",
  },
];
export default function Home({ deviceType }: { deviceType: string }) {
  return (
    <>
      <Header />
      <CarrouselPools deviceType={deviceType} />
      <div className="px-6 py-4">
        <div className="linear-gradient rounded px-4 py-2">
          <span>
            OUR CLIENTS ARE POOL BUILDERS, ARCHITECTS, DEVELOPERS, HOMEOWNERS
          </span>
        </div>
        <span className="text-[#3CA7E8] pl-5 block mt-1">
          We Design Pools and Landscapes NationWide
        </span>
      </div>
      <div className="linear-gradient-3 flex flex-col justify-center">
        <h2 className="text-center py-4 text-xl">OUR PROFESIONAL SERVICES</h2>
        <div className="flex px-7 pt-1 gap-8">
          {cards.map(({ description, image, subTitle, title, link }) => (
            <Card
              key={image}
              description={description}
              image={image}
              subTitle={subTitle}
              title={title}
              link={link}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between items-center p-3 pb-8 pt-8">
        {images.slice(0, 2).map(({ alt, height, image, width }) => (
          <Image
            alt={alt}
            height={height}
            src={image}
            width={width}
            key={image}
          />
        ))}
        <div className="flex gap-2">
          {images.slice(2).map(({ alt, height, image, width }) => (
            <Image
              alt={alt}
              height={height}
              src={image}
              width={width}
              key={image}
            />
          ))}
        </div>
      </div>

      <footer className="flex items-center justify-center h-[100px] linear-gradient-2">
        <div className="w-[100%] h-[20px] relative ">
          <Image src="/images/footer_info.svg" alt="footer" fill />
        </div>
      </footer>
    </>
  );
}
// ...

Home.getInitialProps = ({ req }: any) => {
  let userAgent;

  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }

  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";

  return { deviceType };
};

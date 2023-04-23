import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const images = ["image_1", "image_2", "image_3", "image_4", "image_5"];

const CarrouselPools = ({ deviceType }: { deviceType: string }) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      arrows={false}
      ssr
      partialVisbile
      keyBoardControl={true}
      dotListClass="p-2"
      deviceType={deviceType}
    >
      {images.map((image) => {
        return (
          <div className="w-full h-[600px] relative" key={image}>
            <Image
              src={`/images/${image}.png`}
              alt={image}
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </Carousel>
  );
};
export default CarrouselPools;

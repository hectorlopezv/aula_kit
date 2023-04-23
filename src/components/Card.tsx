import Image from "next/image";
import Link from "next/link";

const Card = ({
  description,
  image,
  subTitle,
  title,
  link,
}: {
  description: string;
  image: string;
  subTitle: string;
  title: string;
  link: string;
}) => {
  return (
    <div className="border-#DADADA] bg-white rounded px-6 py-2 pb-8 shadow-[0px_4px_4px_2px_#DADADA]">
      <h4 className="text-[#054798] text-lg">{title}</h4>
      <Image
        src={image}
        alt={image}
        width={0}
        height={0}
        className="w-[100%] h-[200px] object-cover rounded mt-1"
      />

      <div className="text-[#3CA7E8] pt-2 text-lg uppercase pb-1">
        {subTitle}
      </div>
      <div className="text-[#054798] text-sm text-left">{description}</div>
      <div className="flex w-full justify-end pt-8">
        <div className="border-[#60C6F2] border-2 inline-block rounded px-3 py-1">
          <Link href={link} className="text-[#009ADA] flex">
            Read More
            <Image
              className="ml-4"
              src="/images/arrow_blue.svg"
              alt="arrow"
              width={10}
              height={10}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;

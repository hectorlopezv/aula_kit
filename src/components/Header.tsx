import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="px-6 py-4 flex items-center w-full">
        <div>
          <Image src="/images/logo.svg" alt="logo" width={257} height={63} />
        </div>
        <div className="flex gap-4 ml-auto">
          <button className="bg-[#D9D9D9] border-[#B8B9B9] rounded-md p-2 min-w-[138px]">
            Home
          </button>
          <button className="bg-[#D9D9D9] border-[#B8B9B9] rounded-md p-2 min-w-[138px]">
            About Us
          </button>
          <button className="bg-[#D9D9D9] border-[#B8B9B9] rounded-md p-2 min-w-[138px]">
            Our Services
          </button>
          <button className="bg-[#D9D9D9] border-[#B8B9B9] rounded-md p-2 min-w-[138px]">
            Order Plan
          </button>
          <button className=" flex justify-center items-center bg-[#43A6DE] border-[#B8B9B9] rounded-md p-2 min-w-[138px]">
            <span>Contact Us</span>
            <Image
              className="ml-4"
              src="/images/arrow.svg"
              alt="arrow"
              width={10}
              height={10}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

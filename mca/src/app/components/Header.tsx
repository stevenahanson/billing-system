import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row justify-start bg-gray-50 p-6 border-b-2 border-gray-200">
      <Image
        src={"https://wayflyer.com/assets-next/wayflyer-logo-v2.svg"}
        alt="Wayflyer Logo"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Header;

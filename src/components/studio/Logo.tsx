import Image from "next/image";

const Logo = (props: any) => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        alt="Logo"
        src="/logo.svg"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;

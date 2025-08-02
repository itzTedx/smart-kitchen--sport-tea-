import Image from "next/image";

export const Logo = () => {
  return <Image alt="Sport Tea Logo" height={48} loading="eager" priority src="/logo.svg" width={76} />;
};

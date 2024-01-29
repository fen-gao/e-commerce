import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  customStyle?: string;
}

export const Box = ({ children, customStyle }: BoxProps) => {
  return (
    <div
      className={`w-full h-full border-[1px] border-[#DEE2E7] px-[14px] py-[20px] rounded ${customStyle}`}
    >
      {children}
    </div>
  );
};

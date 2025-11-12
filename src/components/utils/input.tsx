import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={`bg-white w-full h-10 rounded-lg outline-none border border-[#D0D5DD] px-[14px] py-[10px] font-inter text-[16px] font-normal leading-6 text-[#667085] focus:border-[#4B9EFF] focus:ring-1 focus:ring-[#4B9EFF] transition-colors ${className}`}
        {...rest}
      />
    );
  }
);

InputComponent.displayName = "InputComponent";

export default InputComponent;

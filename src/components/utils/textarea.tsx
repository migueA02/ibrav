import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaComponent = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`bg-white w-full min-h-[120px] rounded-lg outline-none border border-[#D0D5DD] px-[14px] py-[10px] font-inter text-[16px] font-normal leading-6 text-[#667085] focus:border-[#4B9EFF] focus:ring-1 focus:ring-[#4B9EFF] transition-colors resize-none ${className}`}
        {...rest}
      />
    );
  }
);

TextareaComponent.displayName = "TextareaComponent";

export default TextareaComponent;

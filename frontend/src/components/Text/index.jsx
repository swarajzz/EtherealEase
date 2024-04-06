import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-4xl font-normal",
  s: "text-lg font-normal",
  xl: "text-8xl font-normal",
  md: "text-2xl font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-500 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

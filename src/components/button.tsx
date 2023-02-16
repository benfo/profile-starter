import clsx from "clsx";
import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = (props: ButtonProps) => {
  const { color, size, ...buttonProps } = props;

  const classes = clsx("btn", color && `btn-${color}`, size && `btn-${size}`);

  return <button className={classes} {...buttonProps}></button>;
};

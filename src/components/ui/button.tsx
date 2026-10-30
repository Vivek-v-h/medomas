
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white" | "dark";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  showArrow = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const styles = {
    primary: "btn-primary",
    outline: "btn-outline",
    white: "btn-white",
    dark: "bg-brand-brown text-white hover:bg-brand-orange",
  };

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <ArrowRight
          size={17}
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </>
  );

  const classes = cn(
    "btn",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}

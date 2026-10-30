
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span
        className={cn(
          "section-label",
          align === "center" && "justify-center"
        )}
      >
        {eyebrow}
      </span>

      <h2 className="mt-5">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "section-description mt-5",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

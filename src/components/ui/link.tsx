import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "transition-colors hover:text-foreground/80",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
Link.displayName = "Link";

export { Link };
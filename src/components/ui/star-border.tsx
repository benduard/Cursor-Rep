import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--foreground))"

  return (
    <Component 
      className={cn(
        "relative inline-block py-[0.5px] overflow-hidden rounded-[6px]",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[200%] h-[25%] bottom-0 right-[-150%] rounded-full animate-star-movement-bottom z-0",
          "opacity-20 dark:opacity-70" 
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 3%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[200%] h-[25%] top-0 left-[-150%] rounded-full animate-star-movement-top z-0",
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 3%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 text-center text-sm py-1.5 px-2 rounded-[6px]",
        "bg-black text-white border-none",
        "hover:bg-black/90 transition-colors"
      )}>
        {children}
      </div>
    </Component>
  )
}
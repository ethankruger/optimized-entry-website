import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-white transition-all duration-200 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-brand-green text-white rounded-full hover:bg-green-600 shadow-sm hover:shadow-md",
        neutral:
          "bg-white text-slate-900 rounded-full border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md",
        dark:
          "bg-slate-900 text-white rounded-full hover:bg-slate-800 shadow-sm hover:shadow-md",
        orange:
          "bg-brand-orange text-white rounded-full hover:bg-orange-600 shadow-sm hover:shadow-md",
        purple:
          "bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-sm hover:shadow-md",
        ghost:
          "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full",
        link:
          "bg-transparent text-brand-green underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

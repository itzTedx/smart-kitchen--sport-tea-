import * as React from "react";

import { Slot as SlotPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium text-base outline-none transition-all duration-300 ease-in-out focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "inset-shadow-[0_2px_4px_0] inset-shadow-[oklch(0.9108_0.0708_72.95)]/40 border-white/40 border-b bg-gradient-to-tr from-primary to-[oklch(0.8043_0.1343_68.83)] text-white shadow-[0_14px_8px_0_oklch(0.7296_0.1721_59.4/0.08),_0_4px_6px_0_oklch(0.3116_0.0458_52.92/0.15),_0_4px_12px_0_oklch(0.6427_0.14_69.7293/0.25)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-primary/90 hover:to-[oklch(0.8043_0.1343_68.83)]/90 hover:shadow-[0_18px_12px_0_oklch(0.7296_0.1721_59.4/0.12),_0_6px_8px_0_oklch(0.3116_0.0458_52.92/0.2),_0_6px_16px_0_oklch(0.6427_0.14_69.7293/0.35)] active:scale-[0.98] dark:border-foreground/20",
        destructive:
          "bg-destructive text-white shadow-xs hover:scale-[1.02] hover:bg-destructive/90 hover:shadow-md focus-visible:ring-destructive/20 active:scale-[0.98] dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-secondary-hover/60 bg-secondary-foreground/60 text-secondary shadow-xs backdrop-blur-xl hover:scale-[1.02] hover:border-secondary-hover/80 hover:bg-accent hover:text-accent-foreground hover:shadow-md active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:scale-[1.02] hover:bg-secondary/80 hover:shadow-md active:scale-[0.98]",
        ghost:
          "hover:scale-[1.02] hover:bg-accent hover:text-accent-foreground active:scale-[0.98] dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:scale-[1.02] hover:underline active:scale-[0.98]",
        cta: "inset-shadow-[0_2px_4px_0] inset-shadow-[oklch(0.9108_0.0708_72.95)]/40 border-white/40 border-b bg-gradient-to-b from-secondary to-secondary-hover text-white shadow-[0_8px_9px_0_oklch(0.3503_0.0703_168.79/0.06),_0_4px_9px_0_oklch(0.3503_0.0703_168.79/0.3),_0_4px_6px_0_oklch(0.5534_0.1128_167.45/0.2)] hover:scale-[1.02] hover:bg-gradient-to-b hover:from-secondary-hover hover:to-secondary-hover/90 hover:shadow-[0_12px_12px_0_oklch(0.3503_0.0703_168.79/0.1),_0_6px_12px_0_oklch(0.3503_0.0703_168.79/0.4),_0_6px_8px_0_oklch(0.5534_0.1128_167.45/0.3)] active:scale-[0.98] dark:border-foreground/20",
      },
      size: {
        default: "h-12 px-5 py-2 has-[>div>svg]:pr-1",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} data-slot="button" {...props} />;
}

export { Button, buttonVariants };

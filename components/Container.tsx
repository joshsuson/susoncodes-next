import { forwardRef } from "react";
import clsx from "clsx";

export const OuterContainer = forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function ContainerOuter({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

export const InnerContainer = forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function ContainerInner({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container = forwardRef<
  React.ComponentRef<typeof OuterContainer>,
  React.ComponentPropsWithoutRef<typeof OuterContainer> & { footer?: boolean }
>(function Container({ children, footer, ...props }, ref) {
  return (
    <OuterContainer ref={ref} {...props}>
      {footer ? (
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <InnerContainer>{children}</InnerContainer>
        </div>
      ) : (
        <InnerContainer>{children}</InnerContainer>
      )}
    </OuterContainer>
  );
});

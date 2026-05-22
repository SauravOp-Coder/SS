import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
};

export function Link({ to, href, children, ...props }: LinkProps) {
  return (
    <a href={href ?? to ?? "/"} {...props}>
      {children}
    </a>
  );
}

export function useRouterState() {
  return {
    location: {
      pathname: typeof window !== "undefined" ? window.location.pathname : "/",
    },
  };
}

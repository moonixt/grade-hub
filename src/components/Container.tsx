import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
      {children}
    </section>
  );
}

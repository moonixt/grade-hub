import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ContainerGallery({ children }: Props) {
  return (
    //remover o max-w-7xl para cobrir a tela inteira, sm:px-6 para espaçamento da borda, mx-auto para alinhamento
    <section className="mx-auto max-w-7xl  sm:px-6 ">{children}</section>
  );
}

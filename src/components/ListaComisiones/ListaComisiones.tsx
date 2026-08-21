import type { ComisionProps } from "../../data/data";
import { TarjetaComision } from "./TarjetaComision";

interface Props {
  comisiones: ComisionProps[];
}

export const ListaComisiones = ({ comisiones }: Props) => {
  return (
    <div>
      <ul>
        {comisiones.map((comision) => (
          <TarjetaComision key={comision.id} comision={comision} />
        ))}
      </ul>
    </div>
  );
};

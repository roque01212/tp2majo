import type { ComisionProps } from "../../data/data";
import { Etiqueta } from "./Etiqueta";

interface Props {
  comision: ComisionProps;
}
export const TarjetaComision = ({ comision }: Props) => {
  return (
    <div>
      <Etiqueta />
      <>
        <li style={{ marginTop: 20 }}>
          <p>Nombre de la materia {comision.nombre}</p>
          <p>cantidad de inscriptos{comision.inscriptos}</p>
          <p>cantidad de cupos{comision.cupo}</p>
        </li>
      </>
    </div>
  );
};

interface Props {
  titulo: string;
  cantidadComisiones: number;
  totalDisponible: number;
}

export const Encabezado = ({
  titulo,
  cantidadComisiones,
  totalDisponible,
}: Props) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>total de comisiones: {cantidadComisiones}</h2>

      <h2>total de comisiones disponibles: {totalDisponible}</h2>
    </div>
  );
};

import { useState } from "react";
import { Encabezado } from "./components/Encabezado/Encabezado";
import Filtros from "./components/Filtros/Filtros";
import { ListaComisiones } from "./components/ListaComisiones/ListaComisiones";
import { SinResultados } from "./components/SinResultados/SinResultados";
import { comisiones } from "./data/data";

export type turno = "mañana" | "tarde" | "noche" | "todos";

export const App = () => {
  const [datos, setDatos] = useState(comisiones);

  const [turnoSeleccionado, setTurnoSeleccionado] = useState<turno>("todos");

  const [turnoActivo, setTurnoActive] = useState<turno>("todos");

  const titulo = "Cartelera de comisiones:";

  // muestra la cantidad de comisiones existenttes
  const countComisiones = datos.length;

  // Muestra el total disponible
  const totalDisponibles = datos.filter(
    (comision) => comision.cupo - comision.inscriptos !== 0,
  ).length;

  // funcion para cambiar los turnnos
  const onCambiarTurno = (turno: turno) => {
    setTurnoSeleccionado(turno);
    setTurnoActive(turno);
  };

  const comisionesFiltradas =
    turnoSeleccionado === "todos"
      ? datos
      : datos.filter((comision) => comision.turno === turnoSeleccionado);

  return (
    <div>
      <Encabezado
        titulo={titulo}
        cantidadComisiones={countComisiones}
        totalDisponible={totalDisponibles}
      />
      {!datos.length ? (
        <SinResultados />
      ) : (
        <Filtros onCambiarTurno={onCambiarTurno} turnoActivo={turnoActivo} />
      )}

      <ListaComisiones comisiones={comisionesFiltradas} />
    </div>
  );
};

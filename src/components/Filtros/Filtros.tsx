import type { turno } from "../../App";

import styles from "./Filtro.module.css";

interface Props {
  onCambiarTurno: (turno: turno) => void;
  turnoActivo: string;
}

const Filtros = ({ onCambiarTurno, turnoActivo }: Props) => {
  return (
    <div>
      <button
        onClick={() => onCambiarTurno("mañana")}
        style={{
          padding: 20,
          borderRadius: 10,
          margin: 10,
        }}
        className={turnoActivo === "mañana" ? styles.active : styles.inactive}
      >
        mañana
      </button>
      <button
        onClick={() => onCambiarTurno("tarde")}
        style={{
          padding: 20,
          borderRadius: 10,
          margin: 10,
        }}
        className={turnoActivo === "tarde" ? styles.active : styles.inactive}
      >
        tarde
      </button>
      <button
        onClick={() => onCambiarTurno("noche")}
        style={{
          padding: 20,
          borderRadius: 10,
          margin: 10,
        }}
        className={turnoActivo === "noche" ? styles.active : styles.inactive}
      >
        noche
      </button>
      <button
        onClick={() => onCambiarTurno("todos")}
        style={{
          padding: 20,
          borderRadius: 10,
          margin: 10,
        }}
        className={turnoActivo === "todos" ? styles.active : styles.inactive}
      >
        todos
      </button>
    </div>
  );
};

export default Filtros;

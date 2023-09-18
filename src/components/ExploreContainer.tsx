import Asignaciones from "./Asignaciones";
import Asignature from "./Asignature";
import Discucion from "./Discucion";
import Estado from "./Estado";
import Historial from "./Historial";
import Horario from "./Horario";
import Index from "./Index";
import Login from "./Login";
import Relacion from "./Relacion";
import Videoconf from "./Videoconf";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {name === 'Horario de Asignatura' ? <Horario /> :
        name === 'Relacion de Materias' ? <Relacion /> :
          name === 'Estado de Cuenta' ? <Estado /> :
            name === 'Historial de Pagos' ? <Historial /> :
              name === 'Inicio' ? <Index /> :
                name === 'Asignaturas' ? <Asignature /> :
                  name === 'Foro de Discucion' ? <Discucion /> :
                    name === 'Asignaciones' ? <Asignaciones /> :
                    name === 'Videoconferencia' ? <Videoconf /> : <Login />}
    </div>
  )
};

export default ExploreContainer;


import { IonIcon } from "@ionic/react";
import { caretDown, caretUp } from "ionicons/icons";
import React from "react";
import { Row, Col } from 'react-bootstrap';

const Horario: React.FC = () => {
    const option = [{
        materia: 'Matematica',
        seccion: '0508',
        Horario: [
            { dia: 'Jueves', hora: new Date().toLocaleDateString() },
            { dia: 'Martes', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Economia',
        seccion: '0508',
        Horario: [
            { dia: 'Lunes', hora: new Date().toLocaleDateString() },
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Introducion a la Programacion Mobil',
        seccion: '0508',
        Horario: [
            { dia: 'Lunes', hora: new Date().toLocaleDateString() },
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Gestion Empresarial',
        seccion: '0508',
        Horario: [
            { dia: 'Lunes', hora: new Date().toLocaleDateString() },
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Gestion Empresarial',
        seccion: '0508',
        Horario: [
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() },
            { dia: 'Viernes', hora: new Date().toLocaleDateString() }
        ]
    },]
    return (
        <div>
            <div className="w-full bg-cyan-400/75 border-t-2 border-l-2 border-r-2 border-gray-300 rounded-lg p-1.5 mt-3 mb-1">
                <Row className="text-center font-bold">
                    <Col className="border-r-2 border-gray-300">Asignature</Col>
                    <Col>Horas</Col>
                </Row>
            </div>
            {option.map((row, index) => (
                <div className="w-full bg-cyan-400/25 group border-2 border-gray-300 rounded-lg p-1.5 mb-1 transition-all" key={index}>
                    <Row className="text-center relative">
                        <Col sm={12} className="group-hover:mb-2 mt-1">
                            <h2 className="group-hover:border-b-4 border-gray-300 h6"> {row.materia}
                                <IonIcon icon={caretDown} className="absolute end-5 scale-100 group-hover:scale-0 transition-all" />
                                <IonIcon icon={caretUp} className="absolute end-5 scale-0 group-hover:scale-100 group-hover:top-0 transition-all" /></h2>
                        </Col>
                        <Col className="scale-0 h-0 group-hover:scale-100 group-hover:h-full transition-all">
                            <ul className="text-start mt-1">
                                <li><b>Seccion:</b> {row.seccion}</li>
                                <li className="mt-1 mb-2 flex flew-warp"><b className="pe-5">Horario:</b>
                                    <ul className="list-disc px-1">
                                        {row.Horario.map((row, index) => (
                                            <li className="mb-2" key={index}><b>{row.dia}</b>: {row.hora}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
};

export default Horario;

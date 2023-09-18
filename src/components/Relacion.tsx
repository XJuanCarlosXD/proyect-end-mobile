import React from "react";
import { Row, Col } from 'react-bootstrap';

const Relacion: React.FC = () => {
    const option = [{
        materia: 'Economia',
        seccion: '0865',
        calificacion: 'A'
    },
    {
        materia: 'Administracion Empresa',
        seccion: '0865',
        calificacion: 'B'
    },
    {
        materia: 'Contabilidad 1',
        seccion: '0865',
        calificacion: 'A'
    },
    {
        materia: 'Contabilidad 2',
        seccion: '0865',
        calificacion: 'A'
    },
    {
        materia: 'Contabilidad 3',
        seccion: '0865',
        calificacion: 'A'
    },]
    return (
        <div>
            <div className="w-full bg-cyan-400/75 border-t-2 border-l-2 border-r-2 border-gray-300 rounded-lg p-1.5 mt-3 mb-1">
                <Row className="text-center font-bold">
                    <Col className="border-r-2 border-gray-300">Asignature</Col>
                    <Col className="border-r-2 border-gray-300">Seccion</Col>
                    <Col>Calificaciones</Col>
                </Row>
            </div>
            {option.map((row, index) => (
                <div className="w-full bg-cyan-400/25 group border-2 border-gray-300 rounded-lg p-1.5 mb-1 transition-all" key={index}>
                    <Row className="text-center">
                        <Col className="truncate col-8 border-r-2 border-gray-300">
                            <h2 className="h6 pt-1"> {row.materia}</h2>
                        </Col>
                        <Col className="flex justify-center items-center border-r-2 border-gray-300">
                            <h2 className="h6 pt-1"> {row.seccion}</h2>
                        </Col>
                        <Col className="flex justify-center items-center">
                            <h2 className="h6 pt-1"> {row.calificacion}</h2>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
};

export default Relacion;

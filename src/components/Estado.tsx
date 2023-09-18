import React from "react";
import { IonBadge, IonIcon } from "@ionic/react";
import { caretDown, caretUp } from "ionicons/icons";
import { Row, Col } from 'react-bootstrap';

const Estado: React.FC = () => {
    const option = [{
        concepto: 'Mensualidad',
        monto: 3200,
        recargo: 0,
        vencimiento: '2023-02-01'
    },
    {
        concepto: 'Mensualidad',
        monto: 3200,
        recargo: 0,
        vencimiento: '2023-03-01'
    },
    {
        concepto: 'Inscripcion',
        monto: 1000,
        recargo: 0,
        vencimiento: '2023-06-01'
    },
    {
        concepto: 'Pago de Reinscripcion',
        monto: 1000,
        recargo: 0,
        vencimiento: '2023-06-01'
    },]
    return (
        <div>
            <div className="w-full bg-green-400/75 border-t-2 border-l-2 border-r-2 border-gray-300 rounded-lg p-1.5 mt-3 mb-1">
                <Row className="text-start px-1 text-lg truncate group">
                    <Col className="border-r-2 border-gray-300 font-bold ">Deuda del Estudiante</Col>
                    <Col className="text-sm mt-1 px-3 text-red-800 font-bold "><b>Total: </b>
                        {'$' + Intl.NumberFormat('es-419', {
                            style: 'decimal',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(
                            option.map((row) => {
                                if (new Date(row.vencimiento) >= new Date()) {
                                    return row.recargo + row.monto
                                } else {
                                    return row.recargo + 350 + row.monto
                                }
                            }).reduce((count, item) => count + item, 0))}
                        <IonIcon icon={caretDown} className="absolute end-5 text-white scale-100 group-hover:scale-0 transition-all" />
                        <IonIcon icon={caretUp} className="absolute end-5 text-white scale-0 group-hover:scale-100 transition-all" />
                    </Col>
                    <Col className="scale-0 h-0 group-hover:scale-100 group-hover:h-full transition-all">
                        <ul className="text-end text-sm mt-3">
                            <li><b>Total por Concepto:</b> {'$' + Intl.NumberFormat('es-419', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }).format(option.map((row) => row.monto).reduce((count, item) => count + item, 0))}</li>
                            <li className="mt-1"><b className="pe-1">Total por Recargo:</b>
                                {'$' + Intl.NumberFormat('es-419', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(
                                    option.map((row) => {
                                        if (new Date(row.vencimiento) >= new Date()) {
                                            return row.recargo
                                        } else {
                                            return row.recargo + 350
                                        }
                                    }).reduce((count, item) => count + item, 0))}
                            </li>
                            <li className="mt-1"><b className="pe-1">Deuda Total:</b>
                                {'$' + Intl.NumberFormat('es-419', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(
                                    option.map((row) => {
                                        if (new Date(row.vencimiento) >= new Date()) {
                                            return row.recargo + row.monto
                                        } else {
                                            return row.recargo + 350 + row.monto
                                        }
                                    }).reduce((count, item) => count + item, 0))}
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="w-full bg-green-400/75 border-t-2 border-l-2 border-r-2 border-gray-300 rounded-lg p-1.5 mb-1">
                <Row className="text-center font-bold">
                    <Col className="border-r-2 border-gray-300">Concepto</Col>
                    <Col className="border-r-2 border-gray-300">Estado</Col>
                </Row>
            </div>
            {option.map((row, index) => (
                <div className="w-full bg-green-400/25 group border-2 border-gray-300 rounded-lg p-1.5 mb-1 transition-all" key={index}>
                    <Row className="text-center relative">
                        <Col className="group-hover:mb-2 flex">
                            <h2 className="group-hover:border-b-4 border-gray-300 h6 truncate px-2"> {row.concepto}
                                <IonIcon icon={caretDown} className="absolute end-5 scale-100 group-hover:scale-0 transition-all" />
                                <IonIcon icon={caretUp} className="absolute end-5 scale-0 group-hover:scale-100 group-hover:top-0 transition-all" /></h2>
                            <h2 className="group-hover:border-b-4 border-gray-300 h6 grow">
                                {new Date(row.vencimiento) >= new Date() ?
                                    <IonBadge className="text-white bg-green-500/75">Activo</IonBadge> :
                                    <IonBadge className="text-white bg-red-500/75">Vencido</IonBadge>}
                            </h2>
                        </Col>
                        <Col className="scale-0 h-0 group-hover:scale-100 group-hover:h-full transition-all">
                            <ul className="text-start mt-1 list-disc">
                                <li><b>Monto:</b> {'$' + Intl.NumberFormat('es-419', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(row.monto)}</li>
                                <li className="mt-1"><b className="pe-1">Recargo:</b>
                                    {'$' + Intl.NumberFormat('es-419', {
                                        style: 'decimal',
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }).format(new Date(row.vencimiento) >= new Date() ? row.recargo : row.recargo + 350)}
                                </li>
                                <li className="mt-1"><b className="pe-1">Vencimiento:</b>
                                    {new Date(row.vencimiento).toLocaleDateString()}
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
};

export default Estado;

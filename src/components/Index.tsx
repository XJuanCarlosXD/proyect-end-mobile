import { IonIcon } from '@ionic/react';
import { caretDown, caretUp, cashOutline } from 'ionicons/icons';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Index: React.FC = () => {
    const option = [{
        materia: 'Matematica',
        seccion: '0905',
        Horario: [
            { dia: 'Jueves', hora: new Date().toLocaleDateString() },
            { dia: 'Martes', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Fisica',
        seccion: '0905',
        Horario: [
            { dia: 'Lunes', hora: new Date().toLocaleDateString() },
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Economia',
        seccion: '0905',
        Horario: [
            { dia: 'Lunes', hora: new Date().toLocaleDateString() },
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Introducion a la Programacion Mobil',
        seccion: '0905',
        Horario: [
            { dia: 'Lunes', hora: new Date().toLocaleDateString() },
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() }
        ]
    },
    {
        materia: 'Gestion Empresarial',
        seccion: '0905',
        Horario: [
            { dia: 'Miercoles', hora: new Date().toLocaleDateString() },
            { dia: 'Viernes', hora: new Date().toLocaleDateString() }
        ]
    },]
    return (
        <div className='mt-3'>
            <div className='w-full p-2 px-3 h-full text-white rounded-lg bg-blue-800 mb-2'>
                <Row>
                    <Col className='flex flex-row'>
                        <h3 className='font-bold me-1'>Estudiante</h3>
                        <div className='bg-blue-500 p-1 rounded-lg'>Activo</div>
                    </Col>
                    <Col className='group relative'>
                        <div className='text-end'>
                            <button type='button' className='text-xs bg-blue-500 p-2 rounded-lg'>
                                Periodo <IonIcon className='scale-100 group-hover:scale-0 relative group-hover:absolute' icon={caretDown} /> <IonIcon icon={caretUp} className='scale-0 group-hover:scale-100 group-hover:relative absolute' />
                            </button>
                        </div>
                        <ul className='text-center bg-gray-800 p-2 transition-all scale-0 group-hover:scale-100 rounded-lg w-44 absolute end-5 mt-1 z-10'>
                            <li className='mb-1 border-b-2 border-sky-100 hover:bg-gray-300/50 hover:rounded-full'>Diciembre 2023</li>
                            <li className='mt-1 mb-1 border-b-2 border-sky-100 hover:bg-gray-300/50 hover:rounded-full'>Enero 2023</li>
                            <li className='hover:bg-gray-300/50 hover:rounded-full'>Mayo 2023</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className='w-full p-2 px-3 pb-1 h-full text-white rounded-lg bg-blue-800 mb-2 relative'>
                <Row className='mb-2'>
                    <Col className='truncate'>
                        <h3 className='text-sm truncate'>
                            Asignaturas periodo académico ENERO/ABRIL 2023
                        </h3>
                    </Col>
                </Row>
                {option.map((row, index) => (
                    <div className="w-full bg-cyan-400/50 group border-2 border-gray-300 rounded-lg p-1.5 mb-1 transition-all" key={index}>
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
            <div className='w-full p-2 px-3 h-full text-dark rounded-lg bg-blue-400 mb-2'>
                <h3 className='text-base font-bold text-green-800'>
                    Productos de Autodesk para educación.
                </h3>
                <p className='text-xs'>
                    Los estudiantes y docentes pueden obtener acceso para educación gratuito por un año a los productos y servicios de Autodesk, el cual es renovable siempre que sigan cumpliendo los requisitos. Confirma que cumples los requisitos ahora mismo.
                </p>
                <div className='text-end -mt-5'>
                    <a href="#!" className='text-sky-800 animate-pulse'>
                        Mas informacion
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Index;
import { IonIcon } from '@ionic/react';
import { caretDown, caretUp } from 'ionicons/icons';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Asignature: React.FC = () => {
    const option = [{
        materia: 'Matematica',
        seccion: '0508',
        labels: [{ laber: 'Examen Parcial', button: 'Tomar Examen' },
        { laber: 'Asinaciones para entregar', button: 'Entregar' },
        { laber: 'Proyectos', button: 'Abrir' }],
    },
    {
        materia: 'Introducion a la Programacion Mobil',
        seccion: '0508',
        labels: [{ laber: 'Examen Final', button: 'Tomar Examen' },
        { laber: 'Como Crear un archivo HTML', button: 'Abrir' },
        { laber: 'Proyectos Creados', button: 'Entregar' }],
    },
    {
        materia: 'Introducion a la Programacion Mobil',
        seccion: '0508',
        labels: [{ laber: 'Examen Final', button: 'Tomar Examen' },
        { laber: 'Como Crear un archivo HTML', button: 'Abrir' },
        { laber: 'Proyectos Creados', button: 'Entregar' }],
    },
    {
        materia: 'Matematica',
        seccion: '0508',
        labels: [{ laber: 'Examen Parcial', button: 'Tomar Examen' },
        { laber: 'Asinaciones para entregar', button: 'Entregar' },
        { laber: 'Proyectos', button: 'Abrir' }],
    },
    {
        materia: 'Gestion Empresarial',
        seccion: '0508',
        labels: [{ laber: 'Examen Final', button: 'Tomar Examen' },
        { laber: 'Como las empresa se manejan', button: 'Abrir' },
        { laber: 'Asignaciones', button: 'Entregar' }],
    },]
    return (
        <div className='mt-3'>
            <div className='w-full p-2 px-3 h-full text-white rounded-lg bg-green-800 mb-2'>
                <Row>
                    <Col className='flex flex-row'>
                        <h3 className='font-bold me-1'>Estudiante</h3>
                        <div className='bg-green-500 p-1 rounded-lg'>Activo</div>
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
            <div className='w-full p-2 px-3 pb-1 h-full text-white rounded-lg bg-green-800 mb-2 relative'>
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
                            <Col className="scale-0 h-0 group-hover:scale-100 group-hover:h-full transition-all group">
                                <ul className="text-start mt-1">
                                    <li><b>Seccion:</b> {row.seccion}</li>
                                    <li><b>Carpetas de Seccion</b></li>
                                </ul>
                                {row.labels.map((row: any, index: number) => (
                                    <div key={index} className=''>
                                        <div className='w-full h-full bg-gray-100 p-2 text-dark rounded-lg mb-2 text-start px-3 relative' >
                                            <h4 className='text-base border-b-2 border-gray-500'>{row.laber} <br />
                                                <small className='text-xs'>Abrir carpeta</small> <IonIcon icon={caretDown} className='absolute end-5 top-3' /></h4>
                                            <div className='text-end scale-0 group-hover:scale-100'>
                                                <button className={`p-2
                                                ${row.button === 'Abrir' ? 'bg-blue-500' : row.button === 'Entregar' ? 'bg-green-500' : 'bg-red-500'}
                                                  rounded-lg text-white text-xs`}>
                                                    {row.button}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Asignature;
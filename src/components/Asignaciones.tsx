import { IonIcon } from '@ionic/react';
import { bookOutline, caretDown, caretUp } from 'ionicons/icons';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Asignaciones: React.FC = () => {
    const option = [{
        materia: 'Matematica',
        seccion: '0508',
        labels: [{ laber: 'Examen Parcial', button: 'Tomar Examen' },
        { laber: 'Asinaciones para entregar', button: 'Entregar' },],
    },
    {
        materia: 'Introducion a la Programacion Mobil',
        seccion: '0508',
        labels: [{ laber: 'Examen Final', button: 'Tomar Examen' },
        { laber: 'Como Crear un archivo HTML', button: 'Abrir' },],
    },
    {
        materia: 'Gestion Empresarial',
        seccion: '0508',
        labels: [{ laber: 'Examen Final', button: 'Tomar Examen' },
        { laber: 'Como las empresa se manejan', button: 'Abrir' },],
    },]
    return (
        <div className='mt-3'>
            <div className='w-full p-2 px-3 h-full text-white rounded-lg bg-indigo-800 mb-2'>
                <Row>
                    <Col>
                        <h3 className='font-bold me-1'>Asignaciones <IonIcon className='relative top-1' icon={bookOutline} /></h3>
                    </Col>
                </Row>
            </div>
            <div className='w-full p-2 px-3 pb-1 h-full text-white rounded-lg bg-indigo-800 mb-2 relative'>
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

export default Asignaciones;
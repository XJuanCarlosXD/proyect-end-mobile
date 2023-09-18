import { IonIcon } from '@ionic/react';
import { send } from 'ionicons/icons';
import React from 'react';
import { Button, Form, Image, InputGroup } from 'react-bootstrap';

const Discucion: React.FC = () => {
    return (
        <div className='mt-3 p-2'>
            <div className='w-full h-screen max-h-96'>
                <div className='mb-2'>
                    <div className='text-start flex flex-wrap bg-gray-800 rounded-lg pt-2'>
                        <Image src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                            className='w-8 h-8 rounded-full me-2' />
                        <div className=''>
                            <p className='text-xs font-bold'>Juan Carlos Abreu</p>
                            <small className='text-xs relative -top-5'>M. 21-MISN-1-016</small>
                        </div>
                    </div>
                    <p className='rounded-lg w-full text-xs bg-blue-500 p-1 px-2 -mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis sapiente velit illum quasi eligendi exercitationem, doloribus soluta earum veniam placeat maxime debitis odit culpa dolor ducimus, eveniet reprehenderit et!
                    </p>
                </div>
                <div className='mb-2'>
                    <div className='text-start flex flex-wrap justify-end bg-gray-800 rounded-lg pt-2'>
                        <Image src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                            className='w-8 h-8 rounded-full me-2' />
                        <div className=''>
                            <p className='text-xs font-bold'>Anonimus</p>
                            <small className='text-xs relative -top-5 me-2'>M. 21-MISN-1-016</small>
                        </div>
                    </div>
                    <p className='rounded-lg w-full text-xs bg-blue-500 p-1 px-2 -mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis sapiente velit illum quasi eligendi exercitationem, doloribus soluta earum veniam placeat maxime debitis odit culpa dolor ducimus, eveniet reprehenderit et!
                    </p>
                </div>
            </div>
            <Form className='fixed bottom-3 w-full start-0'>
                <InputGroup>
                    <Form.Control type='text' placeholder='Escribir Mensaje' className='bg-dark text-white' />
                    <Button><IonIcon icon={send} /></Button>
                </InputGroup>
            </Form>
        </div>
    );
};


export default Discucion;
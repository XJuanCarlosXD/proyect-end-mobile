import React from 'react';
import { Image } from 'react-bootstrap';

const Videoconf: React.FC = () => {
    const option = [
        { name: 'Entrado al mundo de las Fraciones', decrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id aspernatur nulla eligendi provident sunt quas voluptates nihil voluptatem magni odio aperiam, nisi error beatae iure quod quaerat expedita blanditiis?', materia: 'Matematicas', horario: new Date().toLocaleString() },
        { name: 'Creando nuestra primera aplicacion', decrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id aspernatur nulla eligendi provident sunt quas voluptates nihil voluptatem magni odio aperiam, nisi error beatae iure quod quaerat expedita blanditiis?', materia: 'introducion programacion mobil', horario: new Date().toLocaleString() },
    ]
    return (
        <div className='mt-3'>
            {option.map((row, index) => (
                <div className='w-full bg-blue-800 rounded-lg mb-3' key={index}>
                    <Image src='https://cdn.mos.cms.futurecdn.net/25UeWUrVGmuXUjnG6Yt7rj-1200-80.jpg' className='rounded-t-lg' />
                    <h3 className='text-base text-center px-2 mt-2 font-bold'>{row.name}</h3>
                    <p className='text-xs px-5'>
                        {row.decrip}
                    </p>
                    <ul className='list-disc text-sm px-5 mx-3'>
                        <li><b>Materia:</b> {row.materia}</li>
                        <li><b>Horario:</b> {row.horario}</li>
                    </ul>
                    <button type='button' className='w-full bg-blue-500 rounded-b-lg p-2'>
                        Ir a Conferencia
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Videoconf;
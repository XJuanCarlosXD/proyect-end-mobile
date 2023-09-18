/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bookmarkOutline, business, calendarClearOutline, caretDown, cash, cashOutline, chatbubble, document, exit, fileTray, home, people, peopleSharp, walletOutline } from 'ionicons/icons';
import { useForm } from 'react-hook-form';
import React from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { toast } from 'react-hot-toast';

const appPages = {
  appService: [
    {
      title: 'Horario de Asignaturas',
      url: '/page/Horario de Asignatura',
      iosIcon: calendarClearOutline,
      mdIcon: calendarClearOutline
    },
    {
      title: 'Relacion de Materias',
      url: '/page/Relacion de Materias',
      iosIcon: bookmarkOutline,
      mdIcon: bookmarkOutline
    },
  ],
  appTesoreria: [
    {
      title: 'Estado de Cuenta',
      url: '/page/Estado de Cuenta',
      iosIcon: walletOutline,
      mdIcon: walletOutline
    },
    {
      title: 'Historial de Pagos',
      url: '/page/Historial de Pagos',
      iosIcon: cashOutline,
      mdIcon: cashOutline,
    },
  ],
  appUniversidad: [
    {
      title: 'Inicio',
      url: '/page/Inicio',
      iosIcon: home,
      mdIcon: home
    },
    {
      title: 'Asignaturas',
      url: '/page/Asignaturas',
      iosIcon: document,
      mdIcon: document,
    },
    {
      title: 'Foro de Discucion',
      url: '/page/Foro de Discucion',
      iosIcon: chatbubble,
      mdIcon: chatbubble,
    },
    {
      title: 'Asignaciones',
      url: '/page/Asignaciones',
      iosIcon: fileTray,
      mdIcon: fileTray,
    },
    {
      title: 'Videoconferencia',
      url: '/page/Videoconferencia',
      iosIcon: peopleSharp,
      mdIcon: peopleSharp,
    },
    {
      title: 'Login',
      url: '/page/Login',
      iosIcon: peopleSharp,
      mdIcon: peopleSharp,
    },
  ],
};

const Menu: React.FC = () => {
  const location = useLocation();
  const { setValue, watch } = useForm();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setValue('photo', user.photoURL);
        setValue('name', user.displayName);
      }
    });
  }, [])
  const singOute = () => {
    toast((t) => (
      <span>
        Se saldra de la session <b>actual</b>

        <IonItem button routerLink='/page/Login' className='mx-2 bg-red-500 px-1 rounded-lg hover:bg-red-800' onClick={() => {
          toast.dismiss(t.id)
          signOut(auth).then(() => {
            toast.success('Hasta la Proxima', {
              icon: '👋',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            })
          })
        }
        }>
          <IonIcon icon={exit} />
        </IonItem>
      </span>
    ), {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  }
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list" className='group'>
          <div className="relative rounded-xl overflow-auto p-2 mb-2">
            <div className="relative max-w-sm mx-auto bg-gray-800 shadow-lg ring-1 ring-black/5 rounded-full flex items-center gap-6">
              <img className="w-14 h-14 rounded-full shadow-lg" src={watch('photo')} alt='' />
              <div className="flex flex-col truncate">
                <strong className="text-slate-200 text-sm font-medium truncate">{watch('name')}</strong>
                <span className="text-slate-400 text-sm font-medium">Estudiante</span>
              </div>
              <IonIcon icon={exit} size='large' className='hover:text-red-500 transition-all' onClick={() => singOute()} />
            </div>
          </div>
          <div className='border-b-4 px-2 mb-2 font-bold text-lg'>Servicios al Estudiante <IonIcon className='animate-bounce' icon={people} /> <IonIcon icon={caretDown} /></div>
          {appPages.appService.map((appPage, index) => {
            return (
              <div className='transition-all scale-0 h-0 group-hover:scale-100 group-hover:h-full' key={index}>
                <IonMenuToggle autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'text-indigo-500' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon aria-hidden="true" slot="start" className={location.pathname === appPage.url ? 'text-indigo-500' : ''} ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </div>
            );
          })}
        </IonList>
        <IonList id="inbox-list" className='group'>
          <div className='border-b-4 px-2 mb-2 font-bold text-lg'>Tesoreria <IonIcon className='animate-bounce' icon={cash} /> <IonIcon icon={caretDown} /></div>
          {appPages.appTesoreria.map((appPage, index) => {
            return (
              <div className='transition-all scale-0 h-0 group-hover:scale-100 group-hover:h-full' key={index}>
                <IonMenuToggle autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'text-indigo-500' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon aria-hidden="true" slot="start" className={location.pathname === appPage.url ? 'text-indigo-500' : ''} ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </div>
            );
          })}
        </IonList>

        <IonList id="inbox-list" className='group'>
          <div className='border-b-4 px-2 mb-2 font-bold text-lg'>Universidad <IonIcon className='animate-bounce' icon={business} /> <IonIcon icon={caretDown} /></div>
          {appPages.appUniversidad.map((appPage, index) => {
            return (
              <div className='transition-all scale-0 h-0 group-hover:scale-100 group-hover:h-full' key={index}>
                <IonMenuToggle autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'text-indigo-500' : appPage.url === '/page/Login' ? 'hidden' : ''} routerLink={appPage.url} id={appPage.url === '/page/Login' ? appPage.url : 'login'} routerDirection="none" lines="none" detail={false}>
                    <IonIcon aria-hidden="true" slot="start" className={location.pathname === appPage.url ? 'text-indigo-500' : appPage.url === '/page/Login' ? 'hidden' : ''} ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </div>
            );
          })}
        </IonList>


      </IonContent>
    </IonMenu >
  );
};

export default Menu;

import React from 'react';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';
        
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

export default function Header() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Highlight',
            icon: 'pi pi-star',
            url: '/highlight'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            url: '/projects'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: '/contact'
        }
    ];

    const start = (
        <div>
            <h2>Hey Joyce! <i className="pi pi-heart-fill" style={{ fontSize: '1.5rem' }}></i></h2>
        </div>
    )

    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
        </div>
    );

  return (
    <div className="card">
        <Menubar model={items} start={start} end={end}/>
    </div>
  )
}

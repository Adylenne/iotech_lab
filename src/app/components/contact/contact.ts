import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    const nombre = data.get('nombre') || '';
    const correo = data.get('correo') || '';
    const empresa = data.get('empresa') || '';
    const telefono = data.get('telefono') || '';
    const servicio = data.get('servicio') || '';
    const mensaje = data.get('mensaje') || '';

    const subject = `Solicitud de asesoría - ${servicio}`;

    const body = `
Nombre: ${nombre}
Correo: ${correo}
Empresa: ${empresa}
Teléfono: ${telefono}
Servicio de interés: ${servicio}

Mensaje:
${mensaje}
`;

    window.location.href =
      `mailto:iotechsoporte@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
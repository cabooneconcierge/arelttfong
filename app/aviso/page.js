import Link from "next/link";

export const metadata = {
  title: "Aviso de privacidad | Dra. Arlett Fong Hirales"
};

export default function Aviso() {
  return (
    <main className="wrap legal">
      <p><Link href="/">← Inicio</Link></p>
      <h1>Aviso de privacidad</h1>
      <p>
        La Dra. Arlett Fong Hirales, con consultorio en Hospital H+ Los Cabos y en Healthy Cabo,
        es responsable del tratamiento de los datos personales que un paciente envía para solicitar una cita.
      </p>
      <p>
        Se recaban nombre, teléfono y el motivo de la consulta, únicamente para agendar, confirmar o dar
        seguimiento a una valoración. Esos datos no se venden ni se usan para publicidad de terceros.
      </p>
      <p>
        El formulario abre WhatsApp en el dispositivo de quien lo envía. El mensaje queda en esa conversación.
        Para acceder, rectificar o cancelar datos, escribe a citas@arelttfong.com.
      </p>
      <p>
        Este sitio no atiende urgencias. Ante dolor abdominal intenso, fiebre o un bulto incarcerado, acude a urgencias.
      </p>
    </main>
  );
}

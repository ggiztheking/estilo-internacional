import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Estilo Internacional | Barbería en Mérida',description:'Tu estilo, sin fronteras. Cortes desde $200, paquetes de corte y barba y reservas por WhatsApp. Los Héroes, Mérida. 9:30 AM a 11:00 PM.',metadataBase:new URL('https://estilo-internacional.berrygenet64.chatgpt.site'),openGraph:{title:'Estilo Internacional · Barbería',description:'Elige tu paquete y reserva por WhatsApp.',images:['/img/hero.jpg']},robots:{index:true,follow:true},referrer:'no-referrer'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es-MX"><body>{children}</body></html>}

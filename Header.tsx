import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.jpg';
export default  function Header() {
    return (
        <>  
            <header
                className="bg-primary bg-opacity-10 text-black shadow p-3"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1020, // asegúrate de que esté sobre el contenido
                    backdropFilter: 'blur(5px)', // opcional para efecto de vidrio
                }}
                >
                <div className="container d-flex align-items-center">
                     {/* Texto a la izquierda */}
                    <div>
                        <h1 className="h1 mb-1 fw-bold">Mile Sublime</h1>
                        <h2 className="mb-0 small">© 2025 All rights reserved.</h2>
                        <h2 className="mb-0 small">🎨✨ Personaliza tus momentos especiales con nuestros productos sublimados. Desde mugs hasta camisetas, creamos el regalo perfecto para cualquier ocasión. 💝🎁 📍 ¡Haz tu pedido hoy y sorprende con un detalle único! ¡¡</h2>
                    </div>
                     {/* Logo como botón a la derecha con animación */}
                     <Link to="https://api.whatsapp.com/send?phone=573150074646&fbclid=IwY2xjawIXJqlleHRuA2FlbQIxMAABHZwlG-GMt230bIku2HQNm8l3KBOLoLwwce4wo9qfsHDiORNEpwSzCFxHCw_aem_4VSYz9VB-qBZPQ6KFjWGGQ" className="ms-auto">
                        <img
                            src={logo} 
                            alt="Mile Sublime Logo"
                            width={80}
                            height={80}
                            className="logo-hover rounded-circle"
                       
                         />
                    </Link>
                    
                </div>
            </header>
        </>
    );
}
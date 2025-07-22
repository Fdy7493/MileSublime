

export default function LandingPage() {
  return (
    <div className="container mx-auto p-4 bg-success-subtle rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Tambien tenemos el motivo para ese amor o esa amistad que quieres cultivar💘✨</h1>
      <p className="text-gray-700 mb-4">💝 Sorprende a tu persona especial con un regalo personalizado. 🔥 Promoción especial por tiempo limitado: Descuento en combos de amor y amistad. 🎀 📩 Contactanos y personaliza el tuyo.</p>
      <p className="text-gray-600 mb-2"></p>
      <p className="text-gray-600 mb-6"></p>

      {/* Sección de videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Video 1 */}
        <div className="video-container">
            <iframe
              width="30%"
              height="150"
              src="https://youtube.com/embed/YdsL_3A0UiE?si=cX2oRgyY7tTPoRAQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          <p className="text-gray-600 text-center mt-2">💖✨ Animate a conocer la oferta de productos que tenemos para ti
              para celebres esos momentos especiales con tu pareja, amigos o familiares ¡</p>
        
        </div>

        {/* Video 2 */}
        <div className="video-container">
          <iframe
            width="30%"
            height="150"
            src="https://youtube.com/embed/5pnKnLi9r9Y?si=VXz1qeZ1hAtf1L-f"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 text-center mt-2">✨💖 Sorprende a esa persona especial con un detalle personalizado ¡</p>
        </div>

        {/* Video 3 */}
        <div className="video-container">
          <iframe
            width="30%"
            height="150"
            src="https://youtube.com/embed/MHJ60vzh6Us?si=Hi6g-nFKNUs3-7Af"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 text-center mt-2">✨ Organizamos el detalle perfecto para ti ¡</p>
        </div>

        {/* Video 4 */}

        <div className="video-container">
          <iframe
            width="30%"
            height="150"
            src="https://youtube.com/embed/VxpwvXMGs28?si=ugGp25uYMgJ2DUwU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 text-center mt-2">✨Mugs, camisetas, cojines, touchpads y mas...¡</p>
        </div>       

        
      
      </div>
    </div>
  );
}
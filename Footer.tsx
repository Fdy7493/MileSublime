
import { FaFacebook, FaTiktok, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary bg-opacity-10 text-black shadow p-3  rounded-lg flex flex-col items-center justify-center">
      <div className="container mx-auto px-6">
            {/* Redes Sociales con efecto hover */}
            <div className="d-flex justify-content-center gap-4 mb-3">
              {/* Facebook - Azul */}
              <div className="d-flex justify-content-center gap-4">
                  {/* Facebook */}
                  <a href="https://www.facebook.com/profile.php?id=100076590042543&locale=es_LA" className="hover-effect facebook">
                    <FaFacebook style={{ color: "#1877F2" }} />
                  </a>

                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@milesublime3?_t=ZS-8to3AHZBK8F&_r=1" className="hover-effect tiktok">
                    <FaTiktok style={{ color: "#000000" }} />
                  </a>

                  {/* WhatsApp */}
                  <a href="https://api.whatsapp.com/send?phone=573150074646&fbclid=IwY2xjawIXJqlleHRuA2FlbQIxMAABHZwlG-GMt230bIku2HQNm8l3KBOLoLwwce4wo9qfsHDiORNEpwSzCFxHCw_aem_4VSYz9VB-qBZPQ6KFjWGGQ" className="hover-effect whatsapp">
                    <FaWhatsapp style={{ color: "#25D366" }} />
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/milesublime?utm_source=qr&igsh=MWp4NTN6N2ZwMGJrNQ==" className="hover-effect instagram">
                    <FaInstagram style={{ color: "#E1306C" }} />
                  </a>

                  {/* YouTube */}
                  <a href="https://www.youtube.com/@MileSublime" className="hover-effect youtube">
                    <FaYoutube style={{ color: "#FF0000" }} />
                  </a>
                </div>

            {/* Enlaces legales */}
            <div className="d-flex flex-column align-items-center mb-3">
              <a href="#" className="text-blue-400 hover:underline py-1">Privacy Policy</a>
              <a href="#" className="text-blue-400 hover:underline py-1">Terms of Service</a>
              <a href="https://mail.google.com/mail/u/0/?pli=1#search/contactomilesublime%40gmail.com">Contact Us</a>
              
            </div>

          {/* Copyright */}
          <p className="text-center mb-0"></p>
        </div>
      </div>
    </footer>
  );
}
import Header from "./Componentes/Landing/Header";
import Card from "./Componentes/Dashboard/Card";
import Hero from "./Componentes/Landing/Hero";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Componentes/Landing/Footer";
import Button from "./Componentes/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/global.css';
import './styles/footer.css';
import './styles/Dashboard.css';

export default function App() {
    return (
            

        <div className="container-xl border rounded border-2 primary-subtle shadow p-4 my-4">
  

                
                    <h1 className="text-2xl font-bold"></h1>
                    <Header />                
                    <Card />
                    <Hero />
                    <LandingPage />
                    <Dashboard />
                    <Footer />
                    <Button />
                    <p className="text-gray-600 mt-4">© 2025</p>
                    <p className="text-gray-600 mt-2">All rights reserved.</p>
                   <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="text-black-400  py-1"> fdy7493@gmail.com. </a>
                
        </div>    

    );    
}
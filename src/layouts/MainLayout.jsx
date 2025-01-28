import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
           <div className="min-h-[calc(100vh-285px)]">
             {/* Dynamics Section */}
           </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
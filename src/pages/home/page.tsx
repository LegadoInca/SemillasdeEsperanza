import EmergencyBar from "@/components/feature/EmergencyBar";
import Navbar from "@/components/feature/Navbar";
import HeroSection from "@/components/feature/HeroSection";
import StatsBar from "@/components/feature/StatsBar";
import QuienesSomos from "@/components/feature/QuienesSomos";
import AreasTrabajo from "@/components/feature/AreasTrabajo";
import HistoriasReales from "@/components/feature/HistoriasReales";
import ProyectosActivos from "@/components/feature/ProyectosActivos";
import Apadrinamiento from "@/components/feature/Apadrinamiento";
import Donaciones from "@/components/feature/Donaciones";
import Transparencia from "@/components/feature/Transparencia";
import AliadosVoluntarios from "@/components/feature/AliadosVoluntarios";
import Contacto from "@/components/feature/Contacto";
import Footer from "@/components/feature/Footer";
import FloatingDonate from "@/components/feature/FloatingDonate";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <EmergencyBar />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <QuienesSomos />
        <AreasTrabajo />
        <HistoriasReales />
        <ProyectosActivos />
        <Apadrinamiento />
        <Donaciones />
        <Transparencia />
        <AliadosVoluntarios />
        <Contacto />
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import WeeklyPlan from "@/components/WeeklyPlan";
import Checklist from "@/components/Checklist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <WeeklyPlan />
      <Checklist />
      <Footer />
    </main>
  );
};

export default Index;
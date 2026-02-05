import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import WhyScentFree from "@/components/WhyScentFree";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <WhyScentFree />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

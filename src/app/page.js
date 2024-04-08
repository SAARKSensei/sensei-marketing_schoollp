import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhySensei from "@/components/WhySensei";
import Facilities from "@/components/Facilities";
import ContactUs from "@/components/ContactUs";
import BackToTop from "@/components/BackToTop";
import VideoPlay from "@/components/PlayVideo";
export default function Home() {
  return (
    <main
      id="top"
      className=" relative min-w-screen min-h-screen scrollbar-hide scroll-smooth"
    >

      <BackToTop />
      <Navbar />
      {/* <VideoPlay/> */}
      <HeroSection />
      <WhySensei />
      <Facilities />
      <ContactUs />
      <Footer />
    </main>
  );
}

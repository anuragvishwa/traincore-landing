export const metadata = {
  title: "TrainKore",
  description: "Save upto 85% in prompt engineering",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import FeaturesLog from "@/components/features-log";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";
import RouteCard from "@/components/utils/routeCard";
import Feedback from "@/components/utils/feedback";
import BgShapes from "./bg-shapes";
import VerticalLines from "./vertical-lines";
import CodeTabs from "./CodeTabs";
import CodeView from "./CodeView";
import Faqs from "@/components/faqs";
import Resources from "./resources";
import Pricing from "./pricing/page";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <BusinessCategories /> */}
      {/* <VerticalLines /> */}

      {/* <BgShapes /> */}
      <FeaturesPlanet />
      <RouteCard />
      <CodeView />
      <Feedback />
      <FeaturesLog />

      {/* <LargeTestimonial />

      <Features /> */}
      <Pricing />

      {/* <TestimonialsCarousel /> */}
      {/* <Faqs /> */}
      {/* <Cta /> */}
    </>
  );
}

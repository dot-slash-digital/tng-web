import CtaBanner from "@components/home/cta-banner";
import Jumbotron from "@components/home/jumbotron";
import MeetTheTeam from "@components/home/meet-the-team";
import OurProcess from "@components/home/our-process";
import OurServices from "@components/home/our-services";
import WhyUs from "@components/home/why-us";

export default () => {
  return (
    <>
      <div>Home page</div>
      <Jumbotron />
      <OurServices />
      <CtaBanner />
      <OurProcess />
      <WhyUs />
      <MeetTheTeam />
    </>
  );
};

import EventsComponent from "@/components/landing/events";
import HeroComponent from "@/components/landing/hero";
import ResourcesComponent from "@/components/landing/resources";
import SchedulesComponent from "@/components/landing/shedules";
import ShepherdsComponent from "@/components/landing/shepherds";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <ShepherdsComponent />
      <SchedulesComponent />
      <EventsComponent/>
      <ResourcesComponent/>
    </>
  );
}

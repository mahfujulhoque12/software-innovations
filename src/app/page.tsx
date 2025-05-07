"use client";


import ClientWrapper from "@/components/ui/clients/ClientWrapper";
import Experties from "@/components/ui/experties/Experties";
import Hero from "@/components/ui/Hero/Hero";
import HomeCallAction from "@/components/ui/home-action/HomeCallAction";
import HomeServicesWrapper from "@/components/ui/home-services/HomeServicesWrapper";
import IndustriesWrapper from "@/components/ui/industries/IndustriesWrapper";
import SucessWrapper from "@/components/ui/success/SucessWrapper";
import WhoWeWrapper from "@/components/ui/who-we/WhoWeWrapper";



export default function Home() {

  return (
    <div>
      <Hero />
      <WhoWeWrapper/>
      <HomeServicesWrapper/>
      <Experties/>
      <IndustriesWrapper/>
      <ClientWrapper/>
      <SucessWrapper/>
      <HomeCallAction/>
    </div>
  );
}

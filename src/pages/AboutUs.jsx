import React from 'react';
import whyus from "../assets/img/why-us.png";
import Navbar from '../components/Navbar';
import Footer from './Footer';
import '../components/Hero.css';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <div>
      <Layout>
      <section className="py-12 max-w-[1150px] mx-auto p-5">
      <div className="mx-auto justify-center items-center text-center mt-8 md:mt-28 mb-8 ">
        <h1 className="font-sans text-5xl font-semibold text-[#4663ae] pb-1 mb-8 inline-block border-b-2 border-[#4663ae] leading-snug product_title">
          About Us
        </h1>
      </div>

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center text-left  text-justify">
          <div className="lg:w-1/2 lg:pr-8 mb-7 text-pretty font-sans font-normal text-lg text-gray-500 py-3 space-y-6">
            <p>Technode is an electronics product design and development company established in the year 2020. We specialize in designing and developing embedded hardware, embedded software, electrical measurement devices, industrial automation devices, and IoT data logging instruments. Our focus is on providing reliable and cost-effective embedded solutions that meet both the needs of our customers and the demands of the market.</p>
            <p className="mt-4">
              At Technode, we work with the latest embedded technologies such as ARM Cortex-M, RISC-V, IoT, LoRa, etc. We have developed
              embedded software for more than 10 different microcontroller platforms, including 8/16/32-bit microcontrollers.
              Our diverse clientele spans various industries, including biomedical instruments, elevator control manufacturers,
              air purifier manufacturers, telecom sector (AT&T Regional), hobby electronics, farming sector, textile sector, home automation
              & lighting, dairy equipment manufacturers, industrial automation sector, and more.
            </p>
            <p className="mt-4">
              As a leading service provider in the field of embedded systems and automation, we are committed to delivering the best quality designs
              to our customers. Our goal is to continue providing innovative and reliable solutions to meet the evolving needs of the industry.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={whyus} alt="Technode" className="rounded-md -mt-10 bounceUpDown img-fluid animated" />
          </div>
        </div>
      </section>
      {/* <Counter /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Footer /> */}
      </Layout>
    </div>
  );
};

export default AboutUs;

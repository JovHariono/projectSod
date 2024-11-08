import * as React from "react";
import Navbar from "./components/header/navbar";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ep1 from "../../public/assets/EP1.png";
import pru1 from "../../public/assets/Pru1.png";
import pru2 from "../../public/assets/Pru2.jpeg";
import pru3 from "../../public/assets/Pru3.jpeg";
import pru4 from "../../public/assets/Pru4.jpeg";
import pru5 from "../../public/assets/Pru5.jpeg";
import pru6 from "../../public/assets/Pru6.jpeg";
import pru7 from "../../public/assets/Pru7.jpeg";

import ep2 from "../../public/assets/EP2.png";
import bull1 from "../../public/assets/B1.png";
import bull2 from "../../public/assets/B2.jpeg";
import bull3 from "../../public/assets/B3.jpeg";
import bull4 from "../../public/assets/B4.jpeg";
import bull5 from "../../public/assets/B5.jpeg";
import bull6 from "../../public/assets/B6.jpeg";

import ep3 from "../../public/assets/EP3.png";
import dyson1 from "../../public/assets/D1.png";
import dyson2 from "../../public/assets/D2.png";
import dyson3 from "../../public/assets/D3.png";
import dyson4 from "../../public/assets/D4.png";
import dyson5 from "../../public/assets/D5.png";
import dyson6 from "../../public/assets/D6.png";
import dyson7 from "../../public/assets/D7.png";
import dyson8 from "../../public/assets/D8.jpeg";

import ep4 from "../../public/assets/EP4.png";
import Wardah1 from "../../public/assets/W1.png";
import Wardah2 from "../../public/assets/W2.jpeg";
import Wardah3 from "../../public/assets/W3.jpeg";
import Wardah4 from "../../public/assets/W4.jpg";
import Wardah5 from "../../public/assets/W5.jpeg";
import Wardah6 from "../../public/assets/W6.jpeg";
import Wardah7 from "../../public/assets/W7.jpeg";
import Wardah8 from "../../public/assets/W8.jpeg";

import ep5 from "../../public/assets/EP5.png";
import par1 from "../../public/assets/Par1.jpg";
import par2 from "../../public/assets/Par2.jpg";
import par3 from "../../public/assets/Par3.jpg";
import par4 from "../../public/assets/Par4.jpg";
import par5 from "../../public/assets/Par5.jpg";
import par6 from "../../public/assets/Par6.jpg";
import par7 from "../../public/assets/Par7.jpg";
import par8 from "../../public/assets/Par8.jpg";
import par9 from "../../public/assets/Par9.jpg";

import ep6 from "../../public/assets/EP6.png";
import nov1 from "../../public/assets/Nov1.jpg";
import nov2 from "../../public/assets/Nov2.jpg";
import nov3 from "../../public/assets/Nov3.jpg";
import nov4 from "../../public/assets/Nov4.jpg";
import nov5 from "../../public/assets/Nov5.jpg";
import nov6 from "../../public/assets/Nov6.jpg";
import nov7 from "../../public/assets/Nov7.jpg";
import nov8 from "../../public/assets/Nov8.jpg";
import nov9 from "../../public/assets/Nov9.jpg";
import nov10 from "../../public/assets/Nov10.jpg";
import nov11 from "../../public/assets/Nov11.jpg";
import nov12 from "../../public/assets/Nov12.jpg";

import ep7 from "../../public/assets/EP7.png";
import sinergi1 from "../../public/assets/sinergi1.png";
import sinergi2 from "../../public/assets/sinergi2.png";
import sinergi3 from "../../public/assets/sinergi3.png";
import sinergi4 from "../../public/assets/sinergi4.png";
import sinergi5 from "../../public/assets/sinergi5.png";
import sinergi6 from "../../public/assets/sinergi6.png";

import ep8 from "../../public/assets/EP8.png";
import bukber1 from "../../public/assets/bukber1.jpg";
import bukber2 from "../../public/assets/bukber2.jpg";
import bukber3 from "../../public/assets/bukber3.jpg";
import bukber4 from "../../public/assets/bukber4.jpg";
import bukber5 from "../../public/assets/bukber5.jpg";
import bukber6 from "../../public/assets/bukber6.jpg";

import ep9 from "../../public/assets/EP9.png";
import omg1 from "../../public/assets/omg1.png";
import omg2 from "../../public/assets/omg2.png";
import omg3 from "../../public/assets/omg3.png";
import omg4 from "../../public/assets/omg4.png";
import omg5 from "../../public/assets/omg5.png";
import omg6 from "../../public/assets/omg6.png";
import omg7 from "../../public/assets/omg7.png";
import omg8 from "../../public/assets/omg8.png";
import omg9 from "../../public/assets/omg9.png";

import ep10 from "../../public/assets/EP10.png";
import dhl1 from "../../public/assets/dhl1.png";
import dhl2 from "../../public/assets/dhl2.png";
import dhl3 from "../../public/assets/dhl3.png";
import dhl4 from "../../public/assets/dhl4.png";
import dhl5 from "../../public/assets/dhl5.png";
import dhl6 from "../../public/assets/dhl6.png";

import Footer from "./components/cards/productCards/footer/Footer";
import { BrandType } from "../type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface IEventPlannerProps {}

const EventPlanner: React.FunctionComponent<IEventPlannerProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDataImagePopUp, setDataImagePopUp] = useState<StaticImageData[]>([]);
  const [isDataJudulPopUp, setDataJudulPopUp] = useState("");
  const [isDataDeskripsiPopUp, setDataDeskripsiPopUp] = useState("");
  const [isInstagram, setInstagram] = useState("");
  const [isTwitter, setisTwitter] = useState("");
  const [isTiktok, setTiktok] = useState("");
  const [isYoutube, setYoutube] = useState("");

  const Brands: BrandType[] = [
    {
      image: ep10,
      judul: "DHL EV",
      imagePopup: [dhl1, dhl2, dhl3, dhl4, dhl5, dhl6],
      judulPopUp: "DHL EV",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep9,
      judul: "OMG Brand Activation",
      imagePopup: [omg1, omg2, omg3, omg4, omg5, omg6, omg7, omg8, omg9],
      judulPopUp: "OMG Brand Activation #DemiLebaranPenuhCinta",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep8,
      judul: "Buka Bersama Paragon",
      imagePopup: [bukber1, bukber2, bukber3, bukber4, bukber5, bukber6],
      judulPopUp: "Buka Bersama Paragon",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep7,
      judul: "Ramadhan Gathering Sinergi",
      imagePopup: [sinergi1, sinergi2, sinergi3, sinergi4, sinergi5, sinergi6],
      judulPopUp: "Ramadhan Gathering Sinergi #penggerakkebaikan",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep6,
      judul: "Novoclub Welcoming Batch 3",
      imagePopup: [
        nov1,
        nov2,
        nov3,
        nov4,
        nov5,
        nov6,
        nov7,
        nov8,
        nov9,
        nov10,
        nov11,
        nov12,
      ],
      judulPopUp: "Novoclub Welcoming Batch 3",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep4,
      judul: "Wardah Glasting Liquid Lip",
      imagePopup: [
        Wardah1,
        Wardah2,
        Wardah3,
        Wardah4,
        Wardah5,
        Wardah6,
        Wardah7,
        Wardah8,
      ],
      judulPopUp: "Wardah Glasting Liquid Lip",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep3,
      judul: "Dyson Ceramic Pop Launch",
      imagePopup: [
        dyson1,
        dyson2,
        dyson3,
        dyson4,
        dyson5,
        dyson6,
        dyson7,
        dyson8,
      ],
      judulPopUp: "Dyson Ceramic Pop Launch",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep2,
      judul: "Bull Motion",
      imagePopup: [bull1, bull2, bull3, bull4, bull5, bull6],
      judulPopUp: "Bull Motion",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: ep1,
      judul: "Prudential Pruactive Family",
      imagePopup: [pru1, pru2, pru3, pru4, pru5, pru6, pru7],
      judulPopUp: "Prudential Pruactive Family",
      deskripsiPopUp: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
  ];

  const togglePop = (brand: BrandType) => {
    setIsClicked(!isClicked);
    setDataImagePopUp(brand.imagePopup);
    setDataJudulPopUp(brand.judul);
    setDataDeskripsiPopUp(brand.deskripsiPopUp);
    setInstagram(brand.instagram);
    setisTwitter(brand.twitter);
    setTiktok(brand.tiktok);
    setYoutube(brand.youtube);
  };

  return (
    <div className="container">
      <div className={`containerContent ${isClicked ? "blurContainer" : ""}`}>
        <div className="header">
          <Navbar />
        </div>
        <div className="subHeader2">
          <h1>EVENT PLANNER</h1>
          <div className="seperator"></div>
        </div>
        <div className="contentOurBrand">
          {Brands.map((brand, index) => {
            return (
              <div
                className="containerBrand"
                onClick={() => togglePop(brand)}
                key={index}
              >
                <Image
                  className="imgBrand"
                  src={brand.image}
                  alt="Sounds of Downtown - sod"
                />
                <h2 className="judulBrand"> {brand.judul} </h2>
                <div className="seperatorBrand"></div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
      {isClicked && (
        <div className="popUpBrand">
          <div className="containerPopUpBrand">
            <div className="containerButtonPopUp">
              <button
                className="buttonPopUp"
                onClick={() => setIsClicked(!isClicked)}
              >
                X
              </button>
            </div>
            <div className="containerUtamaImagePopUp">
              <div className="containerImagePopUp">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  freeMode={true}
                  speed={1500}
                  // navigation={true}
                  modules={[Autoplay, Pagination, Navigation, FreeMode]}
                  className="mySwiper"
                >
                  {isDataImagePopUp.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        // className="imagePopUp"
                        src={image ? image : ""}
                        alt="Sounds of Downtown - sod"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <h2 className="judulPopUp2"> {isDataJudulPopUp} </h2>
            <div className="deskripsiPopUp"> {isDataDeskripsiPopUp} </div>
            <div className="containerIconPopup">
              {isInstagram ? (
                <Link href={isInstagram}>
                  {" "}
                  <FontAwesomeIcon
                    className="iconPopUp"
                    icon={faInstagram}
                  />{" "}
                </Link>
              ) : (
                ""
              )}
              {isTiktok ? (
                <Link href={isTiktok}>
                  {" "}
                  <FontAwesomeIcon className="iconPopUp" icon={faTiktok} />{" "}
                </Link>
              ) : (
                ""
              )}
              {isTwitter ? (
                <Link href={isTwitter}>
                  {" "}
                  <FontAwesomeIcon
                    className="iconPopUp"
                    icon={faTwitter}
                  />{" "}
                </Link>
              ) : (
                ""
              )}
              {isYoutube ? (
                <Link href={isYoutube}>
                  {" "}
                  <FontAwesomeIcon
                    className="iconPopUp"
                    icon={faYoutube}
                  />{" "}
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPlanner;

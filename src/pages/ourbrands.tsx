import * as React from "react";
import Navbar from "./components/header/navbar";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BrandN1 from "../../public/assets/BrandN1.png";
import sodN1 from "../../public/assets/sodN1.png";
import sodN2 from "../../public/assets/sodN2.png";
import sodN3 from "../../public/assets/sodN3.png";
import sodN4 from "../../public/assets/sodN4.png";
import sodN5 from "../../public/assets/sodN5.png";
import sodN6 from "../../public/assets/sodN6.png";
import sodN7 from "../../public/assets/sodN7.png";


import BrandN2 from "../../public/assets/BrandN2.png";
import sodLive1 from "../../public/assets/sodLive1.png";
import sodLive2 from "../../public/assets/sodLive2.png";
import sodLive3 from "../../public/assets/sodLive3.png";
import sodLive4 from "../../public/assets/sodLive4.png";
import sodLive5 from "../../public/assets/sodLive5.png";
import sodLive6 from "../../public/assets/sodLive6.png";


import BrandN3 from "../../public/assets/BrandN3.png";
import cla1 from "../../public/assets/cla1.png"
import cla2 from "../../public/assets/cla2.png"
import cla3 from "../../public/assets/cla3.png"
import cla4 from "../../public/assets/cla4.png"
import cla5 from "../../public/assets/cla5.png"

import BrandN4 from "../../public/assets/BrandN4.png";


import BrandN5 from "../../public/assets/BrandN5.png";
import bbb1 from "../../public/assets/bbb1.png";
import bbb2 from "../../public/assets/bbb2.png";
import bbb3 from "../../public/assets/bbb3.png";


import BrandN6 from "../../public/assets/BrandN6.png";
import ww1 from "../../public/assets/ww1.png";
import ww2 from "../../public/assets/ww2.png";
import ww3 from "../../public/assets/ww3.png";
import ww4 from "../../public/assets/ww4.png";

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
import { useRouter } from "next/router";

interface IOurBrandsProps {}

const OurBrands: React.FunctionComponent<IOurBrandsProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDataImagePopUp, setDataImagePopUp] = useState<StaticImageData[]>([]);
  const [isDataJudulPopUp, setDataJudulPopUp] = useState("");
  const [isDataDeskripsiPopUp, setDataDeskripsiPopUp] = useState("");
  const [isInstagram, setInstagram] = useState("");
  const [isTwitter, setisTwitter] = useState("");
  const [isTiktok, setTiktok] = useState("");
  const [isYoutube, setYoutube] = useState("");

  const router = useRouter();

  const Brands: BrandType[] = [
    {
      image: BrandN1,
      judul: "SOD Festival",
      imagePopup: [
        sodN1,
        sodN2,
        sodN3,
        sodN4,
        sodN5,
        sodN6,
        sodN7,
      ],
      judulPopUp: "SOD Festival",
      deskripsiPopUp:
        "Events that are organized by PT. Saudagar Oke Dermawan (SOD), combining music, arts, foods and fashion in one place.",
      instagram: "https://www.instagram.com/sodfestival/",
      twitter: "https://twitter.com/sodfestival?s=21&t=KLf2POP_e5uImzVPbbePQQ",
      tiktok: "https://www.tiktok.com/@sodfestival?lang=en",
      youtube: "https://www.youtube.com/@sodfestival",
    },
    {
      image: BrandN2,
      judul: "SOD Live",
      imagePopup: [
        sodLive1,
        sodLive2,
        sodLive3,
        sodLive4,
        sodLive5,
        sodLive6,
      ],
      judulPopUp: "SOD Live",
      deskripsiPopUp:
        "SOD LIVE is here to bridge local communities to musicians to brands through music collective events.",
      instagram: "https://www.instagram.com/sodliveid/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: BrandN3,
      judul: "Chakra Live Asia",
      imagePopup: [
        cla1,
        cla2,
        cla3,
        cla4,
        cla5,
      ],
      judulPopUp: "Chakra Live Asia",
      deskripsiPopUp:
        "International music promoter in South East Asia, Indonesia, bringing the best talents and performers across the globe.",
      instagram: "https://www.instagram.com/chakraliveasia/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: BrandN4,
      judul: "On The Ground",
      routeTo: "/ontheground",
      imagePopup: [
      ],
      judulPopUp: "SOD Festival",
      deskripsiPopUp:
        "A company that focuses on helping to provide and create the best experience for audience through our first-class event handling services.",
      instagram: "https://www.instagram.com/onthegrnd.id/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: BrandN5,
      judul: "Bla Bla Bla Festival",
      imagePopup: [
        bbb1,
        bbb2,
        bbb3,
      ],
      judulPopUp: "Bla Bla Bla Festival",
      deskripsiPopUp:
        "Blablabla Festival is a music festival in collaboration with LA, designed to be organized across multiple cities in Indonesia.",
      instagram: "https://www.instagram.com/blablablafest/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: BrandN6,
      judul: "Waku-Waku Festival",
      imagePopup: [
        ww1,
        ww2,
        ww3,
        ww4,
      ],
      judulPopUp: "Waku-Waku Festival",
      deskripsiPopUp:
        "Events that consists of Japanese Themed Music, Arts, Foods and Culture Festival. Aiming to create a full experience of japanese culture in one place.",
      instagram: "https://www.instagram.com/wakuwakufest/",
      twitter: "",
      tiktok: "https://www.tiktok.com/@wakuwakufest7",
      youtube: "",
    },
  ];

  const handleBrandClick = (brand: BrandType) => {
  if (brand.routeTo) {
    router.push(brand.routeTo);
    return;
  }

  togglePop(brand);
};


  const togglePop = (brand: BrandType) => {
    setIsClicked(!isClicked);
    setDataImagePopUp(brand.imagePopup);
    setDataJudulPopUp(brand.judul);
    setDataDeskripsiPopUp(brand.deskripsiPopUp);
    setInstagram(brand.instagram || "");
    setisTwitter(brand.twitter || "");
    setTiktok(brand.tiktok || "");
    setYoutube(brand.youtube || "");
  };

  return (
    <div className="container">
      <div className={`containerContent ${isClicked ? "blurContainer" : ""}`}>
        <div className="header">
          <Navbar />
        </div>
        <div className="subHeader2">
          <h1>OUR BRANDS</h1>
          <div className="seperator"></div>
        </div>
        <div className="contentOurBrand">
          {Brands.map((brand, index) => {
            return (
              <div
                className="containerBrand"
                onClick={() => handleBrandClick(brand)}
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
        <div className="containerUtamaPopUpBrand">
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
                    className="mySwiperBrand"
                  >
                    {isDataImagePopUp.map((image, index) => (
                      //cari bentuk width
                      <SwiperSlide key={index}>                      
                          <Image
                            className="imagePopUp"
                            src={image ? image : ""}
                            alt="Sounds of Downtown - sod"
                          />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <h2 className="judulPopUp"> {isDataJudulPopUp} </h2>
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
                    <FontAwesomeIcon
                      className="iconPopUp"
                      icon={faTiktok}
                    />{" "}
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
        </div>
      )}
    </div>
  );
};

export default OurBrands;

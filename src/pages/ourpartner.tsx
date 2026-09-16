import * as React from "react";
import Navbar from "./components/header/navbar";
import Footer from "./components/cards/productCards/footer/Footer";
import Partner from "./components/cards/productCards/Partner";
import { useState, useEffect } from "react";
import Image from "next/image";

import logoDesktop from "../../public/assets/prevPartner/LogoDesktop.png";
import logoMobile from "../../public/assets/prevPartner/logoMobile.png";


interface IOurPartnerProps {}

const OurPartner: React.FunctionComponent<IOurPartnerProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else if (window.innerWidth >= 900) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const partners = [
    {
      judul: "mandiri",
      gambar: "/assets/PartnerS/1-mandiri.png",
    },
    {
      judul: "jatim",
      gambar: "/assets/PartnerS/2-jatim.png",
    },
    {
      judul: "byond",
      gambar: "/assets/PartnerS/byond.png",
    },
    {
      judul: "bjb",
      gambar: "/assets/PartnerS/21-bjb.png",
    },
    {
      judul: "ipi",
      gambar: "/assets/PartnerS/37-ipi.png",
    },
    {
      judul: "bm",
      gambar: "/assets/PartnerS/boldMusic.png",
    },
    {
      judul: "laz",
      gambar: "/assets/PartnerS/10-laz.png",
    },
    {
      judul: "signature",
      gambar: "/assets/PartnerS/3-signatur.png",
    },
    {
      judul: "gg",
      gambar: "/assets/PartnerS/4-gg.png",
    },
    {
      judul: "tikom",
      gambar: "/assets/PartnerS/12-tikom.png",
    },
    {
      judul: "ats",
      gambar: "/assets/PartnerS/24-ats.png",
    },
    {
      judul: "garuda",
      gambar: "/assets/PartnerS/garuda.png",
    },
    {
      judul: "citilink",
      gambar: "/assets/PartnerS/citilink.png",
    },
    {
      judul: "grab",
      gambar: "/assets/PartnerS/11-grab.png",
    },
    {
      judul: "gojek",
      gambar: "/assets/PartnerS/gojek.png",
    },
    {
      judul: "toyota",
      gambar: "/assets/PartnerS/6-toyota.png",
    },
    {
      judul: "mfm",
      gambar: "/assets/PartnerS/32-mfm.png",
    },
    {
      judul: "telkom",
      gambar: "/assets/PartnerS/9-telkom.png",
    },
    {
      judul: "biznet",
      gambar: "/assets/PartnerS/biznet.png",
    },
    {
      judul: "kopken",
      gambar: "/assets/PartnerFnB/16.png",
    },
    {
      judul: "Kapal Api",
      gambar: "/assets/PartnerFnB/10.png",
    },
    {
      judul: "gd",
      gambar: "/assets/PartnerFnB/11.png",
    },
    {
      judul: "caffino",
      gambar: "/assets/PartnerFnB/15.png",
    },
    {
      judul: "Top Cappucino",
      gambar: "/assets/PartnerFnB/2.png",
    },
    {
      judul: "Le Minerale",
      gambar: "/assets/PartnerFnB/1.png",
    },
    {
      judul: "cocacola",
      gambar: "/assets/PartnerFnB/14.png",
    },
    {
      judul: "Teh Pucuk Harum",
      gambar: "/assets/PartnerFnB/7.png",
    },
    {
      judul: "floridina",
      gambar: "/assets/PartnerFnB/12.png",
    },
    {
      judul: "Chatime",
      gambar: "/assets/PartnerFnB/3.png",
    },
    {
      judul: "rb",
      gambar: "/assets/PartnerS/35-rb.png",
    },
    {
      judul: "cedea",
      gambar: "/assets/PartnerS/28-cedea.png",
    },
    {
      judul: "Mie Sedaap",
      gambar: "/assets/PartnerFnB/5.png",
    },
    {
      judul: "JATINANGOR",
      gambar: "/assets/PartnerFnB/4.png",
    },
    {
      judul: "hokben",
      gambar: "/assets/PartnerFnB/13.png",
    },
    {
      judul: "fiesta",
      gambar: "/assets/PartnerFnB/17.png",
    },
    {
      judul: "Sari Roti",
      gambar: "/assets/PartnerFnB/8.png",
    },
    {
      judul: "Madu TJ",
      gambar: "/assets/PartnerFnB/9.png",
    },
    {
      judul: "Nutriville",
      gambar: "/assets/PartnerFnB/6.png",
    },
    {
      judul: "nivea",
      gambar: "/assets/PartnerS/5-nivea.png",
    },
    {
      judul: "emina",
      gambar: "/assets/PartnerS/20-emina.png",
    },
    {
      judul: "omg",
      gambar: "/assets/PartnerS/omg.png",
    },
    {
      judul: "msg",
      gambar: "/assets/PartnerS/7-msg.png",
    },
    {
      judul: "msgm",
      gambar: "/assets/PartnerS/8-msgm.png",
    },
    {
      judul: "kltn",
      gambar: "/assets/PartnerS/13-kltn.png",
    },
    {
      judul: "snc",
      gambar: "/assets/PartnerS/23-snc.png",
    },
    {
      judul: "hp",
      gambar: "/assets/PartnerS/34-hp.png",
    },
    {
      judul: "posh",
      gambar: "/assets/PartnerS/33-posh.png",
    },
    {
      judul: "sf",
      gambar: "/assets/PartnerS/36-sf.png",
    },
    {
      judul: "emeron",
      gambar: "/assets/PartnerS/emeron.png",
    },
    {
      judul: "hic",
      gambar: "/assets/PartnerS/30-hic.jpg",
    },
    {
      judul: "soklin",
      gambar: "/assets/PartnerS/soklin.png",
    },
    {
      judul: "photo",
      gambar: "/assets/PartnerS/16-photo.png",
    },
    {
      judul: "harper",
      gambar: "/assets/PartnerS/17-harper.png",
    },
    {
      judul: "emb",
      gambar: "/assets/PartnerS/40-emb.png",
    },
    {
      judul: "rkc",
      gambar: "/assets/PartnerS/18-rkc.png",
    },
    {
      judul: "inst",
      gambar: "/assets/PartnerS/22-inst.png",
    },
    {
      judul: "recharge",
      gambar: "/assets/PartnerS/recharge.png",
    },
    {
      judul: "meteraiku",
      gambar: "/assets/PartnerS/38-meteraiku.png",
    },
    {
      judul: "mercure",
      gambar: "/assets/PartnerS/14-mercure.png",
    },
    {
      judul: "novo",
      gambar: "/assets/PartnerS/15-novo.png",
    },
    {
      judul: "alana",
      gambar: "/assets/PartnerS/27-alana.png",
    },
    {
      judul: "tsh",
      gambar: "/assets/PartnerS/29-tsh.png",
    },
    {
      judul: "next",
      gambar: "/assets/PartnerS/39-next.png",
    },
    {
      judul: "whiz",
      gambar: "/assets/PartnerS/whiz.png",
    },
    {
      judul: "bess",
      gambar: "/assets/PartnerS/bess.png",
    },
    {
      judul: "swiss",
      gambar: "/assets/PartnerS/swiss.png",
    },
    {
      judul: "jp",
      gambar: "/assets/PartnerS/31-jp.jpg",
    },
    {
      judul: "sbysuites",
      gambar: "/assets/PartnerS/sbysuites.png",
    },
    {
      judul: "ibis",
      gambar: "/assets/PartnerS/26-ibis.png",
    },
    {
      judul: "nashos",
      gambar: "/assets/PartnerS/nashos.png",
    },
    {
      judul: "emotion",
      gambar: "/assets/PartnerS/emotion.png",
    },
    {
      judul: "seraya",
      gambar: "/assets/PartnerS/seraya.png",
    },
  ];

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1440) {
        setPerPage(24);
      } else {
        setPerPage(24);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate paginated data
  const totalPages = Math.ceil(partners.length / perPage);
  const paginated = partners.slice((page - 1) * perPage, page * perPage);

  const padded = [
    ...paginated,
    ...Array(perPage - paginated.length).fill(null),
  ];

  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>

      <div className="subHeader2 text-center my-8">
        <h1 className="text-3xl font-bold">PREVIOUS PARTNER</h1>
        <div className="seperator mx-auto mt-2 w-16 h-1 bg-gray-800"></div>
      </div>

      <div className="partnerContent">
        <div className="containerPartner">
          {
            isMobile ? 
            <Image
              className="imagePartner2"
              alt="Sounds of Downtown - sod"
              src={logoMobile}
              width={100}
              height={100}
            />
            :
            <Image
              className="imagePartner2"
              alt="Sounds of Downtown - sod"
              src={logoDesktop}
              width={100}
              height={100}
            />
          }
        </div>
      </div>

      {/* Partner grid */}
      {/* <div className="partnerContent grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6">
        {padded.map((partner, index) =>
          partner ? (
            <Partner
              key={index}
              judul={partner.judul}
              gambar={partner.gambar}
            />
          ) : (
            <div key={index} className="invisible"></div> // empty slot
          )
        )}
      </div> */}

      {/* Pagination controls */}
      {/* <div className="containerPagin flex justify-center items-center gap-6 my-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="buttonPagin"
        >
          &lt;
        </button>

        <div className="text-lg font-medium">
          {page} of {totalPages}
        </div>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="buttonPagin"
        >
          &gt;
        </button>
      </div> */}

      <Footer />
    </div>
  );
};

export default OurPartner;

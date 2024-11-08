import * as React from "react";
import Navbar from "./components/header/navbar";
import Footer from "./components/cards/productCards/footer/Footer";

import mandiri from "../../public/assets/PartnerS/1-mandiri.png";
import jatim from "../../public/assets/PartnerS/2-jatim.png";
import signatur from "../../public/assets/PartnerS/3-signatur.png";
import gg from "../../public/assets/PartnerS/4-gg.png";
import nivea from "../../public/assets/PartnerS/5-nivea.png";
import toyota from "../../public/assets/PartnerS/6-toyota.png";
import msg from "../../public/assets/PartnerS/7-msg.png";
import msgm from "../../public/assets/PartnerS/8-msgm.png";
import telkom from "../../public/assets/PartnerS/9-telkom.png";
import laz from "../../public/assets/PartnerS/10-laz.png";
import grab from "../../public/assets/PartnerS/11-grab.png";
import tikom from "../../public/assets/PartnerS/12-tikom.png";
import kltn from "../../public/assets/PartnerS/13-kltn.png";
import mercure from "../../public/assets/PartnerS/14-mercure.png";
import novo from "../../public/assets/PartnerS/15-novo.png";
import photo from "../../public/assets/PartnerS/16-photo.png";
import harper from "../../public/assets/PartnerS/17-harper.png";
import rkc from "../../public/assets/PartnerS/18-rkc.png";
import smn from "../../public/assets/PartnerS/19-smn.png";
import emina from "../../public/assets/PartnerS/20-emina.png";
import bjb from "../../public/assets/PartnerS/21-bjb.png";
import inst from "../../public/assets/PartnerS/22-inst.png";
import snc from "../../public/assets/PartnerS/23-snc.png";
import ats from "../../public/assets/PartnerS/24-ats.png";
import ibis from "../../public/assets/PartnerS/26-ibis.png";
import alana from "../../public/assets/PartnerS/27-alana.png";
import cedea from "../../public/assets/PartnerS/28-cedea.jpg";
import tsh from "../../public/assets/PartnerS/29-tsh.png";
import hic from "../../public/assets/PartnerS/30-hic.jpg";
import jp from "../../public/assets/PartnerS/31-jp.jpg";
import mfm from "../../public/assets/PartnerS/32-mfm.png";
import posh from "../../public/assets/PartnerS/33-posh.png";
import hp from "../../public/assets/PartnerS/34-hp.png";
import rb from "../../public/assets/PartnerS/35-rb.png";
import sf from "../../public/assets/PartnerS/36-sf.png";
import ipi from "../../public/assets/PartnerS/37-ipi.png";
import meteraiku from "../../public/assets/PartnerS/38-meteraiku.png";
import next from "../../public/assets/PartnerS/39-next.png";
import emb from "../../public/assets/PartnerS/40-emb.png";

//FnB
import PartnerFnB1 from "../../public/assets/PartnerFnB/1.png";
import PartnerFnB2 from "../../public/assets/PartnerFnB/2.png";
import PartnerFnB3 from "../../public/assets/PartnerFnB/3.png";
import PartnerFnB4 from "../../public/assets/PartnerFnB/4.png";
import PartnerFnB5 from "../../public/assets/PartnerFnB/5.png";
import PartnerFnB6 from "../../public/assets/PartnerFnB/6.png";
import PartnerFnB7 from "../../public/assets/PartnerFnB/7.png";
import PartnerFnB8 from "../../public/assets/PartnerFnB/8.png";
import PartnerFnB9 from "../../public/assets/PartnerFnB/9.png";
import PartnerFnB10 from "../../public/assets/PartnerFnB/10.png";
import PartnerFnB11 from "../../public/assets/PartnerFnB/11.png";

import Partner from "./components/cards/productCards/Partner";

interface IOurPartnerProps {}

const OurPartner: React.FunctionComponent<IOurPartnerProps> = (props) => {
  const partners = [
    {
      judul: "mandiri",
      gambar: mandiri,
    },
    {
      judul: "jatim",
      gambar: jatim,
    },
    {
      judul: "signature",
      gambar: signatur,
    },
    {
      judul: "gg",
      gambar: gg,
    },
    {
      judul: "nivea",
      gambar: nivea,
    },
    {
      judul: "toyota",
      gambar: toyota,
    },
    {
      judul: "msg",
      gambar: msg,
    },
    {
      judul: "msgm",
      gambar: msgm,
    },
    {
      judul: "telkom",
      gambar: telkom,
    },
    {
      judul: "laz",
      gambar: laz,
    },
    {
      judul: "grab",
      gambar: grab,
    },
    {
      judul: "tikom",
      gambar: tikom,
    },
    {
      judul: "kltn",
      gambar: kltn,
    },
    {
      judul: "mercure",
      gambar: mercure,
    },
    {
      judul: "novo",
      gambar: novo,
    },
    {
      judul: "photo",
      gambar: photo,
    },
    {
      judul: "harper",
      gambar: harper,
    },
    {
      judul: "rkc",
      gambar: rkc,
    },
    {
      judul: "smn",
      gambar: smn,
    },
    {
      judul: "emina",
      gambar: emina,
    },
    {
      judul: "bjb",
      gambar: bjb,
    },
    {
      judul: "inst",
      gambar: inst,
    },
    {
      judul: "snc",
      gambar: snc,
    },
    {
      judul: "ats",
      gambar: ats,
    },
    {
      judul: "Harper",
      gambar: harper,
    },
    {
      judul: "ibis",
      gambar: ibis,
    },
    {
      judul: "alana",
      gambar: alana,
    },
    {
      judul: "cedea",
      gambar: cedea,
    },
    {
      judul: "tsh",
      gambar: tsh,
    },
    {
      judul: "hic",
      gambar: hic,
    },
    {
      judul: "jp",
      gambar: jp,
    },
    {
      judul: "mfm",
      gambar: mfm,
    },
    {
      judul: "posh",
      gambar: posh,
    },
    {
      judul: "hp",
      gambar: hp,
    },
    {
      judul: "rb",
      gambar: rb,
    },
    {
      judul: "sf",
      gambar: sf,
    },
    {
      judul: "ipi",
      gambar: ipi,
    },
    {
      judul: "meteraiku",
      gambar: meteraiku,
    },
    {
      judul: "next",
      gambar: next,
    },
    {
      judul: "emb",
      gambar: emb,
    },
    {
      judul: "Le Minerale",
      gambar: PartnerFnB1,
    },
    {
      judul: "Teh Pucuk Harum",
      gambar: PartnerFnB7,
    },
    {
      judul: "Mie Sedaap",
      gambar: PartnerFnB5,
    },
    {
      judul: "Top Cappucino",
      gambar: PartnerFnB2,
    },
    {
      judul: "Chatime",
      gambar: PartnerFnB3,
    },
    {
      judul: "JATINANGOR",
      gambar: PartnerFnB4,
    },
    {
      judul: "Nutriville",
      gambar: PartnerFnB6,
    },
    {
      judul: "Sari Roti",
      gambar: PartnerFnB8,
    },
    {
      judul: "Sari Roti",
      gambar: PartnerFnB9,
    },
    {
      judul: "Sari Roti",
      gambar: PartnerFnB10,
    },
    {
      judul: "gd",
      gambar: PartnerFnB11,
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="subHeader2">
        <h1>OUR PARTNER</h1>
        <div className="seperator"></div>
      </div>
      <div className="partnerContent">
        {partners.map((partner, index) => {
          return (
            <Partner
              key={index}
              judul={partner.judul}
              gambar={partner.gambar}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default OurPartner;

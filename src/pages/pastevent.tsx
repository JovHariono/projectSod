import * as React from "react";
import Navbar from "./components/header/navbar";
import CountUp from "react-countup";

import Footer from "./components/cards/productCards/footer/Footer";
import Event from "./components/cards/productCards/Event";

import Event1 from "../../public/assets/Event1.png";
import Event2 from "../../public/assets/Event2.png";
import Event3 from "../../public/assets/Event3.png";
import Event4 from "../../public/assets/Event4.png";
import Event5 from "../../public/assets/Event5.png";
import Event6 from "../../public/assets/Event6.png";
import Event7 from "../../public/assets/Event7.png";
import Event8 from "../../public/assets/Event8.png";
import Event9 from "../../public/assets/Event9.png";
import Event10 from "../../public/assets/Event10.png";
import Event11 from "../../public/assets/Event11.png";
import Event12 from "../../public/assets/Event12.png";
import Event13 from "../../public/assets/Event13.png";
import Event14 from "../../public/assets/Event14.png";
import Event15 from "../../public/assets/Event15.png";
import Event16 from "../../public/assets/Event16.png";
import Event17 from "../../public/assets/Event17.png";
import Event18 from "../../public/assets/Event18.png";
import Event19 from "../../public/assets/Event19.png";
import Event20 from "../../public/assets/Event20.png";
import Event21 from "../../public/assets/Event21.png";
import Event22 from "../../public/assets/Event22.png";
import Event23 from "../../public/assets/Event23.png";
import Event24 from "../../public/assets/Event24.png";
import Event25 from "../../public/assets/Event25.png";
import Event26 from "../../public/assets/Event26.png";

interface IPastEventProps {}

const PastEvent: React.FunctionComponent<IPastEventProps> = (props) => {
  const Events = [
    {
      gambar: Event26,
    },
    {
      gambar: Event25,
    },
    {
      gambar: Event24,
    },
    {
      gambar: Event23,
    },
    {
      gambar: Event22,
    },
    {
      gambar: Event21,
    },
    {
      gambar: Event20,
    },
    {
      gambar: Event19,
    },
    {
      gambar: Event18,
    },
    {
      gambar: Event17,
    },
    {
      gambar: Event16,
    },
    {
      gambar: Event15,
    },
    {
      gambar: Event14,
    },
    {
      gambar: Event13,
    },
    {
      gambar: Event12,
    },
    {
      gambar: Event11,
    },
    {
      gambar: Event10,
    },
    {
      gambar: Event9,
    },
    {
      gambar: Event8,
    },
    {
      gambar: Event7,
    },
    {
      gambar: Event6,
    },
    {
      gambar: Event5,
    },
    {
      gambar: Event4,
    },
    {
      gambar: Event3,
    },
    {
      gambar: Event2,
    },
    {
      gambar: Event1,
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="subHeader2">
        <h1>PAST EVENT</h1>
        <div className="seperator"></div>
      </div>
      <div className="containerCounterUp">
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={34} duration={5} />
          </h1>
          <p className="pCounter">Main Event</p>
        </div>
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={300} duration={3} /> +
          </h1>
          <p className="pCounter">Partners</p>
        </div>
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={300} duration={4} /> +
          </h1>
          <p className="pCounter">Performers</p>
        </div>
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={300} duration={4} separator="," /> K+
          </h1>
          <p className="pCounter">Tickets Sold</p>
        </div>
      </div>
      <div className="contentPastEvents">
        {Events.map((event, index) => {
          return <Event key={index} gambar={event.gambar} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default PastEvent;

import { StaticImageData } from "next/image";
import Image from "next/image";
import * as React from "react";

interface IPartnerProps {
  judul: string;
  gambar: string;
}

const Partner: React.FunctionComponent<IPartnerProps> = (props) => {
  return (
    <div className="containerPartner">
      {/* <Image
        loading="lazy"
        className="imagePartner"
        width={160}
        height={80}
        src={props.gambar}
        alt="Sounds of Downtown - sod"
      /> */}
      <img
        loading="lazy"
        className="imagePartner"
        width={160}
        height={80}
        src={props.gambar}
        alt={props.judul}
      />
    </div>
  );
};

export default Partner;

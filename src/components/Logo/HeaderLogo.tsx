import React, { FC } from "react";
import { Image } from "@nextui-org/react";
import headerLogoImg from "./header-logo.png";

type HeaderLogoProps = {
    width: string;
    height: string;
}

const HeaderLogo: FC<HeaderLogoProps> = ({ width, height }) => {
    return (
        <Image
            src={headerLogoImg}
            alt="Header Logo"
            width={width}
            height={height}
        />
    );
}

export default HeaderLogo;
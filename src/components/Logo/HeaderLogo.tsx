import React, { FC } from "react";
import { Image } from "@chakra-ui/react";
import headerLogoImg from "./header-logo.png";

type HeaderLogoProps = {
    size: string;
}

const HeaderLogo: FC<HeaderLogoProps> = ({ size }) => {
    return (
        <div>
            <Image src={headerLogoImg} alt="Header Logo" w="auto" h={size} />
        </div>
    );
};

export default HeaderLogo;
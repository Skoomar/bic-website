import React, { FC } from "react";
import { Image } from '@mantine/core';
import headerLogoImg from "./header-logo.png";

type HeaderLogoProps = {
    width: string;
    height: string;
}

const HeaderLogo: FC<HeaderLogoProps> = ({ width, height }) => {
    return (
        <div>
            <Image src={headerLogoImg} alt="Header Logo" width={width} height={height} />
        </div>
    );
};

export default HeaderLogo;
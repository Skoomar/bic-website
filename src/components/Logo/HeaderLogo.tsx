import React, { FC } from "react";
import { Flex, Image } from "@chakra-ui/react";
import headerLogoImg from "./header-logo.png";


const HeaderLogo: FC = () => {
    return (
        <Flex justify={["center", null, "center", "left"]}>
            <Image src={headerLogoImg} alt="Header Logo" w="auto" h={["12rem", "18rem"]} />
        </Flex>
    );
};

export default HeaderLogo;
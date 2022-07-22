import React from "react";
import {Container, Image, Title} from '@mantine/core';
import iletisim from "../../img/iletişim.png";

const Contact = () => {
    return (
        <>
            <Container>
                <Title order={1}>CONTACT</Title>
                <Image
                    height={300}
                    width={500}
                    src={iletisim}
                    alt=""
                />
            </Container>


        </>
    );
};

export default Contact;
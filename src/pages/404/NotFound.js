import React from "react";
import {Container, Image} from '@mantine/core';
import not from "../../img/404_not _found.jpeg";

const text="BACK HOME"
const NotFound = () => {
    return (
        <>
            <Container>
                <Image
                    height={500}
                    width={900}
                    src={not}
                    alt=""
                />
                <br/>
                {text}
            </Container>


        </>
    );
};

export default NotFound;
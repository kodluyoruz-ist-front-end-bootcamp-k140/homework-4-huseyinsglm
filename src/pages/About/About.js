import React from "react";
import {Container, Title} from '@mantine/core';

const text =
    "1998 yılında \"En yeni iletişim ve bilgisayar teknolojilerini kullanarak müşterilerine dünya standartlarında çözümler sunmak\" ilkesiyle yola çıkan isimtescil.net, geçen 16 yıllık süreçte Dünya ve Türkiye’ye, en büyük domain ve hosting firmalarından biri olmayı başarmıştır.\n" +
    "\n" +
    "2008 yılında alan adları standartlarını belirleyen ve denetleyen tek otorite ICANN'e akredite olan isimtescil.net, 2010 yılından beri Türkiye'nin en büyük 500 bilişim şirketi arasında yer almakta ve kurulduğu günden buyana 1 milyonun üzerinde domain kaydı ve 200 bininin üzerinde barındırma hizmetne " +
    "ev sahipliği yapmıştır.";
const About = () => {
    return (
        <>
            <Container>
                <Title order={1}>ABOUT</Title>
                {text}
            </Container>


        </>
    );
};

export default About;
import React from 'react';
import {Image} from '@mantine/core';
import logo from './img/logo.png';

export function Logo() {

    return (
        <Image
            height={80}
            width={124}
            src={logo}
            alt=""
        />
    );
}
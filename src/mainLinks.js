import React from 'react';
import {Home, Map2, FileDescription} from 'tabler-icons-react';
import {ThemeIcon, UnstyledButton, Group, Text} from '@mantine/core';
import {ROUTES} from "./routes";
import {useNavigate} from "react-router-dom";

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    route: string;
}

function MainLink({icon, color, label, route}: MainLinkProps) {
    const navigate = useNavigate();

    const handleOnClick=()=>{
        navigate(route);

    }
    return (
        <UnstyledButton
            onClick={()=>handleOnClick()}
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const data = [
    {icon: <Home size={16}/>, color: 'blue', label: 'Home', route:ROUTES.HOME},
    {icon: <FileDescription size={16}/>, color: 'teal', label: 'About', route:ROUTES.ABOUTE},
    {icon: <Map2 size={16}/>, color: 'violet', label: 'Contact', route:ROUTES.CONTACT},
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label}/>);
    return <div>{links}</div>;
}
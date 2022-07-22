import React from "react";
import './App.css';
import {Navbar, AppShell} from '@mantine/core';
import {Brand} from "./brand";
import {MainLinks} from "./mainLinks";
import {User} from "./user";
import { Routes, Route} from "react-router-dom";
import {ROUTES} from "./routes";
import HomePage from "./pages/HomePage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


const AppShellComponent = ({children}) => {
    return (<AppShell
        padding="md"
        navbar={<Navbar hidden={false} height={750} p="xs" width={{base: 300}}>

            <Navbar.Section mt="xs">
                <Brand/>
            </Navbar.Section>
            <Navbar.Section grow mt="md">
                <MainLinks/>
            </Navbar.Section>
            <Navbar.Section>
                <User/>
            </Navbar.Section>
        </Navbar>}
    >
        {children}
    </AppShell>
    )
}

function App() {
    return (
        <AppShellComponent>
            <Routes>
                <Route path={""} element={<HomePage/>}/>
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.ABOUTE} element={<About/>}/>
                <Route path={ROUTES.CONTACT} element={<Contact/>}/>
            </Routes>
        </AppShellComponent>
    );
}

export default App;

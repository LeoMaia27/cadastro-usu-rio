import '../../node_modules/font-awesome/css/font-awesome.min.css';

import './App.css';
import React from 'react';

import Logo from '../components/template/Logo';
import Main from '../components/template/Main';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';

export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Segundo Projeto do Capítulo de React"/>
        <Footer />
    </div>



//Contéudo e Header, Header será referenciado dentro do main;

import './Main.css';
import React from 'react';
import Header from './Header';

export default props => 
    <React.Fragment> 
        <Header {...props} /*propagando props do Main no Header*//> 
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>
    


// export default Main;

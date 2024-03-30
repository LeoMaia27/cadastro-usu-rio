//Contéudo e Header, Header será referenciado dentro do main;

import './Main.css';
import React from 'react';
import Header from './Header';

export default props => 
    <React.Fragment> 
        <Header {...props} /*propagando props do Main no Header*//> 
        <main className="content container-fluid" /*bootstrap*/> 
            
            <div className='mt-3 p-3'>
                {props.children}
            </div>

        </main>
    </React.Fragment>
    


// export default Main;

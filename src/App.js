import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header';
import DogsMainPage from './dogsMainPage';
import CatsMainPage from './CatsMainPage';


export default function App(props) {

    
    return(
        <div>
            <Link to='/'>
                <Header />
            </Link>
            
            <h3>Are you a dog lover, cat lover or both?</h3>
            <Link to={'/dogs'} >
                <h4>Dog Lover</h4>
            </Link>
            <Link to={'/cats'}>
                <h4>Cat Lover</h4>
            </Link>
            <Link to={'/both'}>
                <h4>Loves both</h4>
            </Link>
           <Route exact path='/dogs' component={DogsMainPage} />
           <Route exact path='/cats' component={CatsMainPage} />
        </div>
    )
}
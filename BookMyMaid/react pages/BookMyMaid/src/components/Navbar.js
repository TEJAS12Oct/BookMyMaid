import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';
import DropdownOptions from './DropdownOptions';

class Navbar extends Component{

    state={ clicked : false}

    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
               
                <h1 className="Navbar-logo"><i class="fas fa-users"></i> eLabour Hiring</h1>

                <ul className={this.state.clicked ? 'nav-menu-active':'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return( 
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}
                            </a>
                        </li>    
                        )
                    })}
                    
                     <DropdownOptions/>
                  
                </ul>
            </nav>
        )
    }
}

export default Navbar;
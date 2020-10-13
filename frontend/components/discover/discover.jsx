import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { NavLink } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container'


export default class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

        
    }


    render() {
        return(
            <>
        
            <div className="nav_bar_background" ></div>
           
            
            <div className="outtermost" >
                <div className="nav-con"  >
                    <NavBarContainer />
                    <SearchBarContainer/>
                </div>

                <div className="discover2blocks">
                
        
                    <div className="scroll-playlists">
                
            
            
                        <p>trending</p>

                        <p>hip hop</p>

                        <p>rap</p>
            
            
            
                    </div>
                    
                    <div className="sideBar" >
            
            
                        side bar stuff
            
            
                    </div>
                </div>
        
            </div>
            </>
        
        )
       
       
    }
}


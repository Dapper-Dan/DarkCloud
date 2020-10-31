import React from 'react';
import UserNavBarContainer from '../nav_bar/user_nav_bar_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { NavLink, Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container'
import SongPartContainer from '../song/song_part_container'
import Carousel from 'react-bootstrap/Carousel';


export default class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
          
          
        };

        this.props.getBunchSongs()
        this.props.fetchUsers()
        this.getMostLiked = this.getMostLiked.bind(this)
        this.getTrendingGenre = this.getTrendingGenre.bind(this)
        
        
    }

    getMostLiked(songs) {
        let mostLikedSongs = Object.values(songs).sort((a, b) => {
            if (Object.keys(a.likes).length > Object.keys(b.likes).length) return -1
            if (Object.keys(a.likes).length < Object.keys(b.likes).length) return 1
            if (Object.keys(a.likes).length === Object.keys(b.likes).length) return 0
        })  

        return mostLikedSongs;

    }

    getTrendingGenre(songs, genre) {
       let genreTracks = Object.values(songs).filter((song) => song.genre === genre)
       let trendingGenreTracks = this.getMostLiked(genreTracks)

       return trendingGenreTracks
    }

    getRecentUsers(users) {
        let recentUsers = Object.values(users).sort((a, b) => {
            if (new Date(a.created_at).valueOf() > new Date(b.created_at).valueOf()) return -1
            if (new Date(a.created_at).valueOf() < new Date(b.created_at).valueOf()) return 1
            if (new Date(a.created_at).valueOf() === new Date(b.created_at).valueOf()) return 0
        })

        return recentUsers;
    }




    render() {
        let trendingSongs
        let trendingEDM
        let trendingJazz
        let trendingHipHop
        let recentUsers
        if (!this.props.songs) {
            return (<p>loading...</p>)
        } else {
           trendingSongs = this.getMostLiked(this.props.songs)  
           trendingEDM = this.getTrendingGenre(this.props.songs, "Dance & EDM")
           trendingJazz = this.getTrendingGenre(this.props.songs, "Jazz")
           trendingHipHop = this.getTrendingGenre(this.props.songs, "Hip-Hop")
        }

        if (!this.props.users) {
            return (<div>loading....</div>)
        } else {
            recentUsers = this.getRecentUsers(this.props.users)
        }
        
        
        
        return(
            <>
        
            <div className="nav_bar_background" ></div>
            
            <div className="nav-con"  >
                {this.props.currentUser ? <UserNavBarContainer /> : <NavBarContainer /> }
                
                <SearchBarContainer/>
            </div>
            
            <div className="outtermost" >
                

                <div className="discover2blocks">
                
        
                    <div className="scroll-playlists">
                
            

                        <h3>AudioCloud: Trending</h3>
                        <p>Up-and-coming tracks on AudioCloud</p>
                        <Carousel controls={true} interval="9999999999" id="discoverCaro" wrap={false} >
                   
                            <Carousel.Item>
                                {trendingSongs.slice(0, 5).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item>

                            <Carousel.Item>
                                {trendingSongs.slice(4, 9).map((song) => ( 
                                    <SongPartContainer song={song} />
         
                                ))}
                            </Carousel.Item>

                            <Carousel.Item>
                                {trendingSongs.slice(8, 12).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item>

                        </Carousel>

                        <h3>Electric Dreams</h3>
                        <p>The latest and hottest EDM</p>

                        <Carousel controls={true} interval="9999999999" id="discoverCaro" wrap={false} >
                            <Carousel.Item>
                                {trendingEDM.slice(0, 5).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item>

                            <Carousel.Item>
                                {trendingEDM.slice(4, 9).map((song) => ( 
                                    <SongPartContainer song={song} />
         
                                ))}
                            </Carousel.Item>

                            {/* <Carousel.Item>
                                {trendingEDM.slice(8, 12).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item> */}

                        </Carousel>

                        <h3>Next Set</h3>
                        <p>New talented artists to follow</p>
                        <Carousel controls={true} interval="9999999999" id="discoverCaro" wrap={false} >
                            <Carousel.Item>
                                {recentUsers.slice(0, 5).map((user) => ( 
                                    <>
                                    <div className="discoverNewUsersBox">
                                        <img id="profilePic"  src={user.profilePicUrl} /> 
                                        <Link to={`/${user.display_name}`}>
                                            <h1 className="discoverUserPart">{user.display_name}</h1>
                                        </Link>
                                    </div>
                                    </>
                                ))}
                            </Carousel.Item>

                            <Carousel.Item>
                                {recentUsers.slice(4, 9).map((user, i) => ( 
                                     <>
                                     {console.log(user.profilePicUrl, user.display_name)}
                                     <div className="discoverNewUsersBox">
                                         <img id="profilePic"  src={user.profilePicUrl} /> 
                                         <Link to={`/${user.display_name}`}>
                                             <h1 className="discoverUserPart">{user.display_name}</h1>
                                         </Link>
                                     </div>
                                     </>
         
                                ))}
                            </Carousel.Item>

                            {/* <Carousel.Item>
                                {recentUsers.slice(8, 12).map((user) => ( 
                                   <>
                                   {console.log(user.profilePicUrl)}
                                   <div className="discoverNewUsersBox">
                                       <img id="profilePic"  src={user.profilePicUrl} /> 
                                       <Link to={`/${user.display_name}`}>
                                           <h1 className="discoverUserPart">{user.display_name}</h1>
                                       </Link>
                                   </div>
                                   </>
                                ))}
                            </Carousel.Item> */}

                        </Carousel>

                        <h3>Scooby Dooby Doo Bop</h3>
                        <p>Fresh smooth jazz</p>
                        <Carousel controls={true} interval="9999999999" id="discoverCaro" wrap={false} >
                            <Carousel.Item>
                                {trendingJazz.slice(0, 5).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item>

                            <Carousel.Item>
                                {trendingJazz.slice(4, 9).map((song) => ( 
                                    <SongPartContainer song={song} />
         
                                ))}
                            </Carousel.Item>

                            {/* <Carousel.Item>
                                {trendingJazz.slice(8, 12).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item> */}

                        </Carousel>

                        <h3>Hip Hoppotamus</h3>
                        <p>The hottest and hippest hip-hop</p>
                        <Carousel controls={true} interval="9999999999" id="discoverCaro" wrap={false} >
                            <Carousel.Item>
                                {trendingHipHop.slice(0, 5).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item>

                            <Carousel.Item>
                                {trendingHipHop.slice(4, 9).map((song) => ( 
                                    <SongPartContainer song={song} />
         
                                ))}
                            </Carousel.Item>
{/* 
                            <Carousel.Item>
                                {trendingHipHop.slice(8, 12).map((song) => ( 
                                    <SongPartContainer song={song} />
                                ))}
                            </Carousel.Item> */}

                        </Carousel>

            
            
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


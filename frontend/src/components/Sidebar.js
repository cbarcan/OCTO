import styled from 'styled-components';
import React from 'react';
import home from '../assets/svgs/home.svg';
import tIcon from '../assets/svgs/happy.svg';
import octoIcon from '../assets/svgs/octo-menu-icon.svg';
import signup from '../assets/svgs/signup.svg';
import login from '../assets/svgs/user.svg';
import { NavLink } from 'react-router-dom';
import bracket from '../assets/svgs/fixtures.svg';
import ranking from '../assets/svgs/top.svg';
import logout from '../assets/svgs/enter.svg';
import eye from '../assets/svgs/eye.svg';
import admin from '../assets/svgs/settings1.svg';
import vote from '../assets/svgs/vote.svg';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../store/actions/userAction';
import { addTournamentData } from '../store/actions/tournamentAction'


export const MenuContainer = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 3.3%;
    position: fixed;  
    z-index: 100;
    top: 1%;
    left: 0;
    right: 1%;
    background-color: black;
    overflow:hidden;
    transition:width .3s ease;
    cursor:pointer;
    //border: 0.5px solid white;
    box-shadow: 1px 1px 20px -5px #ffffff75;
    display: flex;

    overflow: scroll;
    
    &:hover {
        width: 20%;
    }

    @media screen and (min-width: 600px) {
        width: 5%;
    }

    .active{
        color: #00ECFF;
    }

`

export const InnerLinksContainer = styled.ul`
    list-style-type: none;
    color:white;
    &:first-child {
        padding-top:1rem;
    }
`

export const IndividualLinksContainer = styled.li`
    
    padding-bottom: 1rem;
    letter-spacing: 0.3em;
    
    a {
        position: relative;
        display:block;
        top:-35px;
        padding-left: 7px;
        padding-top: 4%;
        margin-left:50px;  // this should be more responsive
        margin-right:10px;
        text-decoration: none;
        color:white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        
        &:after {
            content:'';
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
            background:radial-gradient(circle at 94.02% 88.03%, #19c5db, transparent 100%);
            opacity:0;
            transition:all .5s ease;
            z-index: -10;
        }
    }

    &:hover a:after {
        opacity:1;
    }

    img {
        width: 30px;
        height:30px;
        position: relative;
        left:-25px;
        cursor:pointer;

        @media screen and(min-width:600px) {
            width:32px;
            height:32px;
            left:-15px;
        }
    }

   
`

export const SingContainer = styled.div`
    // border: solid yellow;
    height: 10%;
    margin-top: 30%;
`



export const SideMenu = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    
    const userIsLoggedIn = useSelector((state) => state.user.token ? state.user.token : localStorage.userToken); // prevent log-out by page refresh
    const myTournaments = useSelector((state) => state.user.myTournaments);  // fetch this at tournaments page and load here from redux 
    const [isTournament, setIsTournament] = useState(false);
    const id = useSelector((state) => state.tournament.id); 


    // fetch user data if token is there but page is reloaded

    useEffect(() => {

        console.log(id)

        if(location.pathname.includes('tournament/')) {
            setIsTournament(true)
        } else {
            setIsTournament(false)
            dispatch(addTournamentData(''));
        }
    }, [id, userIsLoggedIn, isTournament, location.pathname])


    const logoutHandler = () => {
        dispatch(setToken(null));
        localStorage.clear();
    }


   
    // check users tournaments and if it matches current id

    return (
        <MenuContainer>
            
            <InnerLinksContainer>
                    <IndividualLinksContainer>
                    <img onClick={(e) => history.push(`/home`)} src={home} alt='home'/>
                        <NavLink activeClassName="active" to='/home'>HOME</NavLink>



                    </IndividualLinksContainer>
    
      
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push('/tournaments')} src={tIcon} alt='tournaments'/>
                        <NavLink activeClassName="active" to='/tournaments'>TOURNAMENTS</NavLink>
                        
                        
                    </IndividualLinksContainer>
      
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push('/create')} src={octoIcon} alt='create'/>
                        <NavLink activeClassName="active" to='/create'>CREATE TOURNAMENT</NavLink>
                        
                        
                    </IndividualLinksContainer>


                    {
                            userIsLoggedIn ? 


                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push('dashboard')} src={vote} alt='dashboard'/>
                    <NavLink activeClassName="active" to='/dashboard'>MY TOURNAMENTS</NavLink>
                    
                    
                </IndividualLinksContainer> : null }

                    {
                        isTournament ? 
                    (<>

                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push(`/tournament/${id}/overview`)} src={eye} alt='overview'/>
                        <NavLink activeClassName="active" to={`/tournament/${id}/overview`}>OVERVIEW</NavLink>
                        
                        
                    </IndividualLinksContainer>


                    <IndividualLinksContainer>
                    <img onClick={(e) => history.push(`/tournament/${id}/bracket`)} src={bracket} alt='bracket'/>
                    <NavLink activeClassName="active" to={`/tournament/${id}/bracket`}>BRACKET</NavLink>
                        
                        
                    </IndividualLinksContainer>

                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push(`/tournament/${id}/standing`)} src={ranking} alt='standing'/>
                        <NavLink activeClassName="active" to={`/tournament/${id}/standing`}>STANDING</NavLink>
                        
                        
                    </IndividualLinksContainer>

                    </>) : null }
                    {
                        myTournaments.includes(id) ?                     
                        <IndividualLinksContainer>
                            <img onClick={(e) => history.push(`/tournament/${id}/admin`)} src={admin} alt='admin'/>
                            <NavLink activeClassName="active" to={`/tournament/${id}/admin`}>ADMIN</NavLink>  
                        </IndividualLinksContainer> 
                        : null
                    }
                    


                    <SingContainer>
                        {
                            userIsLoggedIn ? 


                    <IndividualLinksContainer>
                    <img onClick={logoutHandler} src={logout} alt={'logout'}/>
                    <NavLink onClick={logoutHandler} activeClassName="active" to='/login'>LOG OUT</NavLink>
                    
                    
                </IndividualLinksContainer> :
                        
                    (<>
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push(`/login`)} src={login} alt='login'/>
                        <NavLink activeClassName="active" to='/login'>SIGN IN</NavLink>
                        
                        
                    </IndividualLinksContainer>
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push(`/registration`)} src={signup} alt='registration'/>
                        <NavLink activeClassName="active" to='/registration'>SIGN UP</NavLink>
                        
                        
                    </IndividualLinksContainer>

                    </>)

                    


                    }

                    </SingContainer>
        
                </InnerLinksContainer>




                    

        
    
        </MenuContainer>


    )
}

export default SideMenu
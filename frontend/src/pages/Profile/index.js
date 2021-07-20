import TeamContainer from "../../pages/Profile/Teams"
import ProfileCard from "./ProfileCard";
import CurrentTournament from "./CurrentTournament";
import { useDispatch, useSelector } from 'react-redux';
import { apiUserGetData } from '../../store/actions/userAction'
import React, { useEffect } from 'react';


const Profile = () => {


    const dispatch = useDispatch();


    const user = useSelector((state) => state.user.userData);


    useEffect(() => {
        dispatch(apiUserGetData(localStorage.getItem('userToken')));
    }, [dispatch])

        return(
            <>
                {user.id ?
                    <>
                    <ProfileCard user = {user} edit={true}/>
                    <CurrentTournament user = {user}/>
                    </>
                    :
                    null
                }
            </>)
    };

export default Profile
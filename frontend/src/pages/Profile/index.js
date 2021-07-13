import ProfileBanner from "../../pages/Profile/Banner"
import TeamContainer from "../../pages/Profile/Teams"
import ProfileCard from "./ProfileCard";
import banner from "../../assets/images/banner.png"
import CurrentTournament from "./CurrentTournament";

const Profile = () => {
return (
    <>
        <ProfileBanner banner = {banner}>
           <ProfileCard />
        </ProfileBanner>
        <TeamContainer/>
        <CurrentTournament/>
    </>
    )
};

export default Profile
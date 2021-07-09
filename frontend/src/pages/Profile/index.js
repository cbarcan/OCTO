import ProfileBanner from "../../pages/Profile/Banner"
import TeamContainer from "../../pages/Profile/Teams"
import ProfileCard from "./ProfileCard";
import banner from "../../assets/images/banner.png"

const Profile = () => {
return (
    <>
        <ProfileBanner banner = {banner}>
           <ProfileCard />
        </ProfileBanner>
        <TeamContainer>
            <h1> Teams here! </h1>
        </TeamContainer>
    </>
    )
};

export default Profile
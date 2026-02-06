import DashboardLayout from "../components/layout/DashboardLayout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import ProfilePosts from "../components/profile/ProfilePosts";

const Profile = () => {
  return (
    <DashboardLayout>
      <ProfileHeader />
      <ProfileStats />
      <ProfilePosts />
    </DashboardLayout>
  );
};

export default Profile;

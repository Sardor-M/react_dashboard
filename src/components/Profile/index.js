import { ProfileFont } from "./ProfileFont";
import { ProfileImage } from "./ProfileImage";
import { Profile } from "./Profile";
import { ProfileAddBadge } from "./ProfileAddBadge";

Profile.Font = ProfileFont;
Profile.Image = ProfileImage;

const ProfileAdd = {
  Badge: ProfileAddBadge,
};

export default Profile;
export { ProfileAdd };

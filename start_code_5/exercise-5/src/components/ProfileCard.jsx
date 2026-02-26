import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin-link.png";
import github from "../assets/github-link.png";
import instagram from "../assets/instagram-link.png";
import facebook from "../assets/facebook-link.png";

const ProfileCard = ({ user }) => {
  return (
    <div className="card-container">
      {/* Three dots menu */}
      <div className="menu-dots">
        <span></span><span></span><span></span>
      </div>

      {/* Profile Image with Verified Badge */}
      <div className="avatar-wrapper">
        <img src={user.avatar} alt={user.name} className="profile-image"/>
      </div>

      {/* Name and Role */}
      <div className="profile-info">
        <h2 className="user-name">{user.name}</h2>
        <p className="user-role">{user.role}</p>
      </div>

      {/* Stats: Projects, Following, Followers */}
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Projects</span>
          <span className="stat-value">{user.projects}</span>
        </div>

        <div className="stat-item">
          <span className="stat-label">Following</span>
          <span className="stat-value">{user.following}</span>
        </div>

        <div className="stat-item">
          <span className="stat-label">Followers</span>
          <span className="stat-value">{user.followers}</span>
        </div>
      </div>

      {/* Bio */}
      <p className="user-bio">{user.bio}</p>

      {/* Social Icons */}
      <div className="social-links">
        <a href="#"><img src={twitter} alt="Twitter" className="social-icon"/></a>
        <a href="#"><img src={linkedin} alt="LinkedIn" className="social-icon"/></a>
        <a href="#"><img src={github} alt="GitHub" className="social-icon"/></a>
        <a href="#"><img src={instagram} alt="Instagram" className="social-icon"/></a>
        <a href="#"><img src={facebook} alt="Facebook" className="social-icon"/></a>
      </div>

      {/* View Profile Button */}
      <button className="view-profile-btn">View Profile</button>
    </div>
  )
}

export default ProfileCard;
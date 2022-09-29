import PropTypes from "prop-types";
import defaultPic from "../default-avatar.png";
import styles from "./Profile.module.css";

export default function Profile({
  username,
  tag = "not found",
  location,
  avatar = defaultPic,
  stats,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.profileDescription}>
        <img src={avatar} alt="User avatar" className={styles.profileAvatar} />
        <p className={styles.profileName}>{username}</p>
        <p className={styles.profileTag}>{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsElement}>
          <span className={styles.statsLabel}>Followers</span>
          <span className={styles.statsQuantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.statsLabel}>Views</span>
          <span className={styles.statsQuantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.statsLabel}>Likes</span>
          <span className={styles.statsQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

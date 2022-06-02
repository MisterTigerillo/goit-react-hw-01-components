// import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default function Friendlist({ friends }) {
  //   console.log(friends);
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem friend={friend} />
      ))}
    </ul>
  );
}

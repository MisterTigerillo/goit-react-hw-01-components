import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem/FriendListItem";

export default function Friendlist({ friends }) {
  // console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name }) => (
        <FriendListItem key={id} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}

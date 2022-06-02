// import PropTypes from "prop-types";
export default function FriendListItem({ friend }) {
  console.log(friend.avatar);
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p class="name">{friend.name}</p>
    </li>
  );
}

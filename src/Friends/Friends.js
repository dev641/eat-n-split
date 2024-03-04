import Friend from "./Friend";

const Friends = ({ friends, onSelect, onClose, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onSelect={onSelect}
          onClose={onClose}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};
export default Friends;

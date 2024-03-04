const Friend = ({ friend, onSelect, selectedFriend }) => {
  const isSelectVisible = selectedFriend?.id === friend.id;
  const messageHtml =
    friend.balance > 0 ? (
      <p className="green">
        {friend.name} owes you {Math.abs(friend.balance)}€
      </p>
    ) : friend.balance === 0 ? (
      <p>You and {friend.name} are even</p>
    ) : (
      <p className="red">
        You owe {friend.name} {Math.abs(friend.balance)}€
      </p>
    ); // TODO: implement this state to show)
  return (
    <li className={friend.id === selectedFriend ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <div className="friend-name">
        <h3>{friend.name}</h3>
        {messageHtml}
      </div>
      {!isSelectVisible ? (
        <button
          className="button"
          onClick={() => {
            onSelect(friend);
          }}
        >
          Select
        </button>
      ) : (
        <button
          className="button"
          onClick={() => {
            onSelect(null);
          }}
        >
          Close
        </button>
      )}
    </li>
  );
};
export default Friend;

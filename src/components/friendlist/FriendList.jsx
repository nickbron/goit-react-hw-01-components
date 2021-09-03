import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from 'components/friendlist/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendLlist}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id}>
          <FriendListItem name={name} isOnline={isOnline} avatar={avatar} />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

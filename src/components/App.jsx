import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friendlist/FriendList';
import TransactionHistory from 'components/transactionHistory/TransactionHistory';
import user from '../Data/user.json';
import statisticalData from '../Data/statistical-data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      {/* <Statistics stats={statisticalData} />; */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
export default App;

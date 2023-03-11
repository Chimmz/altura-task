import CardList from '../../components/nft-cards/CardList';
import cls from 'classnames';
import styles from './Home.module.css';

const Home: React.FC = function () {
  return (
    <div className={cls('container', styles.page)}>
      <CardList />
    </div>
  );
};

export default Home;

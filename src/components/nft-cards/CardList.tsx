import { useState, useMemo } from 'react';
import cls from 'classnames';
import styles from './CardList.module.css';
import nftItems from '../../features/data/nfts';
import ActiveNFTModal from './ActiveNFTModal';
import { NFT } from '../../features/types/NFT';
import Card from './Card';

const CardList = function () {
  const [activeCardName, setActiveCardName] = useState<string | null>(null);

  const normalizedItems = useMemo(() => {
    let obj: { [key: string]: NFT } = {};
    nftItems.forEach((item) => (obj[item.name] = item));
    return obj;
  }, []);

  const activeNFT = useMemo(() => {
    return activeCardName ? normalizedItems[activeCardName] : undefined;
  }, [activeCardName, normalizedItems]);

  return (
    <>
      <div className={cls(styles.cardList, 'position-relative')}>
        {nftItems.map((item) => (
          <Card
            {...item}
            onClick={setActiveCardName.bind(null, item.name)}
            key={item.url}
          />
        ))}
      </div>

      <ActiveNFTModal
        show={!!activeCardName}
        activeNFT={activeNFT}
        close={setActiveCardName.bind(null, null)}
      />
    </>
  );
};

export default CardList;

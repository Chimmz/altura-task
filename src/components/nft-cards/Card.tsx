import { FC, useMemo } from 'react';
// Types
import { NFT } from '../../features/types/NFT';
// Utils
import cls from 'classnames';
import * as imgUtils from '../../features/utils/imgUtils';
// Styles
import styles from './Card.module.css';

type CardProps = NFT & { onClick(): void };

const Card: FC<CardProps> = function (props) {
  const priceExists = useMemo(() => !!props.price, [props.price]);
  const volumeExists = useMemo(() => !!props.volume, [props.volume]);

  return (
    <article className={styles.card} onClick={props.onClick}>
      <figure>
        <img src={imgUtils.genPublicImageUrl(props.img)} alt="" />
      </figure>
      <header className="px-4 pt-1">
        <h4 className="mt-2">{props.name}</h4>
      </header>
      <ul
        className={cls(
          styles.details,
          'list-unstyled d-flex flex-column gap-3'
        )}
      >
        <li>
          <small>Volume</small>
          <span className={styles.separator}></span>

          <small>
            {volumeExists
              ? props.volume!.toString().concat(' ETH')
              : 'None yet'}{' '}
          </small>
        </li>
        <li>
          <small>Price</small>
          <span className={styles.separator}></span>
          <small>
            {priceExists ? '$'.concat(props.price!.toString()) : 'None yet'}{' '}
          </small>
        </li>
        <li>
          <small>Last updated</small>
          <span className={styles.separator}></span>
          <small>{props.lastUpdated} ago</small>
        </li>
      </ul>
    </article>
  );
};

export default Card;

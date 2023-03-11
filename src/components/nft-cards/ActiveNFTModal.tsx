import React, { useMemo } from 'react';
// Types
import { NFT } from '../../features/types/NFT';
// Utils
import * as imgUtils from '../../features/utils/imgUtils';
import cls from 'classnames';
// Components
import { Modal } from 'react-bootstrap';
// Styles
import styles from './ActiveNFTModal.module.css';

interface Props {
  show: boolean;
  activeNFT: NFT | undefined;
  close: () => void;
}

const ActiveNFTModal: React.FC<Props> = function (props) {
  const modalHeaderClassName = useMemo(
    () => cls(styles.modalHeading, 'color-white flex-grow-1 text-center'),
    []
  );

  const nftDetails: React.ReactNode = useMemo(() => {
    if (!props.show) return <></>;
    return (
      <div className={cls(styles.modalContent, 'd-flex gap-5 mb-5')}>
        <figure>
          <img src={imgUtils.genPublicImageUrl(props.activeNFT!.img)} alt="" />
        </figure>
        <ul className={cls(styles.nftFullDetails, 'list-unstyled')}>
          <li>
            <label>Price:</label>{' '}
            <span className="fs-1 color-white">${props.activeNFT!.price}</span>
          </li>
          <li>
            <label>Volume:</label> <span>{props.activeNFT!.volume} ETH</span>
          </li>
          <li>
            <label>Creator's name</label>{' '}
            <span>{props.activeNFT!.ownedBy}</span>
          </li>
          <li>
            <label>Owner’s address:</label>{' '}
            <span>{props.activeNFT!.ownerAddress}</span>
          </li>
        </ul>
      </div>
    );
  }, [props.activeNFT]);

  if (!props.show) return <></>;

  return (
    <Modal show={props.show} centered onHide={props.close}>
      <Modal.Header
        closeButton
        className={cls('px-5 pt-5 text-center bg-dark')}
        style={{ border: 'none' }}
      >
        <h3 className={modalHeaderClassName}>{props.activeNFT!.name}</h3>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center flex-wrap bg-dark px-5 py-5">
        <small className="text-center mb-5">{props.activeNFT!.about}</small>
        {nftDetails}
        <a
          href={props.activeNFT!.url}
          target={'_blank'}
          className="btn btn-pry flex-grow w-100"
        >
          BUY NOW
        </a>
      </Modal.Body>
    </Modal>
  );
};

export default ActiveNFTModal;

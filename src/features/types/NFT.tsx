export interface NFT {
  name: string;
  category: string;
  about: string;
  ownedBy: string;
  volume: number | null;
  price: number | null;
  url: string;
  img: string;
  lastUpdated: string;
  ownerAddress: string;
}

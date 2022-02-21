import React from 'react';
import Hero from '../../components/nft-page/hero/hero';
import Nfts from '../../components/nft-page/nfts/nfts';
import classes from './index.module.scss';

const NFTPage = () => {
  return (
    <main className={classes['nfs-page']}>
      <Hero />
      <Nfts />
    </main>
  )
}

export default NFTPage
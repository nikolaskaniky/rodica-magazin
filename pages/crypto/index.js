import React from 'react';
import Description from '../../components/crypto-page/description/description';
import Hero from '../../components/crypto-page/hero/hero';
import classes from './index.module.scss';

const CryptoPage = () => {
  return (
    <main className={classes['crypto-page']}>
      <Hero />
      <Description />
    </main>
  )
}

export default CryptoPage
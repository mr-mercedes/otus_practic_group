import React from 'react';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { SearchBlock } from '../SearchBlock/SearchBlock';
import { InformBlock } from '../InformBlock/InformBlock';
import { Avatar } from '../Avatar/Avatar';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <Logo />
            <SearchBlock />
            <div className={styles.inform}>
                <InformBlock />
                <Avatar />
            </div>
        </div>
    </header>
  );
};

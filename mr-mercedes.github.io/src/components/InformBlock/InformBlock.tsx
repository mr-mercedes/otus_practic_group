import React from 'react';
import {FlagBlock} from "../FlagBlock/FlagBlock";
import {LinkBlock} from "../LinkBlock/LinkBlock";
import styles from './InformBlock.module.scss';


export const InformBlock = () => {
    return (
        <div className={styles.inform}>
            <FlagBlock country={'be'}/>
            <LinkBlock/>
        </div>
    );
};
import React, {useEffect, useState} from 'react';
import {FlagBlockProps} from "./FlagBlock.props";
import styles from './FlagBlock.module.scss';

export const FlagBlock = ({country}:FlagBlockProps) => {
    const [flag, setFlag] = useState<string>('')
    const getFlag = (country:string) => {
        setFlag(`./header/flags/${country}.svg`)
    }
    useEffect(() => {
        getFlag(country)
    }, []);

    return (
        <div className={styles.flag}>
            <img src={flag} alt={`${country} flag`}/>
        </div>
    );
};
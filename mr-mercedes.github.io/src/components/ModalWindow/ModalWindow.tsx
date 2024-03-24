import React, {useState} from 'react';
import {ModalWindowProps} from "./ModalWindow.props";
import styles from './ModalWindow.modal.scss';
import cn from 'clsx';
import CloseIcon from '../../../public/close.svg';

export const ModalWindow = ({visible, children, ...props}:ModalWindowProps) => {
    const [show, setShow] = useState<boolean>(visible)
    return (
        <div className={cn(styles.modal, {
            [styles.hidden]: !show
        })}>
            <div className={styles.wrapper}>
                <div className={styles.window} {...props}>
                    <button className={styles.close_button} onClick={()=> setShow(!show)}>
                        <CloseIcon/>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

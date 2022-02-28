import React from 'react';
import cx from 'classnames';

import styles from './MenuButton.module.scss';

interface Props {
    onClick: () => void
    className?: string
}

export const MenuButton = ({
    onClick,
    className,
}: Props) => (
    <div
        className={cx(styles.menuButton, className)}
        onClick={onClick}
    >
        <div className={styles.lineOne} />
        <div className={styles.lineTwo} />
        <div className={styles.lineThree} />
    </div>
);

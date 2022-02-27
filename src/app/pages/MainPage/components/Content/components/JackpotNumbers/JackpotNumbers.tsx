import React from 'react';
import cx from 'classnames';

import styles from './JackpotNumbers.module.scss';

interface Props {
    numbers: number[]
    euroNumbers: number[]
}

export const JackpotNumbers = ({
    numbers,
    euroNumbers,
}: Props) => (
    <div className={cx(styles.wrapper, 'd-flex')}>
        {numbers.map((number, idx) => (
            <div
                key={number + idx}
                className={cx(
                    styles.lotteryNumber,
                    styles.number,
                    'd-flex align-items-center justify-content-center',
                )}
            >
                {number}
            </div>
        ))}
        <div className={cx(styles.fontIcon, styles.plus)} />
        {euroNumbers.map((number, idx) => (
            <div
                key={number + idx}
                className={cx(
                    styles.lotteryNumber,
                    styles.euroNumber,
                    'd-flex align-items-center justify-content-center',
                )}
            >
                {number}
            </div>
        ))}
    </div>
);

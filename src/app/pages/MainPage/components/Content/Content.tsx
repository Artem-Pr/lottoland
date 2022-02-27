import React from 'react';
import {Typography} from 'antd';

import {formatDateToShortString} from '../../../../../helpers/dateHelpers';

import {JackpotNumbers} from './components';

import styles from './Content.module.scss';

const {Title} = Typography;

export const Content = () => (
    <div className={styles.contentWrapper}>
        <Title level={5}>
            <span className={styles.highlightedText}>EuroJackpot</span>
            <span>{' '}</span>
            <span>{`Results for ${formatDateToShortString('2022-02-25', 'EEEE d MMM y')}`}</span>
        </Title>
        <JackpotNumbers numbers={[4, 19, 34, 41, 43]} euroNumbers={[1, 5]} />
    </div>
);

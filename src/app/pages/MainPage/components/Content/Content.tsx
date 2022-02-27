import React from 'react';
import {Typography} from 'antd';

import {formatDateToShortString} from '../../../../../helpers/dateHelpers';

import styles from './Content.module.scss';

const {Title} = Typography;

export const Content = () => (
    <div className={styles.contentWrapper}>
        <Title level={5}>
            <span className={styles.highlightedText}>EuroJackpot</span>
            <span>{' '}</span>
            <span>{`Results for ${formatDateToShortString('2022-02-25', 'EEEE d MMM y')}`}</span>
        </Title>
    </div>
);

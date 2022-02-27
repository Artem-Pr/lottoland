import React from 'react';
import cx from 'classnames';
import {Typography} from 'antd';

import styles from './MainPage.module.scss';

const {Title} = Typography;

export const MainPage = () => (
    <main className={cx(styles.contentWrapper, 'container')}>
        <div className={styles.titleWrapper}>
            <Title level={2}>Eurojackpot results & winning numbers</Title>
        </div>
    </main>
);

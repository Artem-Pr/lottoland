import React from 'react';
import cx from 'classnames';

import {EurojackpotResultsTitle} from './components';

import styles from './MainPage.module.scss';

export const MainPage = () => (
    <main className={cx(styles.contentWrapper, 'container')}>
        <EurojackpotResultsTitle />
    </main>
);

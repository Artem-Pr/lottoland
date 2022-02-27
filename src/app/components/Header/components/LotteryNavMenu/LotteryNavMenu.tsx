import React from 'react';
import cx from 'classnames';
import {Typography} from 'antd';

import styles from './LotteryNavMenu.module.scss';

const {Link} = Typography;

export const LotteryNavMenu = () => (
    <div className={styles.navMenuWrapper}>
        <ul className={cx(styles.navMenu, 'd-flex justify-content-center container')}>
            <li><Link href="/">PowerBall</Link></li>
            <li><Link href="/">EuroMillions</Link></li>
            <li><Link href="/">More Jackpots</Link></li>
            <li><Link href="/">Promotions</Link></li>
            <li><Link href="/">Scratchcards</Link></li>
            <li><Link href="/">Instant Win</Link></li>
            <li><Link href="/">Games</Link></li>
            <li><Link href="/">Sportsbook</Link></li>
        </ul>
    </div>
);

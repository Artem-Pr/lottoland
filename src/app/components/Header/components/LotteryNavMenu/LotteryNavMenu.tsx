import React from 'react';
import cx from 'classnames';
import {Typography} from 'antd';

import styles from './LotteryNavMenu.module.scss';

const {Link} = Typography;

interface Props {
    isColumns?: boolean
}

export const LotteryNavMenu = ({isColumns}:Props) => (
    <div className={styles.navMenuWrapper}>
        <ul className={cx(
            styles.navMenu,
            'd-flex justify-content-center',
            {'flex-column': isColumns},
            {[styles.heightAuto]: isColumns},
        )}
        >
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

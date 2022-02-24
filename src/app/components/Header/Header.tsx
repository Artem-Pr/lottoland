import React from 'react';
import {
    Layout,
    Typography,
} from 'antd';
import cx from 'classnames';
import {Svg} from 'src/uiKit';

import styles from './Header.module.scss';

const {Text} = Typography;

const {Header: HeaderLayout} = Layout;

export const Header = () => (
    <HeaderLayout className={styles.headerLayout}>
        <div className="container position-fixed">
            <div className={styles.headerWrapper}>
                <Svg iconName="ll-logo-green" className={styles.logo} />
                <ul className={cx(styles.navMenu, 'd-flex align-items-center')}>
                    <li><Text className="header-menu-item">Search</Text></li>
                    <li><Text className="header-menu-item">Log in</Text></li>
                    <li><Text className="header-menu-item">Register</Text></li>
                    <li><Text className="header-menu-item">To checkout</Text></li>
                </ul>
            </div>
        </div>
    </HeaderLayout>
);

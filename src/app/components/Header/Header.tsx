import React from 'react';
import {
    Badge,
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
                    <li><Text className={cx(styles.fontIcon, styles.search, 'header-menu-item')} /></li>
                    <li><Text className="header-menu-item">Log in</Text></li>
                    <li><Text className="header-menu-item">Register</Text></li>
                    <li>
                        <Text
                            className={cx(
                                styles.headerMenuItem,
                                'd-flex align-items-center header-menu-item',
                            )}
                        >
                            <Badge count={0} showZero>
                                <div className={cx(styles.fontIcon, styles.cart)} />
                            </Badge>
                            <div className={cx(styles.walletWrapper, 'd-flex flex-column')}>
                                <Text className="wallet">&euro;0.00</Text>
                                <span className={styles.toCheckout}>To checkout</span>
                            </div>
                        </Text>
                    </li>
                </ul>
            </div>
        </div>
    </HeaderLayout>
);

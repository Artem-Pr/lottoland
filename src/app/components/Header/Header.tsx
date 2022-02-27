import React from 'react';
import {Layout} from 'antd';
import {Svg} from 'src/uiKit';

import {
    MainMenu,
    LotteryNavMenu,
} from './components';

import styles from './Header.module.scss';

const {Header: HeaderLayout} = Layout;

export const Header = () => (
    <HeaderLayout className={styles.headerLayout}>
        <div className="position-fixed w-100">
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Svg iconName="ll-logo-green" className={styles.logo} />
                    <MainMenu />
                </div>
            </div>
            <LotteryNavMenu />
        </div>
    </HeaderLayout>
);

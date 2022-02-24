import React from 'react';
import {Layout} from 'antd';
import {Svg} from 'src/uiKit';

import {NavMenu} from './components';

import styles from './Header.module.scss';

const {Header: HeaderLayout} = Layout;

export const Header = () => (
    <HeaderLayout className={styles.headerLayout}>
        <div className="container position-fixed">
            <div className={styles.headerWrapper}>
                <Svg iconName="ll-logo-green" className={styles.logo} />
                <NavMenu />
            </div>
        </div>
    </HeaderLayout>
);

import React, {useState} from 'react';
import {
    Layout,
    Typography,
} from 'antd';
import cx from 'classnames';
import {Svg} from 'src/uiKit';

import {
    MainMenu,
    LotteryNavMenu,
} from './components';

import styles from './Header.module.scss';

const {Text} = Typography;
const {Header: HeaderLayout} = Layout;

export const Header = () => {
    const [showSearchField, setShowSearchField] = useState(false);

    const handleSearchButtonClick = () => {
        setShowSearchField(!showSearchField);
    };

    return (
        <HeaderLayout className={styles.headerLayout}>
            <div className={cx(styles.headerBorder, 'position-fixed w-100')}>
                <div className={cx(styles.container, 'container')}>
                    <div className={styles.headerWrapper}>
                        <Svg
                            iconName="ll-logo-green"
                            className={cx(
                                styles.logo,
                                {[styles.displayNone]: showSearchField},
                            )}
                        />
                        <MainMenu
                            showSearchField={showSearchField}
                            onSearchButtonClick={handleSearchButtonClick}
                        />
                    </div>
                    <Text
                        className={cx(
                            styles.fontIcon,
                            styles.person,
                            'header-menu-item d-flex align-items-center',
                        )}
                    />
                </div>
                <div className={styles.lotteryMenuWrapper}>
                    <LotteryNavMenu />
                </div>
            </div>
        </HeaderLayout>
    );
};

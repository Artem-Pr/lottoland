import React, {useState} from 'react';
import {
    Drawer,
    Layout,
    Typography,
} from 'antd';
import cx from 'classnames';
import {
    MenuButton,
    Svg,
} from 'src/uiKit';

import {
    MainMenu,
    LotteryNavMenu,
} from './components';

import styles from './Header.module.scss';

const {Text} = Typography;
const {Header: HeaderLayout} = Layout;

export const Header = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [showSearchField, setShowSearchField] = useState(false);

    const handleSearchButtonClick = () => {
        setShowSearchField(!showSearchField);
    };

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onDrawerClose = () => {
        setDrawerVisible(false);
    };

    return (
        <>
            <HeaderLayout className={styles.headerLayout}>
                <div className={cx(styles.headerBorder, 'position-fixed w-100')}>
                    <div className={cx(styles.container, 'container')}>
                        <div className={styles.headerWrapper}>
                            <MenuButton
                                className={styles.MenuButton}
                                onClick={showDrawer}
                            />
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
            <Drawer
                placement="left"
                width={200}
                onClose={onDrawerClose}
                visible={drawerVisible}
            >
                <LotteryNavMenu isColumns />
            </Drawer>
        </>
    );
};

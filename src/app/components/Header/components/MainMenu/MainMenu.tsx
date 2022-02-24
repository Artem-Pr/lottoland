import React, {useState} from 'react';
import cx from 'classnames';
import {
    Badge,
    Form,
    Input,
    Popover,
    Typography,
} from 'antd';

import {EmptyCartMessage} from './components';

import styles from './MainMenu.module.scss';

const {Text} = Typography;

export const MainMenu = () => {
    const [showSearchField, setShowSearchField] = useState(false);

    const handleSearchButtonClick = () => {
        setShowSearchField(!showSearchField);
    };

    return (
        <>
            {showSearchField && (
                <Form
                    className={styles.form}
                    layout="vertical"
                >
                    <Form.Item
                        label="Search for Lottoland products"
                        name="SearchField"
                    >
                        <Input
                            className={styles.formInput}
                            bordered={false}
                        />
                    </Form.Item>
                </Form>
            )}
            <ul className={cx(styles.navMenu, 'd-flex align-items-center')}>
                <li>
                    <Text
                        onClick={handleSearchButtonClick}
                        className={cx(
                            styles.fontIcon,
                            showSearchField ? styles.close : styles.search,
                            'header-menu-item',
                        )}
                    />
                </li>
                <li><Text className="header-menu-item">Log in</Text></li>
                <li><Text className="header-menu-item">Register</Text></li>
                <li>
                    <Popover
                        placement="bottomRight"
                        content={EmptyCartMessage}
                        arrowPointAtCenter
                    >
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
                    </Popover>
                </li>
            </ul>
        </>
    );
};

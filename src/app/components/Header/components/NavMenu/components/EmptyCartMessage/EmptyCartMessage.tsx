import React from 'react';
import cx from 'classnames';
import {
    Empty,
    Typography,
} from 'antd';

import styles from './EmptyCartMessage.module.scss';

const {Text} = Typography;

export const EmptyCartMessage = () => (
    <Empty
        className={cx(styles.wrapper, 'd-flex flex-column justify-content-center')}
        image={
            <div className={cx(styles.fontIcon, styles.cart)} />
        }
        description={(
            <Text className={styles.text}>
                Your cart is empty
            </Text>
        )}
    />
);

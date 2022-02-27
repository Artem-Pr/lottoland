import React from 'react';
import cx from 'classnames';
import {
    Select,
    Typography,
} from 'antd';

import {formatDateToShortString} from '../../../helpers/dateHelpers';

import styles from './MainPage.module.scss';

const {Title} = Typography;
const {Option} = Select;

const eurojackpotDaysList = [
    '2022-02-25',
    '2022-02-18',
    '2022-02-04',
    '2022-01-28',
    '2022-01-21',
    '2022-01-14',
    '2022-01-07',
];

const eurojackpotYearsList = ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012'];

export const MainPage = () => (
    <main className={cx(styles.contentWrapper, 'container')}>
        <div className={cx(styles.titleWrapper, 'd-flex justify-content-between align-items-end')}>
            <Title level={2}>Eurojackpot results & winning numbers</Title>
            <div>
                <Select
                    dropdownClassName={styles.selectDay}
                    className={styles.selectDay}
                    defaultValue={eurojackpotDaysList[0]}
                >
                    {eurojackpotDaysList.map(dayStr => (
                        <Option
                            className={styles.selectDay}
                            key={dayStr}
                            value={dayStr}
                        >
                            {formatDateToShortString(dayStr)}
                        </Option>
                    ))}
                </Select>
                <Select
                    dropdownClassName={styles.selectYear}
                    className={styles.selectYear}
                    defaultValue={eurojackpotYearsList[0]}
                >
                    {eurojackpotYearsList.map(yearStr => (
                        <Option
                            className={styles.selectYear}
                            key={yearStr}
                            value={yearStr}
                        >
                            {yearStr}
                        </Option>
                    ))}
                </Select>
            </div>
        </div>
    </main>
);

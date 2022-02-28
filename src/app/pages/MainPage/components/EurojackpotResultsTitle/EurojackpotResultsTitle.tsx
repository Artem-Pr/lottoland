import React from 'react';
import cx from 'classnames';
import {
    Select,
    Typography,
} from 'antd';
import {formatDate} from 'src/helpers/dateHelpers';

import styles from './EurojeckpotResultsTitle.module.scss';

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

export const EurojackpotResultsTitle = () => (
    <div className={cx(
        styles.titleWrapper,
        'd-flex justify-content-between align-items-end flex-wrap',
    )}
    >
        <Title
            className={styles.title}
            level={2}
        >
            Eurojackpot results & winning numbers
        </Title>
        <div className={styles.selectsWrapper}>
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
                        {formatDate(dayStr)}
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
);

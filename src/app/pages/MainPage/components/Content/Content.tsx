import React, {useEffect, useMemo} from 'react';
import {Typography} from 'antd';
import {formatDate} from 'src/helpers';
import {useDispatch, useSelector} from 'react-redux';
import {parseDateIntoValidFormat} from 'src/helpers/dateHelpers';
import {eurojackpotResults} from 'src/redux/selectors';
import {fetchEurojackpotResults} from 'src/redux/reducers/eurojackpotResults-reducer';

import {
    JackpotNumbers,
    JackpotResultsTable,
} from './components';

import styles from './Content.module.scss';

const {Title} = Typography;

export const Content = () => {
    const dispatch = useDispatch();
    const {
        drawingDate,
    } = useSelector(eurojackpotResults);

    const formattedDate = useMemo(() => formatDate(
        parseDateIntoValidFormat(drawingDate),
        'EEEE d MMM y',
    ), [drawingDate]);

    useEffect(() => {
        dispatch(fetchEurojackpotResults());
    }, [dispatch]);

    return (
        <div className={styles.contentWrapper}>
            {drawingDate && (
                <Title level={5}>
                    <span className={styles.highlightedText}>EuroJackpot</span>
                    <span>{' '}</span>
                    <span>{`Results for ${formattedDate}`}</span>
                </Title>
            )}
            <JackpotNumbers numbers={[4, 19, 34, 41, 43]} euroNumbers={[1, 5]} />
            <JackpotResultsTable />
        </div>
    );
};

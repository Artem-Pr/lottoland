import React from 'react';
import {Table} from 'antd';
import {
    convertNumberToRoman,
    convertToMoneyFormat,
    formatNumbersIntoTriads,
} from 'src/helpers';
import type {Odds} from 'src/api/apiTypes';

import {JackpotResultsTableConfig} from './JackpotResultsTableConfig';

const {
    matchArray,
    columns,
} = JackpotResultsTableConfig;

interface DataSource {
    key: number,
    tier: string,
    match: React.ReactNode,
    winners: string,
    amount: React.ReactNode,
}

interface Props {
    odds: Odds
}

export const JackpotResultsTable = ({
    odds,
}: Props) => {
    const preparedDataSource: DataSource[] = matchArray.map(({numbers, euroNumbers}, ids) => ({
        key: ids,
        tier: convertNumberToRoman(ids + 1),
        match: (
            <span
                dangerouslySetInnerHTML={{
                    __html: `${numbers}&nbsp;Numbers&nbsp;+ ${euroNumbers}&nbsp;Euronumbers`,
                }}
            />
        ),
        winners: `${formatNumbersIntoTriads(odds[`rank${ids + 1}`].winners)}x`,
        amount: (
            <span
                dangerouslySetInnerHTML={{
                    __html: convertToMoneyFormat(odds[`rank${ids + 1}`].prize),
                }}
            />
        ),
    }));

    return (
        <Table
            dataSource={preparedDataSource}
            columns={columns}
            bordered
            size="middle"
            pagination={false}
        />
    );
};

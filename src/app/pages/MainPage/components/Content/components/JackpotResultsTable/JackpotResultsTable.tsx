import React, {useMemo} from 'react';
import {Table} from 'antd';
import {
    convertNumberToRoman,
    convertToMoneyFormat,
    formatNumbersIntoTriads,
} from 'src/helpers';

import {JackpotResultsTableConfig} from './JackpotResultsTableConfig';

interface DataSource {
    key: number,
    tier: string,
    match: React.ReactNode,
    winners: string,
    amount: React.ReactNode,
}

const columns = [
    {
        title: 'Tier',
        dataIndex: 'tier',
        key: 'tier',
    },
    {
        title: 'Match',
        dataIndex: 'match',
        key: 'match',
    },
    {
        title: 'Winners',
        dataIndex: 'winners',
        key: 'winners',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
];

const {
    matchArray,
    odds,
} = JackpotResultsTableConfig;

export const JackpotResultsTable = () => {
    const preparedDataSource: DataSource[] = useMemo(() => (
        matchArray.map(({numbers, euroNumbers}, ids) => ({
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
        }))
    ), []);

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

import React from 'react';
import {Table} from 'antd';
import {convertNumberToRoman} from 'src/helpers';

interface DataSource {
    key: number,
    tier: string,
    match: string,
    winners: string,
    amount: string,
}

const dataSource: DataSource[] = [
    {
        key: 0,
        tier: '1',
        match: '5 Numbers',
        winners: '0x',
        amount: '€315,645.30',
    },
    {
        key: 1,
        tier: '2',
        match: '5 Numbers',
        winners: '0x',
        amount: '€315,645.30',
    },
    {
        key: 2,
        tier: '3',
        match: '5 Numbers',
        winners: '0x',
        amount: '€315,645.30',
    },
];

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

export const JackpotResultsTable = () => {
    const preparedDataSource: DataSource[] = dataSource.map(({tier, ...rest}) => ({
        tier: convertNumberToRoman(tier),
        ...rest,
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

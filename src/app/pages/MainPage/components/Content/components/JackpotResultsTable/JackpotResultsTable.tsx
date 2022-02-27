import React from 'react';
import {Table} from 'antd';

const dataSource = [
    {
        key: 1,
        tier: 1,
        match: '5 Numbers',
        winners: '0x',
        amount: '€315,645.30',
    },
    {
        key: 1,
        tier: 1,
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

export const JackpotResultsTable = () => (
    <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        size="middle"
        pagination={false}
    />
);

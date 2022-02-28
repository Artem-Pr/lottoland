interface JackpotResultsTableConfigTypes {
    matchArray: {
        numbers: number
        euroNumbers: number
    }[]
    columns: {
        title: string
        dataIndex: string
        key: string
    }[]
}

export const JackpotResultsTableConfig: JackpotResultsTableConfigTypes = {
    matchArray: [
        {
            numbers: 5,
            euroNumbers: 2,
        },
        {
            numbers: 5,
            euroNumbers: 1,
        },
        {
            numbers: 5,
            euroNumbers: 0,
        },
        {
            numbers: 4,
            euroNumbers: 2,
        },
        {
            numbers: 4,
            euroNumbers: 1,
        },
        {
            numbers: 4,
            euroNumbers: 0,
        },
        {
            numbers: 3,
            euroNumbers: 2,
        },
        {
            numbers: 2,
            euroNumbers: 2,
        },
        {
            numbers: 3,
            euroNumbers: 1,
        },
        {
            numbers: 3,
            euroNumbers: 0,
        },
        {
            numbers: 1,
            euroNumbers: 2,
        },
        {
            numbers: 2,
            euroNumbers: 1,
        },
    ],
    columns: [
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
    ],
};

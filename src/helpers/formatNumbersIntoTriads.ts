export const formatNumbersIntoTriads = (value: number | string): string => {
    const valueSplitByDecimal = value.toString().split('.');
    const decimalPart = 2 === valueSplitByDecimal.length ? `.${valueSplitByDecimal[1]}` : '';
    const formattedMainPart = valueSplitByDecimal[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    return `${formattedMainPart}${decimalPart}`;
};

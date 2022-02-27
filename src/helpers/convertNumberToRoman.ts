export const convertNumberToRoman = (number: string) => {
    const digits = number.toString().split('');
    const signs = 'IVXLCDM';
    return digits.map((v, i) => {
        const offset = (digits.length - 1 - i) * 2;
        const template = ['', '0', '00', '000', '01', '1', '10', '100', '1000', '02'];
        return template[+v].replace(/[012]/g, m => signs[offset + +m]);
    }).join('');
};

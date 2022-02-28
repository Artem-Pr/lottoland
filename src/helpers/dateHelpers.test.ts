import {
  formatDate,
  parseDateIntoValidFormat,
  INVALID_DATE,
} from './dateHelpers'

describe('dateHelpers', () => {
  describe('formatDateToShortString', () => {
    it('should return Mon 10 Jul', () => {
      const response = formatDate('1989-07-10');
      expect(response).toBe('Mon 10 Jul');
    });

    it('should return Mon 10 Jul', () => {
      const response = formatDate('1989-07-10', 'EEEE d MMM y');
      expect(response).toBe('Monday 10 Jul 1989');
    });

    it('should return "INVALID_DATE"', () => {
      const response = formatDate('');
      expect(response).toBe(INVALID_DATE);
    });

    it('should return "Mon 10 Jul"', () => {
      const response = formatDate(new Date(1989, 6, 10));
      expect(response).toBe('Mon 10 Jul');
    });
  });
  
  describe('parseDateIntoValidFormat', () => {
    it('should return "INVALID_DATE"', () => {
      const response = parseDateIntoValidFormat('25.76.2022, 21:00', 'dd.MM.yyyy, HH:mm')
      expect(response).toBe(INVALID_DATE);
    })

    it('should return "Mon 10 Jul"', () => {
      const response = parseDateIntoValidFormat('10.07.1989, 21:00', 'dd.MM.yyyy, HH:mm')
      expect(response).toEqual(new Date(1989, 6, 10, 21, 0));
    })
  })
});

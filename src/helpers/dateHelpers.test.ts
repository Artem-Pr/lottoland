import {
  formatDateToShortString,
  INVALID_DATE,
} from './dateHelpers'

describe('dateHelpers', () => {
  describe('formatDateToShortString', () => {
    it('should return Mon 10 Jul', () => {
      const response = formatDateToShortString('1989-07-10');
      expect(response).toBe('Mon 10 Jul');
    });
    
    it('should return Mon 10 Jul', () => {
      const response = formatDateToShortString('1989-07-10', 'EEEE d MMM y');
      expect(response).toBe('Monday 10 Jul 1989');
    });
    
    it('should return "INVALID_DATE"', () => {
      const response = formatDateToShortString('');
      expect(response).toBe(INVALID_DATE);
    });
  });
});

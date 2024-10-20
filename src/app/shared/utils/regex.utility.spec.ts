import { RegexUtility } from './regex.utility';
describe('regex-utils', () => {
  describe('compare regex with input', () => {
    it('return password is match with regex', () => {
      const passwordRegex = RegexUtility.passwordRegex;
      const falseValue1 = 'Aa2/s';
      const falseValue2 = 'aaA324dfgd';
      const falseValue3 = 'Aa/@@@@@@@@@@@@';
      const falseValue4 = 'dsgdgAsafdsgdfg';
      const correctValue = 'a4543hfghA34/';

      expect(passwordRegex.test(correctValue)).toBe(true);
      expect(passwordRegex.test(falseValue1)).toBe(false);
      expect(passwordRegex.test(falseValue2)).toBe(false);
      expect(passwordRegex.test(falseValue3)).toBe(false);
      expect(passwordRegex.test(falseValue4)).toBe(false);
    });

    it('return phone is match with regex', () => {
        const phoneRegex = RegexUtility.phoneRegex;
        const falseValue1 = '57762090150';
        const correctValue = '67762090150';  
        expect(phoneRegex.test(correctValue)).toBe(true);
        expect(phoneRegex.test(falseValue1)).toBe(false);
      });
  });
});

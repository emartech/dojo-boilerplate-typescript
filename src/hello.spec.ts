import { hello } from './hello';

describe('hello', () => {
   it('should return "Hello world!" when it was called without parameter', () => {
      const salutation = hello();

      expect(salutation).toEqual('Hello world!');
   });

   it('should return "Hello emartian!" when it was called with parameter emartian', () => {
      const salutation = hello('emartian');

      expect(salutation).toEqual('Hello emartian!');
   })
});
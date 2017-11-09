import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted to use in a dropdown', () => {
      const authors = [
        {id: 'mike-bayles', firstName: 'Mike', lastName: 'Bayles'},
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'}
      ];

      const expected = [
        {value: 'mike-bayles', text: 'Mike Bayles'},
        {value: 'cory-house', text: 'Cory House'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});

import { regionReducer, initialState } from './country.reducer';

describe('Country Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = regionReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

import { isValidUrl } from "./isValidUrl";

describe('isValidUrl', () => {
  it('should return false if url is undefined', () => {
    expect(isValidUrl()).toBeFalsy();
  });

  it('should return true if url is valid', () => {
    const validUrl = 'https://www.hellworld.com';

    expect(isValidUrl(validUrl)).toBeTruthy();
  });

  it('should return false if url is invalid', () => {
    const validUrl = '.hellworld.com';

    expect(isValidUrl(validUrl)).toBeTruthy();
  });
});
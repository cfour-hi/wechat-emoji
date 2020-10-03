import { convertAlt2Emoji, convertText2Emoji } from '../src/index';

test('convertAlt2Emoji: return element from a', () => {
  const mock = jest.fn(convertAlt2Emoji);
  const result = mock('[微笑]');

  expect(mock).toHaveReturned();

  expect(result.tagName).toBe('IMG');
  expect(result.style.backgroundPosition).toBe('0px -0px');
});

test('convertAlt2Emoji: return element from b', () => {
  const mock = jest.fn(convertAlt2Emoji);
  const result1 = mock('/::)');
  const result2 = mock('\ue415');

  expect(mock).toHaveReturnedTimes(2);

  expect(result1.tagName).toBe('IMG');
  expect(result1.style.backgroundPosition).toBe('0px -0px');

  expect(result2.tagName).toBe('IMG');
  expect(result2.style.backgroundPosition).toBe(`0px -${78 * 20}px`);
});

test('convertAlt2Emoji: return source', () => {
  const mock = jest.fn(convertAlt2Emoji);
  const result1 = mock('');
  const result2 = mock('微笑');

  expect(mock).toHaveReturnedTimes(2);
  expect(mock).toHaveReturnedWith('微笑');

  expect(result1).toBe('');
  expect(result2).toBe('微笑');
});

test('convertText2Emoji: return converted text', () => {
  const mock = jest.fn(convertText2Emoji);
  const result = mock(`[微笑][微笑]/::)/::)\ue415\ue415[微笑]/::)\ue415`);

  expect(mock).toHaveReturned();
  expect(result).toContain('img');
  expect(result.match(/<img/g)).toHaveLength(9);
});

test('convertText2Emoji: return source', () => {
  const mock = jest.fn(convertText2Emoji);
  const result = mock(1);

  expect(mock).toHaveReturned();
  expect(result).toBe(1);
});

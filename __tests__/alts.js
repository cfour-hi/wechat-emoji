import { as, bs } from '../src/alts';

test('alts length', () => {
  expect(as).toHaveLength(112);
  expect(bs).toHaveLength(111);
});

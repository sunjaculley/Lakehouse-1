import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clientContent, clientMatches } from './client';

test('client search never includes team-only reset procedures or contacts', () => {
  assert.deepEqual(clientMatches('Coupa Luis Rosenthal reset Alleo'), []);
});
test('search supports the requested packing question', () => {
  assert.equal(clientMatches('What should I pack?').some(q => q.id === 'q-pack'), true);
});
test('destination categories preserve all four requested discovery filters', () => {
  assert.deepEqual(clientContent.categories.map(c => c.label), ['Eat & drink', 'Wellness', 'Activities', 'Work & recharge']);
});

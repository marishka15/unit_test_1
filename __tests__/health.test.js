import getHealthStatus from '../src/health.js';

test('should return healthy', () => {
  const result = getHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should return wounded', () => {
  const result = getHealthStatus({ name: 'Воин', health: 50 });
  expect(result).toBe('wounded');

  const result2 = getHealthStatus({ name: 'Лучник', health: 15 });
  expect(result2).toBe('wounded');
});

test('should return critical', () => {
  const result = getHealthStatus({ name: 'Бард', health: 10 });
  expect(result).toBe('critical');
});
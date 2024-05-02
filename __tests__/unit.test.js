// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test isPhoneNumber to be false', () => {
  expect(isPhoneNumber('')).toBe(false);
});
test('test isPhoneNumber to be false', () => {
  expect(isPhoneNumber('902')).toBe(false);
});
test('test isPhoneNumber to be true', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
});
test('test isPhoneNumber to be true', () => {
  expect(isPhoneNumber('831-343-1574')).toBe(true);
});

test('test isEmail to be false', () => {
  expect(isEmail('')).toBe(false);
});
test('test isEmail to be false', () => {
  expect(isEmail('jonathanJoestar')).toBe(false);
});
test('test isEmail to be true', () => {
  expect(isEmail('y2chi@ucsd.edu')).toBe(true);
});
test('test isEmail to be true', () => {
  expect(isEmail('tow@gmail.com')).toBe(true);
});

test('test isStrongPassword to be false', () => {
  expect(isStrongPassword('')).toBe(false);
});
test('test isStrongPassword to be false', () => {
  expect(isStrongPassword('ga')).toBe(false);
});
test('test isStrongPassword to be true', () => {
  expect(isStrongPassword('StrongPi23__')).toBe(true);
});
test('test isStrongPassword to be true', () => {
  expect(isStrongPassword('Fien32_')).toBe(true);
});

test('test isDate to be false', () => {
  expect(isDate('')).toBe(false);
});
test('test isDate to be false', () => {
  expect(isDate('00/00/1')).toBe(false);
});
test('test isDate to be true', () => {
  expect(isDate('00/00/0000')).toBe(true);
});
test('test isDate to be true', () => {
  expect(isDate('12/1/2324')).toBe(true);
});

test('test isHexColor to be false', () => {
  expect(isHexColor('')).toBe(false);
});
test('test isHexColor to be false', () => {
  expect(isHexColor('zzz')).toBe(false);
});
test('test isHexColor to be true', () => {
  expect(isHexColor('ffffff')).toBe(true);
});
test('test isHexColor to be true', () => {
  expect(isHexColor('002342')).toBe(true);
});

import 'react'
import { trap } from '../trap'

test('Trap object', () => {
  expect(() => {
    return trap
  }).not.toThrow()

  expect(() => {
    return trap.something
  }).not.toThrow()

  expect(() => {
    return trap.something.else
  }).not.toThrow()

  expect(() => {
    return 12 + trap + 12
  }).not.toThrow()

  expect(() => {
    return trap.something / 12
  }).not.toThrow()

  expect(() => {
    return trap.something - 2
  }).not.toThrow()

  expect(() => {
    return 'smth' + trap.something.else
  }).not.toThrow()

  expect(() => {
    return trap.something()
  }).not.toThrow()

  expect(() => {
    return trap.smth.map((x: any) => x).filter((x: any) => x).smth
  }).not.toThrow()

  expect(() => {
    return trap.smth.map((x: any) => x).reduce((x: any) => x) + 12 + 'smth'
  }).not.toThrow()

  expect(() => {
    return [...trap]
  }).not.toThrow()

  expect(() => {
    return trap.something.else[0][12].abc[32]
  }).not.toThrow()
})

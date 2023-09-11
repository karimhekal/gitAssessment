import {MutableRefObject, useRef, useState} from 'react';

// 1500 => 1.5K
const abbrev = 'kmb'; // could be an array of strings: [' m', ' Mo', ' Md']
const round = (num: number, precision: number) => {
  const prec = Math.pow(10, precision);
  return Math.round(num * prec) / prec;
};
export const abbrevNumber = (num: number) => {
  let base = Math.floor(Math.log(Math.abs(num)) / Math.log(1000));
  const suffix = abbrev[Math.min(2, base - 1)];
  base = abbrev.indexOf(suffix) + 1;
  return suffix ? round(num / Math.pow(1000, base), 1) + suffix : '' + num;
};

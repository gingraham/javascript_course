import {expect, test} from 'vitest';

import{reduce} from './cummulative_sum';
import{binarySearch} from './binarySearch';

test('cumulative sum of an array', ()=>{
    expect(reduce([1,2,3,4,5])).toBe(15)
})

test('iterate over an array and match to target', ()=>{
    expect(binarySearch([1,2,3,4,5,6,7,8,9] ,5)).toBe(4)
})

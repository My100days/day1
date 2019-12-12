import {all} from './snippets'
test('basic', () =>{
    expect(all([1,2,3])).toBe(true)
})
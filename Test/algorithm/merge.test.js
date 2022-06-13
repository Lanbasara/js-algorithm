const {mergeSort} = require('../../algorithm/merge-sort')

describe('merge sort', () => {
    it('test', () => {
        const array = [1, 5, 2, 4, 2]
        expect(mergeSort(array)).toEqual([1,2,2,4,5])
    })
})
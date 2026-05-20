class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hash = {}
        for (let num of nums) {
            hash[num] = true
        }

        for (let h in hash) {
            if (parseInt(h) - 1 in hash) {
                hash[h] = false
            }
        }

        let largest = 0
        for (let h in hash) {
            if (hash[h]) {
                let starter = parseInt(h)
                let length = 1
                while (starter + 1 in hash) {
                    starter++
                    length++
                }
                if (length > largest) {
                    largest = length
                }
            }
        }
        return largest
    }
}

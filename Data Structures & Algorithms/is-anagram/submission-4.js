class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const reference = {}
        if (s.length !== t.length) return false
        
        for (let ref of s) {
            if (reference[ref]) {
                reference[ref]++
            } else {
                reference[ref] = 1
            }
        }

        for (let check of t) {
            if (reference[check] && reference[check] > 0) {
                reference[check]--
            } else {
                return false
            }
        }

        return true
    }
}

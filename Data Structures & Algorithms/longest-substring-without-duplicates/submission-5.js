class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let substr = new Set()
        let r = 0
        let max = 0

        while (r < s.length) {
            if (substr.has(s[r])) {
                for (const letter of substr) {
                    console.log(letter, s[r])
                    if (letter === s[r]) {
                        substr.delete(letter)
                        break
                    } 
                    substr.delete(letter)
                }
            } 
            substr.add(s[r])
            max = Math.max(max, substr.size)
            r++

        }
        return max
    }
}

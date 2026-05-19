class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}

        // loop over strs
        // for each loop, create a 26 letter key
        // check if key is in hash. if so, push to hash arr value else create new entry

        for (let str of strs) {
            let count = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }
            const key = count.join(',')
            if (hash[key]) {
                hash[key].push(str)
            } else {
                hash[key] = [str]
            }
        }

       return Object.values(hash)
    }
}



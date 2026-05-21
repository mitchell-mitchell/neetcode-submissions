class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)
       
        let results = []

        for (let i=0; i< nums.length; i++) {
            let j = i + 1
            let k = nums.length - 1
            if (nums[i] === nums[i - 1]) continue
            while (j < k) {
                if (nums[j] + nums[k] + nums[i] > 0) {
                    k--
                } else if (nums[j] + nums[k] + nums[i] < 0) {
                    j++
                } else if (nums[j] + nums[k] + nums[i] === 0) {
                    results.push([nums[j], nums[k], nums[i]])
                    j++
                    k--
                    while (j < k && nums[j] === nums[j - 1]) j++
                    while (j < k && nums[k] === nums[k + 1]) k++
                }
            }
        }
        return results
    }
}

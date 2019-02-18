/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    const array = preferences;
    const length = array.length;
    let count = 0;

    for (let i = 0; i<length; i++){
        let a = array[i];
        let b = array[a-1];

        if (i === array[b-1]-1 && a !== b) count++;
    }
    return count/3;
};
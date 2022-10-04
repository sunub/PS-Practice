
const n = 5;
const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];

function vaildTree(n: number, edges: number[][]) {
    const totalEdges = n - 1;
    const adjacentList = new Map();

    /**
     * To find out how many edges Tree has, i made and adjacent list
     */
    for (const val of edges) {
        const a = val[0];
        const b = val[1];
        if (!adjacentList.has(a)) {
            adjacentList.set(a, [b]);
        } else {

            adjacentList.forEach((val, key) => {
                if (key === a) {
                    return val.push(b);
                }
            })
        }
        if (!adjacentList.has(b)) {
            adjacentList.set(b, [a]);
        } else {
            if (adjacentList.has(b)) {
                adjacentList.forEach((val, key) => {
                    if (key === b) {
                        return val.push(a);
                    }
                })
            }
        }
    }
    /**
     * I could figure out that how many edges Tree had.
     */

    const result = new Set();
    adjacentList.forEach((val, key) => {
        for (const innerVal of val) {
            const temp = [key, innerVal].sort((a, b) => a - b);
            result.add(temp.toString());
        }
    });

    if (result.size === totalEdges) {
        return true;
    } else {
        return false;
    }
}
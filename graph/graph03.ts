const n = 5;
const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];

function vaildTree(n: number, edges: number[][]) {
    if (n < 2) return true;
    // Create adjacent list
    let adj: any = {};

    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }

    for (const edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    }

    // Find out this three is undirected or not by using DFS algorithm
    const visited = new Set();
    let parent: any = {};
    let containsCycles = false;

    function DFS(root: any) {
        visited.add(root);
        for (const neighbor of adj[root]) {
            if (visited.has(neighbor)) {
                if (parent[root] !== neighbor) {
                    containsCycles = true;
                } else {
                    continue;
                }
            } else {
                parent[neighbor] = root;
                DFS(neighbor);
            }
        }
    }
    DFS(0);
    if (containsCycles) return false;
    return visited.size === n;
};
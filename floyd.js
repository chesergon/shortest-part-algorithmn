/**
 * Floyd-Warshall Algorithm
 * Finds the shortest paths between all pairs of vertices in a weighted graph.
 * Can handle graphs with positive or negative edge weights but no negative cycles.
 */

// Define a class for the Graph
class Graph {
    constructor(vertices) {
        this.V = vertices; // Number of vertices
        this.dist = Array.from({ length: vertices }, () => Array(vertices).fill(Infinity));
        this.next = Array.from({ length: vertices }, () => Array(vertices).fill(null));
        
        // Initialize the distance to self as 0
        for (let i = 0; i < vertices; i++) {
            this.dist[i][i] = 0;
        }
    }

    // Add an edge to the graph
    addEdge(u, v, weight) {
        this.dist[u][v] = weight;
        this.next[u][v] = v;
    }

    // Floyd-Warshall algorithm
    floydWarshall() {
        for (let k = 0; k < this.V; k++) {
            for (let i = 0; i < this.V; i++) {
                for (let j = 0; j < this.V; j++) {
                    if (this.dist[i][j] > this.dist[i][k] + this.dist[k][j]) {
                        this.dist[i][j] = this.dist[i][k] + this.dist[k][j];
                        this.next[i][j] = this.next[i][k];
                    }
                }
            }
        }
    }

    // Utility function to print the distances
    printSolution() {
        console.log("Shortest distances between every pair of vertices:");
        for (let i = 0; i < this.V; i++) {
            let row = "";
            for (let j = 0; j < this.V; j++) {
                if (this.dist[i][j] === Infinity) {
                    row += "INF ";
                } else {
                    row += this.dist[i][j] + " ";
                }
            }
            console.log(row);
        }
    }

    // Utility function to reconstruct the path
    reconstructPath(u, v) {
        if (this.next[u][v] === null) return [];
        let path = [u];
        while (u !== v) {
            u = this.next[u][v];
            path.push(u);
        }
        return path;
    }

    // Utility function to print a specific path
    printPath(u, v) {
        const path = this.reconstructPath(u, v);
        if (path.length === 0) {
            console.log(`No path from ${u} to ${v}`);
        } else {
            console.log(`Path from ${u} to ${v}: ${path.join(" -> ")}`);
        }
    }
}

// Driver code
let graph = new Graph(4);
graph.addEdge(0, 1, 5);
graph.addEdge(0, 3, 10);
graph.addEdge(1, 2, 3);
graph.addEdge(2, 3, 1);

// Function call
graph.floydWarshall();
graph.printSolution();
graph.printPath(0, 3);
graph.printPath(1, 3);

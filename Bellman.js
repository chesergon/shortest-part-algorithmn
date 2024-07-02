/**
 * Bellman-Ford Algorithm
 * Finds the shortest paths from a source vertex to all other vertices in a weighted graph.
 * Handles negative weights but not negative cycles.
 */

// Define a class for the Graph
class Graph {
    constructor(vertices) {
        this.V = vertices; // Number of vertices
        this.edges = []; // Array of edges
    }

    // Add an edge to the graph
    addEdge(u, v, weight) {
        this.edges.push({u, v, weight});
    }

    // Bellman-Ford algorithm
    bellmanFord(src) {
        // Step 1: Initialize distances from src to all other vertices as INFINITE
        let dist = Array(this.V).fill(Infinity);
        dist[src] = 0;

        // Step 2: Relax all edges |V| - 1 times
        for (let i = 1; i <= this.V - 1; i++) {
            for (let {u, v, weight} of this.edges) {
                if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (let {u, v, weight} of this.edges) {
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }

        // Print all distances
        this.printArr(dist);
    }

    // Utility function to print the distances
    printArr(dist) {
        console.log("Vertex Distance from Source");
        for (let i = 0; i < this.V; i++) {
            console.log(`${i} \t\t ${dist[i]}`);
        }
    }
}

// Driver code
let graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

// Function call
graph.bellmanFord(0);

/**
 * Dijkstra's Algorithm
 * Finds the shortest paths from a source vertex to all other vertices in a weighted graph with non-negative weights.
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert an element into the heap
    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    // Bubble up the element to maintain the heap property
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].dist >= this.heap[parentIndex].dist) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Extract the minimum element (root) from the heap
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    // Bubble down the element to maintain the heap property
    bubbleDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left].dist < this.heap[smallest].dist) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right].dist < this.heap[smallest].dist) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Define a class for the Graph
class Graph {
    constructor(vertices) {
        this.V = vertices; // Number of vertices
        this.adjList = new Map(); // Adjacency list
    }

    // Add an edge to the graph
    addEdge(u, v, weight) {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u).push({ node: v, weight });
    }

    // Dijkstra's algorithm
    dijkstra(src) {
        // Initialize distances from src to all other vertices as INFINITE and src distance as 0
        let dist = Array(this.V).fill(Infinity);
        dist[src] = 0;

        // Min heap to get the minimum distance vertex
        let minHeap = new MinHeap();
        minHeap.insert({ node: src, dist: 0 });

        while (!minHeap.isEmpty()) {
            let { node: u, dist: uDist } = minHeap.extractMin();

            // Get all adjacent vertices of the extracted vertex
            let neighbors = this.adjList.get(u) || [];

            for (let { node: v, weight } of neighbors) {
                if (uDist + weight < dist[v]) {
                    dist[v] = uDist + weight;
                    minHeap.insert({ node: v, dist: dist[v] });
                }
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
let graph = new Graph(9);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 7, 8);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 7, 11);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 8, 2);
graph.addEdge(2, 5, 4);
graph.addEdge(3, 4, 9);
graph.addEdge(3, 5, 14);
graph.addEdge(4, 5, 10);
graph.addEdge(5, 6, 2);
graph.addEdge(6, 7, 1);
graph.addEdge(6, 8, 6);
graph.addEdge(7, 8, 7);

// Function call
graph.dijkstra(0);

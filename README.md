# Shortest Path Algorithms

This repository contains implementations of various shortest path algorithms used in graph theory. Shortest path algorithms are fundamental in computer science and are used to find the shortest path between nodes in a graph, which is a common problem in network routing, geographical mapping, and many other applications.

## Table of Contents

- [Introduction](#introduction)
- [Algorithms Implemented](#algorithms-implemented)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In graph theory, the shortest path problem involves finding a path between two vertices such that the sum of the weights of its constituent edges is minimized. This repository includes implementations of several classic shortest path algorithms.

## Algorithms Implemented

### 1. Dijkstra's Algorithm
Dijkstra's algorithm is used for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It works on both directed and undirected graphs with non-negative weights.

### 2. Bellman-Ford Algorithm
The Bellman-Ford algorithm computes shortest paths from a single source vertex to all other vertices in a weighted digraph. Unlike Dijkstra's algorithm, it can handle graphs in which some of the edge weights are negative.

### 3. Floyd-Warshall Algorithm
The Floyd-Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). It computes the shortest paths between all pairs of vertices.

### 4. A* Search Algorithm
A* search algorithm is an extension of Dijkstra's algorithm that uses heuristics to improve performance. It finds the shortest path from a start node to a target node in a weighted graph with positive weights.

### 5. Johnson's Algorithm
Johnson's algorithm is used for finding shortest paths between all pairs of vertices in a sparse, edge-weighted, directed graph. It is more efficient than Floyd-Warshall for sparse graphs.

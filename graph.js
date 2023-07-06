// Description: Graph class and Node class
//
class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  removeVertex(vertex) {
    for (let adjacentNode of vertex.adjacent) {
      adjacentNode.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function traverse(node) {
      visited.add(node);
      result.push(node.value);

      for (let neighbor of node.adjacent) {
        if (!visited.has(neighbor)) {
          traverse(neighbor);
        }
      }
    }

    traverse(start);
    return result;
  }

  breadthFirstSearch(start) {
    const queue = [start];
    const visited = new Set();
    const result = [];

    visited.add(start);

    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current.value);

      for (let neighbor of current.adjacent) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = { Graph, Node };

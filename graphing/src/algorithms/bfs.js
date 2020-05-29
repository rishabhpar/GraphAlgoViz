export function bfs(grid, start, target) {
  const visitedNodesInOrder = [];
  let structure = [];
  structure.push(start);

  while (!!structure.length) {
    let currentNode = structure.shift();

    if (!currentNode.isWall){
      visitedNodesInOrder.push(currentNode);
    }

    currentNode.isVisited = true;
    if (currentNode === target) {
      return visitedNodesInOrder;
    }
    let currentNeighbors = getUnvisitedNeighbors(currentNode, grid);
    currentNeighbors.forEach(neighbor => {
      if (!neighbor.isVisited) {
        neighbor.isVisited = true;
        neighbor.previousNode = currentNode;
        structure.push(neighbor);
      }
    });
  }

   return visitedNodesInOrder;
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const {col, row} = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}


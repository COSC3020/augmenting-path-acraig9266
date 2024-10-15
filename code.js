function augmentingPath(graph, start, end) {
    path = [];
    if (start == end) {
        path.push(start);
        return path;
    } else {
        visitedNodes = [];
        stack = [[start]];
        while (stack.length > 0) {
            path = stack.pop();
            currentNode = path[path.length - 1];
            if (currentNode == end) {
                return path;
            } else if (visitedNodes.includes(currentNode) == false) {
                visitedNodes.push(currentNode);
                for (neighborNode in graph[currentNode]) {
                    if (visitedNodes.includes(neighborNode) == false) {
                        stack.push(path.concat(neighborNode))
                    }
                }
            }
        }
    }
    return [];
}

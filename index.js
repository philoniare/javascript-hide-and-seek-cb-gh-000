function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested .target")
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < nodes.length; i++) {
    let updatedRank = parseInt(nodes[i].innerHTML) + n
    nodes[i].innerHTML = updatedRank
  }
}

function deepestChild() {
  let root = document.querySelector("div#grand-node")
  var queue = [[root, 0]];
  var deepest = root
  var deepestChildDepth = 0
  while(queue.length > 0) {
    debugger
    let currentElement = queue.shift()
    let currentNode = currentElement[0]
    let currentDepth = currentElement[1]
    let children = currentNode.childNodes
    if (currentDepth >= deepestChildDepth && children.length > 0) {
      deepestChildDepth = currentDepth
      deepest = currentNode
    }
    for(let i = 0; i < children.length; i++) {
      queue.push([children[i], currentDepth + 1])
    }
  }
  return deepest
}

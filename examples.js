const BST = require('./bst')
const bst = new BST();

const Q = require('./queue')
const queue = new Q();

/**
 * 4.a) 14, 15, 19, 25, 27, 35, 79, 89, 90, 91 -->in-order
 *      35, 25, 15, 14, 19, 27, 89, 79, 91, 90 --> pre-order
 */

                        //         35
                        //       /   \
                        //     25     89
                        //     /\     /\
                        //   15  27  79 90
                        //   /\       \
                        // 14  19      91

/**
 * post-order
 * if(left)
 * if(right)
 * log
 * 
 * --> 14,19,15,27,25,91,79,90,89,35
 * 
 * 4.b) post-order --> 5 7 6 9 11 10 8
 */ 
                        //       8
                        //     /   \
                        //    6     10
                        //   / \   /  \
                        //  5   7  9   11
//pre-order --> Node,left,right --> 8, 6, 5, 7, 10, 9, 11
function preOrder(tree){
  console.log(tree.key);
  if(tree.left){
    preOrder(tree.left)
  }
  if(tree.right){
    preOrder(tree.right)
  }
}

function postOrder(tree){
  if(tree.left){
    postOrder(tree.left)
  }
  if(tree.right){
    postOrder(tree.right)
  }
  console.log(tree.key);
}

function inOrder(tree){
  if(tree.left){
    inOrder(tree.left)
  }
  console.log(tree.key);
  if(tree.right){
    inOrder(tree.right)
  }
  
}

function bfs(tree) { 
  let node = tree.key
  let tempQ = new Q();

  tempQ.enqueue(node) //A
  while(tempQ.length){
    node = tempQ.dequeue() //node = whatever comes out of Q next // tempQ: D, E, F
    queue.enqueue(node) // A, B, C
    if(node.left){
     tempQ.enqueue(node.left) // D,
    }
    if(node.right){
     tempQ.enqueue(node.right) // B, C
    }
  }
}

stocks = [128, 97, 121, 123, 98, 97, 105]

function maxProfit(arr) {
  let stocksHeld = false
  let profit = 0;
  currentStock = null;

  for(let i=0; i<arr.length; i++){
    if(!stocksHeld && arr[i]<arr[i+1]){
      console.log('buy!')
      stocksHeld = true
      currentStock = arr[i]
    }
    if(stocksHeld && arr[i]>arr[i+1]){
      console.log('sell!')
      stocksHeld = false
      profit += arr[i] - currentStock
      currentStock = null
    }
  }
  if(stocksHeld) {
    profit += arr[arr.length-1] - currentStock
  }
  return profit;
}

console.log(maxProfit(stocks));

const testArr =[25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
function main(arr) {
  for(let i=0; i<arr.length; i++) {
    bst.insert(arr[i])
  }
  console.log('preOrder:')
  preOrder(bst)
  console.log('====')
  console.log('postOrder:')
  postOrder(bst)
  console.log('====')
  console.log('inOrder:')
  inOrder(bst)
  console.log('====')

}
//main(testArr);
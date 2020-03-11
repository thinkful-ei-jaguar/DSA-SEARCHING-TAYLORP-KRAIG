const BST = require('./bst')
const bst = new BST();

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
main(testArr);
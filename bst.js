class BinarySearchTree {
  constructor(key=null, parent=null) {
    this.key = key,
    this.parent= parent,
    this.right = null,
    this.left= null;
  }

  insert(item){
    //if tree is empty
    if(this.key === null) {
      this.key = item;
    }
    else if(item<this.key){
      if(this.left === null){
        this.left = new BinarySearchTree(item, this);
      } else {
        this.left.insert(item);
      }
    }
    else if(item>this.key){
      if(this.right === null){
        this.right = new BinarySearchTree(item, this);
      } else {
        this.right.insert(item);
      }
    }
  }

  find(item) {
    //if the item we are finding is the root node 
    if (this.key == item) {
      return this;
    }
    //if the item we are looking for is less than the root, the go to the left-hand branch
    //if there is an exisiting left child, recursively search for the item 
    else if (item < this.key && this.left) {
      return this.left.find(item);
    }
    else if (item > this.key && this.right) {
      return this.right.find(item);
    }
    else {
      throw new Error('Cannot find the item')
    }
  }

  remove(item) {
    if(this.key === item) {
      if(this.left && this.right){
        const successor = this.left? this.left._findMax(): this.right._findMin();
        this.key = successor.key
        successor.remove(successor.key)
      }
      //if node has only 1 left child
      else if(this.left) {
        this._replaceWith(this.left);
      }
      else if(this.right) { // 7
        this._replaceWith(this.right); //replace 6 with 7 
      }
      //if node has no children
      else {
        this._replaceWith(null);
      }
    } 
    else if (item < this.key && this.left) {
      this.left.remove(item)
    }
    else if ( item > this.key && this.right) {
      this.right.remove(item)
    }
    else {
      throw new error('Key Error')
    }
  }

  _replaceWith(node) { 
    // replace the node's parent with the node 
     if(this.parent) { // 5
       if(this == this.parent.left) {// 6 === 5's left 
          this.parent.left = node
       }
       if(this == this.parent.right) {
         this.parent.right = node;
       }
       if (node) {
        node.parent = this.parent;
       }
     }
     //if we are removing the root node
     else {
      if (node) {
        this.key = node.key;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin(){
    if(this.left !== null){
      return this.left._findMin()
    }
    else {
      return this;
    }
  }

  _findMax(){
    if(this.right !== null){
      return this.right._findMax()
    }
    else {
      return this;
    }
  }
}

module.exports = BinarySearchTree;
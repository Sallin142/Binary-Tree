const TreeNode = require("./BTNode");

class BSTNode{
    constructor(val){
        this.val =val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BSTree {
    constructor(){
        this.root = null;

    }
    addToTree(val){
        let add = val;
        if(!val instanceof BSTNode){
            add = new BSTNode(val);
        }
        addToTreeTrevsal(add, root);
       
    }
    addToTreeTraversal(add, node){
        if(add.data < node.val){
            if(node.left === null){
                node.left = add;
                add.prev = node;
            }else{
                this.addToTreeTraversal(add, node.left);
            }
        }else{
            if(node.right === null){
                node.right = add;
                add.prev = node;
            }else{
                this.addToTreeTraversal(add, node.right);
            }
        }
    }
}
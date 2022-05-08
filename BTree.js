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
                add.parent = node;
            }else{
                this.addToTreeTraversal(add, node.left);
            }
        }else{
            if(node.right === null){
                node.right = add;
                add.parent = node;
            }else{
                this.addToTreeTraversal(add, node.right);
            }
        }
    }
    removeFromTree(val){
        this.root = this.removeNodeTraversal(root, val);
    }
    removeNodeTraversal(node, val){
        if(!node){
            return null;
        }
        if(node.val < val){
            node.left = this.removeNodeTraversal(root.left, val);
            return node;
        }else if(node.val > val){
            node.right = this.removeNodeTraversal(root.right, val);
            return node;
        }else{
            if(node.left && node.right){
                let suc = this.findSuccesor(node.right);
                node.data = suc.data;
                node.removeNodeTraversal(node.right, suc.data);
                return node;
            }else if(node.left === null && node.right === null){
                node = null
                return node;
            }else if(node.left === null){
                node.right.parent = node.parent;
                node = node.right;
                return node;
            }else if(node.right === null){  
                node.left.parent = node.parent;
                node = node.left;
                return node;
            }
        }
        
    }
    findSuccesor(node){
        if(node.left){
            return this.findSuccesor(node.left);
        }else{
            return node;
        }
    }
}
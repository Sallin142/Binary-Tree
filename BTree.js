

class BSTNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BSTree {
    constructor(){
        this.root = null;

    }
    addTraversal(key, node){
        /* If the tree is empty, return a new Node */
        if (node == null) return new BSTNode(key);
    
        /* Otherwise, recur down the tree */
        if (key < node.val)
        {
            var lchild = this.addTraversal(key, node.left);
            node.left = lchild;
    
            // Set parent of root of left subtree
            lchild.parent = node;
        }
        else if (key > node.val)
        {
            var rchild = this.addTraversal(key, node.right);
            node.right = rchild;
    
            // Set parent of root of right subtree
            rchild.parent = node;
        }
 
        /* return the (unchanged) Node pointer */
        return node;

    }
    addNode(val){
        //easier to pass a value then a node object
        if( val instanceof BSTNode){
            val = val.val;
        }
        this.root = this.addTraversal(val, this.root);
    }
    
    printTreeInorder(root){
        if(root===null){
            return;
        }
        
        
        this.printTreeInorder(root.left);
        
        console.log(root.val);

        this.printTreeInorder(root.right);
        return;
       
        
    }
}


module.exports = BSTree;
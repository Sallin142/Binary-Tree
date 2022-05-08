class TreeNode{
    constructor(val){
        this.children = [];
        this.val = val;
    }
}

class BTNode extends TreeNode{
    constructor(val){
        this.numberOfChildren = 0;
        this.maxNumberOfChildren = 2;
        this.left = null;
        this.right = null;
        super(val);
    }


}

module.exports =TreeNode;
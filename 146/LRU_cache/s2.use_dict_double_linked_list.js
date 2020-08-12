/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.head = new DoubleLinkedNode(0, null, null);
    this.tail = new DoubleLinkedNode(0, this.head, null)
    this.head.right = this.tail;
    this.capacity = capacity;
    this.dict = {};
    this.size = 0;
};

function DoubleLinkedNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.search(key);

    if (node) {
        this.put(key, node.val[1]);
        return node.val[1];
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = this.search(key);

    if (node) {
        this.remove(node);
    } else {
        if (this.size >= this.capacity) {
            this.removeLast();
        }
    }

    const newNode = new DoubleLinkedNode([key, value], this.head, this.head.right);
    this.head.right.left = newNode;
    this.head.right = newNode;
    this.dict[key] = newNode;

    this.size++;

    return value;
};

LRUCache.prototype.removeLast = function() {
    this.size--;

    delete this.dict[this.tail.left.val[0]];

    this.tail.left.left.right = this.tail;
    this.tail.left = this.tail.left.left;
}

LRUCache.prototype.remove = function(node) {
    this.size--;

    node.left.right = node.right;
    node.right.left = node.left;

    delete this.dict[node.val[0]];
}

LRUCache.prototype.search = function(key) {
    const node = this.dict[key];

    return node ? node : false;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

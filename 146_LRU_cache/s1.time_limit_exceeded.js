/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.head = new LinkedNode(0, null);
    this.capacity = capacity;
    this.size = 0;
};

function LinkedNode(val, next) {
    this.val = val;
    this.next = next;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const val = this.search(key);
    if (val) {
        this.put(key, val);
        return val;
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
    const val = this.search(key);

    if (val) {
        this.remove(key);
    } else {
        console.log(this.size >= this.capacity, this.size, this.capacity)

        if (this.size >= this.capacity) {
            this.removeLast();
        }
    }

    const newNode = new LinkedNode([key, value], this.head.next);
    this.head.next = newNode;
    this.size++;

    return value;
};

LRUCache.prototype.removeLast = function() {
    this.size--;
    let curr = this.head;
    let prev = null;

    while (curr.next) {
        prev = curr;
        curr = curr.next;
    }

    prev.next = null;
}

LRUCache.prototype.remove = function(key) {
    this.size--;
    let curr = this.head;
    let prev = null;

    while (curr) {
        if (curr.val[0] === key) {
            prev.next = curr.next;
            return;
        }

        prev = curr;
        curr = curr.next;
    }
}

LRUCache.prototype.search = function(key) {
    let curr = this.head;

    while (curr) {
        if (curr.val[0] === key) return curr.val[1];
        curr = curr.next;
    }

    return false;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

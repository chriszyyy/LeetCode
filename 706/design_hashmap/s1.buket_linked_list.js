/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    // In other language, need to handle array set with capacity and threshold
    this.items = {};
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const val = this.get(key);
    const hashCode = hash(key);

    if (val >= 0) {
        let curr = this.items[hashCode];

        while (curr) {
            // Update value
            if (curr.val[0] === key) {
                curr.val[1] = value;
                return;
            }

            curr = curr.next;
        }
    } else {
        // If this hashCode key already exist, we insert it just behind the head
        if (this.items.hasOwnProperty(hashCode)) {
            const head = this.items[hashCode];
            const newNode = new LinkedNode([key, value], head.next);
            head.next = newNode;
        } else {
            // if this is the frist node, we create the head and insert the node just after it
            const newNode = new LinkedNode([key, value], null);
            const head = new LinkedNode([null, null], newNode);
            this.items[hashCode] = head;
        }
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const hashCode = hash(key);

    if (this.items.hasOwnProperty(hashCode)) {
        let curr = this.items[hashCode];

        while (curr) {
            if (curr.val[0] === key) return curr.val[1];
            curr = curr.next;
        }

        return -1;
    }

    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const val = this.get(key);

    if (val) {
        const hashCode = hash(key);

        let curr = this.items[hashCode];
        let prev = null;

        while (curr) {
            if (curr.val[0] === key) {
                prev.next = curr.next;

                // remove the hashCode if no element left
                if (this.items[hashCode].next === null) delete this.items[hashCode];

                return;
            }

            prev = curr;
            curr = curr.next;
        }
    }
};

function hash(str) {
    let hash = 5381;
    if (typeof str !== 'string') str = str.toString();

    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str[i];
    }

    return hash >>> 0;
}

function LinkedNode(val, next=null) {
    this.val = val;
    this.next = next;
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

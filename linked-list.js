import { Node } from "./node.js";
export function LinkedList () {
    let listHead = Node();
    const toString = () => {
        let listString = "";
        //Traverse through list items
        (function traverseList (node) {
            if (node.nextNode === null) return
            listString += " => " + String(node.value);
            return traverseList(node.nextNode);
        })(listHead);
        //Remove first pointer icon
        return listString.slice(4);
    }
    const append = (value) => {
        let tmp;
        (function lastNode (node) {
            if (node.nextNode === null) {
                tmp = node;
                return
            }
            return lastNode(node.nextNode);
        })(listHead);
        tmp.value = value;
        tmp.nextNode = Node();
    }
    const prepend = (value) => {
        let tmp = Node(value);
        tmp.nextNode = listHead;
        listHead = tmp;
    }
    const size = () => {
        let totalSize = 0;
        (function traverseList (node) {
            totalSize = node.value !== null ? totalSize + 1 : totalSize;
            if (node.nextNode === null) {
                return;
            }
            return traverseList(node.nextNode);
        })(listHead);
        return totalSize;
    }
    const head = () => {
        return listHead.value;
    }
    const tail = () => {
        return (function traverseList (node) {
            if (!node.nextNode.nextNode) {
                return node.value;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const at = (index) => {
        let counter = 0;
        return (function traverseList (node) {
            if (node.nextNode === null) {
                return (`Index ${index} is out of range`);
            }
            if (counter === index) {
                return node.value;
            }
            counter += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    const pop = () => {
        (function traverseList (node) {
            if (!node.nextNode.nextNode.nextNode) {
                node.nextNode = Node();
                return;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const contains = (value) => {
        return (function traverseList (node) {
            if (node.value === value) {
                return true;
            }
            if (!node.nextNode.nextNode) {
                return false;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const find = (value) => {
        let index = 0;
        return (function traverseList (node) {
            if (node.value === value) {
                return index;
            }
            if (!node.nextNode.nextNode) {
                return false;
            }
            index += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    const insertAt = (value, index) => {
        let counter = 0;
        if (index === 0) prepend(value);
        (function traverseList (node) {
            if (counter === index-1) {
                const newNode = Node(value,node.nextNode);
                node.nextNode = newNode;
                return;
            }
            if (!node.nextNode.nextNode) {
                return (`Index ${index} is out of range`);
            }
            counter += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    const remvoeAt = (index) => {
        let counter = 0;
        if (index === 0) {
            (() => {
                listHead = listHead.nextNode;
            })();
        }
        (function traverseList (node) {
            if (counter === index-1) {
                node.nextNode = node.nextNode.nextNode;
                return;
            }
            if (!node.nextNode.nextNode) {
                return (`Index ${index} is out of range`);
            }
            counter += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    return {toString, append, prepend, size, head, tail, at, pop, contains, find, insertAt, remvoeAt};
}

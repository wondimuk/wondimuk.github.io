function LinkedLists(){
    this.header=null;
}

function Node(data){
    this.data = data;
    this.next = null;
}

LinkedLists.prototype.add=function(nNode) {
    let current;
    let newNode = new Node(nNode);
    if(this.header==null){
        this.header = newNode;
    }
    else{
        current = this.header;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
}

LinkedLists.prototype.remove = function(data){
    if (this.header.data == data) {
        this.header = this.header.next;
        return;
      }
    var prev = this.header;
    current = this.header.next;

    while (current.data != null) {
    if (current.data == data) {
        prev.next = current.next;
        return;
    }
    prev = current;
    current = current.next;
    }
}

 // Function that print the linked linked
 LinkedLists.prototype.print = function () {
    var curr = this.header;
    var str = "Linked list: {";
    while (curr) {
      str += curr.data + ",";
      curr = curr.next;
    }
    console.log(str + '}');
}
let linkedlist = new LinkedLists();
linkedlist.add('a');
linkedlist.add('b');
linkedlist.add('c');
linkedlist.print();
linkedlist.remove('b');
linkedlist.print();

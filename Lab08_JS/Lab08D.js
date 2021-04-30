var linkedLists={
    header:null,
    node:function(ndata){
        return {
        data: ndata,
        next: null,
        };
    },

    // Add to linkedList
    add:function(nNode){
        var current;
        newNode = this.node(nNode);
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
    },

    // remove from the linkedList
    remove: function(data){
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
    },

    // Function that print the linked linked
    print: function () {
        var curr = this.header;
        var str = "Linked list: {";
        while (curr) {
          str += curr.data + ", ";
          curr = curr.next;
        }
        console.log(str + '}');
      },
};

// Test the functionality of the linked list with some data
let linkedlist = Object.create(linkedLists);
linkedlist.add('a');
linkedlist.add('b');
linkedlist.add('c');
linkedlist.print();
linkedlist.remove('b');
linkedlist.print();
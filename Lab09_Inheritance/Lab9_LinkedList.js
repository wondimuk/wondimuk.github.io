class Nnode {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}
class LinkedLists{
    constructor(){
        this.header=null;
    }

    // Add element to the linked list
    add(data){
        let newNode= new Nnode(data);

        if(this.header == null){
            this.header = newNode;
        }else{
            let current = this.header;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(data){
        if(this.header == null) {
            console.log("Invalid remove!");
            return;
        }
        if(this.header.data === data){
            this.header = this.header.next;
        }
        else{
            let current = this.header;
            while(current.next != null){
                if(current.next.data ==data){
                    current.next=current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    }
    print(){
        let arrResult = [];
        let curr = this.header;
        while(curr){
            arrResult.push(curr.data);
            curr = curr.next; 
        }
        console.log('Linked List: {' + arrResult + '}')
    }
}

let llist = new LinkedLists();
llist.add('Mango');
llist.add('Apple');
llist.add('Banana');
llist.remove('Banana');
llist.add('Orange');
llist.print();


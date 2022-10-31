class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    push(value){
        const N = new Node(value);
        let current = this.head;
        if(current == null){
            this.head = N;
            return;
        }
        let beforeNull;
        while(current!==null){
            beforeNull=current;
            current = current.next;
        }
        beforeNull.next = N;
    }
    pop(){
        
    }
    show(){
        let current = this.head;
        while(current!=null){
            console.log(current.value)
            current = current.next;
        }
    }
}


function showRev(start){
    if(start==null)return;
    showRev(start.next);
    console.log(start.value);
}


const L1 = new LinkedList();

L1.push(12);
L1.push(24);
L1.push(55);
L1.show();
console.log("================ Reversed show ==============")
showRev(L1.head);
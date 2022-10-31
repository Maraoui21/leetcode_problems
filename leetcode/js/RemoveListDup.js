
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
class Stack{
    constructor(){
        this.items = [];
    }
    push(val){
        this.items.push(val)
    }
    pop(){
        return this.items.pop();
    }
    getLast(){
        return  this.items[this.items.length-1];
    }
    get(index){
        return this.items[index];
    }
    getSize(){
        return this.items.length;
    }
}

function removeDup(head){
    let k = head;
    let j;
    let NotRpeated = true;
    let lastRepeated;    
    const s = new Stack();
    while(k!=null){
        j=k.next;
        while(j!=null){
            if(k.value == j.value){
                NotRpeated = false;
                lastRepeated = k.value;
                break;
            }
            j=j.next;
        }
        if(NotRpeated){
            if(k.value != lastRepeated)s.push(k.value);
        }else{
            NotRpeated = true;
        }
        k = k.next;
    }
    const newList = new LinkedList();
    for(var i=0;i<s.getSize();i++){
        newList.push(s.get(i));
    }
    return newList.head;
}

const L = new LinkedList();

L.push(1);
L.push(1);
L.push(3);
// L.push(1);
// L.push(2);
// L.push(3);
// L.push(3);
// L.push(4);
// L.push(5);

console.log(removeDup(L.head));
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
    getSize(){
        return this.items.length;
    }
}

    const str = "{}()[]";


function ValidPara(str){    
    const closeTag = {"[":']',"{":'}',"(":')'};
    const s1 = new Stack();
    
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)==closeTag[s1.getLast()]){
            s1.pop();
        }else{
            s1.push(str.charAt(i));
        }
    }
    return (s1.getSize())?false:true;
}

console.log(ValidPara(str))
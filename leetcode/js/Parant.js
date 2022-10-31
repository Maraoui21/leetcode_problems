function validator(){
const s = "(([]){})";
const closeTag = {"(":')',"{":'}',"[":']'};
let stop = s.length;
const size = s.length-1;
var isValid = Boolean(true);
let pass=s.length;
    for(var i=0;i<stop;i++){
        if(i==pass){
            continue;
        };
        let key = s.charAt(i);
            if(closeTag[key]!=s.charAt(i+1)){
                if(closeTag[key]!=s.charAt(size-i)){
                        isValid=false;
                        break;
                }else{
                    stop = size-i;
                }
            }else{
                pass = i+1;
            }
    }
    return isValid;
}
console.log(validator())
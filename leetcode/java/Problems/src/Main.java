import java.util.ArrayList;

public class Main {
    
    static int reverseNum(int x){
        boolean isNegative=false;
        ArrayList<Integer> arr = new ArrayList<Integer>();
        if(x<0)isNegative=true;

        while(x>0){
            arr.add(x%10);
            x/=10;
        }

        

        

        return 1;
    }


    public static void main(String[] args) {


    }
}
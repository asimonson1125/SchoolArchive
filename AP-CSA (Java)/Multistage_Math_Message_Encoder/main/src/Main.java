import java.util.Scanner;
import static java.lang.Integer.parseInt;
import java.util.Random;


class Main {
    public static void main(String[] args) {
        Random rand = new Random();
        boolean encode = false;
        System.out.println("Welcome to the MMME (Multistage Math Message Encoder)");
        System.out.println();
        System.out.println("enter '0' to encode and '1' to decode.  To exit the program enter '-1'.");
        Scanner input = new Scanner(System.in);
        int choice = -2;
        while (!(choice <= 2 && choice >= -1)){
            try{
                choice = input.nextInt();
            }
            catch (Exception e){
                System.out.println("-1,0, or 1 please.  Try again.");
                input.nextLine();
            }
        }
        if(choice == 0){
            encode = true;
            System.out.println("encoder activated!");
        }
        else if(choice == 1){
            System.out.println("decoder activated!");
        }
        else if(choice == -1){
            System.out.println("Goodbye.");
            System.exit(0);
        }
        else{
            encode = true;
            System.out.println("what?  How the heck did you manage to break this?  Don't do that");
            System.exit(0);
        }

        String output = "";
        String in = "";
        if(encode){
            System.out.println("Please enter what you wish to encode in the next line.");
            while(in.length() < 1){
                in = input.nextLine().toLowerCase();
            }
            encode encoder = new encode();
            int previousInt = rand.nextInt(50) + 1;
            long tester;
            output += Integer.toString(previousInt);
            output += " ";
            for(int i = 0; i < in.length(); i++){
                previousInt = encoder.encodeLetter(previousInt, i, in.substring(i,i+1));
                output += Integer.toString(previousInt);
                output += " ";
                tester = previousInt;
                if(tester * 450 > 2000000000){
                    previousInt = rand.nextInt(50) + 1;
                    output += Integer.toString(previousInt);
                    output += " ";
                }
            }
            System.out.println(output);
        }
        else{
            System.out.println("Please enter what you wish to decode in the next line.");
            while(in.length() < 1){
                in = input.nextLine();
            }
            if(!(in.substring(in.length()-1).equals(" "))){
                in += " ";
            }
            int previousSpace = -1;
            decode decoder = new decode();
            int previousNum = 100000000;
            int newNum;
            int numOfSpaces = 0;
            for(int i = 0; i < in.length(); i++){
                if(in.substring(i,i+1).equals(" ")){
                    try{
                        newNum = parseInt(in.substring(previousSpace + 1, i));
                    }
                    catch (Exception e){
                        newNum = 0;
                        System.out.println("the encoded message should only contain numbers and spaces! Shutting down due to error now.");
                        System.exit(0);
                    }
                    if(previousNum == 100000000){
                        previousNum = newNum;
                    }
                    else {
                        numOfSpaces++;
                        output += decoder.decodeNumber(previousNum, numOfSpaces, newNum);
                        previousNum = newNum;
                    }
                    previousSpace = i;
                }
            }
            System.out.println(output);
        }
        System.out.println("Finished!  Shutting down now.");
    }
}
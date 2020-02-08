//This was for runestone 5.10
public class BankAccount
{
    private String name;
    private int acctNum;
    private double balance;
    
    public BankAccount(){
        name = "anonymous";
        acctNum = -1;
        balance = 0;
    }
    public BankAccount(String initName, int initNum, double initBalance){
        name = initName;
        acctNum = initNum;
        balance = initBalance;
    }
    public void withdraw(double amount){
        if(balance < amount){
            System.out.println("Insufficient funds");
        }
        else{
            balance -= amount;
            System.out.println(amount + " withdrawn.");
            System.out.println(balance + " remaining in your account.");
            //give le moneys
        }
    }
    public void deposit(double amount){
        balance += amount;
        System.out.println(amount + " deposited.");
        System.out.println(balance + " in account.");
    }
    public void tostring(){
        System.out.println(name + ", account number " + acctNum);
        System.out.println("Balance: " + balance);
    }
    
    public static void main(String[] args){
        BankAccount b1 = new BankAccount();
        BankAccount b2 = new BankAccount("Jeffery Jimson", 1212123, 666.69);
        b1.tostring();
        System.out.println();
        System.out.println();
        b2.tostring();
        System.out.println();
        System.out.println();
        b2.withdraw(1000.2);
        System.out.println();
        System.out.println();
        b2.deposit(15.01);
        System.out.println();
        System.out.println();
        b2.withdraw(10.42);
        System.out.println();
        System.out.println();
        b2.tostring();
    }       
}


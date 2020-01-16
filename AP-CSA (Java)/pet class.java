//This was for runestone
public class TesterClass
{
   // main method for testing
   public static void main(String[] args)
   {
      // Create Pet objects and test all your methods
       Pet p1 = new Pet();
       Pet p1andahalf = new Pet("E.", 7, "unknown, possibly satanic", -69, "new breed, we named it 'richardDog'.");
       Pet p2 = new Pet("Gregory", 4, "dog creature", 69000.4, "Hefty Retriever");
       System.out.println(p2.gimmeName() + ", " + p2.gimmeType() + ", " + p2.gimmeBreed());
       System.out.println(p2.gimmeAge() + " years old and weighs a hefty " + p2.gimmeWeight() + " lbs.");
       System.out.println();
       System.out.println();
       System.out.println(p1andahalf.toString());
       System.out.println();
       System.out.println();
       System.out.println(p2.toString());
       
       p2.setName("John");
       p2.setAge(29);
       p2.setType("thing");
       p2.setWeight(420.69);
       p2.setBreed("shiba bitchu");
       System.out.println();
       System.out.println();
       System.out.println(p2.toString());

   }
 }

/**
    Pet class (complete comments)
    @author
    @since

*/
class Pet
{
   // complete class definition
    private String name, type, breed;
    private int age;
    private double weight;
    
    public Pet(){
        name  = "unnamed";
        age = -1;
        type = "unknown type";
        weight = -1;
        breed = "unknown breed";
    }
    
    public Pet(String initName, int initAge, String initType, double initWeight, String initBreed){
        name = initName;
        age = initAge;
        type = initType;
        weight = initWeight;
        breed = initBreed;
    }
    
    public String gimmeName(){
        return(name);
    }
    
    public int gimmeAge(){
        return(age);
    }
    
    public String gimmeType(){
        return(type);
    }
    
    public double gimmeWeight(){
        return(weight);
    }
    
    public String gimmeBreed(){
        return(breed);
    }
    
    public String toString(){
        //e
        return(name + ":  " + " This " + breed + " " + type + " is " + age + " years old and weighs " + weight + " lbs.");
    }
    
    public void setName(String init){
        name = init;
    }
    
    public void setAge(int init){
        age = init;
    }
    
    public void setType(String init){
        type = init;
    }
    
    public void setWeight(double init){
        weight = init;
    }
    
    public void setBreed(String init){
        breed = init;
    }
    
}

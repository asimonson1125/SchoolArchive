//This was for runestone
/** class Student
 * with 4 instance variables,
 * 3 constructors, a print method,
 * and a main method to test them.
 * (drag the triangle at the bottom of this window to enlarge the window.)
 */

public class Student {
    private String name;
    private int id;
    private String[] classes;
    private double gpa;
    
    public Student(){
        name = "unnamed";
        id = -1;
        classes = new String[] {"no known classes"};
        gpa = -1;
    }
    
    public Student(String inName, int inId, double inGpa){
        name = inName;
        id = inId;
        classes = new String[] {"no known classes", "that is all"};
        gpa = inGpa;
    }
    
    public Student(String inName, int inId){
        name = inName;
        id = inId;
        classes = new String[] {"no known classes"};
        gpa = -1;
    }
    
    public void setClasses(String[] inClass){
        classes = inClass;
    }
    
    public void printInfo(){
        System.out.println(name + ":");
        if(id != -1){
            System.out.print("id: ");
            System.out.println(id);
        }
        else{
            System.out.println("no id found");
        }
        System.out.print("GPA: ");
        System.out.println(gpa);
        System.out.println();
        System.out.println("classes:");
        for(int i = 0; i < classes.length; i++){
            System.out.println(classes[i]);
        }
    }

   public static void main(String[] args){
       Student jeff = new Student();
       Student harry = new Student("Harry Potter", 6969, 2.6);
       Student greg = new Student("Greg Heffley", 6970);
       String[] harrysclasses = {"class 1", "class 2", "class 3"};
       harry.setClasses(harrysclasses);
       jeff.printInfo();
       System.out.println();
       System.out.println();
       System.out.println();
       harry.printInfo();
       System.out.println();
       System.out.println();
       System.out.println();
       greg.printInfo();
       System.out.println();
       System.out.println();
       System.out.println();
   }
}

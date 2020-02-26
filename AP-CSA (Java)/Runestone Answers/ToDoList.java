//for runestone 7.2
import java.util.*;

public class ToDoList
{
   public static void main(String[] args)
   {
      // Rewrite this code to use an ArrayList instead of an array
      ArrayList<String> toDoList = new ArrayList<String>();
      toDoList.add("Do homework");
      toDoList.add("Help make dinner");
      toDoList.add("Call grandma");

      // changing element 1
      toDoList.set(1,"Order pizza");

      System.out.println(toDoList.size() + " things to do!");
      System.out.println("Here's the first thing to do: "
           + toDoList.get(0) );

      // remove item 0 and move everything down
      //  (this can be done in 1 command with ArrayList)
      toDoList.set(0,toDoList.get(1));
      toDoList.set(1,toDoList.get(2));
      toDoList.set(2,"");

      System.out.println("Here's the next thing to do: "
           + toDoList.get(0) );

      // Why is an ArrayList better than an array for a toDoList?
      // Answer: an arrayList can change its sinze after it is made, making it easier to use.
   }
}


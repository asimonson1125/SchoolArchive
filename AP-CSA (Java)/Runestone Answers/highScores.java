//for runestone 6.1

public class Test1
{
   public static void main(String[] args)
   {
     // declare, create, initialize arrays
     int[ ] highScores = {99,98,98,88,68,9001};
     String[ ] names = {"Jamal", "Emily", "Destiny", "Mateo", "Sofia", "Andrew"};

     // Print corresponding names and scores
     System.out.println(names[0] + " has a score of " + highScores[0]);
     System.out.println(names[1] + " has a score of " + highScores[1]);
       System.out.println(names[2] + " has a score of " + highScores[2]);
       System.out.println(names[3] + " has a score of " + highScores[3]);
       highScores[4] = 97;
       System.out.println(names[4] + " has a score of " + highScores[4]);
       System.out.println(names[5] + " has a score of " + highScores[5]);
   }
}


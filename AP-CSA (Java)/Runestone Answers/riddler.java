//This was for runestone
public class Riddle
{
   // 2 instance variables: private type variableName;
    private String question;
    private String answer;

   // constructor
   public Riddle(String initQuestion, String initAnswer)
   {
      // set the instance variables to the init parameter variables
       question = initQuestion;
       answer = initAnswer;

   }

   // Print riddle question
   public void printQuestion()
   {
     // print out the riddle question with System.out.println
       System.out.println(question);

   }

   // Print riddle answer
   public void printAnswer()
   {
     // print out the riddle answer with System.out.println
       System.out.println(answer);

   }

   // main method for testing
   public static void main(String[] args)
   {
      // call the constructor to create 3 new Riddle objects
       Riddle riddleMe = new Riddle("If you aim to give us a shot, we'll riddle you.  What are we?","bullets! *he shoots you*");
       Riddle blackandred = new Riddle("What's black and white, but also red all over?","a newspaper");
       Riddle killKings = new Riddle("I kill kings and slowly destroy entire mountains.  I am inevitable, but also not thanos.  what am I?","time");

      // call their printQuestion() and printAnswer methods
       riddleMe.printQuestion();
       riddleMe.printAnswer();
       System.out.println();
       blackandred.printQuestion();
       blackandred.printAnswer();
       System.out.println();
       killKings.printQuestion();
       killKings.printAnswer();

   }
}


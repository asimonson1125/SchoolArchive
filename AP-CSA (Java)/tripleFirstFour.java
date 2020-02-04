//for runestone 6.2 


public class ArrayWorker
{
   private int[ ] values;

   public ArrayWorker(int[] theValues)
   {
      values = theValues;
   }

   /** Doubles the first 5 elements of the array */
   public void doubleFirstFive()
   {
     // Notice: && i < 5
     for (int i = 0; i < values.length && i < 5; i++)
     {
       values[i] = values[i] * 2;
     }
   }
   public void tripleFirstFour(){
       for(int i = 0; i< values.length && i <4; i++){
           values[i] = values[i]*3;
       }
   }

   public void printArray()
   {
     for (int i = 0; i < values.length; i++)
      {
        System.out.println(  values[i] );
      }
   }

   public static void main(String[] args)
   {
     int[] numArray = {3, 8, -3, 2, 20, 5, 33, 1};
     ArrayWorker worker = new ArrayWorker(numArray);
     worker.tripleFirstFour();
     worker.printArray();
   }
}


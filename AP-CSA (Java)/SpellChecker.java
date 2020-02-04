//for runestone 6.2

public class SpellChecker
{
   private String[] dictionary = {"the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","cat","dog","cats","dogs"};

   /* 1. Write a print10() method that prints out the first
    * 10 words of the dictionary array.
    */
    public void print10(){
        for(int i = 0; i<10; i++){
            System.out.println(dictionary[i]);
        }
    }
        
   /* 2. Write a spellcheck() method that takes a word as a
    * parameter and returns true if it is in the dictionary array.
    * Return false if it is not found.
    */
        public boolean spellcheck(String word){
            for(int i = 0; i < dictionary.length; i++){
                if(word == dictionary[i]){
                    return true;
                }
            }
            return false;
        }

   public static void main(String[] args)
   {
     SpellChecker checker = new SpellChecker();
     checker.print10();

     String word = "catz";
     if (checker.spellcheck(word) == true)
     {
         System.out.println(word + " is spelled correctly!");
     }
     else
     {
         System.out.println(word + " is misspelled!");
     }

     // 3. optional:
     // checker.printStartsWith("ab");
   }
}


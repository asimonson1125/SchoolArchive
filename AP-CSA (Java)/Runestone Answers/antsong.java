//this was for runestone
public class Song
{
  // Create method(s) with parameters to print out verses
  // of the song The Ants Go Marching.
  public static void repeat(String num){
      System.out.println("The ants go marching "+num+" by "+num+", hurrah, hurrah");
      System.out.println("The ants go marching "+num+" by "+num+", hurrah, hurrah");
      System.out.println("The ants go marching "+num+" by "+num+",");
  }
    
  public static void ender(){
      System.out.println("And they all go marching down to the ground");
      System.out.println();
  }

  public static void main(String args[])
  {
    // Create a Song object and call its method to print out
    // the verses of The Ants Go Marching
      Song.repeat("one");
      System.out.println("The little one stops to suck his thumb");
      Song.ender();
      
      Song.repeat("two");
      System.out.println("The little one stops to tie his shoe");
      Song.ender();
      
      Song.repeat("three");
      System.out.println("The little one stops to climb a tree");
      Song.ender();
      
  }
}

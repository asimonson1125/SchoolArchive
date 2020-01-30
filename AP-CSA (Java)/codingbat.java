//warmup-1
public boolean sleepIn(boolean weekday, boolean vacation) {
  if(!weekday) {return(true);}
  if(vacation) {return(true); } 
  else {return(false); } 
}


public boolean sleepIn(boolean weekday, boolean vacation)  { 
  if(!weekday) {return(true); } 
  if(vacation) {return(true); } 
  else {return(false); } 
 } 
 
 
public int sumDouble(int a, int b)  { 
  if(a==b) {return(a*4); } 
  else {return(a+b); } 
 } 
 
 
 
public int diff21(int n)  { 
  if(n>21) {return(Math.abs(21-n)*2); } 
  else {return(Math.abs(21-n)); } 
 } 
 
 
 
public boolean parrotTrouble(boolean talking, int hour)  { 
  if(talking==true && (hour>20 || hour<7)) { 
    return(true); 
   } 
  else {return(false); } 
 } 
 
 
 
public boolean makes10(int a, int b)  { 
  if(a+b==10 || a == 10 || b == 10) { 
    return(true); 
   } 
  return(false); 
 } 
 
 
 
 
public boolean nearHundred(int n)  { 
  if(Math.abs(n-100)<=10||Math.abs(n-200)<=10) {return(true); }else {return(false); } 
 } 
 
 
 
 
public boolean posNeg(int a, int b, boolean negative)  { 
  if((a<0 && b<0 && negative == true) || (negative == false && a>0 && b<0) || (negative == false && a<0 && b>0)) {return(true); }else {return(false); } 
 } 
 
 
 
 
public String notString(String str)  { 
  if(str.length()<3) {return("not "+str); } 
  if(str.substring(0,3).equals("not")) {return(str); }else {return("not "+str); } 
 } 
 
 
 
 
public String missingChar(String str, int n)  { 
  return(str.substring(0,n)+str.substring(n+1)); 
 } 
 
 
 
 
public String frontBack(String str)  { 
  if(str.length()>1) { 
    return(str.substring(str.length()-1) + str.substring(1,str.length()-1) + str.substring(0,1)); 
   } 
  else { 
    return(str); 
   } 
 } 
 
 
 
 
public String front3(String str)  { 
  if(str.length()<4) { 
    return(str+str+str); 
   } 
  else { 
    return(str.substring(0,3) + str.substring(0,3) + str.substring(0,3)); 
   } 
 } 
 
 
 
 
 
public String backAround(String str)  { 
  return(str.substring(str.length()-1) + str + str.substring(str.length()-1)); 
 } 
 
 
 
 
public boolean or35(int n)  { 
  if(n%3==0||n%5==0) { 
    return(true); 
   } 
  else { 
    return(false); 
   } 
 } 
 
 
 
//String-1 
public String helloName(String name)  { 
  return("Hello " + name + "!"); 
 } 
 
 
 
public String makeAbba(String a, String b)  { 
  return(a+b+b+a); 
 } 
 
 
public String makeTags(String tag, String word)  { 
  return("<"+tag+">"+word+" "+tag+">"); 
 } 
 
 
public String makeOutWord(String out, String word)  { 
  return(out.substring(0,2)+word+out.substring(2)); 
 } 
 
 
 
public String extraEnd(String str)  { 
  int lenny  =str.length() - 2; 
  return(str.substring(lenny)+str.substring(lenny)+str.substring(lenny)); 
 } 
 
 
 
 
public String firstTwo(String str)  { 
  boolean char2 = 1 < str.length(); 
  if (char2) {return(str.substring(0,2)); } 
  return(str); 
 } 
 
 
 
 
public String firstHalf(String str)  { 
  int halflen = str.length()/2; 
  return(str.substring(0,halflen)); 
 } 
 
 
 
 
public String withoutEnd(String str)  { 
  int lelen = str.length(); 
  return(str.substring(1,lelen-1)); 
 } 
 
 
 
public String comboString(String a, String b)  { 
  boolean bigboi = a.length()>b.length(); 
  if (bigboi) {return(b+a+b); } 
  else {return(a+b+a); } 
 } 
 
 
 
 
public String nonStart(String a, String b)  { 
  return(a.substring(1)+b.substring(1)); 
 } 
 
 
 
public String left2(String str)  { 
  return(str.substring(2)+str.substring(0,2)); 
 } 
 
 
 
public String right2(String str)  { 
  int lelen = str.length()-2; 
  return(str.substring(lelen)+str.substring(0,lelen)); 
 } 
 
 
 
 
public String theEnd(String str, boolean front)  { 
  if(front) {return(str.substring(0,1)); } 
  else {return(str.substring(str.length()-1)); } 
 } 
 
 
 
 
 
public String withouEnd2(String str)  { 
  if(str.length()<=2) {return(""); } 
  else {return(str.substring(1,str.length()-1)); } 
 } 
 
 
 
 
public String middleTwo(String str)  { 
  int middle = str.length()/2; 
  return(str.substring(middle-1,middle+1)); 
 } 
 
 
 
 
public boolean endsLy(String str)  { 
  if(str.length() < 2) {return(false); } 
  else if(str.substring(str.length()-2).toLowerCase().equals("ly")) {return(true); } 
  else {return(false); } 
 } 
 
 
 
 
public String nTwice(String str, int n)  { 
  return(str.substring(0,n)+str.substring(str.length()-n)); 
 } 
 
 
 
 
public String twoChar(String str, int index)  { 
  if(index+2 > str.length() || index<0) { 
    return(str.substring(0,2)); 
   } 
  else { 
    return(str.substring(index,index+2)); 
   } 
 } 
 
 
 
public String middleThree(String str)  { 
  return(str.substring((str.length()/2-1),(str.length()/2+2))); 
 } 
 
 
 
 
public boolean hasBad(String str)  { 
  if((str.length()>=3 && str.substring(0,3).equals("bad")) || (str.length()>=4 && str.substring(1,4).equals("bad"))) { 
    return(true); 
   } 
  else { 
    return(false); 
   } 
 } 
 
 
 
 
public String atFirst(String str)  { 
  if(str.length()<2) { 
    if(str.length()<1) { 
      return("@@"); 
     } 
    else { 
      return(str + "@"); 
     } 
   } 
  else { 
   return(str.substring(0,2));  
   } 
 } 
 
 
 
 
public String lastChars(String a, String b)  { 
  String anew; 
  String bnew; 
  if(a.length()==0) {anew="@"; } 
  else {anew=a.substring(0,1); } 
  if(b.length()==0) {bnew="@"; } 
  else {bnew=b.substring(b.length()-1); } 
  return(anew+bnew); 
 } 
 
 
 
public String conCat(String a, String b)  { 
  if(b.equals("")) { 
    return(a); 
   } 
  if(a.equals("")) { 
    return(b); 
   } 
  if(b.substring(0,1).equals(a.substring(a.length()-1))) { 
    return(a+b.substring(1)); 
   } 
  else { 
    return(a+b); 
   } 
 } 
 
 
 
 
public String lastTwo(String str)  { 
  String returner = ""; 
  if(str.length()>=2) { 
    returner = (str.substring(0,str.length()-2) + str.substring(str.length()-1) + str.substring(str.length()-2,str.length()-1)); 
   } 
  else { 
    return(str); 
   } 
  return(returner); 
 } 
 
 
 
 
public String seeColor(String str)  { 
  if(str.length()>=3 && str.substring(0,3).equals("red")) { 
    return("red"); 
   } 
  if(str.length()>=4 && str.substring(0,4).equals("blue")) { 
    return("blue"); 
   } 
  else { 
    return(""); 
   } 
 } 
 
 
 
 
public boolean frontAgain(String str)  { 
  if(str.length()>=2 && str.substring(0,2).equals(str.substring(str.length()-2))) { 
    return(true); 
   } 
  else { 
    return(false); 
   } 
 } 
 
 
 
 
public String minCat(String a, String b)  { 
  int lenny = Math.min(a.length(),b.length()); 
  return(a.substring(a.length()-lenny)+b.substring(b.length()-lenny)); 
 } 
 
 
 
 
 
public String extraFront(String str)  { 
  if(str.length()<=2) { 
    if(str.length()<1) { 
      return(""); 
     } 
    return(str+str+str); 
   } 
  return(str.substring(0,2)+str.substring(0,2)+str.substring(0,2)); 
 } 
 
 
 
 
public String without2(String str)  { 
  if(str.length()<=2) { 
    if(str.length()==2) { 
      return(""); 
     } 
    else { 
      return(str); 
     } 
   } 
  else { 
    if(str.substring(0,2).equals(str.substring(str.length()-2))) { 
      return(str.substring(2)); 
     } 
    else { 
      return(str); 
     } 
   } 
 } 
 
 
 
 
 
public String deFront(String str)  {     
  String newstr = str; 
  if(!str.substring(1,2).equals("b")) { 
    newstr = newstr.substring(0,1)+newstr.substring(2); 
   } 
  if(!str.substring(0,1).equals("a")) { 
    newstr = newstr.substring(1); 
   } 
  return(newstr); 
 } 
 
 
 
 
public String startWord(String str, String word)  { 
  if(str.length()<1) {return(""); } 
  if(str.length()<word.length()) {return(""); } 
  if(str.substring(1,word.length()).equals(word.substring(1))) { 
    return(str.substring(0,word.length())); 
   } 
  else { 
    return(""); 
   } 
 } 
 
 
 
 
public String withoutX(String str)  { 
  String newstr = str; 
  if(str.length() > 0 && str.substring(0,1).equals("x")) {newstr = newstr.substring(1); } 
  if(newstr.length() > 0 && str.substring(str.length()-1).equals("x")) {newstr = newstr.substring(0,newstr.length()-1); } 
  return(newstr); 
 } 
 
 
 
 
public String withoutX2(String str)  { 
  String newstr = str; 
    if(newstr.length() > 1 && str.substring(1,2).equals("x")) { 
    newstr = newstr.substring(0,1)+newstr.substring(2); 
     
   } 
  if(str.length() > 0 && str.substring(0,1).equals("x")) { 
    newstr = newstr.substring(1); 
     
   } 
   
  return(newstr); 
 } 
 
 
 
//logic-1 
 
public boolean cigarParty(int cigars, boolean isWeekend)  { 
  if(cigars >= 40) { 
    if(cigars <= 60 || isWeekend) { 
      return(true); 
     } 
   } 
  return(false); 
 } 
 
 
 
public int dateFashion(int you, int date)  { 
  if(you <= 2 || date <= 2) { 
    return 0; 
   } 
  if(you >= 8 || date >= 8) { 
    return 2; 
   } 
  return 1; 
 } 
 
 
 
public boolean squirrelPlay(int temp, boolean isSummer)  { 
  if(temp >= 60) { 
    if(temp <= 90 || temp <= 100 && isSummer) { 
      return true; 
     } 
   } 
  return false; 
 } 
 
 
 
//logic-2 
public boolean makeBricks(int small, int big, int goal)  { 
  if(big*5 >= goal) { 
    if(small >= (goal % 5)) { 
      return true; 
     } 
   } 
  else if(small >= goal - (big*5)) { 
    return true; 
   } 
  return false; 
 } 
 
 
 
public int loneSum(int a, int b, int c)  { 
  if(a == b && a == c) { 
    return 0; 
   } 
  if(a == b) { 
    return c; 
   } 
  if(a == c) { 
    return b; 
   } 
  if(b == c) { 
    return a; 
   } 
  return a+b+c; 
 } 
 
 
public int luckySum(int a, int b, int c)  { 
  if(a == 13) { 
    return 0; 
   } 
  else if(b == 13) { 
    return a; 
   } 
  else if (c == 13) { 
    return a+b; 
   } 
  else { 
    return a + b + c; 
   } 
 } 
 
 
 
//string-2 
public String doubleChar(String str)  { 
  String result = ""; 
  for(int i = 0; i < str.length(); i++) { 
    result += str.substring(i,i+1); 
    result += str.substring(i,i+1); 
   } 
  return result; 
 } 
 
 
 
public int countHi(String str)  { 
  int num = 0; 
  for(int i = 0; i < str.length()-1; i++) { 
    if(str.substring(i,i+2).equals("hi")) { 
      num++; 
     } 
   } 
  return num; 
 } 
 
 
 
 
public boolean catDog(String str)  { 
  int cat = 0; 
  int dog = 0; 
  for(int i = 0; i < str.length()-2; i++) { 
    if(str.substring(i,i+3).equals("cat")) { 
      cat++; 
     } 
    else if (str.substring(i,i+3).equals("dog")) { 
      dog++; 
     } 
   } 
  return dog == cat; 
 } 
}

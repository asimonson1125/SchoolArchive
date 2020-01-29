#warmup 1

def sleep_in(weekday, vacation):
  if (weekday == False or vacation == True):
    return True;
  else:
    return False;

  
def monkey_trouble(a_smile, b_smile):
  if (a_smile == b_smile):
    return True
  else:
    return False

  
def sum_double(a, b):
  if a == b:
    return (a+b)*2
  else:
    return a+b

  
def diff21(n):
  if n > 21:
    return 2*(n-21);
  else:
    return (21-n);

  
def parrot_trouble(talking, hour):
  if (talking == True and (hour < 7 or hour > 20)):
    return True
  else:
    return False

  
def makes10(a, b):
  if (a+b == 10) or a == 10 or b == 10:
    return True
  else:
    return False

  
def near_hundred(n):
  if (abs(100-n) <= 10) or (abs(200-n) <= 10):
    return True
  else:
    return False

  
def pos_neg(a, b, negative):
  if negative == True :
    if (abs(a) != a) and (abs(b) != b):
      return True
    else:
      return False
  elif (abs(a) != a):
    if (abs(b) == b):
      return True
    else:
      return False
  elif (abs(b) !=b):
    return True
  else:
    return False

  
def not_string(str):
  if len(str) >= 3 and str[:3] == "not":
    return str
  return "not " + str


def missing_char(str, n):
  front = str[:n]   # up to but not including n
  back = str[n+1:]
  return front + back


def front_back(str):
  if len(str) <= 1:
    return str
  leng = len(str)
  return str[-1] + str[1:-1] + str[0]


def front3(str):
  if len(str) <= 2:
    return str * 3
  else:
    return str[:3] * 3

  
#warmup 2

def string_times(str, n):
  return str*n


def front_times(str, n):
  if len(str) <= 2:
    return str*n
  else:
    return str[:3]*n

  
def string_bits(str):
  res = ""
  for numchar in range(len(str)):
    if numchar % 2 == 0:
      res = res + str[numchar]
  return res


def string_splosion(str):
  res = ""
  for charnum in range(len(str)+1):
    res = res + str[:charnum]
  return res

def last2(str):
  last2 = str[len(str)-2:]
  count = 0
  if len(str) < 2:
    return 0
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      count = count + 1
  return count

def array_count9(nums):
  res = 0
  for numcount in range(len(nums)):
    if nums[numcount] == 9:
      res = res +1
  return res


def array_front9(nums):
  res = False
  if len(nums) <= 4:
    for length in range(len(nums)):
      if nums[length] == 9:
        res = True
  else:
    for length in range(4):
      if nums[length] == 9:
        res = True
  return res


def array123(nums):
  for i in range(len(nums)-2):
    if nums[i] == 1 and nums [i+1]==2 and nums[i+2]==3:
      return True
  return False


def string_match(a, b):
  shorter = min(len(a), len(b))
  res = 0
  for i in range(shorter - 1):
    if (a[i] == b[i] and a[i+1] == b[i+1]):
      res = res+1
  return res


#string 1

def hello_name(name):
  return "Hello " + name + "!"

def make_abba(a, b):
  return a+b+b+a

def make_tags(tag, word):
  return "<"+tag+">"+word+"</"+tag+">"

def make_out_word(out, word):
  return out[:2] + word + out[2:]

def extra_end(str):
  new = str[-2] + str[-1]
  return new*3

def first_two(str):
  return str[:2]

def first_half(str):
  return str[:len(str)/2]

def without_end(str):
  return str[1:-1]

def combo_string(a, b):
  if (len(a) > len(b)):
    return b+a+b
  else:
    return a+b+a

def non_start(a, b):
  return a[1:] + b[1:]

def left2(str):
  return str[2:] +str[:2]

#string 2

def double_char(str):
  egg = str[0:0]
  for char in str:
    egg += char*2
  return egg

def count_hi(str):
  egg = 0
  for charnum in range(len(str)-1):
    if (str[charnum] == "h" and str[charnum+1] == "i"):
      egg+=1
  return egg

def cat_dog(str):
  catcount = 0
  dogcount = 0
  for charnum in (range(len(str)-2)):
    if (str[charnum] == "c" and str[charnum+1] == "a" and str[charnum+2] == "t"):
      catcount+=1
    elif ((str[charnum] == "d") and (str[charnum+1] == "o") and (str[charnum+2] == "g")):
      dogcount +=1
  if catcount == dogcount:
    return True
  else:
    return False

def count_code(str):
  egg = 0
  for charnum in range(len(str)-3):
    if str[charnum] == "c" and str[charnum+1] == "o" and str[charnum+3] == "e":
      egg+=1
  return egg


def end_other(a, b):
  alow = a.lower()
  blow = b.lower()
  if alow.endswith(blow) or blow.endswith(alow):
    return True
  else:
    return False

def xyz_there(str):
  if str[:3] == "xyz":
    return True
  for charnum in range(len(str)-3):
    if str[charnum] != "." and str[charnum+1:charnum+4] == "xyz":
      return True
  return False


#list 1

def first_last6(nums):
  egg = len(nums)
  if (nums[0] == 6 or nums[egg-1] == 6):
    return True
  else:
    return False

def same_first_last(nums):
  egg = len(nums)
  if (egg >=1):
    if (nums[0] == nums[egg-1]):
      return True
  return False

def make_pi():
  return [3,1,4]

def common_end(a, b):
  egga = len(a)
  eggb = len(b)
  if egga > 0 and eggb > 0:
    if (a[0] == b[0] or a[egga -1] == b[eggb-1]):
      return True
  return False

def sum3(nums):
  return nums[0] + nums[1] + nums[2]

def rotate_left3(nums):
  return [nums[1],nums[2],nums[0]]

def reverse3(nums):
  return [nums[2],nums[1],nums[0]]

def max_end3(nums):
  if nums[0]-nums[2] >= 0:
    return [nums[0]]*3
  else:
    return [nums[2]]*3

def sum2(nums):
  if len(nums) == 1:
    return nums[0]
  if len(nums) >= 2:
    return nums[0] + nums[1]
  return 0

def middle_way(a, b):
  return [a[1],b[1]]

def make_ends(nums):
  return [nums[0],nums[-1]]

def has23(nums):
  if nums[0] == 2 or nums[0] == 3 or nums[1] == 2 or nums[1] == 3:
    return True
  else:
    return False

#list 2
def count_evens(nums):
  egg = 0
  for num in nums:
    if num % 2 == 0:
      egg += 1
  return egg

def big_diff(nums):
  maxcur = -1*float("inf")
  mincur = float("inf")
  for num in nums:
    maxcur = max(num,maxcur)
    mincur = min(num,mincur)
  return maxcur - mincur

def centered_average(nums):
  maxcur = -1*float("inf")
  mincur = float("inf")
  egg = 0
  for num in nums:
    maxcur = max(num,maxcur)
    mincur = min(num,mincur)
    egg += num
  return (egg-maxcur-mincur)//(len(nums)-2)

def sum13(nums):
  egg = 0
  punish = 0
  for numnum in nums:
    if numnum == 13:
      punish = 2
    if punish >0:
      punish -= 1
    else:
      egg += numnum
  return egg

def sum67(nums):
  egg = 0
  sixon = False
  for num in nums:
    if num == 6 or sixon == True:
      sixon = True
    else:
      egg += num
    if num == 7:
      sixon = False
  return egg

def has22(nums):
  yes = False
  for num in nums:
    if yes == True and num == 2:
      return True
    yes = False
    if num == 2:
      yes = True
  return False

#logic 1
def cigar_party(cigars, is_weekend):
  if is_weekend == True:
    if cigars >= 40:
      return True;
    else:
      return False;
  elif cigars <= 60 and cigars >= 40:
    return True;
  else:
    return False;

def date_fashion(you, date):
  if (you <= 2 or date <= 2):
    return 0;
  elif (you >= 8 or date >=8):
    return 2;
  else:
    return 1;

def squirrel_play(temp, is_summer):
  if (temp >= 60 and (temp <= 90 or (is_summer == True and temp<= 100))):
    return True;
  else:
    return False;

def caught_speeding(speed, is_birthday):
  if is_birthday == True:
    speed = speed - 5
  if speed > 80:
    return 2;
  elif speed > 60:
    return 1;
  else:
    return 0;
  
def sorta_sum(a, b):
  sum = a+b
  if sum >= 10 and sum <=20:
    return 20;
  else:
    return sum;

def alarm_clock(day, vacation):
  if (vacation == False):
    if (day == 0 or day == 6):
      return "10:00";
    else:
      return "7:00";
  else:
    if (day == 0 or day == 6):
      return "off";
    else:
      return "10:00";
 
def love6(a, b):
  if ((a == 6 or b == 6) or (a+b == 6 or a-b==6 or b-a==6)):
    return True;
  else:
    return False;

def in1to10(n, outside_mode):
  if outside_mode == True:
    if n <=1 or n >=10:
      return True;
    else:
      return False;
  else:
    if n<=10 and n>=1:
      return True;
    else:
      return False;

def near_ten(num):
  check = num % 10
  if (check <= 2 or check >= 8):
    return True;
  else:
    return False;

#logic 2

def make_bricks(small, big, goal):
  variable = goal
  while (variable >=5 and big > 0):
    variable = variable -5
    big = big - 1
  if (abs(variable) != variable):
    variable = abs(abs(variable)-5) % 5
  if (variable <= small):
    return True
  else:
    return False

  #following lines belong with lone_sum
countA = None
countB = None
countC = None
def lone_sum(a, b, c):
  countA = a
  countB = b
  countC = c
  if (a == b or a == c):
    countA = 0;
  if (b == a or b == c):
    countB = 0;
  if (c == a or c == b):
    countC = 0;
  return countA + countB + countC

def lucky_sum(a, b, c):
  if a == 13:
    return 0
  elif b == 13:
    return a
  elif c == 13:
    return a + b
  else:
    return a+b+c

  #____
 def fix_teen(n):
  if n <= 19 and n >= 13:
    if n <15 or n > 16:
      return 0
  return n


def no_teen_sum(a, b, c):
  return fix_teen(a) + fix_teen(b) + fix_teen(c)
 #____
  
def round_sum(a, b, c):
  def round10(num):
    if num % 10 < 5:
      return num - (num % 10)
    else:
      return num + (10 - num%10)
  return round10(a) + round10(b) + round10(c)

def close_far(a, b, c):
  egg = 0
  if (abs(a-b) <= 1):
    egg = egg+1
  
  if (abs(a-c) <= 1):
    egg = egg+1
  
  if (abs(b-c) <=1):
    egg = egg+1
  if egg == 1:
    return True;
  else:
    return False;
  
def make_chocolate(small, big, goal):
  variable = goal
  while (variable >=5 and big > 0):
    variable = variable -5
    big = big - 1
  if (abs(variable) != variable):
    variable = abs(abs(variable)-5) % 5
  if (variable <= small):
    return variable
  else:
    return -1

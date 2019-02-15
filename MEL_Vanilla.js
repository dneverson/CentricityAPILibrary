/*=========================================================================
* NOTE: This is MEL Code, not Javascript 
* @author Derry Everson
*
* Work:
** https://www.catalystmedicalgroup.com
** deverson@valleymedicalcenter.com
* Personal:
** https://www.arachnidserver.com
** dneverson@lcmail.lcsc.edu
*
* Sources for this can be found at:
** https://github.com/dneverson/CentricityAPILibrary
* Date: 02/14/2019
*
* TODO: Find Nth prime function
*========================================================================*/

/**************************************************************************
* MEL Constants for functions
**************************************************************************/
{!
  constant PI = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067
  constant EULER = 2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274
}


/*=========================================================================
* Finds Absolute value of a Number
* Example: |-1| = 1, |1| = 1
* Tested: true
*========================================================================*/
{!	fn ABS(num){
  if num < 0 then
  return num * -1
  else
  return num
  endif
}}

/*=========================================================================
* Calculates OR Finds the Aproximate Square Root of a Number.
* Best Case O(N) Worst Case O(Accuracy).
* Only use if nessasary, taxing with the limitations of this language
* Example: SQRT(9) = 3
* Tested: true
*========================================================================*/
{!	fn SQRT(num){
  local low = 0
  local high = num
  local mid = 0
  local accuracy = 1000
  for i = 0, i < accuracy, i = i + 1 do
  mid = ((low + high)/2)
  if (mid * mid == num) then
  return mid
  endif
  if (mid * mid > num) then
  high = mid
  else
  low = mid
  endif
  endfor
  return mid
}}

/*=========================================================================
* Calculates the Factorial of a Number.
* Example: FACTORIAL(5) = 5! = 120
* Tested: true
*========================================================================*/
{! fn FACTORIAL(num){
  local result = 1
  for i = 2, i <= num, i = i + 1 do
  result = result * i
  endfor
  return result
}}

/*=========================================================================
* Calculates a Number to the power of X, Number**X, Number^X.
* MEL does have Number^X built it, This is just an Alt.
* Example: POW(2,2) = 2^2 || 2**2 = 4
* Tested: true
*========================================================================*/
{! fn POW(num, x){
  local result = 1
  for i = 0, i < x, i = i + 1 do
  result = result * num
  endfor
  return result
}}

/*=========================================================================
* Determines if Number is a Prime number or not
* Example: ISPRIME(9), Returns true or false
* Tested: true
*========================================================================*/
{! fn ISPRIME(num){
  local modulo = mod(num,2)
  local modulo2 = 0
  if num > 2 AND modulo == 0 then
  return false
  endif
  local top = SQRT(num) + 1
  for i = 3, i < top, i = i + 1 do
  modulo2 = mod(num, i)
  if modulo2 == 0 then
  return false
  endif
  endfor
  return true
}}

/*=========================================================================
* Gets current time as an Int
* Dosn't have seconds or nano seconds. Limitations of MEL...
* Example: TIME(), 10242018916, MON|DAY|YEAR|HOUR|MIN.
* Tested: true
*========================================================================*/
{! fn TIME(){
  local string = "" + val(DATETIMESTAMP()) + ""
  local parsed = ""
  for i = 1, i < size(string), i = i + 1 do
  if string[i] == "/" OR string[i] == " " OR string[i] == "-" OR string[i] == ":" OR string[i] == "P" OR string[i] == "A" OR string[i] == "M" then
  else
  parsed = parsed + string[i]
  endif
  endfor
  return parsed
}}

/*=========================================================================
* Gets Random number between X - X.
* Only random every minute becuase lack of seconds and nano seconds
* Example: RANDRANGE(10,2) = 3
* Tested: true
*========================================================================*/
{! fn RANDRANGE(high, low){
  local a = 25214903917
  local c = 11
  local r = 0
  local previous = TIME()
  for i = 0, i < 2, i = i + 1 do
  r = a * previous + c
  previous = r
  endfor
  previous = mod(previous, high) + low
  return previous
}}

/*=========================================================================
* Gets Random number between 1 - 100
* Only random every minute becuase lack of seconds and nano seconds
* Example: RAND() = 67
* Tested: true
*========================================================================*/
{! fn RAND(){
  local a = 25214903917
  local c = 11
  local r = 0
  local previous = TIME()
  for i = 0, i < 2, i = i + 1 do
  r = a * previous + c
  previous = r
  endfor
  previous = mod(previous, 100) + 1
  return previous
}}

/*=========================================================================
* Finds the Aproximation of Sine.
* Output is in deg NOT Radians, rounded to the nearest Millionth.
* Tested: true
*========================================================================*/
{! fn SIN(num){
  local sine = 1.0
  if num < 0 then
  sine = -1.0
  num = -num
  endif
  if num > 360 then
  num = num - (num/360)*360
  endif
  num = num * PI/180.0
  local res = 0
  local term = num
  local k = 1
  while res+term <> res do
  res = res + term
  k = k + 2
  term = term * ((-num) * num / k / (k - 1))
  endwhile
  return sine * res
}}

/*=========================================================================
* Finds the Aproximation of Cosine.
* Output is in deg NOT Radians, rounded to the nearest Millionth.
* Tested: true
*========================================================================*/
{! fn COS(num){
  if num < 0 then
  num = -num
  endif
  if num > 360 then
  num = num - (num/360)*360
  endif
  num = num * PI/180.0
  local res = 0
  local term = 1
  local k = 0
  while res+term <> res do
  res = res + term
  k = k + 2
  term = term * ((-num) * num / k / (k - 1))
  endwhile
  return res
}}

/*=========================================================================
* Finds the Aproximation of Tangent.
* Output is in deg NOT Radians, rounded to the nearest Millionth.
* Tested: true
*========================================================================*/
{! fn TAN(num){
  local result = SIN(num)/COS(num)
  return result
}}

/*=========================================================================
* Changes Degrees to Radians
* Tested: true
*========================================================================*/
{! fn TO_RADIANS(num){
  return num * PI / 180.0
}}

/*=========================================================================
* Changes Radians to Degrees
* Example:
* Tested: true
*========================================================================*/
{! fn TO_DEGREES(num){
  return num * 180.0 / PI
}}

/*=========================================================================
* Exponential Function
* Tested: true
*========================================================================*/
{! fn EXP(num){
  result = POW(EULER, num)
  return result
}}

/*=========================================================================
* Finds the Aproximation of Natural Log.
* Higher the accuracy the better the result.
* Limitations of integers in this language cannot go past 150
* Tested: true
*========================================================================*/
{! fn LN(num){
  local result = 0.0
  local accuracy = 150
  for i = 1, i <= accuracy, i = i + 1 do
  result = result + POW((num - 1.0),i)/(i * POW(num,i))
  endfor
  return result
}}

/*=========================================================================
* Finds the Aproximation of LOG base X
* Depending on both numbers the calculation could take a while.
* If you can use LOG10 or LOG2
* Tested: true
*========================================================================*/
{! fn LOG(num, base){
  if base == 10 then
  return LOG10(num)
  endif
  if base == 2 then
  return LOG2(num)
  else
  local result = LN(num)/LN(base)
  return result
  endif
}}

/*=========================================================================
* Finds the Aproximation of LOG base 10
* To reduce computation LN(10) is a const int.
* Tested: true
*========================================================================*/
{! fn LOG10(num){
  local result = LN(num)/2.302585
  return result
}}

/*=========================================================================
* Finds the Aproximation of LOG base 2
* To reduce computation LN(2) is a const int.
* Tested: true
*========================================================================*/
{! fn LOG2(num){
  local result = LN(num)/0.693147
  return result
}}

/*=========================================================================
* Finds the Nth Prime number, using the Sieve algorithm
* https://www.codesdope.com/blog/article/prime-numbers-using-sieve-algorithm-in-c/
* Example: NTH_PRIME(5) returns 11
* Tested: true
*========================================================================*/
{! fn NTH_PRIME(num){

}}

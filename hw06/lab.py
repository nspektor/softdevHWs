#Write a function that uses list comprehension to return whether a password
#meets a minimum threshold: it contains a mixture of upper- and lowercase
#letters, and at least one number.
UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
NUMBERS="0123456789"
CHARS=".!@#$%^&*()_?"

def passAccept( password ):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMBERS else
         0 for x in password]
    return 1 in l and 2 in l and 3 in l   
 

#Write a function that uses list comprehension to return a password's
#strength rating. This function should return a low integer for a weak
#password and a higher integer for a stronger password. (scale: 1-10)
#Consider these criteria:
#* mixture of upper- and lower-case
#* inclusion of numerals
#* inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *

def strength( password):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMBERS else
         4 if x in CHARS else
         0 for x in password]

    uc = len(p) - l.count(1)
    lc = len(p) -l.count(2)
    nums = len(p) - l.count(3)
    chars = len(p) -l.count(4)

    return uc + lc + nums + chars

    
     

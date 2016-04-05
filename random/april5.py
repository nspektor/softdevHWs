def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc
print f(5) 

flist = [inc,dec]

print flist[1](5) 


def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)

print add3(10)

def make_counter():
    # private instance data, haas to be a list due to weird python stuff
    count =[0]

    #public methods, not closure cause it doent reference outside variables
    def inc():
        count[0]=count[0]+1
    def dec():
        count[0]=count[0]-1
    def reset():
        count[0] = 0
    def get():
        return count[0]
    return count

c1 = make_counter()
c2 = make_counter()


print "counter stuff"

#c1['inc']()
#c1['inc']()
#c1['inc']()
#print c1['get']()

#c2['inc']()
#print c2['get']()

#c2['reset']()
#print c1['get']()


import random
def get_name():
    names=['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

def dble(f):
    #not a closure
    name = f()
    return name+name

print dble(get_name)

#########################################################################

import random

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler
def get_name():
    names=['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name

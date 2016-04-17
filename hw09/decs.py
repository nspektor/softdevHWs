import time
def timing(fn):
    def inner(*args):
        start = time.time()
        result = fn(*args)
        end = time.time()
        print "run time: "+str((end-start)*1000.0)
        return result
    return inner

def args(fn):
    def inner(*args):
        print "args: ", args
        return fn(*args)
    return inner

def name(fn):
    def inner(*args):
        print(fn.func_name)
        return fn(*args)
    return inner

@name
@timing
@args
def quicksort(l):
    if (len(l) <= 1):
        return l
    pivot = l[-1]
    upper =  quicksort([x for x in l[:-1] if x >= pivot])
    lower = quicksort([x for x in l[:-1] if x < pivot])
    return lower + [pivot] + upper

testList = ([3,2,6,76,12,-9, 9,0])
print "unsorted testList:", testList
print "sorting testList: \n", quicksort(testList)


'''
#first example
def foo( n, m ,s):
    return s + str(n + m)

def wrapper( f ):
   def inner( *arg ):
       return f( *arg )
   return inner
closure = wrapper(foo)

print closure( -2, 3, 'hello' )

#fib example. sorta
def fib(n):
    if n<2:
        return n
    return fib(n-1) + fib(n-2)

def wrapper2( f ):
    def inner( *arg ):
        print f.func_name, ": ", arg
        return f( *arg )
    return inner
closure2 = wrapper2(fib)

print closure2(5)


#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML
'''

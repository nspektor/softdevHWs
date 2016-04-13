''' AIM: "Memorization"[:4] + "Memorization"[5:] '''

def fib(n):
    if n<2:
        return n
    return fib(n-1) + fib(n-2)


print fib(10)

###############################################################################
'''
 Dynamic programming (dynamic optimization) means solving a complex problem 
 by solving its component subproblems just once and storing their solutions

 MEMOIZATION
    Technique of storing solutions to subproblems to avoid recomputation
    or
    use of caches to retrieve previously computed values to reduce time
    complexity of algorithms
       cache - quickly accesible memory
'''
###############################################################################
'''
TASK: fib with memoization
'''
def memoize(f):
    memo={} #hashmap/dict for O(1) lookup
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib(n):
    if n<2:
        return n
    return fib(n-1) + fib(n-2)

#fib = memoize(fib) #turn memoize into a decorator

print fib(0)
print fib(1)
print fib(2)
print fib(40)
print fib(5)


def changeWays( denoms, sum):
    '''denoms is a tuple
    sums iis a sum

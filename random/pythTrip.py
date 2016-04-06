def pythTrip1(n):
    retL = []
    for a in range(1,n):
        for b in range(a+1,n):
            for c in range(b+1,n):
                if a*a + b*b == c*c:
                    retL.append([a,b,c])
    return retL

print "pythTrip1:"
print pythTrip1(6)

#tuple = immutable list
def pythTrip2(n):
    return [(a,b,c)
            for a in range(1,n)
            for b in range(a+1,n)
            for c in range(b+1,n)
            if a*a + b*b == c*c]

print "pythTrip2, list comprehension:"
print pythTrip2(6)
            

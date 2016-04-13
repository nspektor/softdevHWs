def repeat(phrase):
    return lambda count: phrase * count

r1 = repeat('hi')
r2 = repeat('bye')

print "r1(2) : ", r1(2)
print "r2(3) : ", r2(3)
print "repeat('adios ')(4) : ", repeat('adios ')(4)

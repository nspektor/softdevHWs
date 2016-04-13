def quicksort(l):
    if (len(l) <= 1):
        return l
    pivot = l[-1]
    upper =  quicksort([x for x in l[:-1] if x >= pivot])
    lower = quicksort([x for x in l[:-1] if x < pivot])
    return lower + [pivot] + upper

def union(l1, l2):
    return quicksort(l1 + [x for x in l2 if x not in l1])
print "should be [1, 2, 3, 4, 7, 9]", union([1, 4, 7], [2, 3, 9])

def intersection(l1, l2):
    return quicksort([x for x in l1 if x in l2])
print "should be [2, 3] : ", intersection([1, 2, 3], [2, 3, 4])

def setDiff(l1, l2):
    return quicksort([x for x in l1 if x not in l2])
print "should be [1] : ", setDiff([1, 2, 3], [2, 3, 4])

def symDiff(l1, l2):
    return quicksort([x for x in l1 if x not in l2] + [x for x in l2 if x not in l1])
print "should be [[1, 4] : ", symDiff([1, 2, 3,], [2, 3, 4])

def cartProd(l1, l2):
    return [(x, y) for x in l1 for y in l2]
print " should be [(1, fish), (1, cat), (2, fish), (2, cat)] :\n ", cartProd([1, 2], ['fish', 'cat'])

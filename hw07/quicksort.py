def quicksort(l):
    '''
    1) Pick a pivot
    2) Partition into 2 lists, such that
        * All values < pivot are Lower Half
        * All values > pivot are Upper Half
        * Pivot in final resting position 
    3) quick sort lower half and upper half
        * qsort(LH) + p + qsort(UH)
    can be done in 5 lines or less with list comprehension
    '''
    if (len(l) <= 1):
        return l
    pivot = l[-1]
    upper =  quicksort([x for x in l[:-1] if x >= pivot])
    lower = quicksort([x for x in l[:-1] if x < pivot])
    return lower + [pivot] + upper


print quicksort([1, 5, 3, 2, 4, 0])

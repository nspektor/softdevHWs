def quicksort():
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
    

import random
import time
lst = [random.randint(1,1000) for i in range(100)]


def quick_sort(lst):
    quick_rec(lst, 0, len(lst)-1)


def quick_rec(lst, l, r):
    if l >= r:return
    i = l
    j = r
    pivot = lst[i]
    while i < j:
        while i < j and lst[j] > pivot:
            j -= 1
        if i < j:
            lst[i] = lst[j]
            i += 1
        while i < j and lst[i] < pivot:
            i += 1
        if i < j:
            lst[j] = lst[i]
            j -= 1
    lst[i] = pivot
    quick_rec(lst, l, i-1)
    quick_rec(lst, i+1, r)


quick_sort(lst)


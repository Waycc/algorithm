import random
lst = [random.randint(1,1000) for i in range(100)]

for i in range(len(lst)):
    k = i
    for j in range(i+1,len(lst)):
        if lst[k] > lst[j]:
            k = j
    if k != i:
        lst[i], lst[k] = lst[k], lst[i]




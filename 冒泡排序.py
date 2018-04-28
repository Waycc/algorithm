import random
lst = [random.randint(1,1000) for i in range(100)]

for i in range(len(lst)):
    for j in range(len(lst)-1-i):
        if lst[j] > lst[j+1]:
            lst[j], lst[j+1] = lst[j+1], lst[j]

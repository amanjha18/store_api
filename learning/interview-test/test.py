integers_value = [1,8,0,3,9,2]
for i in range(0, len(integers_value)):
    for j in range(i+1, len(integers_value)):
        if integers_value[i]>integers_value[j]:
            integers_value[i], integers_value[j]=integers_value[j] , integers_value[i]

print(integers_value)
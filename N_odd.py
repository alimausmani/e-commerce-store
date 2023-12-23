n=int(input())
i=1
c=0
while True:
    if i%2!=0:
        c+=1
        print(i,end=" ")
        if c==7:
            break;
    i+=1 
    

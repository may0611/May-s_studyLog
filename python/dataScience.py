
def makeDict(K, V):
    return dict(zip(K, V)) 

K = ('Korean', 'Mathematics', 'English')
V = (90.3, 85.5, 92.7)

D = makeDict(K, V)

print("Dictionary:", D)

# Check if it's correct
for key in K:
    print(f"{key}: {D[key]} (Expected: {V[K.index(key)]})")

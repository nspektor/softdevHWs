import random

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler #decorator
def get_name():
    names=['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name

'''
@doubler
def get_name()
is equivilant ro
get_name = double(get_name)

TAKEAWAY: can write functions that trasnform functions

a python decorator is merely shorthand for calling a wrapper-type
fnction like doubler

a python decorator encapsulates a closure

a decorator allows to transparently wrap functionality
'''

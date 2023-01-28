This repo is to learn design patterns. I found better source of knowledge, and here I will make simple expamples ilustrating how I understand them

## Visitor

* Separating a data structure from the algorithm that implements logic operating on this data structure,
* May change data structure,
* The data structure related class shuld have an *accept(Visitor)* method that does *Visitor(visit(this))* and *this* in the case is the context of self,
* Visitor has multiple methods implemented, each for each type of data structure like class that it operates on. Depending on visited object type it select the proper method 
to run. In Java it may be done with overloading mechanism (many functions named the same way are possible, as long as they have different descriptors: they take different set of args, and in this case type of taken *this* differs)

* Example is as simple as I could think of, not to lose too much of understanding in problem complexity,

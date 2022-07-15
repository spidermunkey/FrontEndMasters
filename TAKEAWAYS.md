##7/15/22

I can save resources/memory/speed in my current project where
when a new tab is clicked the model returns a new array every time and builds a dom object from it.

Where instead I can use memoization to cach the results in the function call
of each DOM object that must be built.
So instead of using a document fragment that is garbage collected with every use
I can build strings and cache them by way of closures;
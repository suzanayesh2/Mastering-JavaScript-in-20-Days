# Day2: Static typing And Scope
## Static typing
### Lessons Summary:
 - The `Benefits` and drawbacks of using tools like TypeScript and Flow for type checking.
    1. Catch type-related mistakes
    2. Communicate type intent
    3. Provide IDE feedback
 - Caveats:
    1. Inferencing is best-guess, not a guarantee
    2. Annotations are optional
    3. Any part of the application that isn't typed introduces uncertainty
  
 - Benefits of static typing:
   1. They make types more obvious in code .
   2. Familirtiy : they look like other languages type systems.
   3. Extremely popular these days .
   4. They are very sophisticated and good at what they do.

 - JavaScript has a (dynamic) type system, which uses verious forms of coercion for value type conversion, including equality comparisons
 ##### Addtion from ChatGPT:
- Flow : is a static type checker developed by Facebook. It also introduces optional static typing to JavaScript, but unlike TypeScript, it requires explicit annotations using special comments (e.g., // @flow) to enable type checking on a per-file basis.
- TypeScript : is a superset of JavaScript developed by Microsoft. It adds optional static typing to JavaScript, allowing developers to define types for variables, function parameters, return values, and more.

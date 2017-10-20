## Getting Started with TypeScript

> The book will deal with the basics of TypeScript require to deal with frameworks like Angular. Once you learn these basics,
  you can switch to Angular and can start writing your first Angular Component. So, let's dive in:

  #### **Static Typing**
  Those who all are writing Javascript will agree that the freedom it gives in declaring and passing variables sometimes led to common
  bugs. Unlike other languages, Javascript does not provide us the capability to check `types` at `compile time`. 
  
  This problem can be solved by using Typescript.
  Let's take an example of declaring a variable in JS 
  
 **main.js**
  
`var x = "4";
  x = 3  
` 

  This is valid in JS, as here the type of `x` is not clear. While writing it in Typescript is like defining the types of these 
  variables.
  
  **main.ts**
 
  ` var x: number;
    x = 3;` 
  is vaild while ` var x: number;
    x = "3";` is invalid.

 We can also declare `functions` like this in typescript:
 ` function main(x: string) {


   }` 
    

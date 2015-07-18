// <reference path="../classical.d.ts" />
// <reference path="../classical.html.d.ts" />

module Classical.Tutorial.Introduction {

    import Assert = Classical.Assert;
    import Expression = Classical.Expression;
    import u = Utilities;
    import r = Classical.Reflection;
    import e = Classical.Events;
    import b = Classical.Binding;
    import cc = Classical.Collections;
    import bc = Classical.Binding.Collections;
    var section = () => console.log(" ");

    section(); /* 
     In this tutorial, we'll cover the basics of Classical.js and how to get started using 
     it. Follow along in the browser while we show you how to write basic Classical. When 
     necessary, we'll use the console for demonstration. Therefore, the easiest way to 
     follow along is with breakpoints on each example.
    */

    class Response {
        get first() { return "Get it?" }
        get second() { return "Got it!" }
        get third() { return "Good" }
    }

    var response = new Response();
    response
        .getType()
        .getProperties()
        .where(property => property.declaringType === typeOf(Response))
        .orderBy(property => property.name)
        .forEach(property => console.log(property.getValue(response)));

    section(); /* 
     So what is Classical.js and how does it affect your life?
     
     Classical is a base class library for TypeScript. TypeScript is version of JavaScript 
     that includes a type system and a compiler to verify the correctness of code. These
     are much beloved and incredibly efficient tools for some developers. Others find them
     unnecessary bulky and overly complicated. Classical is designed for developers of the 
     first type, who can appreciate the benefits of TypeScript.
     
     Languages with design-time type systems are referred to as languages that are statically 
     typed. They require the programmer to specify quite a bit of information of the type of 
     data he or she is expecting at any point in the codebase. In return, the compiler and 
     the developer tools built for TypeScript can have a much deeper understanding of your 
     code. They can tell you when a property or method exists, if a variable is assigned 
     the wrong type, rename identifiers, scaffold interfaces and method overloads and much
     more.
     
     TypeScript takes the dynamic and functional aspects of JavaScript and combines them 
     with the static and object-oriented aspects of languages like Java and C#. The result 
     is a powerful combination. Classical is meant to provide a set of base tools for 
     building complex JavaScript frameworks by leveraging the power of the all of the 
     programming paradigms contained within the language. We love all aspects of 
     TypeScript. It is fair to say that some library components contain deeply dynamic 
     code exposed for use in a clean, statically-typed shell. Others represent more 
     traditional object-oriented techniques. Others still are novel designs that are 
     completely our own.
     
     TypeScript tooling is capable of telling you what methods and properties exist on an 
     object. They also provide an extremely precise means of facilitating auto-completion. 
     This is information a JavaScript developer would otherwise have to memorize and 
     JavaScript tool developers would have to approximate. As a base class library for 
     TypeScript, Classical tends to contain complex APIs. For instance, here are the 
     members that are declared on the Queryable object:
    */

    typeOf(cc.Queryable)
        .getProperties(r.Public, r.Private, r.Instance, r.Static)
        .where(p => p.declaringType === typeOf(cc.Queryable))
        .forEach(p => console.log('Queryable.' + p.name));

    section(); /* 
     Now that's no competition for the jQuery function, but the static and instance 
     members of the jQuery function represent virtually the entire jQuery API. The 
     Queryable class, on the other hand, is just one member of a larger ecosystem 
     of modules, classes, interfaces, functions and variables.
    */
    
    section(); /* 
     One of the most obvious tools missing in the JavaScript runtime is an industrial 
     grade, doubly-generic dictionary. This is ironic, as almost everything is an object 
     and JavaScript objects are essentially just dictionaries. 
     
     This is indeed true, but they have several crippling weaknesses. For starters, 
     JavaScript objects can only store strings as keys. Any other type is coerced into a 
     string when assigned as a property, potentially losing all relevant information 
     about the object in the process. Furthermore, certain properties like 'constructor' 
     can potentially collide with dictionary keys. To solve this problem, we needed to 
     implement a more traditional dictionary, built on top of a data structure called a 
     hash table. A hash table requres a notion of hashing, and that just so happens to be 
     the first feature to be implemented in Classical. 
     
     When using Classical, all objects, including the primitives, have what's known as a 
     hash code. A hash code is an integer that is used to partially identify the object or 
     value. It is not unique, and should not be used as a GUID. Hash codes must be well 
     distributed over the total object set, meaning that if two similar objects are stored
     in a dictionary, they should still have a low probability of collision. A key value 
     pair is stored in a bucket that is the modulus of the hash code of the key and a 
     prime number, which minimizes collisions. Object equality is used to find the key 
     value pair once in the bucket. This two step process is what makes dictionary lookup 
     fast.

     Notice that all objects in JavaScript have hash codes. 
    */

    function printHashCode<T extends IObject>(type: string, value: T) {
        console.log(u.format("{0} hash code for value {1}: {2}",
            type,
            value.is(Array) ?
                '[' + value + ']' :
                value.toString(),
            value.getHashCode()));
    }

    printHashCode('Boolean', true);
    printHashCode('Number', -223.148);
    printHashCode('String', 'gobbledygook');
    printHashCode('Array', [1, 2, 3]); 

    section(); /* 
     It is critical that hash codes do not change through the duration of an object's 
     lifetime. Hash codes can change for equivalent objects on subsequent script 
     executions, but notice that they will not change within a single execution of the 
     script.
    */

    function printHashCodeAgain<T extends IHashable>(type: string, value: T) {
        console.log(u.format("{0} hash code for value {1} is the same as before: {2}",
            type,
            value.is(Array) ?
                '[' + value + ']' :
                value.toString(),
            value.getHashCode()));
    }

    printHashCodeAgain('Boolean', true);
    printHashCodeAgain('Boolean', true);
    printHashCodeAgain('Boolean', true);
    printHashCodeAgain('Boolean', true);

    printHashCodeAgain('Number', -223.148);
    printHashCodeAgain('Number', -223.148);
    printHashCodeAgain('Number', -223.148);
    printHashCodeAgain('Number', -223.148);

    printHashCodeAgain('String', 'gobbledygook');
    printHashCodeAgain('String', 'gobbledygook');
    printHashCodeAgain('String', 'gobbledygook');
    printHashCodeAgain('String', 'gobbledygook');

    printHashCodeAgain('Array', [1, 2, 3]);
    printHashCodeAgain('Array', [1, 2, 3]);
    printHashCodeAgain('Array', [1, 2, 3]);
    printHashCodeAgain('Array', [1, 2, 3]);

    section(); /* 
     This allows us to use any object as a dictionary key. The dictionary below, called 
     constructor map, uses types as keys and functions as values. 
    */

    var constructorMap = new cc.Dictionary<r.Type, Function>()
        .add(typeOf(Boolean), Boolean)
        .add(typeOf(Number), Number)
        .add(typeOf(String), String)
        .add(typeOf(Array), Array);

    //For display only
    constructorMap.query()
        .orderBy(pair => pair.key.name)
        .skip(1).take(3).concat(
        constructorMap.query()
        .orderBy(pair => pair.key.name)
        .take(1))
        .forEach(pair => {
            var type = pair.key,
                typeName = type.name,
                ctor = pair.value,
                space = cc.Enumerable
                    .range(1, 8 - typeName.length).query()
                    .select(n => ' ')
                    .aggregate((a, b) => a + b),
                ctorView = ctor.toString()
                    .replace('[native code]',
                        u.format('/* {0}s are created here */',
                            typeName));
            console.log(u.format('{0} Type {1} =>  {2}',
                typeName, space, ctorView));
        });

    section(); /* 
     The code above should demonstrate that there's more to Classical that just 
     dictionaries and hash codes, but we will do a deep dive into those features 
     in future tutorials.

     For now, please enjoy our humble toolset. If you have any questions, complaints, 
     feature requests (or compliments - we love compliments) feel free to reach out 
     to me:

        email: doug.rubino@gmail.com
        twitter: @dougrubino

     Finally, credit should be given where credit is due. While I imagined and 
     designed Classical.js, it could not exist if not for the hard work, dedication 
     and ninja-like coding skills of a software engineer named Chris Klimas. 
     Classical served as his introduction to JavaScript, making his contribution all 
     the more impressive. In fact, he is the primary engineer of Classical.Reflection,
     the Classical module that reqires the most finessed understanding of the 
     JavaScript language. Despite his initial lack of familiarity, his metaprogramming 
     skills coupled with his willingness to dive deep into the complexities of the many 
     JavaScript environments is a huge part of why Classical is and will continue to 
     be great.

     Thanks Chris. 

     And thank you for giving Classical.js a try! 
     It might save you a few keystrokes, but more than that, we hope that it makes the 
     remaining ones more fun. It certainly does for us.


     Best,
     Doug Rubino
    */
}
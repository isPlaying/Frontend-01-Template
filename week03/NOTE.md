### Expressions
#### Member
- a.b
- a[b]
- foo``` `string` ``` 
    ~~~javascript
    const w = 'world';
    function foo() {
        console.log(arguments); // [Arguments] { '0': [ 'Hello ', '' ], '1': 'world' }
    }
    foo`Hello ${w}`;
    ~~~
- super.a
    ~~~javascript
    class Parent {
        constructor() {}
        eat() {
            return 'eat';
        }
    }

    class Child extends Parent {
        constructor() {
            super();
            console.log(super.eat());
        }
    }

    new Child(); // eat
    ~~~
- super['b']
- new.target 
    ~~~javascript
    function Foo() {
        console.log(new.target); // new.target 只能在函数里面使用
    }

    Foo(); // undefined

    new Foo(); // [Function: Foo]
    ~~~

    **TIPS:** 由此可见，new.target可用来判断是否被new调用

#### UpdateExpression 

[no Lineterminator] ```++```

~~~javascript
let a = 1;
let b = 2;
let c = 3;

a
++
b
++
c

console.log(a, b, c); // 1 3 4
~~~

**TIPS:** 此处a ++ ，a与```++```中间不能换行，否则语法不成立
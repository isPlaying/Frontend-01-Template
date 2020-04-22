### 语言按语法分类

- 非形式语言
  - 中文，英文
- 形式语言（[乔姆斯基谱系](https://zh.wikipedia.org/wiki/%E4%B9%94%E5%A7%86%E6%96%AF%E5%9F%BA%E8%B0%B1%E7%B3%BB)）
  - 0型文法 递归可枚举语言
  - 1型文法 上下文相关文法
  - 2型文法 上下文无关文法
  - 3型文法 正则文法

### BNF范式

[巴科斯范式](https://zh.wikipedia.org/wiki/%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8F) 是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

BNF 规定是推导规则(产生式)的集合，写为：

~~~
<符号> ::= <使用符号的表达式>
~~~

这里的 <符号> 是非终结符，而表达式由一个符号序列，或用指示选择的竖杠 '|' 分隔的多个符号序列构成，每个符号序列整体都是左端的符号的一种可能的替代。从未在左端出现的符号叫做终结符。


```*``` 表示可重复多次  
```|``` 表示或  
```+``` 表示至少一次  

#### [Multiplicative Operators](http://www.ecma-international.org/ecma-262/5.1/#sec-11.5)

**Syntax**

~~~
MultiplicativeExpression :
    UnaryExpression
    MultiplicativeExpression * UnaryExpression
    MultiplicativeExpression / UnaryExpression
    MultiplicativeExpression % UnaryExpression
~~~

#### [Additive Operators](http://www.ecma-international.org/ecma-262/5.1/#sec-11.6)

**Syntax**

~~~
AdditiveExpression :
    MultiplicativeExpression
    AdditiveExpression + MultiplicativeExpression
    AdditiveExpression - MultiplicativeExpression
~~~

#### [Binary Logical Operators](http://www.ecma-international.org/ecma-262/5.1/#sec-11.11)

**Syntax**

~~~
LogicalANDExpression :
    BitwiseORExpression
    LogicalANDExpression && BitwiseORExpression
LogicalANDExpressionNoIn :
    BitwiseORExpressionNoIn
    LogicalANDExpressionNoIn && BitwiseORExpressionNoIn
LogicalORExpression :
    LogicalANDExpression
    LogicalORExpression || LogicalANDExpression
LogicalORExpressionNoIn :
    LogicalANDExpressionNoIn
    LogicalORExpressionNoIn || LogicalANDExpressionNoIn
~~~


#### [Punctuators](http://www.ecma-international.org/ecma-262/5.1/#sec-7.7)

**Syntax**

~~~
Punctuator :: one of
{	}	(	)	[	]
.	;	,	<	>	<=
>=	==	!=	===	!==	
+	-	*	%	++	--
<<	>>	>>>	&	|	^
!	~	&&	||	?	:
=	+=	-=	*=	%=	<<=
>>=	>>>=	&=	|=	^=	
DivPunctuator :: one of
/	/=		
~~~		


[ECMAScript® 2019 Language Specification](http://www.ecma-international.org/ecma-262/)

Exercise

~~~
<Number> ::= "0" | "1" | ...... | "9"

<DecimalNumber> ::= "0" | (("1" | "2" | ...... | "9") <Number>* )

<AdditiveExpression> ::= <DecimalNumber> | 
    <AdditiveExpression> "+" <DecimalNumber>

<MultiplicativeExpression> ::= <MultiplicativeExpression> |
    <MultiplicativeExpression> "*" <DecimalNumber>

<LogicalExpression> ::= <AdditiveExpression> |
    <LogicalExpression> "||" <AdditiveExpression> | 
    <LogicalExpression> "&&" <AdditiveExpression>
~~~

### 图灵完备性

- 图灵完备性
  - 命令式——图灵机
    - goto
    - if和while
  - 声明式——lambda
    - 递归

### 动态与静态
- 动态：
  - 在用户的设备/在线服务器上
  - 产品实际运行时
  - Runtime
- 静态：
  - 在程序员的设备上
  - 产品开发时
  - Compiletime
  
### 类型系统
- 动态类型系统与静态类型系统
- 强类型与弱类型
  - String + Number
  - String == Boolean
- 复合类型
  - 结构体
  - [函数签名](https://developer.mozilla.org/zh-CN/docs/Glossary/Signature/Function)
- 子类型
  - 逆变/协变

[通俗的方式理解动态类型，静态类型；强类型，弱类型](https://segmentfault.com/a/1190000012372372)

[协变与逆变](https://zh.wikipedia.org/wiki/%E5%8D%8F%E5%8F%98%E4%B8%8E%E9%80%86%E5%8F%98)

### 一般命令式编程语言

- Atom 
  - Identifier
  - Literal
- Expression
  - Atom
  - Operator
  - Punctuator
- Statement
  - Expression
  - Keyword
  - Punctutor
- Structure
  - Function
  - Class
  - Process
  - Namespace
  - ……
- Program
  - Program
  - Module
  - Package
  - Library


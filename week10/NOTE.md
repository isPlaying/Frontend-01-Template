#### Range Api

- ```Range.setStart()``` 方法用于设置 Range 的开始位置。
- ```Range.setEnd()``` 方法用于设置 Range 的结束位置。
- ```Range.setStartBefore()``` 方法相对另一个 Node 来设置一个 Range 的开始位置. Range 的开始节点的父节点，和 referenceNode 的父节点是同一个.
- ```Range.setEndBefore()``` 方法相对另一个 Node 来设置一个 Range 的结束位置。Range 的开始节点的父节点，和 referenceNode 的父节点是同一个.
- ```Range.setStartAfter()``` 方法相对另一个 Node 来设置一个 Range 的开始位置
- ```Range.setEndAfter()``` 方法相对另一个 Node 来设置一个 Range 的结束位置。
- ```Range.selectNode()``` 方法将 Range 设置为包含整个 Node 及其内容。Range 的起始和结束节点的父节点与 referenceNode 的父节点相同。
- ```Range.selectNodeContents()``` 方法用于设置 Range，使其包含一个 Node 的内容。
- ```Range.extractContents()``` 方法移动了Range 中的内容从文档树到DocumentFragment（文档片段对象）。
- ```Range.insertNode()``` 是在Range的起始位置插入节点的方法。新节点是插入在 the Range起始位置。如果将新节点添加到一个文本 节点, 则该节点在插入点处被拆分，插入发生在两个文本节点之间。如果新节点是一个文档片段，则插入文档片段的子节点。
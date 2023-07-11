## 堆与栈
Go 会在 2 个地方为变量分配内存，
一个是全局的堆（Heap），
另一个是每个 Goroutine 的栈（Stack）。  
如果分配在栈中，函数执行结束时自动回收。
而如果分配在堆中，则在函数结束后某个时间点进行垃圾回收，通过Go的垃圾回收机制（Garbage Collector）进行回收。  
所以在栈上分配内存，开销是非常低的，
而在堆上分配内存，主要是依靠垃圾回收机制去回收，Go 语言使用的是标记清除算法，这里就不多讲了，感兴趣的可以自行查阅。

## 逃逸分析
在 Go 语言中，堆内存是通过垃圾回收机制自动管理的，无需开发者指定。
那么，Go 编译器怎么知道某个变量需要分配在栈上，还是堆上呢？编译器决定内存分配位置的方式，就称之为逃逸分析(Escape analysis)。
逃逸分析由编译器完成，作用于编译阶段。   

## 指针逃逸
指针逃逸应该是最容易理解的一种情况了，即在函数中创建了一个对象，返回了这个对象的指针。
这种情况下，函数虽然退出了，但是因为指针的存在，对象的内存不能随着函数结束而回收，因此只能分配在堆上。

接下来我们举个例子

```go
package main

import "fmt"

func getName() *string {
	name := "mika"
	return &name
}

func main() {
	name := getName()
	fmt.Println(*name)
}
```

执行命令
```bash
# 注意：-gcflags是给go编译器传入参数
# 可通过 go tool compile --help 查看所有可用的参数
$ go build -gcflags '-m -l' main.go
```

得到如下输出
```bash
# command-line-arguments
main.go:6:2: moved to heap: name
main.go:12:13: ... argument does not escape
main.go:12:14: *name escapes to heap
```

可以法宣`getName`函数里面变量`name`逃逸了，这没有任何问题。  
但是为什么main函数里的`*name`也逃逸了，我们明明是传入的值，而不是指针。  
我们点进 `fmt.Println` 源码发现，它接收的是一个 `interface{}` 类型，  
下面就带大家解释 "interface{}" 动态类型逃逸。

## interface{} 动态类型逃逸
在 Go 语言中，空接口即 interface{} 可以表示任意的类型，  
如果函数参数为 interface{}，编译期间很难确定其参数的具体类型，也会发生逃逸。

举个例子
```go
package main

import "fmt"

type Demo struct {
    name string
}

func getDemo() *Demo {
    demo := new(Demo)
    demo.name = "mika"
	return demo
}

func printName(demo *Demo) {
	fmt.Println(demo.name)

}

func main() {
	demo := getDemo()
	printName(demo)
}
```

得到如下输出
```bash
# command-line-arguments
main.go:10:16: new(Demo) escapes to heap
main.go:15:16: leaking param content: demo
main.go:16:13: ... argument does not escape
main.go:16:18: demo.name escapes to heap
```

这种情况下，局部变量 demo 不会发生逃逸，但是 demo.name 仍旧会逃逸。

## 结论
指针传递可以减少值的拷贝，但是会导致内存分配逃逸到堆中，增加GC的负担。  
值传递会拷贝整个对象，不会对GC产生负担。

所以我给大家的建议是：  
在对象频繁创建和删除的场景下，使用值传递。  
对于只读的占用内存较小的结构体，使用值传递。  
需要修改原对象值，或占用内存比较大的结构体，使用指针传递。

在工作中碰到一个需求，表格可以任意合并行列，有边框而且边框需要有圆角。

看到要边框，首先想到把**border-collapse**设置为**collapse**，边框完美的实现了,但是border-radius样式并没有生效，经查阅发现如下问题：

> The border-radius property does not apply to table elements when border-collapse is collapse.

将border-collapse属性去掉后，遇到需要合并单元格的情况，边框就经常碰到重合的情况。

最后解决方案直接在table外套一层div用伪类边框盖住原来的边框，代码如下：


```html
    <div class="table-radius">
        <table>
            <thead>
                <tr>
                    <th> 班级 </th>
                    <th> 姓名 </th>
                    <th> 成绩 </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2"> 一班 </td>
                    <td> 张三 </td>
                    <td> 99 </td>
                </tr>
                <tr>
                    <td> 李四 </td>
                    <td> 99 </td>
                </tr>
                <tr>
                    <td> 二班 </td>
                    <td> 李四 </td>
                    <td> 99 </td>
                </tr>
            </tbody>
        </table>
    </div>
```

```css
    .table-radius{
        position: relative;
        border-radius: 10px;
        overflow: hidden;
    }
    .table-radius::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #000;
        border-radius: 10px;
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    table td{
        text-align: center;
    }
    table th,
    table td{
        border: 1px solid #000
    }
```

效果图：

![table-border-radius](https://cdn.jsdelivr.net/gh/jeege/pictures/table-border-radius_2020_08_15_10_59_31.jpg)



### 参考
[MDN border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)
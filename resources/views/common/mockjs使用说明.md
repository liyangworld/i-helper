mock.js 示例：[http://mockjs.com/examples.html](http://mockjs.com/examples.html)<br />github地址：[https://github.com/nuysoft/Mock/wiki](https://github.com/nuysoft/Mock/wiki)<br />​<br />
## 两种使用方式
数据模板定义与数据占位符定义<br />数据模板定义：支持正则和函数；<br />数据占位符定义：有很多方便的数据类型<br />​<br />

| 占位符 | 示例 | 说明 |
| --- | --- | --- |
| @boolean | @boolean | true、false |
| @natural( min?, max? ) | @natural(0, 10) | 自然数，取值范围为 [min, max] |
| @integer( min?, max? ) | @integer(-10, 10) | 整数（包括负数），取值范围为 [min, max] |
| @float( min?, max?, dmin?, dmax? ) | @float(1, 2, 2, 4) | 小数，整数部分范围为 [min, max]，小数位数为 [dmin, dmax] |
| @character( pool? ) | @character(lower) | 单个字符，pool 特定取值有：lower、upper、number、symbol，或任意字母池 |
| @string( pool?, min?, max? ) | @string(lower, 5, 8) | 字符串，长度为 [min, max]，pool 取值同上 |
| @range(start?, stop, step?) | @range(0, 6, 2) | 数字数组，如：[0,2,4,6] |
| ​<br /> | ​<br /> | ​<br /> |
| @date( format? ) | @date(yyyy-MM-dd) | 格式化日期，yyyy yy y MM M dd d |
| @time( format? ) | @time(HH:mm:ss) | 格式化时间，HH H hh h mm m ss s SS S A a T<br />（T 表示时间戳） |
| ​@datetime( format? ) | @datetime(yyyy-MM-dd HH:mm:ss) | 完整的格式化日期和时间 |
| @now( unit?, format? ) | @now(second, yyyy-MM-dd HH:mm:ss) | 当前时间的格式化输出，unit 取值为：year、month、week、day、hour、minute、second |
| @image( size?, background?, foreground?, format?, text? ) | @image(200x100, #f60, #000, png, 占位图片) | 生成占位图片，[http://dummyimage.com/200x100/FF6600](http://dummyimage.com/200x100/FF6600) |
| @dataImage( size?, text? ) | @dataImage(200x100, base64图片) | base64图片地址，背景色随机 |
| ​<br /> |  |  |
| @color | ​<br /> | 随机颜色，#ff6600 |
| @hex | ​<br /> | #f27d79 |
| @rgb | ​<br /> | rgb(242, 121, 223) |
| @rgba | ​<br /> | rgba(155, 121, 242, 0.83) |
| @hsl |  | hsl(204, 82, 71) |
| ​<br /> |  |  |
| @paragraph( min?, max? )<br />@cparagraph | @paragraph(1, 3) | 英文段落，段落数量范围为 [min, max]<br />中文段落 |
| @sentence( min?, max? )<br />@csentence | @sentence(1, 3) | 英文语句，语句数量范围为 [min, max]<br />中文语句 |
| @word( min?, max? )<br />@cword | @word(3, 6) | 一个英文单词，单词长度范围为 [min, max]<br />汉字 |
| @title( min?, max? )<br />@ctitle | @title(3, 6) | 一句英文标题，单词数量范围为 [min, max]<br />中文标题 |
| ​<br /> |  |  |
| @first<br />@cfirst |  | 英文名<br />中文姓 |
| @last<br />@clast |  | 英文姓<br />中文名 |
| @name( middle? )<br />@cname | @name( true ) | 完整英文名称，如：Mary Joseph Lewis<br />完整中文名 |
| ​<br /> |  |  |
| @url |  | 网址 |
| @domain |  | 域名部分 |
| @protocol |  | 协议部分 |
| @tld |  | 顶级域名，域名中 . 号后面的部分 |
| @ip |  | ip地址 |
| @email |  | 电子邮箱 |
|  |  |  |
| @region |  | 地区，如：东北、华北 |
| @province |  | 省份，如：湖北省、江苏省 |
| @city( prefix? ) | @city(true) | 城市，如：襄阳市，湖北省 襄阳市 |
| @county( prefix? ) | @county(true) | 县区，如 南漳县，湖北省 襄阳市 南漳县 |
| @zip |  | 邮编 |
|  |  |  |
| @capitalize( word ) | @capitalize(hello) | 首字母大写，如：Hello |
| @upper( str ) | @upper(hello) | 字符串转大写，如：HELLO |
| @lower( str ) | @lower(HELLO) | 字符串转小写，如：hello |
| @pick( arr ) | @pick([1, 3, 5, 7, 9]) | 随机挑选一个 |
| @shuffle( arr ) | @shuffle([1, 3, 5, 7, 9]) | 乱序排列，如：[3, 7, 1, 9, 5] |
|  |  |  |
| @guid |  | 生成一个 guid 字符串，如：6F7d6931-Cc51-d346-9010-862972b2bdb5 |
| @id |  | 生成一个 id 字符串，如：360000201102276060 |
| @increment( step? ) | @increment(1) | 数字自增 |

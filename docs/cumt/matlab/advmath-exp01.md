# MATLAB 高数实验1 - 代码和运行结果

<strong>实验时间：</strong>2023 年秋季

## 代码

不想下载 MATLAB 的同学可以使用教育邮箱登录 [MATLAB Online](https://matlab.mathworks.com) 在线使用 MATLAB.

#### 初始化

先指定 $m$ 值，以 $m=4$  为例：

```matlab
clear;
m = 4;
```

**Note:** 事先声明 $m$ 的值然后依次运行下面的代码即可，在下面的代码前添加上面的内容也是等价的。

#### 第一题

求 $ f(x) = (m + 1)x^4 + 6x^3 + 4x^2 + x + m $ 的根。

```matlab
coeffs = [m+1, 6, 4, 1, m];
ans_roots = roots(coeffs);

ans_roots
```

#### 第二题

求极限 $$ \lim_{x \to 0} \frac{(m+1)x - \sin((m+1)x)}{x^3} $$

```matlab
syms x
f = ((m+1)*x - sin((m+1)*x))/x^3;
limit_f = limit(f, x, 0);

limit_f
```

#### 第三题

已知 $ y = e^x \cos((m+1)x) $，求 $ y'' $。

```matlab
syms x y(x)
y(x) = exp(x) * cos((m+1)*x);
y_pp = diff(y, x, 2);

y_pp
```

#### 第四题

已知制作一个背包的成本为 40 元. 如果每一个背包的售出价为 $x$ 元，售出的背包数为

$$ n = \frac{m+1}{x-40} + (m+1)(80-x) $$

问什么售出价格能带来最大利益？（$ 40 \leq x \leq 80 $）

```matlab
syms x
n(x) = (m + 1)/(x - 40) + (m + 1)*(80 - x);
profit(x) = n(x) * (x - 40);
[x_opt, neg_max_profit] = fminbnd(matlabFunction(-profit(x)), 40, 80);
max_profit = -neg_max_profit;

x_opt
max_profit
```

## 运行结果举要

#### 第一题


| $\boldsymbol{m}$ | ans_roots | $\boldsymbol{m}$ | ans_roots |
|:----------------:|:---------:|:----------------:|:---------:|
| **1**            | <pre data-info="matlab" class="language-matlab">-2.1121 + 0.0000i<br>-1.0000 + 0.0000i<br> 0.0560 - 0.4833i<br> 0.0560 + 0.4833i</pre> | **6**            | <pre data-info="matlab" class="language-matlab">-0.8356 - 0.7372i<br>-0.8356 + 0.7372i<br> 0.4071 - 0.7243i<br> 0.4071 + 0.7243i</pre> |
| **2**            | <pre data-info="matlab" class="language-matlab">-1.1659 - 0.6001i<br>-1.1659 + 0.6001i<br> 0.1660 - 0.6001i<br> 0.1660 + 0.6001i</pre> | **7**            | <pre data-info="matlab" class="language-matlab">-0.8143 - 0.7357i<br>-0.8143 + 0.7357i<br> 0.4393 - 0.7304i<br> 0.4393 + 0.7304i</pre> |
| **3**            | <pre data-info="matlab" class="language-matlab">-1.0000 - 0.7071i<br>-1.0000 + 0.7071i<br> 0.2500 - 0.6614i<br> 0.2500 + 0.6614i</pre> | **8**            | <pre data-info="matlab" class="language-matlab">-0.7989 - 0.7339i<br>-0.7989 + 0.7339i<br> 0.4656 - 0.7339i<br> 0.4656 + 0.7339i</pre> |
| **4**            | <pre data-info="matlab" class="language-matlab">-0.9156 - 0.7314i<br>-0.9156 + 0.7314i<br> 0.3156 - 0.6950i<br> 0.3156 + 0.6950i</pre> | **9**            | <pre data-info="matlab" class="language-matlab">-0.7873 - 0.7320i<br>-0.7873 + 0.7320i<br> 0.4873 - 0.7358i<br> 0.4873 + 0.7358i</pre> |
| **5**            | <pre data-info="matlab" class="language-matlab">-0.8668 - 0.7370i<br>-0.8668 + 0.7370i<br> 0.3668 - 0.7137i<br> 0.3668 + 0.7137i</pre> | **10**           | <pre data-info="matlab" class="language-matlab">-0.7782 - 0.7303i<br>-0.7782 + 0.7303i<br> 0.5055 - 0.7367i<br> 0.5055 + 0.7367i</pre> |

其中：`ans_roots` 表示 $f(x)$ 的根。

#### 第二题

| $\boldsymbol{m}$ | limit_f | $\boldsymbol{m}$ | limit_f  |
|:----------------:|:-------:|:----------------:|:--------:|
| **1**            | `4/3`   | **6**            | `343/6`  |
| **2**            | `9/2`   | **7**            | `256/3`  |
| **3**            | `32/3`  | **8**            | `243/2`  |
| **4**            | `125/6` | **9**            | `500/3`  |
| **5**            | `36`    | **10**           | `1331/6` |

其中：`limit_f` 表示在 $x \to 0$ 处的极限。

#### 第三题

| $\boldsymbol{m}$ | y_pp                                           |
|:----------------:|:----------------------------------------------:|
| **1**            | <pre data-info="matlab" class="language-matlab">- 3\*cos(2\*x)\*exp(x) - 4\*sin(2\*x)\*exp(x)</pre> |
| **2**            | <pre data-info="matlab" class="language-matlab">- 8\*cos(3\*x)\*exp(x) - 6\*sin(3\*x)\*exp(x)</pre> |
| **3**            | <pre data-info="matlab" class="language-matlab">- 15\*cos(4\*x)\*exp(x) - 8\*sin(4\*x)\*exp(x)</pre> |
| **4**            | <pre data-info="matlab" class="language-matlab">- 24\*cos(5\*x)\*exp(x) - 10\*sin(5\*x)\*exp(x)</pre> |
| **5**            | <pre data-info="matlab" class="language-matlab">- 35\*cos(6\*x)\*exp(x) - 12\*sin(6\*x)\*exp(x)</pre> |
| **6**            | <pre data-info="matlab" class="language-matlab">- 48\*cos(7\*x)\*exp(x) - 14\*sin(7\*x)\*exp(x)</pre> |
| **7**            | <pre data-info="matlab" class="language-matlab">- 63\*cos(8\*x)\*exp(x) - 16\*sin(8\*x)\*exp(x)</pre> |
| **8**            | <pre data-info="matlab" class="language-matlab">- 80\*cos(9\*x)\*exp(x) - 18\*sin(9\*x)\*exp(x)</pre> |
| **9**            | <pre data-info="matlab" class="language-matlab">- 99\*cos(10\*x)\*exp(x) - 20\*sin(10\*x)\*exp(x)</pre> |
| **10**           | <pre data-info="matlab" class="language-matlab">- 120\*cos(11\*x)\*exp(x) - 22\*sin(11\*x)\*exp(x)</pre> |

其中：`y_pp` 表示 $y''$。

#### 第四题

| $\boldsymbol{m}$ | x_opt     | max_profit   |
|:----------------:|:---------:|:------------:|
| **1**            | `60.0000` | `802.0000`   |
| **2**            | `60.0000` | `1.2030e+03` |
| **3**            | `60.0000` | `1.6040e+03` |
| **4**            | `60.0000` | `2.0050e+03` |
| **5**            | `60.0000` | `2.4060e+03` |
| **6**            | `60.0000` | `2.8070e+03` |
| **7**            | `60.0000` | `3.2080e+03` |
| **8**            | `60.0000` | `3.6090e+03` |
| **9**            | `60.0000` | `4.0100e+03` |
| **10**           | `60.0000` | `4.4110e+03` |

其中：

- `x_opt` 表示带来最大利益的售出价格
- `max_profit` 表示最大利益

## 输出案例

以 $m=4$ 为例，输出如下：

#### 第一题

```matlab
ans_roots =

  -0.9156 + 0.7314i
  -0.9156 - 0.7314i
   0.3156 + 0.6950i
   0.3156 - 0.6950i
```

#### 第二题

```matlab
limit_f =

125/6
```

#### 第三题

```matlab
y_pp(x) =

- 24*cos(5*x)*exp(x) - 10*sin(5*x)*exp(x)
```

#### 第四题

```matlab
x_opt =

   60.0000


max_profit =

   2.0050e+03
```

## Credits

Published by [Cnily03](https://github.com/Cnily03) on Nov, 24th, 2023.

**Email:** [contact@cnily.me](mailto:contact@cnily.me)

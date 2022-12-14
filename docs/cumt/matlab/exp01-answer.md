# MATLAB 实验命令和运行结果

## 命令

将 `m=4` 改成你的 `m`

**第一题**

```matlab
m=4,ques1=[m 0 3 6 1 m],ans1=roots(ques1)
```

**第二题**

```matlab
m=4,syms x;ans2=limit(((m+1)*sin(m*x)+m*x^2*cos(1/x))/((1+m*cos(x))*log(1+x)),0)
```

**第三题**

```matlab
m=4,syms x;y=exp(x)*cos(m*x),ans3=diff(y,x,2)
```

**第四题**

```matlab
m=4,syms x;n=m/(x-60)+m*(80-x),y=n*(x-60),[x_max,y_neg]=fminbnd(char(-y),40,80),ans4=x_max;
```

## 运行结果

**第一题**

|`m`的值|运行结果|`m`的值|运行结果|
|:---:|:---|:---:|:---|
|1|<pre data-info="matlab">ans1 = <br>   0.6775 + 2.0228i<br>   0.6775 - 2.0228i<br>  -1.2669 + 0.0000i<br>  -0.0441 + 0.4141i<br>  -0.0441 - 0.4141i</pre>|6|<pre data-info="matlab">ans1 = <br>  -1.0622 + 0.0000i<br>   0.6644 + 0.8675i<br>   0.6644 - 0.8675i<br>  -0.1333 + 0.8779i<br>  -0.1333 - 0.8779i</pre>|
|2|<pre data-info="matlab">ans1 = <br>   0.5990 + 1.4824i<br>   0.5990 - 1.4824i<br>  -1.1617 + 0.0000i<br>  -0.0182 + 0.5800i<br>  -0.0182 - 0.5800i</pre>|7|<pre data-info="matlab">ans1 = <br>   0.6859 + 0.8250i<br>   0.6859 - 0.8250i<br>  -1.0538 + 0.0000i<br>  -0.1590 + 0.8939i<br>  -0.1590 - 0.8939i</pre>|
|3|<pre data-info="matlab">ans1 = <br>   0.5785 + 1.2074i<br>   0.5785 - 1.2074i<br>  -1.1157 + 0.0000i<br>  -0.0206 + 0.7068i<br>  -0.0206 - 0.7068i</pre>|8|<pre data-info="matlab">ans1 = <br>   0.7022 + 0.7942i<br>   0.7022 - 0.7942i<br>  -1.0475 + 0.0000i<br>  -0.1784 + 0.9043i<br>  -0.1784 - 0.9043i</pre>|
|4|<pre data-info="matlab">ans1 = <br>  -1.0900 + 0.0000i<br>   0.6004 + 1.0338i<br>   0.6004 - 1.0338i<br>  -0.0554 + 0.7993i<br>  -0.0554 - 0.7993i</pre>|9|<pre data-info="matlab">ans1 = <br>   0.7147 + 0.7707i<br>   0.7147 - 0.7707i<br>  -1.0424 + 0.0000i<br>  -0.1935 + 0.9115i<br>  -0.1935 - 0.9115i</pre>|
|5|<pre data-info="matlab">ans1 = <br>  -1.0735 + 0.0000i<br>   0.6355 + 0.9307i<br>   0.6355 - 0.9307i<br>  -0.0987 + 0.8507i<br>  -0.0987 - 0.8507i</pre>|10|<pre data-info="matlab">ans1 = <br>   0.7246 + 0.7522i<br>   0.7246 - 0.7522i<br>  -1.0384 + 0.0000i<br>  -0.2054 + 0.9168i<br>  -0.2054 - 0.9168i</pre>|

**第二题**

`ans2 = m`（换成你的 `m` 的值）

**第三题**

|`m`的值|运行结果|
|:---:|:---|
|1|`ans3 = -2*exp(x)*sin(x)`|
|2|`ans3 = - 3*cos(2*x)*exp(x) - 4*sin(2*x)*exp(x)`|
|3|`ans3 = - 8*cos(3*x)*exp(x) - 6*sin(3*x)*exp(x)`|
|4|`ans3 = - 15*cos(4*x)*exp(x) - 8*sin(4*x)*exp(x)`|
|5|`ans3 = - 24*cos(5*x)*exp(x) - 10*sin(5*x)*exp(x)`|
|6|`ans3 = - 35*cos(6*x)*exp(x) - 12*sin(6*x)*exp(x)`|
|7|`ans3 = - 48*cos(7*x)*exp(x) - 14*sin(7*x)*exp(x)`|
|8|`ans3 = - 63*cos(8*x)*exp(x) - 16*sin(8*x)*exp(x)`|
|9|`ans3 = - 80*cos(9*x)*exp(x) - 18*sin(9*x)*exp(x)`|
|10|`ans3 = - 99*cos(10*x)*exp(x) - 20*sin(10*x)*exp(x)`|

**第四题**

`ans4 = 70`

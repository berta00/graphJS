# graphJS
<h3>
An open source library to create simple graphs in javascript (in develop)
</h3>

<br><br>

<h2>Docs</h2>

<h3>
1) Implementation
</h3>

You need to copy the repo in your project directory
and add this script to the html body:

<script src="graphJS/src/graphJS.js"></script>


Your project directory shoud look like these:

Project direcotry
    ├── graphJS-repo
    │
    ├── index.html
    └── all your project things...

If it doesn't look like that you can just change
the script src path, the important is to initialize
file graphJS/src/graphJS.js of the repository
</h3>

<h3>
2.1) Add a graph
</h3>

With the "<graphJS>" html element you can add a graph
Here you have all the attribute you must use:
- height:     set the height [px, %]
- width:      set the width [px, %]
- type:       there are some type of graph you can choose
              (more info later)
- background: set the background [hex code]
- color1:     set the main color [hex code]
- color2:     set the secondary color [hex code]
- xLabel:     set the x axis label [string array]
- yLabel:     set the y axis label [string array]
- data:       set the data of the table [string array]

<h3>
2.2) Graph type and specs
</h3>

There are some type of graph:

<h3>
3) Example
</h3>

```
<graphJS
    height= "200px"
    width= "60%"
    type= "bar"
    background= "#cb40cf"
    color1= "#5f51b5"
    color2= "#73b06e"
    xLabel= "[10, 20, 30, 40, 50]"
    yLabel= "["1a", 1b, 1c, 1d, 1e]"
    data= "[35, 40, 12, 23, 48]"
></graphJS>
```

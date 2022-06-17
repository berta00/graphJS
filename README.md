# graphJS

###An open source library to create simple graphs in javascript (in develop)

<br><br>

> # Docs
>
> ### 1) Implementation
> <br>
>You need to copy the repo in your project directory                 <br>
>and add this script to the html body:                               <br>
>```
>script src="graphJS/src/graphJS.js"></script>
>```
> <br>
>Your project directory shoud look like these:                       <br>
> ```
>Project direcotry                  <br>
>    ├── graphJS-repo               <br>
>    │                              <br>
>    ├── index.html                 <br>
>    └── all your project things... <br>
> ```
>If it doesn't look like that you can just change                    <br>
>the script src path, the important is to initialize                 <br>
>file graphJS/src/graphJS.js of the repository                       <br>
> <br><br>
> ### 2.1) Add a graph
> <br>
>With the "<graphJS>" html element you can add a graph               <br>
>Here you have all the attribute you must use:                       <br>
>- height:     set the height [px, %]                                <br>
>- width:      set the width [px, %]                                 <br>
>- type:       there are some type of graph you can choose           <br>
>              (more info later)                                     <br>
>- background: set the background [hex code]                         <br>
>- color1:     set the main color [hex code]                         <br>
>- color2:     set the secondary color [hex code]                    <br>
>- xLabel:     set the x axis label [string array]                   <br>
>- yLabel:     set the y axis label [string array]                   <br>
>- data:       set the data of the table [string array]              <br>
> <br><br>
> ### 2.2) Graph type and specs
> <br>
>There are some type of graph:
> <br><br>
> ### 3) Example
>
> ```
> <graphJS
>     height= "200px"
>     width= "60%"
>     type= "bar"
>     background= "#cb40cf"
>     color1= "#5f51b5"
>     color2= "#73b06e"
>     xLabel= "[10, 20, 30, 40, 50]"
>     yLabel= "["1a", 1b, 1c, 1d, 1e]"
>     data= "[35, 40, 12, 23, 48]"
> ></graphJS>
> ```

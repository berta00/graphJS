# graphJS

### graph javascript library

<br>

#### 1) Installation

Copy the repository ad add it in to your project. Then connect your html file to "graphJS/src/graphJS.js" with <br>
```<script src="path/to/graphJS/src/graphJS.js"></script>``` (put it in the bottom of the file). <br>
You can see an example in "graphJS/test/index.html"

<br>

#### 2) Usage

After the installation you are ready to create your first graph! <br>
With ```<graph-js></graph>``` you can add a new graph, <br>
then you can setup your graph with the following attributes:
- ```data=""``` [array]: data set the data of the graph
- ```barBorderRadius=""```[n + unit]: bar border radius set the top left and top right border radius of bars
- ```barMargin=""``` [n + unit]: bar margin set the left and right margin of bars
- ```groupMargin=""``` [n + unit]: group margin set the left and right margin of a group of bars

<br>

#### 3) Example

```
<graph-js
    data="[120, [140, 100], 140, 100, 160, 220, 180]"
    barMargin="4px"
    groupMargin="8px"
    barBorderRadius="10px"
></graph-js>
```
```
<graph-js
    data="[200, [150, 130, 200], 190, 120, 160]"
></graph-js>
```

Some examples are avalable in test direcotry

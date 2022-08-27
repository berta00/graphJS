# graphJS

### A simple and usefull graph library in javascript

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
- ```graphType=""``` [string]: set the graph type (barGraph, lineGraph, cakeGraph)
- ```data=""``` [array]: data set the data of the graph
- ```barLabel=""``` [array]: bar label set the x axys label
- ```barLabelColor=""``` [hex]: bar label color set the color of x axys label
- ```barLabelFont=""``` [font]: bar label font set the font of x axys label (it need to be imported in css or html)
- ```barBorderRadius=""```[n + unit]: bar border radius set the top left and top right border radius of bars
- ```barBackground=""```[hex]: bar background set the the color of the bar
- ```barMargin=""``` [n + unit]: bar margin set the left and right margin of bars
- ```groupMargin=""``` [n + unit]: group margin set the left and right margin of a group of bars
- ```axysBackground=""``` [hex]: axys background set the background color of the axys

<br>

#### 2.1) Bar graph

You can create a bar graph setting the ```graphType=""``` attribute to ```barGraph```. <br>
The data's attribute data type must be [ ][ ]int (exaple: [100,[80,20,60],120,80,110] - int are the height of the point). <br>
Here an example of a bar graph: <br>

```
<graph-js
    graphType="barGraph"
    data="[100, 160, [75, 120, 20], 150]"
    barLabel="['Bar 1', 'Bar 2', 'Bar 3', 'Bar 4', 'Bar 5', 'Bar 6']"
    barLabelColor="#ffffff"
    barLabelFont="sans-serif"
    barBorderRadius="0px"
    barBackground="##ff0000"
    barMargin="5px"
    groupMargin="10px"
    axysBackground="#ffffff"
></graph-js>
```

<img src="https://github.com/s3rgi0s/graphJS/blob/main/img/1.png?raw=true" alt="bar graph" style="width:320px;"/>

<br>

#### 2.2) Line graph

You can create a line graph setting the ```graphType=""``` attribute to ```lineGraph```. <br>
The data's attribute data type must be ```[ ][ ]int``` or ```[]int``` (exaple: ```[[x,y],[x,y],[x,y],[x,y],[x,y],[x,y]]``` - x and y of the point). <br>
Here an example of a bar graph: <br>
```
<graph-js
    graphType="lineGraph"
    data="[[0, 10], [10, 30], [20, 20], [30, 50],[40, 70]]"
    pointBorderRadius="0px"
    pointBackground="#ff0000"
    lineHeight="2px"
    lineColor="#ffffff"
    axysBackground="#ffffff"
></graph-js>
```

<br>

#### 2.3) Cake graph

You can create a cake graph setting the ```graphType=""``` attribute to ```cakeGraph```. <br>
The data's attribute data type must be ```[ ]int``` (exaple: ```[20,5,45,10,15,5]``` - % of the section). <br>
Here an example of a cake graph: <br>
```
<graph-js
    graphType="cakeGraph"
    data="[20,5,45,10,15,5]"
    sectionColor="['#d6f0fd','#73bf8d','#b93732','#bc34b8','#ffffff','#22ca21']"
    borderWidth="2px"
    borderColor="#ffffff"
></graph-js>
```

<br>

#### 3) Example

```
<graph-js
    graphType="barGraph"
    data="[120, [140, 100], 140, 100, 160, 220, 180]"
    barLabel="['Bar 1', 'Suum', 'Bar 2', 'Bar 3', 'Bar 4', 'Bar 5', 'Bar 6', 'Bar 7']"
    barLabelColor="#dca8f4"
    barLabelFont="Roboto"
    barBorderRadius="10px"
    barBackground="#d019d3"
    barMargin="4px"
    groupMargin="8px"
    axysBackground="#2219d3"
></graph-js>
```
```
<graph-js
    data="[200, [150, 130, 200], 190, 120, 160]"
></graph-js>
```

Some examples are avalable in test direcotry

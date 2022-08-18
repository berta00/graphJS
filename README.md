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

let nGraph;
window.nGraph = 0;

let nBar;
window.nBar = 0;
let nGroup;
window.nGroup = 0;

// display the banner
console.log(`
Graph-JS v1.0 is active!
`);

// some functions
function unitRemover(measure){
    let finalData = "";
    for(let stringIndex = 0; stringIndex < measure.length; stringIndex++){
        if(isNaN(Number(measure[stringIndex])) == false || measure[stringIndex] == "-"){
            finalData += measure[stringIndex];
        } else{
            return finalData
        }
    }
}

// main class
class graphJS extends HTMLElement {
    constructor(){
        super();
        // some variables declaration
        let currentBar;
        let currentDataBar;
        let currentBarLabel;
        let barHeight;
        let currentGroup;
        let yLabelDiv;
        let currentYLabel;
        var heighestYlabel;
        var nYlabel;
        let spacingYlabel;

        // set default variable
        let graphType = "barGraph";
        let barWidth = "50px";
        let barMargin = "5px";
        let barBorderRadius = "0px";
        let barBackground = "#e5000f";
        let barLabelColor = "#ffffff"
        let barLabelFont = "sans-serif"
        let barLabel = [];
        let yLabelThreshold = 100;
        let groupMargin = "10px";
        let axysBackground = "#ffffff";
        let axysWidth = "10px";

        // get variable from html
        let data = this.getAttribute('data');

        if(this.getAttribute('graphType') != null){
            graphType = this.getAttribute('graphType');
        }
        if(this.getAttribute('barWidth') != null){
            barWidth = this.getAttribute('barWidth');
        }
        if(this.getAttribute('barMargin') != null){
            barMargin = this.getAttribute('barMargin');
        }
        if(this.getAttribute('barBorderRadius') != null){
            barBorderRadius = this.getAttribute('barBorderRadius');
        }
        if(this.getAttribute('barBackground') != null){
            barBackground = this.getAttribute('barBackground');
        }
        if(this.getAttribute('xLabelColor') != null){
            barLabelColor = this.getAttribute('xLabelColor');
        }
        if(this.getAttribute('xLabelFont') != null){
            barLabelFont = this.getAttribute('xLabelFont');
        }
        if(this.getAttribute('xLabel') != null){
            barLabel = this.getAttribute('xLabel');
        }
        if(this.getAttribute('yLabelThreshold') != null){
            yLabelThreshold = Number(this.getAttribute('yLabelThreshold'));
        }
        if(this.getAttribute('groupMargin') != null){
            groupMargin = this.getAttribute('groupMargin');
        }
        if(this.getAttribute('axysBackground') != null){
            axysBackground = this.getAttribute('axysBackground');
        }
        if(this.getAttribute('axysWidth') != null){
            axysWidth = this.getAttribute('axysWidth');
        }

        switch(graphType){
            case "barGraph":
                let heighestValue = 0;

                // create the main div
                this.textContent = "";
                this.className = "graph" + window.nGraph;
                this.style.height = "calc(100% - 15px)";
                this.style.width = "calc(100% - 15px)";
                this.style.paddingLeft = "5px";
                this.style.paddingRight = "5px";
                this.style.paddingTop = "10px";
                this.style.position = "relative";
                this.style.borderTop = "0";
                this.style.borderRight = "0";
                this.style.background = "transparent";
                this.style.display = "flex";
                this.style.flexDirection = "row";
                let graphDiv = document.querySelector(".graph" + window.nGraph);
                // create the x axis
                this.innerHTML += "<div class='yGraphAxis" + window.nGraph + "'></div>";
                let yGraphAxis = document.querySelector('.yGraphAxis' + window.nGraph);
                yGraphAxis.style.position = 'absolute';
                yGraphAxis.style.left = '-'+ axysWidth;
                yGraphAxis.style.top = '0';
                yGraphAxis.style.height = '100%';
                yGraphAxis.style.width = axysWidth;
                yGraphAxis.style.background = axysBackground;
                // create the y axis
                this.innerHTML += "<div class='xGraphAxis" + window.nGraph + "'></div>";
                let xGraphAxis = document.querySelector('.xGraphAxis' + window.nGraph);
                xGraphAxis.style.position = 'absolute';
                xGraphAxis.style.left = '-'+ axysWidth;
                xGraphAxis.style.bottom = '-'+ axysWidth;
                xGraphAxis.style.width = (this.clientWidth + Number(unitRemover(axysWidth))) + "px";
                xGraphAxis.style.height = axysWidth;
                xGraphAxis.style.background = axysBackground;

                // get heighest value in data
                for(let c = 0; c < eval(data).length; c++){
                    if(typeof eval(data)[c] === "number"){
                        if(heighestValue < eval(data)[c]){
                            heighestValue = eval(data)[c];
                        }
                    } else if(typeof eval(data)[c] === "object"){
                        for(let d = 0; d < eval(data)[c].length; d++){
                            if(heighestValue < eval(data)[c][d]){
                                heighestValue = eval(data)[c][d];
                            }
                        }
                    }
                }

                // create y label div
                this.innerHTML += "<div class='yLabelDiv" + window.nGraph + "'></div>";
                yLabelDiv = document.querySelector(".yLabelDiv" + window.nGraph);
                yLabelDiv.style.overflow = "hidden";
                yLabelDiv.style.position = "absolute";
                yLabelDiv.style.height = this.clientHeight+ "px";
                yLabelDiv.style.width = (this.clientWidth + 40) + "px";
                yLabelDiv.style.left = "-40px";
                yLabelDiv.style.top = 0;
                yLabelDiv.style.display = "flex";
                yLabelDiv.style.flexDirection = "column-reverse";
                // get y label line number
                for(let e = 0; e < heighestValue; e += 50){
                    heighestYlabel = e;
                    nYlabel ++;
                }
                // generate label spacing
                spacingYlabel = (((this.clientHeight - Number(unitRemover(this.style.paddingTop))) / heighestValue) * yLabelThreshold);
                // create y thresholds (100)
                for(let f = yLabelThreshold; f < heighestValue + yLabelThreshold; f += yLabelThreshold){
                    yLabelDiv.innerHTML += "<div class='labelDiv" + window.nGraph + "-" + f + "'></div>"
                    currentYLabel = document.querySelector(".labelDiv" + window.nGraph + "-" + f);
                    currentYLabel.style.position = "relative";
                    currentYLabel.style.background = "black";
                    currentYLabel.style.width = "calc(100% - 40px)";
                    currentYLabel.style.minHeight = "1px";
                    currentYLabel.style.height = "1px";
                    currentYLabel.style.left = "40px";
                    currentYLabel.style.marginBottom = spacingYlabel - 1 + "px";
                }

                // get info about data and create bars
                for(let a = 0; a < eval(data).length; a++){
                    // single bar
                    if(typeof eval(data)[a] === "number"){
                        // get bar label
                        let currentBarLabel = " "
                        if(eval(barLabel)[0] == null){
                            eval(barLabel).push(null);
                        }
                        if(eval(barLabel)[a] != null){
                            currentBarLabel = eval(barLabel)[a];
                        }
                        // create bar
                        this.innerHTML += "<div class='bar" + window.nBar + "'></div>";
                        currentBar = document.querySelector(".bar" + window.nBar);
                        currentBar.style.position = "relative";
                        currentBar.style.width = barWidth;
                        currentBar.style.marginLeft = barMargin;
                        currentBar.style.marginRight = barMargin;
                        currentBar.style.backgroundColor = "transparent";
                        // create data bar
                        currentBar.innerHTML = "<div class='dataBar" + window.nBar + "'></div> <div class='barLabel" + window.nBar + "'>" + currentBarLabel + "</div>"
                        currentDataBar = document.querySelector(".dataBar" + window.nBar);
                        currentDataBar.style.borderTopLeftRadius = barBorderRadius;
                        currentDataBar.style.borderTopRightRadius = barBorderRadius;
                        currentDataBar.style.position = "absolute";
                        currentDataBar.style.bottom = "0";
                        currentDataBar.style.backgroundColor = barBackground;
                        currentDataBar.style.width = "100%";
                        // create bar label
                        currentBarLabel = document.querySelector(".barLabel" + window.nBar);
                        currentBarLabel.style.color = barLabelColor;
                        currentBarLabel.style.fontFamily = barLabelFont;
                        currentBarLabel.style.position = "absolute";
                        currentBarLabel.style.bottom = "-20px";
                        currentBarLabel.style.transformOrigin = "right bottom";
                        currentBarLabel.style.transform = "rotate(-45deg)";

                        // asign height to databar
                        barHeight = (eval(data)[a] / heighestValue) * 100;
                        currentDataBar.style.height = barHeight + "%";

                        window.nBar++
                    }
                    // group of bars
                    else if(typeof eval(data)[a] === "object"){
                        // create div group
                        this.innerHTML += "<div class='group" + window.nGroup + "'></div>";
                        currentGroup = document.querySelector(".group" + window.nGroup);
                        currentGroup.style.marginLeft = groupMargin;
                        currentGroup.style.marginRight = groupMargin;
                        currentGroup.style.display = "flex";
                        currentGroup.style.flexDirection = "row";
                        for(let b = 0; b < eval(data)[a].length; b++){
                            // get bar label
                            let currentBarLabelText = " "
                            if(eval(barLabel)[0] == null){
                                eval(barLabel).push(null);
                            }
                            if(eval(barLabel)[a] != null){
                                currentBarLabelText = eval(barLabel)[a+b];
                            }
                            // create bar
                            currentGroup.innerHTML += "<div class='bar" + window.nBar + "'></div>";
                            currentBar = document.querySelector(".bar" + window.nBar);
                            currentBar.style.position = "relative";
                            currentBar.style.width = barWidth;
                            currentBar.style.marginLeft = barMargin;
                            currentBar.style.marginRight = barMargin;
                            currentBar.style.backgroundColor = "transparent";
                            // create data bar
                            currentBar.innerHTML += "<div class='dataBar" + window.nBar + "'></div> <div class='barLabel" + window.nBar + "'>" + currentBarLabelText + "</div>";
                            currentDataBar = document.querySelector(".dataBar" + window.nBar);
                            currentDataBar.style.borderTopLeftRadius = barBorderRadius;
                            currentDataBar.style.borderTopRightRadius = barBorderRadius;
                            currentDataBar.style.position = "absolute";
                            currentDataBar.style.bottom = "0";
                            currentDataBar.style.backgroundColor = barBackground;
                            currentDataBar.style.width = "100%";
                            // style bar label
                            currentBarLabel = document.querySelector(".barLabel" + window.nBar);
                            currentBarLabel.style.color = barLabelColor;
                            currentBarLabel.style.fontFamily = barLabelFont;
                            currentBarLabel.style.position = "absolute";
                            currentBarLabel.style.bottom = "-20px";
                            currentBarLabel.style.transformOrigin = "right bottom";
                            currentBarLabel.style.transform = "rotate(-45deg)";

                            // asign height and y label
                            barHeight = (eval(data)[a][b] / heighestValue) * 100;
                            currentDataBar.style.height = barHeight + "%";

                            window.nBar++
                        }
                        window.nGroup++
                    }
                    else {
                        console.error('graphJS: wrong datatype in data variable');
                    }
                }

                window.nGraph++

            case "lineGraph":
                // create the main div
                //this.textContent = "";
                //this.className = "graph"+window.nGraph;
                //this.style.height = "calc(100% - 15px)";
                //this.style.width = "calc(100% - 15px)";
                //this.style.paddingLeft = "5px";
                //this.style.paddingRight = "5px";
                //this.style.paddingTop = "10px";
                //this.style.position = "relative";
                //this.style.borderTop = "0";
                //this.style.borderRight = "0";
                //this.style.borderBottom = "solid "+axysBackground+" 4px";
                //this.style.borderLeft = "solid "+axysBackground+" 4px";
                //this.style.background = "transparent";
                //this.style.display = "flex";
                //this.style.flexDirection = "row";

                //for(var pointArr = 0; eval(data).lenght > pointArr; pointArr++){
                //    console.log(data[pointArr][0])
                //}

                window.nGraph++
        }
    }
}


customElements.define("graph-js", graphJS)

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
        let currentYLabelDiv;
        let currentYLabelLine;
        let currentYLabelText;
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
                yLabelDiv.style.position = "absolute";
                yLabelDiv.style.height = this.clientHeight + "px";
                yLabelDiv.style.width = (this.clientWidth + 50) + "px";
                yLabelDiv.style.left = (-50 - Number(unitRemover(axysWidth))) + "px";
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
                // create y thresholds
                for(let f = 0; f < heighestValue; f += yLabelThreshold){
                    // label div
                    yLabelDiv.innerHTML += "<div class='labelDiv" + window.nGraph + "-" + f + "'><a class='labelText" + window.nGraph + "-" + f + "'>" + (f  + yLabelThreshold) + "</a><hr class='labelLine" + window.nGraph + "-" + f + "'></hr></div>";
                    currentYLabelDiv = document.querySelector(".labelDiv" + window.nGraph + "-" + f);
                    currentYLabelDiv.style.position = "relative";
                    currentYLabelDiv.style.width = "100%";
                    currentYLabelDiv.style.minHeight = "20px";
                    currentYLabelDiv.style.height = "20px";
                    currentYLabelDiv.style.display = "flex";
                    currentYLabelDiv.style.flexDirection = "row";
                    currentYLabelDiv.style.alignItems = "center";
                    // the first one must have different marginBottom
                    if(f == 0){
                        currentYLabelDiv.style.marginBottom = spacingYlabel - 10 + "px";
                    } else {
                        currentYLabelDiv.style.marginBottom = spacingYlabel - 20 + "px";
                    }
                    // label text
                    currentYLabelText = document.querySelector(".labelText" + window.nGraph + "-" + f);
                    currentYLabelText.style.position = "relative";
                    currentYLabelText.style.color = "white";
                    currentYLabelText.style.width = "50px";
                    currentYLabelText.style.height = "20px";
                    currentYLabelText.style.textAlign = "right";
                    currentYLabelText.style.marginRight = Number(unitRemover(axysWidth)) + 5 + "px";
                    currentYLabelText.style.fontFamily = barLabelFont;
                    // label line
                    currentYLabelLine = document.querySelector(".labelLine" + window.nGraph + "-" + f);
                    currentYLabelLine.style.position = "relative";
                    currentYLabelLine.style.background = "black";
                    currentYLabelLine.style.border = "solid 0";
                    currentYLabelLine.style.color = "white";
                    currentYLabelLine.style.background = "black";
                    currentYLabelLine.style.width = "calc(100% - " + axysWidth + ")";
                    currentYLabelLine.style.height = "1px";
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

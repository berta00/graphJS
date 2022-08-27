var nGraph;
window.nGraph = 0;

var nBar;
window.nBar = 0;
var nGroup;
window.nGroup = 0;

// display the banner
console.log(`
Graph-JS v1.0 is active!
`);

class graphJS extends HTMLElement {
    constructor(){
        super();

        // naming some variable
        var xGraphAxis;
        var yGraphAxis;

        // set default variable
        var graphType = "barGraph";
        var barWidth = "50px";
        var barMargin = "5px";
        var barBorderRadius = "0px";
        var barBackground = "#e5000f";
        var barLabelColor = "#ffffff"
        var barLabelFont = "sans-serif"
        var barLabel = [];
        var groupMargin = "10px";
        var axysBackground = "#ffffff";

        // get variable from html
        var data = this.getAttribute('data');

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
        if(this.getAttribute('barLabelColor') != null){
            barLabelColor = this.getAttribute('barLabelColor');
        }
        if(this.getAttribute('barLabelFont') != null){
            barLabelFont = this.getAttribute('barLabelFont');
        }
        if(this.getAttribute('barLabel') != null){
            barLabel = this.getAttribute('barLabel');
        }
        if(this.getAttribute('groupMargin') != null){
            groupMargin = this.getAttribute('groupMargin');
        }
        if(this.getAttribute('axysBackground') != null){
            axysBackground = this.getAttribute('axysBackground');
        }

        switch(graphType){
            case "barGraph":
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
                // create the x axis
                //this.innerHTML += "<div class='xGraphAxis" + window.nBar + "'></div>";
                //xGraphAxis = eval("document.querySelector('xGraphAxis" + window.nGraph + "');");
                //xGraphAxis.style.position = 'absolute';
                // create the y axis
                //this.innerHTML += "<div class='yGraphAxis" + window.nGraph + "'>"
                //yGraphAxis = eval("document.querySelector('yGraphAxis" + window.nGraph + "');");
                //yGraphAxis.style.position = 'absolute';
                // get info about data and create bars
                for(var a = 0; a < eval(data).length; a++){
                    // single bar
                    if(typeof eval(data)[a] === "number"){
                        // get bar label
                        var currentBarLabel = " "
                        if(eval(barLabel)[0] == null){
                            eval(barLabel).push(null);
                        }
                        if(eval(barLabel)[a] != null){
                            currentBarLabel = eval(barLabel)[a];
                        }
                        // create bar
                        this.innerHTML += "<div class='bar" + window.nBar + "'></div>";
                        var currentBar = document.querySelector(".bar" + window.nBar)
                        currentBar.style.position = "relative";
                        currentBar.style.width = barWidth;
                        currentBar.style.marginLeft = barMargin;
                        currentBar.style.marginRight = barMargin;
                        currentBar.style.backgroundColor = "transparent";
                        // create data bar
                        currentBar.innerHTML = "<div class='dataBar" + window.nBar + "'></div> <div class='barLabel" + window.nBar + "'>" + currentBarLabel + "</div>"
                        var currentDataBar = document.querySelector(".dataBar" + window.nBar)
                        currentDataBar.style.borderTopLeftRadius = barBorderRadius;
                        currentDataBar.style.borderTopRightRadius = barBorderRadius;
                        currentDataBar.style.position = "absolute";
                        currentDataBar.style.bottom = "0";
                        currentDataBar.style.backgroundColor = barBackground;
                        currentDataBar.style.width = "100%";
                        // set data bar height
                        currentDataBar.style.height = eval(data)[a] + "px";
                        // create bar label
                        var currentBarLabel = document.querySelector(".barLabel" + window.nBar)
                        currentBarLabel.style.color = barLabelColor;
                        currentBarLabel.style.fontFamily = barLabelFont;
                        currentBarLabel.style.position = "absolute";
                        currentBarLabel.style.bottom = "-20px";
                        currentBarLabel.style.transformOrigin = "right bottom";
                        currentBarLabel.style.transform = "rotate(-45deg)";

                        window.nBar++
                    }
                    // group of bars
                    else if(typeof eval(data)[a] === "object"){
                        // create div group
                        this.innerHTML += "<div class='group" + window.nGroup + "'></div>";
                        var currentGroup = document.querySelector(".group" + window.nGroup);
                        currentGroup.style.marginLeft = groupMargin;
                        currentGroup.style.marginRight = groupMargin;
                        currentGroup.style.display = "flex";
                        currentGroup.style.flexDirection = "row";
                        for(let b = 0; b < eval(data)[a].length; b++){
                            // get bar label
                            var currentBarLabelText = " "
                            if(eval(barLabel)[0] == null){
                                eval(barLabel).push(null);
                            }
                            if(eval(barLabel)[a] != null){
                                currentBarLabelText = eval(barLabel)[a+b];
                            }
                            // create bar
                            currentGroup.innerHTML += "<div class='bar" + window.nBar + "'></div>";
                            var currentBar = document.querySelector(".bar" + window.nBar);
                            currentBar.style.position = "relative";
                            currentBar.style.width = barWidth;
                            currentBar.style.marginLeft = barMargin;
                            currentBar.style.marginRight = barMargin;
                            currentBar.style.backgroundColor = "transparent";
                            // create data bar
                            currentBar.innerHTML += "<div class='dataBar" + window.nBar + "'></div> <div class='barLabel" + window.nBar + "'>" + currentBarLabelText + "</div>";
                            var currentDataBar = document.querySelector(".dataBar" + window.nBar)
                            currentDataBar.style.borderTopLeftRadius = barBorderRadius;
                            currentDataBar.style.borderTopRightRadius = barBorderRadius;
                            currentDataBar.style.position = "absolute";
                            currentDataBar.style.bottom = "0";
                            currentDataBar.style.backgroundColor = barBackground;
                            currentDataBar.style.width = "100%";
                            // set data bar height
                            currentDataBar.style.height = eval(data)[a][b] + "px";
                            // style bar label
                            var currentBarLabel = document.querySelector(".barLabel" + window.nBar);
                            currentBarLabel.style.color = barLabelColor;
                            currentBarLabel.style.fontFamily = barLabelFont;
                            currentBarLabel.style.position = "absolute";
                            currentBarLabel.style.bottom = "-20px";
                            currentBarLabel.style.transformOrigin = "right bottom";
                            currentBarLabel.style.transform = "rotate(-45deg)";

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
                console.log("hi");
                window.nGraph++
        }
    }
}


customElements.define("graph-js", graphJS)

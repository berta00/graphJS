var nGraph;
window.nGraph = 0;

var nBar;
window.nBar = 0;
var nGroup ;
window.nGroup = 0;

class graphJS extends HTMLElement {
    constructor(){
        super();

        // display the banner
        if(window.nGraph == 0){
            console.log(`
Graph-JS v1.0 is active!
            `)
        }

        // set default variable
        var graphType = "barGraph"
        var barMargin = "5px";
        var barBorderRadius = "0px";
        var barBackground = "#e5000f";
        var barLabelColor = "#ffffff"
        var barLabelFont = "sans-serif"
        var barLabel = []
        var groupMargin = "10px";
        var axysBackground = "#ffffff";

        // get variable from html
        var data = this.getAttribute('data');

        if(this.getAttribute('graphType') != null){
            graphType = this.getAttribute('graphType');
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
                this.className = "graph"+window.nGraph;
                this.style.height = "calc(100% - 15px)";
                this.style.width = "calc(100% - 15px)";
                this.style.paddingLeft = "5px";
                this.style.paddingRight = "5px";
                this.style.paddingTop = "10px";
                this.style.position = "relative";
                this.style.borderTop = "0";
                this.style.borderRight = "0";
                this.style.borderBottom = "solid "+axysBackground+" 4px";
                this.style.borderLeft = "solid "+axysBackground+" 4px";
                this.style.background = "transparent";
                this.style.display = "flex";
                this.style.flexDirection = "row";
                // get info about data and create bars
                for(var a = 0; a < eval(data).length; a++){
                    // single bar
                    if(typeof eval(data)[a] === "number"){
                        // get bar label
                        var currentBarLabel = " "
                        if(eval(barLabel)[0] == null){
                            eval(barLabel).push(null)
                        }
                        if(eval(barLabel)[a] != null){
                            currentBarLabel = eval(barLabel)[a]
                        }
                        // create bar
                        document.querySelector(".graph"+window.nGraph).innerHTML = document.querySelector(".graph"+window.nGraph).innerHTML + "<div class='bar"+window.nBar+"'></div>";
                        eval('document.querySelector(".bar'+window.nBar+'").style.position = "relative";');
                        eval('document.querySelector(".bar'+window.nBar+'").style.width = "40px";');
                        eval('document.querySelector(".bar'+window.nBar+'").style.marginLeft = "'+barMargin+'";');
                        eval('document.querySelector(".bar'+window.nBar+'").style.marginRight = "'+barMargin+'";');
                        eval('document.querySelector(".bar'+window.nBar+'").style.backgroundColor = "transparent";');
                        // create data bar
                        document.querySelector(".bar"+window.nBar).innerHTML = "<div class='dataBar"+window.nBar+"'></div> <div class='barLabel"+window.nBar+"'>"+currentBarLabel+"</div>"
                        eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopLeftRadius = "'+barBorderRadius+'";');
                        eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopRightRadius = "'+barBorderRadius+'";');
                        eval('document.querySelector(".dataBar'+window.nBar+'").style.position = "absolute";');
                        eval('document.querySelector(".dataBar'+window.nBar+'").style.bottom = "0";');
                        eval('document.querySelector(".dataBar'+window.nBar+'").style.backgroundColor = "'+barBackground+'";');
                        eval('document.querySelector(".dataBar'+window.nBar+'").style.width = "100%";');
                        // set data bar height
                        eval('document.querySelector(".dataBar'+window.nBar+'").style.height = "'+eval(data)[a]+'px";');
                        // create bar label
                        eval('document.querySelector(".barLabel'+window.nBar+'").style.color = "'+barLabelColor+'";');
                        eval('document.querySelector(".barLabel'+window.nBar+'").style.fontFamily = "'+barLabelFont+'";');
                        eval('document.querySelector(".barLabel'+window.nBar+'").style.position = "absolute";');
                        eval('document.querySelector(".barLabel'+window.nBar+'").style.bottom = "-20px";');
                        eval('document.querySelector(".barLabel'+window.nBar+'").style.transformOrigin = "right bottom";');
                        eval('document.querySelector(".barLabel'+window.nBar+'").style.transform = "rotate(-45deg)";');

                        window.nBar++
                    }
                    // group of bars
                    else if(typeof eval(data)[a] === "object"){
                        // create div group
                        document.querySelector(".graph"+window.nGraph).innerHTML = document.querySelector(".graph"+window.nGraph).innerHTML + "<div class='group"+window.nGroup+"'></div>";
                        eval('document.querySelector(".group'+window.nGroup+'").style.marginLeft = "'+groupMargin+'";');
                        eval('document.querySelector(".group'+window.nGroup+'").style.marginRight = "'+groupMargin+'";');
                        eval('document.querySelector(".group'+window.nGroup+'").style.display = "flex";');
                        eval('document.querySelector(".group'+window.nGroup+'").style.flexDirection = "row";');
                        for(let b = 0; b < eval(data)[a].length; b++){
                            // get bar label
                            var currentBarLabel = " "
                            if(eval(barLabel)[0] == null){
                                eval(barLabel).push(null)
                            }
                            if(eval(barLabel)[a] != null){
                                currentBarLabel = eval(barLabel)[a+b]
                            }
                            // create bar
                            document.querySelector(".group"+window.nGroup).innerHTML = document.querySelector(".group"+window.nGroup).innerHTML + "<div class='bar"+window.nBar+"'></div>";
                            eval('document.querySelector(".bar'+window.nBar+'").style.position = "relative";');
                            eval('document.querySelector(".bar'+window.nBar+'").style.width = "40px";');
                            eval('document.querySelector(".bar'+window.nBar+'").style.marginLeft = "'+barMargin+'";');
                            eval('document.querySelector(".bar'+window.nBar+'").style.marginRight = "'+barMargin+'";');
                            eval('document.querySelector(".bar'+window.nBar+'").style.backgroundColor = "transparent";');
                            // create data bar
                            document.querySelector(".bar"+window.nBar).innerHTML = document.querySelector(".bar"+window.nBar).innerHTML + "<div class='dataBar"+window.nBar+"'></div> <div class='barLabel"+window.nBar+"'>"+currentBarLabel+"</div>";
                            eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopLeftRadius = "'+barBorderRadius+'";');
                            eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopRightRadius = "'+barBorderRadius+'";');
                            eval('document.querySelector(".dataBar'+window.nBar+'").style.position = "absolute";');
                            eval('document.querySelector(".dataBar'+window.nBar+'").style.bottom = "0";');
                            eval('document.querySelector(".dataBar'+window.nBar+'").style.backgroundColor = "'+barBackground+'";');
                            eval('document.querySelector(".dataBar'+window.nBar+'").style.width = "100%";');
                            // set data bar height
                            eval('document.querySelector(".dataBar'+window.nBar+'").style.height = "'+eval(data)[a][b]+'px";');
                            // create bar label
                            eval('document.querySelector(".barLabel'+window.nBar+'").style.color = "'+barLabelColor+'";');
                            eval('document.querySelector(".barLabel'+window.nBar+'").style.fontFamily = "'+barLabelFont+'";');
                            eval('document.querySelector(".barLabel'+window.nBar+'").style.position = "absolute";');
                            eval('document.querySelector(".barLabel'+window.nBar+'").style.bottom = "-20px";');
                            eval('document.querySelector(".barLabel'+window.nBar+'").style.transformOrigin = "right bottom";');
                            eval('document.querySelector(".barLabel'+window.nBar+'").style.transform = "rotate(-45deg)";');

                            window.nBar++
                        }
                        window.nGroup++
                    }
                    else {
                        console.error('graphJS: wrong datatype in data variable')
                    }
                }

                window.nGraph++

            case "lineGraph":
                console.log("hi")
                window.nGraph++
        }
    }
}

customElements.define("graph-js", graphJS)

var nGraph;
window.nGraph = 0;

var nBar;
window.nBar = 0;
var nGroup ;
window.nGroup = 0;

class graphJS extends HTMLElement {
    constructor (){
        super();

        // display the banner
        if(window.nGraph == 0){
            console.log(`
Graph-JS v1.0.0 is active!
            `)
        }

        // set default variable
        var barMargin = "5px";
        var barBorderRadius = "0px";
        var groupMargin = "10px";

        // get variable from html
        var data = this.getAttribute('data');

        if(this.getAttribute('barMargin') != null){
            barMargin = this.getAttribute('barMargin');
        }
        if(this.getAttribute('barBorderRadius') != null){
            barBorderRadius = this.getAttribute('barBorderRadius');
        }
        if(this.getAttribute('groupMargin') != null){
            groupMargin = this.getAttribute('groupMargin');
        }

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
        this.style.borderBottom = "solid #ffffff 4px";
        this.style.borderLeft = "solid #ffffff 4px";
        this.style.background = "transparent";
        this.style.display = "flex";
        this.style.flexDirection = "row";
        // get info about data and create bars
        for(var a = 0; a < eval(data).length; a++){
            // single bar
            if(typeof eval(data)[a] === "number"){
                // create bar
                document.querySelector(".graph"+window.nGraph).innerHTML = document.querySelector(".graph"+window.nGraph).innerHTML + "<div class='bar"+window.nBar+"'></div>";
                eval('document.querySelector(".bar'+window.nBar+'").style.position = "relative";');
                eval('document.querySelector(".bar'+window.nBar+'").style.width = "40px";');
                eval('document.querySelector(".bar'+window.nBar+'").style.marginLeft = "'+barMargin+'";');
                eval('document.querySelector(".bar'+window.nBar+'").style.marginRight = "'+barMargin+'";');
                eval('document.querySelector(".bar'+window.nBar+'").style.backgroundColor = "transparent";');
                // create data bar
                document.querySelector(".bar"+window.nBar).innerHTML = "<div class='dataBar"+window.nBar+"'></div>"
                eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopLeftRadius = "'+barBorderRadius+'";');
                eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopRightRadius = "'+barBorderRadius+'";');
                eval('document.querySelector(".dataBar'+window.nBar+'").style.position = "absolute";');
                eval('document.querySelector(".dataBar'+window.nBar+'").style.bottom = "0";');
                eval('document.querySelector(".dataBar'+window.nBar+'").style.backgroundColor = "red";');
                eval('document.querySelector(".dataBar'+window.nBar+'").style.width = "100%";');
                // set data bar height
                eval('document.querySelector(".dataBar'+window.nBar+'").style.height = "'+eval(data)[a]+'px";');

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
                    // create bar
                    document.querySelector(".group"+window.nGroup).innerHTML = document.querySelector(".group"+window.nGroup).innerHTML + "<div class='bar"+window.nBar+"'></div>";
                    eval('document.querySelector(".bar'+window.nBar+'").style.position = "relative";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.width = "40px";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.marginLeft = "'+barMargin+'";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.marginRight = "'+barMargin+'";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.backgroundColor = "transparent";');
                    // create data bar
                    document.querySelector(".bar"+window.nBar).innerHTML = document.querySelector(".bar"+window.nBar).innerHTML + "<div class='dataBar"+window.nBar+"'></div>";
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopLeftRadius = "'+barBorderRadius+'";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.borderTopRightRadius = "'+barBorderRadius+'";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.position = "absolute";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.bottom = "0";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.backgroundColor = "red";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.width = "100%";');
                    // set data bar height
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.height = "'+eval(data)[a][b]+'px";');

                    window.nBar++
                }
                window.nGroup++
            }
            else {
                console.error('graphJS: wrong datatype in data variable')
            }
        }

        window.nGraph++
    }
}
customElements.define("graph-js", graphJS)

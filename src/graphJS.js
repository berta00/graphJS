var nGraph;
window.nGraph = 0;

class graphJS extends HTMLElement {
    constructor (){
        super();

        var data = this.getAttribute('data');

        var nBar;
        window.nBar = 0;
        var nGroup ;
        window.nGroup = 0;

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
            console.log(window.nBar)
            // single bar
            if(typeof eval(data)[a] === "number"){
                console.log("sesso1")
                // create bar
                document.querySelector(".graph"+window.nGraph).innerHTML = "<div class='bar"+window.nBar+"'></div>";
                eval('document.querySelector(".bar'+window.nBar+'").style.position = "relative";');
                eval('document.querySelector(".bar'+window.nBar+'").style.width = "40px";');
                eval('document.querySelector(".bar'+window.nBar+'").style.marginLeft = "5px";');
                eval('document.querySelector(".bar'+window.nBar+'").style.marginRight = "5px";');
                eval('document.querySelector(".bar'+window.nBar+'").style.backgroundColor = "transparent";');
                // create data bar
                document.querySelector(".bar"+window.nBar).innerHTML = "<div class='dataBar"+window.nBar+"'></div>"
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
                console.log("sesso2")
                // create div group
                document.querySelector(".graph"+window.nGraph).innerHTML = "<div class='group"+window.nGroup+"'></div>";
                eval('document.querySelector(".group'+window.nGroup+'").style.paddingLeft = "10px";');
                eval('document.querySelector(".group'+window.nGroup+'").style.paddingRight = "10px";');
                eval('document.querySelector(".group'+window.nGroup+'").style.display = "flex";');
                eval('document.querySelector(".group'+window.nGroup+'").style.flexDirection = "row";');
                for(let b = 0; b < eval(data)[a].length; b++){
                    // create bar
                    document.querySelector(".group"+window.nGroup).innerHTML = "<div class='bar"+window.nBar+"'></div>";
                    eval('document.querySelector(".bar'+window.nBar+'").style.position = "relative";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.width = "40px";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.marginLeft = "5px";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.marginRight = "5px";');
                    eval('document.querySelector(".bar'+window.nBar+'").style.backgroundColor = "transparent";');
                    // create data bar
                    document.querySelector(".bar"+window.nBar).innerHTML = "<div class='dataBar"+window.nBar+"'></div>";
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.position = "absolute";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.bottom = "0";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.backgroundColor = "red";');
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.width = "100%";');
                    // set data bar height
                    eval('document.querySelector(".dataBar'+window.nBar+'").style.height = "'+eval(data)[a][b]+'px";');

                    window.nBar++
                }
            }
            else {
                alert('graphJS: wrong datatype in data section')
            }
        }

        window.nGraph++
    }
}
customElements.define("graph-js", graphJS)

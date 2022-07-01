var nGraph;
window.nGraph = 0;

function createGraph(container, data){
    var nBar = 0;
    var nGroup = 0;
    var containerVar = document.querySelector(container)
    // create the main div
    eval('var graph'+window.nGraph+' = document.createElement("div");')
    eval('graph'+window.nGraph+'.textContent = "";')
    eval('graph'+window.nGraph+'.className = "data'+window.nGraph+'";')
    eval('graph'+window.nGraph+'.style.height = "calc(100% - 15px)";')
    eval('graph'+window.nGraph+'.style.width = "calc(100% - 15px)";')
    eval('graph'+window.nGraph+'.style.paddingLeft = "5px";')
    eval('graph'+window.nGraph+'.style.paddingRight = "5px";')
    eval('graph'+window.nGraph+'.style.paddingTop = "10px";')
    eval('graph'+window.nGraph+'.style.position = "relative";')
    eval('graph'+window.nGraph+'.style.borderTop = "0";')
    eval('graph'+window.nGraph+'.style.borderRight = "0";')
    eval('graph'+window.nGraph+'.style.borderBottom = "solid #ffffff 4px";')
    eval('graph'+window.nGraph+'.style.borderLeft = "solid #ffffff 4px";')
    eval('graph'+window.nGraph+'.style.background = "transparent";')
    eval('graph'+window.nGraph+'.style.display = "flex";')
    eval('graph'+window.nGraph+'.style.flexDirection = "row";')
    eval('containerVar.appendChild(graph'+window.nGraph+');')
    // get info about data and create bars
    for(var a = 0; a < data.length; a++){
        // single bar
        if(typeof data[a] == "number"){
            // create bar
            eval('var bar'+nBar+' = document.createElement("div");');
            eval('bar'+nBar+'.textContent = "";');
            eval('bar'+nBar+'.className = "bar'+nBar+'";');
            eval('bar'+nBar+'.style.position = "relative";');
            eval('bar'+nBar+'.style.width = "40px";');
            eval('bar'+nBar+'.style.marginLeft = "5px";');
            eval('bar'+nBar+'.style.marginRight = "5px";');
            eval('bar'+nBar+'.style.backgroundColor = "transparent";');
            eval('graph'+window.nGraph+'.appendChild(bar'+nBar+');');
            // create data bar
            eval('var dataBar'+nBar+' = document.createElement("div");');
            eval('dataBar'+nBar+'.textContent = "";');
            eval('dataBar'+nBar+'.className = "bar'+nBar+'";');
            eval('dataBar'+nBar+'.style.position = "absolute";');
            eval('dataBar'+nBar+'.style.bottom = "0";');
            eval('dataBar'+nBar+'.style.backgroundColor = "red";');
            eval('dataBar'+nBar+'.style.width = "100%";');
            eval('bar'+nBar+'.appendChild(dataBar'+nBar+');');
            // set data bar height
            eval('dataBar'+nBar+'.style.height = "'+data[a]+'px";');

            nBar++
        }
        // group of bars
        else if(typeof data[a] == "object"){
            // create div group
            eval('var group'+nGroup+' = document.createElement("div");');
            eval('group'+nGroup+'.textContent = "";');
            eval('group'+nGroup+'.className = "group'+nGroup+'";');
            eval('group'+nGroup+'.style.paddingLeft = "10px";');
            eval('group'+nGroup+'.style.paddingRight = "10px";');
            eval('group'+nGroup+'.style.display = "flex";');
            eval('group'+nGroup+'.style.flexDirection = "row";');
            eval('graph'+window.nGraph+'.appendChild(group'+nGroup+');');
            for(let b = 0; b < data[a].length; b++){
                // create bar
                eval('var bar'+nBar+' = document.createElement("div");');
                eval('bar'+nBar+'.textContent = "";');
                eval('bar'+nBar+'.className = "bar'+nBar+'";');
                eval('bar'+nBar+'.style.position = "relative";');
                eval('bar'+nBar+'.style.width = "40px";');
                eval('bar'+nBar+'.style.marginLeft = "5px";');
                eval('bar'+nBar+'.style.marginRight = "5px";');
                eval('bar'+nBar+'.style.backgroundColor = "transparent";');
                eval('group'+nGroup+'.appendChild(bar'+nBar+');');
                // create data bar
                eval('var dataBar'+nBar+' = document.createElement("div");');
                eval('dataBar'+nBar+'.textContent = "";');
                eval('dataBar'+nBar+'.className = "bar'+nBar+'";');
                eval('dataBar'+nBar+'.style.position = "absolute";');
                eval('dataBar'+nBar+'.style.bottom = "0";');
                eval('dataBar'+nBar+'.style.backgroundColor = "red";');
                eval('dataBar'+nBar+'.style.width = "100%";');
                eval('bar'+nBar+'.appendChild(dataBar'+nBar+');');
                // set data bar height
                eval('dataBar'+nBar+'.style.height = "'+data[a][b]+'px";');

                nBar++
            }
        }
        else {
            alert('graphJS: wrong datatype in data section')
        }
    }
    window.nGraph++
}

window.onload = function(){
    createGraph('.center', [100, 120, 150, 130, ["140", "100", "120"], 150, 100])
}

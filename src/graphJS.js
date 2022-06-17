class graphJS extends HTMLelement {
    constructor (height, width, type, background, color1, color2, xLabel, yLabel, data){
        this.getAttribute('height') = height
        this.getAttribute('width') = width
        this.getAttribute('type') = type
        this.getAttribute('background') = background
        this.getAttribute('color1') = color1
        this.getAttribute('color2') = color2
        this.getAttribute('xLabel') = xLabel
        this.getAttribute('yLabel') = yLabel
        this.getAttribute('data') = data
    }

}

customElements.define("graphJS", graphJS);

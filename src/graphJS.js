class graphJS extends HTMLelement {
    constructor (){
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const height = this.getAttribute('height');
        const width = this.getAttribute('width');
        const type = this.getAttribute('type');
        const background = this.getAttribute('background');
        const color1 = this.getAttribute('color1');
        const color2 = this.getAttribute('color2');
        const xLabel = this.getAttribute('xLabel');
        const yLabel = this.getAttribute('yLabel');
        const data = this.getAttribute('data');

        console.log(yLabel)
    }
}

customElements.define("graphJS", graphJS);

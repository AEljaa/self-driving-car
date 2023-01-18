class Level{
    constructor(inputCount,outputCount){
        this.input= new Array(inputCount);
        this.output= new Array(outputCount);
        this.biases= new Array(outputCount);

        this.weights=[];

        for(let i =0;i<inputCount;i++){
            this.weights[i]=new Array(outputCount);
        }
        Level.#randomize(this);


    }

    static #randomize(level){
        for(let i =0;i<inputCount;i++){
            for(let j =0;j<outputCount;j++){
                level.weights[i][j]=Math.random()*2 -1;
            }
        }

        for(let i=0;i<level.biases;i++){
            level.biases[i]=Math.random()*2 -1;

        }
    }
}


static feedForward(givenInputs,level){
    
}
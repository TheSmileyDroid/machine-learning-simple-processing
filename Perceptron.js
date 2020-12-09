function sign(num) {
    if (num >= 0){
        return 1
    }
    else if (num < 0) {
        return -1
    }
    else {
        return 0
    }

}

class Perceptron {
    constructor(){
        //Iniciar os pesos
        this.weights = []
        this.lr = 0.1

        for (let i = 0; i < 2; i++){
            this.weights[i] = random(-1,1)
        }
    }

    guess(inputs){
        let sum = 0

        for (let i = 0; i < this.weights.length; i++){
            sum += inputs[i] * this.weights[i]
        }

        let output = sign(sum)
        return output
    }

    train(inputs, target){
        let r = this.guess(inputs)
        let error = target - r

        for (let i = 0; i < this.weights.length; i++){
            this.weights[i] += error * inputs[i] * this.lr
        }

    }
}
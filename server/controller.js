let goals = require('./db.json')
let globalID = 4;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);

    },
    getFortune: (req, res) => {
        const fortunes =['You cannot love life until you live the life you love', 'Life consists not in holding good cards, but in playing those you hold well', 'Wealth awaits you very soon', 'You will become great if you believe in yourself', 'A stranger, is a friend you have not spoken to yet'];
    
        //choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune)
    },
    getGoals: (req, res) => {
        res.status(200).send(goals)
    }, 
    deleteGoal: (req, res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        goals.splice(index, 1)
        res.status(200).send(goals)
    },
    createGoal: (req, res) => {
        const {title, rating, imageURL} = req.body;
        let newGoal = {
            title, 
            rating: Number(rating),
            imageURL,
            id: globalID
        }
        console.log(newGoal)
        goals.push(newGoal)
        globalID++
        res.status(200).send(goals)
    },
    updateGoal: (req, res) => {
        console.log(req.params.id)
        console.log(req.body.type)
        const {type} = req.body;
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        if(type === 'minus' && goals[index].rating > 1){
            goals[index].rating -= 1
            res.status(200).send(goals)
        } else if(type === 'plus' && goals[index].rating < 50) {
            goals[index].rating += 1
            res.status(200).send(goals)
        } else {
            res.status(400).send('Invalid star rating!')
        }
    }
}
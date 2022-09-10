// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// const controller = require('./controller');
// const {getGoals, deleteGoal, createGoal, updateGoal} = controller

// app.get('/api/goals', getGoals);
// app.post('/api/goals', createGoal);
// app.delete('/api/goals/:id', deleteGoal);


// const { getCompliment } = require('./controller')
// const { getFortune } = require('./controller')


// app.get("/api/compliment", getCompliment);
// app.get('/api/fortune', getFortune);

// app.listen(4000, () => console.log("Server running on 4000"));
// console.log('hello world')



const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const controller = require('./controller');
const {getGoals, deleteGoal, createGoal, updateGoal} = controller;

app.get('/api/goals', getGoals )
app.delete('/api/goals/:id', deleteGoal)
app.post('/api/goals', createGoal)
app.put('/api/goals/:id', updateGoal)


const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);

app.listen(4004, () => console.log('Listening on port 4004'))

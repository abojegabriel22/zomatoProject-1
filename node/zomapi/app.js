let express = require('express');
let app = express();
// let port = process.env.PORT||1000;
let port = 1000;
let mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors')
let {dbConnect, getData, postData,updateOrder,deleteOrder} = require('./controller/dbController')



// MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hi from express')
})
// GET ALL LOCATIONS
app.get('/location',async (req,res)=>{
    let query = {}
    let collection = "location"
    let output = await getData(collection,query)
    res.send(output)
})

// get all mealType
app.get('/mealType', async (req,res)=>{
    let query = {}
    let collection = "mealType";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/restaurants', async (req,res)=>{
    let query = {}
    if(req.query.stateId && req.query.mealId){
        query = {state_id: Number(req.query.stateId), "mealTypes.mealtype_id":Number(req.query.mealId)}
    }
    else if(req.query.stateId){
        query = {state_id: Number(req.query.stateId)}
    }
    else if(req.query.mealId){
        query={"mealTypes.mealtype_id":Number(req.query.mealId)}
    }
    else{
        query = {}
    }
    let collection = "restaurants"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/filter/:mealId', async(req,res)=>{
    let mealId = Number(req.params.mealId)
    let cuisineId = Number(req.query.cuisineId)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(cuisineId){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }
    else if(lcost && hcost){
        query = {
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gte:lcost,$lte:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = "restaurants"
    let output = await getData(collection,query)
    res.send(output)
})


app.get('/details/:id', async (req,res)=>{
    let id = Number(req.params.id)
    let query = {restaurant_id:id}
    let collection = "restaurants"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/menu/:id', async (req,res)=>{
    let id = Number(req.params.id)
    let query = {restaurant_id:id}
    let collection = "menu"
    let output = await getData(collection,query)
    res.send(output)
})
// ORDERS
app.get('/orders', async (req,res)=>{
    let query = {}
    if(req.query.email){
        query={email:req.query.email}
    }else{
        let query = {}
    }
    
    let collection = "orders"
    let output = await getData(collection,query)
    res.send(output)
})

// PLACE ORDER 
app.post('/placeOrder',async(req,res)=>{
    let data = req.body
    let collection = "orders"
    console.log(">>>",data)
    let response = await postData(collection,data)
    res.send(response)
})

// MENU DETAILS {"id":[14,8,21]}
app.post('/menuDetails',async (req,res)=>{
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}}
        let collection = 'menu'
        let output = await getData(collection,query)
        res.send(output)
    }else{
        res.send('Please pass data in form of array')
    }
})

// UPDATE 
app.put('/updateOrder', async(req,res)=>{
    let collection = 'orders'
    let condition = {"_id":new mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    } 
    let output = await updateOrder(collection,condition,data)
    res.send(output)
})

// DELETE ORDER 
app.delete('/deleteOrder', async(req,res)=>{
    let collection = 'orders'
    let condition = {"_d":new mongo.ObjectId(req.body._id)}
    let output = await deleteOrder(collection,condition)
    res.send(output)
})


app.listen(port,(err)=>{
    dbConnect();
    if(err) throw err;
    console.log(`server is running on port ${port}`);
})
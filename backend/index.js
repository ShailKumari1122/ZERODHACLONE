require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addholdings", async(req,res) =>{
//     const tempHpldings = [{
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },]

//   tempHpldings.forEach((item) =>{
//     let newHolding = new HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     })
//     newHolding.save();

//   })
//   res.send("done");

// })

// app.get("/addpositions", async(req,res) =>{
//      const tempPositions = [{
//      product: "CNC",
//      name: "EVEREADY",
//      qty: 2,
//      avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },]
   
//   tempPositions.forEach((item) =>{

//     let newPosition = new PositionsModel({
//        product: item.product,
//        name: item.name,
//        qty: item.qty,
//        avg: item.avg,
//        price: item.price,
//        net: item.net,
//        day: item.day,
//        isLoss: item.isLoss,
//     })
//     newPosition.save();
//   })

//  res.send("pos");
// })

app.get("/allHoldings", async(req,res) =>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async(req,res) =>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


app.post('/newOrder', async(req,res) =>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });
  newOrder.save();

  res.send("order save");
})

app.listen(PORT, () => {
    console.log("app start");
    mongoose.connect(url).then(() =>{
        console.log("succeded");
    })
    
})
const mongoose=require("mongoose");
const intidata=require("./data.js");
const Listing=require("../models/listing.js"); // yaha do dot lagane apde balki app.js mein ek hhi . lagana pada start mein coz this is inside other folder

const MONGO_URL="mongodb+srv://Samayk:Samyak454@cluster0.fpzxt.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0";


main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})



async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB=async ()=>{
   await Listing.deleteMany({});
//    console.log(intidata.data);
   intidata.data=intidata.data.map((obj)=>({...obj,owner:"674339b5ed8aa823f0232c55"}))
   await Listing.insertMany(intidata.data);
   console.log("data was initialized");
}

initDB();
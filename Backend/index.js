const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken")
const app = express();
const port = 4000;
const path = require("path")

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://Raveesha:raveesha@cluster0.cnc9ie5.mongodb.net/web-project2");

// Routes
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint for images

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for Creating Products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async (req,res) => {
    const product = new Product({
        id:req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: parseFloat(req.body.new_price),
        old_price: parseFloat(req.body.old_price) ,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name:req.body.name,
    })
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
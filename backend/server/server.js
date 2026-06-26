const express=require('express');
const app=express();

const PORT=5001; //Port change
app.use(express.json());

const books=[{id:1,name:"Book 1",author:"Author 1"},
            {id:2,name:"Book 2",author:"Author 2"},
            {id:3,name:"Book 3",author:"Author 3"},
            {id:4,name:"Book 4",author:"Author 4"},
            {id:5,name:"Book 5",author:"Author 5"}    
];

app.get("/getbooks",(req,res) =>{ //Endpoint
    res.send(books);
})

app.post("/addbooks", (req, res) => {
    const book = req.body;
    books.push(book);
    res.send("Book added successfully");
})

app.get("/getdata",(req,res)=>{
    res.send("Hello from the server");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})



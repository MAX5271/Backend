const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let blogList = [];

//setting up a middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/blogs", (req, res) => {
  //status code is 200, ok.
  res.status(200).json({
    data: blogList,
    success: true,
  });
});

//x-www-form-urlencoded.
app.post("/blogs", (req, res) => {
  // console.log(req.body);
  blogList.push({
    title: req.body.title,
    content: req.body.content,
    id: Math.floor(Math.random()*1000)
  });
  console.log(blogList[blogList.length-1]);
  return res.status(201).json({
    success: true,
  });
});

//:id will give us parameter to use to search in the array database
app.get('/blogs/:id',(req,res)=>{
    // console.log(req.params);
   const result = blogList.filter((blog)=>blog.id==req.params.id);
   return res.status(200).json({
    data: result,
    success: true
   })
});

app.listen(port, () => {
  console.log(`Server has been started on the port ${port}`);
});

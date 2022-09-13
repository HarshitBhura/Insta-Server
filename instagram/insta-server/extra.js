// app.js extra code



const customMiddleware=(req,res, next)=>{
    console.log("Hello i am Middleware")
    next()
}

// app.use(customMiddleware)


app.get('/blog/',customMiddleware,
(req,res)=>{res.send('Blog Page')}
)


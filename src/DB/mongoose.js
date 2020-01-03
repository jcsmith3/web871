const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},() => console.log(`MongoDB connected at ${process.env.MONGODB_URL}`))



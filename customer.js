const mongoose = require("mongoose");


const DB = 'mongodb+srv://Dhananjay:DN@1234@cluster0.38lwu.mongodb.net/Bank?retryWrites=true&w=majority';
 mongoose.connect(DB,{
     useNewUrlParser:true,
     useCreateIndex:true,
     useUnifiedTopology:true,
     useFindAndModify:false
 }).then(() => {
     console.log(`connection Succesfull`);
 }).catch((err) => console.log(`not connect`));


//User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        min: 0,
        required: true
    }
})

const Users = mongoose.model('User', userSchema);


const customer = [
    {
        name: 'Dhananjay Naphade',
        email: 'dhananjaypnaphade@gmail.com',
        credits: 10000
    },{
        name: 'Pratik Naphade',
        email: 'pratiknnaphade@gmail.com',
        credits: 10000
    },
    {
        name: 'sumit patil',
        email: 'sumit2000@gmail.com',
        credits: 7000
    },
    {
        name: 'prasad patil',
        email: 'patilprasad143@gmail.com',
        credits: 4500
    },
    {
        name: 'Vaibhav kharche',
        email: 'vaibhavgkharche@gmail.com',
        credits: 8600
    },
    {
        name: 'Kunal Narkhede',
        email: 'kunalpnarkhede@gmail.com',
        credits: 7500
    },
    {
        name: 'Tushar Supe',
        email: 'tusharsupe21@gmail.com',
        credits: 6900
    },
    {
        name: 'piyush patil',
        email: 'patilpiyush@gmail.com',
        credits: 3000
    },
    {
        name: 'ankesh Patil',
        email: 'ankpatil1999@gmail.com',
        credits: 2100
    },
    {
        name: 'jayant patil',
        email: 'jayantpatil17@gmail.com',
        credits: 5300
    }
]

Users.insertMany(customer)
    .then(res => console.log(res))
    .catch(err => console.log(err)
);


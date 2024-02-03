const express = require("express");

const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");

const Signup = require("./models/signup");
const added = require("./models/connect")

const async = require("hbs/lib/async");
const { get } = require("http");
const { join } = require("path");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("home")

});
app.get("/signin", (req, res) => {
    res.render("signin")

});
app.get("/signup", (req, res) => {
    res.render("signup")

});


app.get("/index", (req, res) => {
    res.render("index")

});

app.get("/AddExpense", (req, res) => {
    res.render("AddExpense")

});
app.get("/home", (req, res) => {
    res.render("home")
})


//create a new user in our database
app.post("/signup", async (req, res) => {
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if (password === confirmpassword) {

            const registeruser = new Signup({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: password,
                confirmpassword: confirmpassword,
                gender: req.body.gender
            })

            const registered = await registeruser.save();

            res.status(201).render("signin");
        }
        else {
            res.send("password are not matching")
        }

    }
    catch (error) {
        res.status(400).send(error);
    }
})

// login check 
app.post("/signin", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;


        const userid = await Signup.findOne({ email: email })
        //res.send(userid.password);
        if (userid.password === password) {
            res.status(201).render("index");
        }
        else {
<<<<<<< HEAD
            res.send("Invaid login details");
=======
            res.send("Invalid login details");
>>>>>>> f36d75c (second Commit)
        }

    } catch (error) {
        res.status(400).send("Invalid login details");
    }
});

//Add expenses
app.post("/AddExpense", async (req, res) => {
    try {
        const user = new added({
            date: req.body.date,
            category: req.body.category,
            name: req.body.name,
            amount: req.body.amount
        })
        const userdetail = await user.save();

        res.status(201).render("AddExpense");
        
    }
    catch (error) {
        res.status(401).send("Data not submitted")
    }
});

app.get("/view", async (req, res) => {
    try {
        const expenses = await added.find();
        res.render("view", { expenses });

    } catch (error) {
        res.status(400).send("Invalid login details");
    }
});



app.post("/filter", async (req, res) => {
    console.log(req, 'filter');
    const { category, from, to } = req.body;
    try {
        const expenses = await added.find({
            category, date: {
                $gte: new Date(from),
                $lt: new Date(to)
            }
        });
<<<<<<< HEAD
        console.log(expenses, 'exop');
=======
        // console.log(expenses, 'exop');
>>>>>>> f36d75c (second Commit)
        res.render('view', { expenses })
    } catch (error) {
        res.status(400).send("Invalid login details");
    }
});

app.post("/detete-expenses", async (req, res) => {
    try {
        const { _id } = req.body
        const deleteExp = await added.deleteOne({ _id });
        const expenses = await added.find();
        res.render("view", { expenses });
        // res.render('view');
    } catch (error) {
        res.status(400).send("Invalid login details");
    }
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
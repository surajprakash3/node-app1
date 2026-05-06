// const express = require('express')
// const app = express();
// const PORT = 3000;
// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

// app.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT}`);
    
// })
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Healthcare Management System </title>
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family: Arial, sans-serif;
            }

            body{
                background:#f4f7fc;
            }

            header{
                background:#0d6efd;
                color:white;
                padding:20px;
                text-align:center;
                box-shadow:0 2px 10px rgba(0,0,0,0.2);
            }

            nav{
                display:flex;
                justify-content:center;
                gap:20px;
                background:#084298;
                padding:15px;
            }

            nav a{
                color:white;
                text-decoration:none;
                font-weight:bold;
            }

            .hero{
                height:350px;
                background:linear-gradient(to right,#4facfe,#00f2fe);
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                color:white;
                text-align:center;
            }

            .hero h1{
                font-size:50px;
                margin-bottom:15px;
            }

            .hero p{
                font-size:20px;
            }

            .container{
                width:90%;
                margin:auto;
                padding:40px 0;
            }

            .cards{
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
                gap:25px;
            }

            .card{
                background:white;
                padding:25px;
                border-radius:15px;
                box-shadow:0 4px 12px rgba(0,0,0,0.1);
                transition:0.3s;
            }

            .card:hover{
                transform:translateY(-8px);
            }

            .card h2{
                color:#0d6efd;
                margin-bottom:15px;
            }

            .doctor-list{
                display:flex;
                flex-wrap:wrap;
                gap:20px;
                margin-top:30px;
            }

            .doctor{
                background:white;
                padding:20px;
                border-radius:15px;
                width:300px;
                box-shadow:0 4px 12px rgba(0,0,0,0.1);
            }

            .doctor img{
                width:100%;
                border-radius:10px;
            }

            .doctor h3{
                margin-top:10px;
                color:#0d6efd;
            }

            .appointment{
                background:white;
                padding:30px;
                margin-top:40px;
                border-radius:15px;
                box-shadow:0 4px 12px rgba(0,0,0,0.1);
            }

            input, select{
                width:100%;
                padding:12px;
                margin:10px 0;
                border-radius:8px;
                border:1px solid #ccc;
            }

            button{
                background:#0d6efd;
                color:white;
                border:none;
                padding:12px 25px;
                border-radius:8px;
                cursor:pointer;
                font-size:16px;
            }

            button:hover{
                background:#084298;
            }

            footer{
                background:#0d6efd;
                color:white;
                text-align:center;
                padding:20px;
                margin-top:40px;
            }
        </style>
    </head>

    <body>

        <header>
            <h1>🏥 Smart Healthcare System</h1>
            <p>Doctor Consultation • Medicines • Therapy • Hospitals</p>
        </header>

        <nav>
            <a href="#">Home</a>
            <a href="#">Doctors</a>
            <a href="#">Hospitals</a>
            <a href="#">Therapy</a>
            <a href="#">Medicine</a>
            <a href="#">Contact</a>
        </nav>

        <section class="hero">
            <h1>Your Health, Our Priority ❤️</h1>
            <p>Book appointments with top doctors instantly</p>
        </section>

        <div class="container">

            <h1 style="text-align:center; margin-bottom:30px;">
                Healthcare Services
            </h1>

            <div class="cards">

                <div class="card">
                    <h2>👨‍⚕️ Doctors</h2>
                    <p>Find specialist doctors for heart, skin, eye, and more treatments.</p>
                </div>

                <div class="card">
                    <h2>💊 Medicines</h2>
                    <p>Order medicines online with fast delivery and discounts.</p>
                </div>

                <div class="card">
                    <h2>🏥 Hospitals</h2>
                    <p>Search nearby hospitals and emergency care centers.</p>
                </div>

                <div class="card">
                    <h2>🧠 Therapy</h2>
                    <p>Get mental health therapy and wellness consultation.</p>
                </div>

            </div>

            <h1 style="text-align:center; margin-top:60px;">
                Top Doctors
            </h1>

            <div class="doctor-list">

                <div class="doctor">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800" />
                    <h3>Dr. Sharma</h3>
                    <p>Cardiologist</p>
                    <p>⭐ 4.9 Rating</p>
                </div>

                <div class="doctor">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800" />
                    <h3>Dr. Priya</h3>
                    <p>Neurologist</p>
                    <p>⭐ 4.8 Rating</p>
                </div>

                <div class="doctor">
                    <img src="https://images.unsplash.com/photo-1594824475317-6f6a4c8d2d1f?q=80&w=800" />
                    <h3>Dr. Khan</h3>
                    <p>Dermatologist</p>
                    <p>⭐ 4.7 Rating</p>
                </div>

            </div>

            <div class="appointment">
                <h1>📅 Book Appointment</h1>

                <form action="/appointment" method="POST">

                    <input type="text" name="name" placeholder="Enter Patient Name" required />

                    <input type="number" name="age" placeholder="Enter Age" required />

                    <select name="doctor">
                        <option>Select Doctor</option>
                        <option>Dr. Sharma</option>
                        <option>Dr. Priya</option>
                        <option>Dr. Khan</option>
                    </select>

                    <select name="illness">
                        <option>Select Illness</option>
                        <option>Heart Problem</option>
                        <option>Skin Allergy</option>
                        <option>Mental Stress</option>
                        <option>Eye Problem</option>
                    </select>

                    <button type="submit">Book Now</button>

                </form>
            </div>

        </div>

        <footer>
            <h3>© 2026 Smart Healthcare System</h3>
            <p>Made with ❤️ by Suraj Prakash</p>
        </footer>

    </body>
    </html>
    `);
});

app.post('/appointment', (req, res) => {

    const { name, age, doctor, illness } = req.body;

    res.send(`
    <html>
    <head>
        <title>Appointment Confirmed</title>

        <style>
            body{
                font-family:Arial;
                background:#f4f7fc;
                text-align:center;
                padding-top:100px;
            }

            .box{
                background:white;
                width:500px;
                margin:auto;
                padding:40px;
                border-radius:15px;
                box-shadow:0 4px 12px rgba(0,0,0,0.2);
            }

            h1{
                color:green;
            }

            a{
                text-decoration:none;
                color:white;
                background:#0d6efd;
                padding:12px 20px;
                border-radius:8px;
            }
        </style>
    </head>

    <body>

        <div class="box">
            <h1>✅ Appointment Confirmed</h1>

            <h2>Patient: ${name}</h2>
            <h3>Age: ${age}</h3>
            <h3>Doctor: ${doctor}</h3>
            <h3>Illness: ${illness}</h3>

            <p>Your appointment has been booked successfully.</p>

            <br>

            <a href="/">Go Back</a>
        </div>

    </body>
    </html>
    `);
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
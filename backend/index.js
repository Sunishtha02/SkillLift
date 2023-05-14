const express = require ("express");
const mysql = require ("mysql");
const cors = require("cors");
const session = require("express-session");
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');


const app= express();

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "loginsystem",
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.post('/slogin', function(req, res) {
	let username = req.body.Username;
	let password = req.body.Password;
	if (username && password) {
		db.query('SELECT * FROM student WHERE Username = ? AND Password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                const studentId = results[0].id;
                const token="your-token-string";
                res.cookie('token', token);
                res.cookie('username', username);
                res.cookie('studentId', studentId);
                res.json({success:true, token, studentId});
                console.log(results);
			} else {
                res.status(401).json({error: "Incorrect username and/or password"});
			}
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
    res.end();
	}
});


app.post("/sregister", (req,res)=>{
    const mobile= req.body.MobNumber;
    const username=req.body.Username;
    const password= req.body.Password;
    const cpassword= req.body.Cpassword;
    if(mobile && username && password && cpassword){
        if(password==cpassword){
            let q=`SELECT * FROM student WHERE Username = '${username}'`;
            db.query(q,(err,result)=>{
                if(err)console.log(err);
                if(result.length>0){
                    res.send('User already exists');
                }
                else{
                    var sqlq=`INSERT INTO student (MobNumber, Username, Password) VALUES ('${mobile}', '${username}', '${password}')`;
                    db.query(sqlq,(err,result)=>{
                        if(err)console.log(err);
                        else{
                            req.session.username=username;
                            req.session.loggedin=true;
                            res.send("User created");
                        }
                    })
                }
            })
        }
        else{
            res.send("Password mismatch");
        }
    }
    else{
        res.send("fill all fields");
    }
});

app.post("/tregister", (req,res)=>{
  const course=req.body.Course;
  const username=req.body.Username;
  const password= req.body.Password;
  const mobile= req.body.MobNumber;
  const cost= req.body.Cost;
  if(mobile && username && password && course && cost){
    let q=`SELECT * FROM teacher WHERE Username = '${username}'`;
    db.query(q,(err,result)=>{
        if(err)console.log(err);
        if(result.length>0){
            res.send('Tutor already exists');
        }
        else{
            var sqlq=`INSERT INTO teacher (MobNumber, Username, Password, Course, Cost) VALUES ('${mobile}', '${username}', '${password}', '${course}', '${cost}')`;
            db.query(sqlq,(err,result)=>{
                if(err)console.log(err);
                else{
                    req.session.username=username;
                    req.session.loggedin=true;
                    res.send("Tutor created");
                }
            })
        }
    })
  }
  else{
      res.send("fill all fields");
  }
});

app.post('/tlogin', function(req, res) {
	let username = req.body.Username;
	let password = req.body.Password;
	if (username && password) {
		db.query('SELECT * FROM teacher WHERE Username = ? AND Password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                const tutorId = results[0].id;
                const course= results[0].Course;
                const cost= results[0].Cost;
                const token="your-token-string";
                res.cookie('token', token);
                res.cookie('username', username);
                res.cookie('tutorId', tutorId);
                res.cookie('course', course);
                res.cookie('cost', cost);
                res.json({success:true, token, tutorId, course, cost});
                console.log(results);
			} else {
                res.status(401).json({error: "Incorrect username and/or password"});
			}
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
    res.end();
	}
});

app.get("/eng", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'English'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/hin", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Hindi'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/math", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Maths'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/cp", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'C++'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/java", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Java'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/py", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Python'";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/sc", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Science'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/rea", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'React'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/js", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'JavaScript'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

// Get all students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM student', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Get a specific student by ID
app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM student WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length === 0) {
      res.status(404).send('Student not found');
    } else {
        console.log(result);
      res.send(result[0]);
    }
  });
});

app.put('/students/:id', (req, res) => {
    const { mobNumber, username, password } = req.body;
    const id = req.params.id;
  
    // Construct the SQL query based on which fields are present in the request body
    let sql = 'UPDATE student SET';
    const updateValues = [];
    if (mobNumber) {
      sql += ' MobNumber = ?,';
      updateValues.push(mobNumber);
    }
    if (username) {
      sql += ' Username = ?,';
      updateValues.push(username);
    }
    if (password) {
      sql += ' Password = ?,';
      updateValues.push(password);
    }
    // Remove the trailing comma and add the WHERE clause to the SQL query
    sql = sql.slice(0, -1) + ' WHERE id = ?';
    updateValues.push(id);
  
    // Execute the SQL query with the provided parameters
    db.query(sql, updateValues, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating data');
      } else {
        console.log('Data updated successfully');
        res.send(results);
      }
    });
  });
  

// Delete a student by ID
app.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query('DELETE FROM student WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Student not found');
    } else {
        console.log('data deleted');
      res.send(result);
    }
  });
});

// Get all tutors
app.get('/tutors', (req, res) => {
  db.query('SELECT * FROM teacher WHERE Username != "admin"', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Get a specific student by ID
app.get('/tutors/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM teacher WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length === 0) {
      res.status(404).send('Tutor not found');
    } else {
        console.log(result);
      res.send(result[0]);
    }
  });
});
  
app.put('/tutors/:id', (req, res) => {
    const { mobNumber, username, password,course,cost } = req.body;
    const id = req.params.id;
  
    // Construct the SQL query based on which fields are present in the request body
    let sql = 'UPDATE teacher SET';
    const updateValues = [];
    if (course) {
      sql += ' Course = ?,';
      updateValues.push(course);
    }
    if (cost) {
      sql += ' Cost = ?,';
      updateValues.push(cost);
    }
    if (mobNumber) {
      sql += ' MobNumber = ?,';
      updateValues.push(mobNumber);
    }
    if (username) {
      sql += ' Username = ?,';
      updateValues.push(username);
    }
    if (password) {
      sql += ' Password = ?,';
      updateValues.push(password);
    }
    // Remove the trailing comma and add the WHERE clause to the SQL query
    sql = sql.slice(0, -1) + ' WHERE id = ?';
    updateValues.push(id);
  
    // Execute the SQL query with the provided parameters
    db.query(sql, updateValues, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating data');
      } else {
        console.log('Data updated successfully');
        res.send(results);
      }
    });
  });
    
  
// Delete a student by ID
app.delete('/tutors/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query('DELETE FROM teacher WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Tutor not found');
    } else {
        console.log('data deleted');
      res.send(result);
    }
  });
});

app.get('/courses', (req, res) => {
  db.query('SELECT * FROM courses', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/enroll', function(req, res) {
  let studentId = req.body.studentId;
  let teacherId = req.body.teacherId;
  if (studentId && teacherId) {
    db.query('INSERT INTO enrollments (student_id, teacher_id) VALUES (?, ?)', [studentId, teacherId], function(error, results, fields) {
      if (error){
        if (error.code === 'ER_DUP_ENTRY') {
          console.log("already exists");
          res.status(400).json({error: "Enrollment already exists"});
        } else {
          res.status(500).json({error: "Internal server error"});
        }
      }else{
        res.json({success: true, message: "Enrolled successfully"});
      }
      res.end();
    });
  } else {
    res.status(400).json({error: "Invalid request"});
    res.end();
  }
});

app.get('/enrollments/:id', function(req, res) {
  const studentId = req.params.id;
  console.log(studentId);

  db.query('SELECT teacher.Username, teacher.Course, teacher.Cost, teacher.MobNumber FROM enrollments INNER JOIN teacher ON enrollments.teacher_id = teacher.id WHERE enrollments.student_id = ?', [studentId], function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/enr/:tutorId', function(req, res) {
  const tutorId = req.params.tutorId;

  db.query('SELECT student.id, student.Username, student.MobNumber FROM enrollments INNER JOIN student ON enrollments.student_id = student.id WHERE enrollments.teacher_id = ?', [tutorId], function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/enr/count/:tutorId', function(req, res) {
  const tutorId = req.params.tutorId;

  db.query('SELECT COUNT(*) as count FROM enrollments WHERE enrollments.teacher_id = ?', [tutorId], function(error, results, fields) {
    if (error) throw error;

    const count = results[0].count;
    res.json({ totalEnrollments: count });
  });
});


app.listen(3001, ()=>{
    console.log("running server");
});
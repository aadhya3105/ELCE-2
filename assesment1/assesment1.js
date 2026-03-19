let students = [];

function addStudent(){

    let name = document.getElementById("name").value;
    let Rollno = document.getElementById("Rollno").value;
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);

    if(name === "" || Rollno === "" || isNaN(maths) || isNaN(science) || isNaN(english)){
        alert("Please fill all fields properly");
        return;
    }

    let student = { name, Rollno, maths, science, english };

    students.push(student);

    alert("Student Added 😌");

    document.getElementById("name").value = "";
    document.getElementById("Rollno").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = "";
}

// DISPLAY
function displayStudents(){

    let text = "";

    students.forEach(emp => {
        text += `
        Name: ${emp.name} <br>
        Roll No: ${emp.Rollno} <br>
        Maths: ${emp.maths} <br>
        Science: ${emp.science} <br>
        English: ${emp.english} <br><br>`;
    });

    document.getElementById("output").innerHTML = text;
}

// TOTAL
function totalMarks(){

    let total = 0;

    students.forEach(emp => {
        total += emp.maths + emp.science + emp.english;
    });

    document.getElementById("output").innerHTML =
        "Total Marks: " + total;
}

// AVERAGE
function averageMarks(){

    let text = "";

    students.forEach(emp => {
        let avg = (emp.maths + emp.science + emp.english) / 3;

        text += `${emp.name} - ${avg.toFixed(2)} <br>`;
    });

    document.getElementById("output").innerHTML = text;
}

// ABOVE 80
function above80(){

    let text = "";

    students.forEach(emp => {
        let avg = (emp.maths + emp.science + emp.english) / 3;

        if(avg > 80){
            text += `${emp.name} - ${avg.toFixed(2)} <br>`;
        }
    });

    document.getElementById("output").innerHTML =
        text || "No students above 80";
}

// FAILED
function failed(){

    let text = "";

    students.forEach(emp => {
        let avg = (emp.maths + emp.science + emp.english) / 3;

        if(avg < 40){
            text += `${emp.name} - ${avg.toFixed(2)} <br>`;
        }
    });

    document.getElementById("output").innerHTML =
        text || "No failed students";
}

// COUNT
function totalStudents(){

    document.getElementById("output").innerHTML =
        "Total Students: " + students.length;
}
let submit = document.getElementById("submit")



submit.addEventListener("click" , function(e){
    let rollNumber = document.getElementById("roll_number").value
    let showName = document.getElementById("name").value
    let batch = document.getElementById("batch").value
    let section = document.getElementById("section").value
    e.preventDefault();


    localStorage.setItem('rollNumber', rollNumber);
    localStorage.setItem('name', showName);
    localStorage.setItem('batch', batch);
    localStorage.setItem('section', section);


    window.location.href="quiz.html"
   
    }
)
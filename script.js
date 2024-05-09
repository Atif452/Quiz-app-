
window.onload=function(){
    let rollNumber=localStorage.getItem('rollNumber')
    let showName = localStorage.getItem('name');
    let batch1 = localStorage.getItem('batch');
    let section1 = localStorage.getItem('section');
    let result1=localStorage.getItem('quizScore')


    let result = document.querySelector("#result")
    

    let rnoResult=document.querySelector(".rnoResult")
    let nameResult=document.querySelector(".nameResult")
    let batchResult=document.querySelector(".batchResult")
    let sectionResult=document.querySelector(".sectionResult")


    console.log(showName);
    rnoResult.textContent=rollNumber
    nameResult.textContent=showName
    nameResult.textContent=showName
    batchResult.textContent=batch1
    sectionResult.textContent=section1
    result.textContent=result1
    
    
}





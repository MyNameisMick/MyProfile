function Button(){
    const score = document.querySelector("input").value

if (score >= 80) {
    document.getElementById("Answer").innerHTML = "Grade: A"
}

else if (score == 79) {
    document.getElementById("Answer").innerHTML = "Sad...."
}
else if (score >= 70) {
    document.getElementById("Answer").innerHTML = "Grade: B"
}

else if (score >= 60) {
    document.getElementById("Answer").innerHTML = "Grade: C"
}

else if (score > 50) {
    document.getElementById("Answer").innerHTML = "Grade: D"
}

else if (score >40) {
    document.getElementById("Answer").innerHTML = "Grade: D-"
}

else if (score == 0) { 
    document.getElementById("Answer").innerHTML = "Grade: Kuy"
}

else {
    document.getElementById("Answer").innerHTML = "Grade: F"
}
}
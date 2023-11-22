function color() {
    let score = 1
    let color = Math.floor(Math.random() * 10)
    console.log (color)
    let round = parseInt (prompt("How many time You Want to guess BOI"))

    if (isNaN(round)) {
        alert("Only NUMBER E HERE!! ")
    }

    else {
        for (let x = 0; x < round; x++) {
            let colorguess = prompt("What Color you want to guess? BOI")
            if (score < round) {
                if (color == 0) {
                    if (colorguess == "Red" || colorguess == "สีแดง" || colorguess == "แดง") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Disc_Plain_red.svg"
                        document.getElementById("ANS").innerHTML = "สีแดง/แดง/Red"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 1) {
                    if (colorguess == "Orange" || colorguess == "สีส้ม" || colorguess == "ส้ม") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/MRT_Orange.svg/1200px-MRT_Orange.svg.png"
                        document.getElementById("ANS").innerHTML = "สีส้ม/ส้ม/Orange"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 2) {
                    if (colorguess == "Yellow" || colorguess == "สีเหลือง" || colorguess == "เหลือง") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/2048px-Yellow_icon.svg.png"
                        document.getElementById("ANS").innerHTML = "สีเหลือง/เหลือง/Yellow"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 3) {
                    if (colorguess == "Green" || colorguess == "สีเขียว" || colorguess == "เขียว") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LACMTA_Circle_Green_Line.svg/1200px-LACMTA_Circle_Green_Line.svg.png"
                        document.getElementById("ANS").innerHTML = "สีเขียว/เขียว/Green"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 4) {
                    if (colorguess == "Lime" || colorguess == "สีเขียวอ่อน" || colorguess == "เขียวอ่อน") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://www.pinclipart.com/picdir/big/543-5437902_dot-clipart-lime-transparent-background-green-circle-png.png"
                        document.getElementById("ANS").innerHTML = "สีเขียวอ่อน/เขียวอ่อน/Lime"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 5) {
                    if (colorguess == "Light Blue" || colorguess == "สีฟ้า" || colorguess == "ฟ้า") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Disc_Plain_cyan.svg/1200px-Disc_Plain_cyan.svg.pngIndigo.png"
                        document.getElementById("ANS").innerHTML = "สีฟ้า/ฟ้า/Light Blue"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 6) {
                    if (colorguess == "Blue" || colorguess == "สีน้ำเงิน" || colorguess == "น้ำเงิน") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png"
                        document.getElementById("ANS").innerHTML = "สีน้ำเงิน/น้ำเงิน/Blue"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 7) {
                    if (colorguess == "Purple" || colorguess == "สีม่วง" || colorguess == "ม่วง") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LACMTA_Circle_Purple_Line.svg/512px-LACMTA_Circle_Purple_Line.svg.png"
                        document.getElementById("ANS").innerHTML = "สีม่วง/ม่วง/Purple"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 8) {
                    if (colorguess == "Pink" || colorguess == "สีชมพู" || colorguess == "ชมพู") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://i.pinimg.com/originals/1b/9d/69/1b9d69ce56af11c1dfa0c78dce9e3d8c.png"
                        document.getElementById("ANS").innerHTML = "สีชมพู/ชมพู/Pink"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
                else if (color == 9) {
                    if (colorguess == "Brown" || colorguess == "สีน้ำตาล" || colorguess == "น้ำตาล") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Circle_Brown_Solid.svg/1024px-Circle_Brown_Solid.svg.png"
                        document.getElementById("ANS").innerHTML = "สีน้ำเงิน/น้ำเงิน/Brown"
                        break
                    }
                    else {
                        alert("Try again BOI!")
                        score++
                    }
                }
            }
            else if (score == round){
                if (color == 0) {
                    if (colorguess == "Red" || colorguess == "สีแดง" || colorguess == "แดง") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Disc_Plain_red.svg"
                        document.getElementById("ANS").innerHTML = "สีแดง/แดง/Red"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Disc_Plain_red.svg"
                        document.getElementById("ANS").innerHTML = "สีแดง/แดง/Red"
                    }
                }    
                else if (color == 1) {
                    if (colorguess == "Orange" || colorguess == "สีส้ม" || colorguess == "ส้ม") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/MRT_Orange.svg/1200px-MRT_Orange.svg.png"
                        document.getElementById("ANS").innerHTML = "สีส้ม/ส้ม/Orange"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/MRT_Orange.svg/1200px-MRT_Orange.svg.png"
                        document.getElementById("ANS").innerHTML = "สีส้ม/ส้ม/Orange"
                    }
                }
                else if (color == 2) {
                    if (colorguess == "Yellow" || colorguess == "สีเหลือง" || colorguess == "เหลือง") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/2048px-Yellow_icon.svg.png"
                        document.getElementById("ANS").innerHTML = "สีเหลือง/เหลือง/Yellow"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/2048px-Yellow_icon.svg.png"
                        document.getElementById("ANS").innerHTML = "สีเหลือง/เหลือง/Yellow"
                    }
                }
                else if (color == 3) {
                    if (colorguess == "Green" || colorguess == "สีเขียว" || colorguess == "เขียว") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LACMTA_Circle_Green_Line.svg/1200px-LACMTA_Circle_Green_Line.svg.png"
                        document.getElementById("ANS").innerHTML = "สีเขียว/เขียว/Green"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LACMTA_Circle_Green_Line.svg/1200px-LACMTA_Circle_Green_Line.svg.png"
                        document.getElementById("ANS").innerHTML = "สีเขียว/เขียว/Green"
                    }
                }
                else if (color == 4) {
                    if (colorguess == "Lime" || colorguess == "สีเขียวอ่อน" || colorguess == "เขียวอ่อน") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://www.pinclipart.com/picdir/big/543-5437902_dot-clipart-lime-transparent-background-green-circle-png.png"
                        document.getElementById("ANS").innerHTML = "สีเขียวอ่อน/เขียวอ่อน/Lime"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://www.pinclipart.com/picdir/big/543-5437902_dot-clipart-lime-transparent-background-green-circle-png.png"
                        document.getElementById("ANS").innerHTML = "สีเขียวอ่อน/เขียวอ่อน/Lime"
                    }
                }
                else if (color == 5) {
                    if (colorguess == "Light Blue" || colorguess == "สีฟ้า" || colorguess == "ฟ้า") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Disc_Plain_cyan.svg/1200px-Disc_Plain_cyan.svg.pngIndigo.png"
                        document.getElementById("ANS").innerHTML = "สีฟ้า/ฟ้า/Light Blue"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Disc_Plain_cyan.svg/1200px-Disc_Plain_cyan.svg.pngIndigo.png"
                        document.getElementById("ANS").innerHTML = "สีฟ้า/ฟ้า/Light Blue"
                    }
                }
                else if (color == 6) {
                    if (colorguess == "Blue" || colorguess == "สีน้ำเงิน" || colorguess == "น้ำเงิน") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png"
                        document.getElementById("ANS").innerHTML = "สีน้ำเงิน/น้ำเงิน/Blue"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png"
                        document.getElementById("ANS").innerHTML = "สีน้ำเงิน/น้ำเงิน/Blue"
                    }
                }
                else if (color == 7) {
                    if (colorguess == "Purple" || colorguess == "สีม่วง" || colorguess == "ม่วง") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LACMTA_Circle_Purple_Line.svg/512px-LACMTA_Circle_Purple_Line.svg.png"
                        document.getElementById("ANS").innerHTML = "สีม่วง/ม่วง/Purple"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LACMTA_Circle_Purple_Line.svg/512px-LACMTA_Circle_Purple_Line.svg.png"
                        document.getElementById("ANS").innerHTML = "สีม่วง/ม่วง/Purple"
                    }
                }
                else if (color == 8) {
                    if (colorguess == "Pink" || colorguess == "สีชมพู" || colorguess == "ชมพู") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://i.pinimg.com/originals/1b/9d/69/1b9d69ce56af11c1dfa0c78dce9e3d8c.png"
                        document.getElementById("ANS").innerHTML = "สีชมพู/ชมพู/Pink"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol!")
                        document.getElementById("ora").src = "https://i.pinimg.com/originals/1b/9d/69/1b9d69ce56af11c1dfa0c78dce9e3d8c.png"
                        document.getElementById("ANS").innerHTML = "สีชมพู/ชมพู/Pink"
                    }
                }
                else if (color == 9) {
                    if (colorguess == "Brown" || colorguess == "สีน้ำตาล" || colorguess == "น้ำตาล") {
                        alert("Correct BOI!")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Circle_Brown_Solid.svg/1024px-Circle_Brown_Solid.svg.png"
                        document.getElementById("ANS").innerHTML = "สีน้ำเงิน/น้ำเงิน/Brown"
                        break
                    }
                    else {
                        alert("Incorect!!!")
                        alert("Run out of round lol")
                        document.getElementById("ora").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Circle_Brown_Solid.svg/1024px-Circle_Brown_Solid.svg.png"
                        document.getElementById("ANS").innerHTML = "สีน้ำเงิน/น้ำเงิน/Brown"
                    }
                }
            }
            
        }
        document.getElementById("Guess").innerHTML = " You guess " + score + " times "
    }
}    
function reset(){
    location.reload();
}


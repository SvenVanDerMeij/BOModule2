let titel = ["top", "jeepers", "bazinga", "zoinks", "epic"]
let rating = ["10/10", "6,2/10", "7,2/10", "8,3/10", "83/19"]
let inhoud = ["mijn vrouw moest janken van plezier, top plek", "mijn kind is in dit gebouw geboren, ik maak me mild zorgen", "Iemand werd boos op me, maar toen liep hij meteen van me weg", "Heel goed museum, maar een iets minder goed hockey veld", "Maria, ik mis de kinderen, ik wil ze terug", "Heel specifiek, prachtig, maar toch elegant, het spreekt me aan, maar toch weer niet", "mooi gebouw, jammer dat ze geen fortnite battlepass hebben", "Heel goed hockeyveld, maar een iets minder goed museum", "Ik ben blind, ik vond het geweldig", "Herman, je krijgt de kinderen niet terug, sorry", "Ik heb de congiërge in elkaar geslagen"]
let beweging = 0
function setup() {

    createCanvas(windowWidth-(windowWidth*0.08), 650);
    background("#111111");
    makesquares()
}

function draw() {



}
function makesquares() {
    textSize(22);

    for (let k = 1; k < Math.round(windowWidth/400); k++) {
        for (let l = 0; l < 3; l++) {
            fill('#FFFFFF');
            strokeWeight(2);
            stroke(200);
            rect(k * 400 - 45, l * 200 + 50, 160, 160)
            fill('#000001');
            strokeWeight(0);
            stroke(0);
            text(titel[Math.round(Math.random() * 4)], k * 400 -35, l * 200 + 70)
            text(rating[Math.round(Math.random() * 4)], k * 400 -35, l * 200 + 95)
            textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], k * 400 - 35, l * 200 + 105, 140, 150)
            textSize(22);
        }
    }
    for (let i = 0; i < (windowWidth/400)-1; i++) {
        let shape = Math.round(Math.random() * 2)
        let shape2 = Math.round(Math.random() * 2)
        let shape3 = Math.round(Math.random())
        let ik = 155+ (i * 400)
        if (shape == 0) {
            fill('#FFFFFF');
            strokeWeight(2);
            stroke(200);
            rect(ik, 50, 360, 160)
            fill('#000001');
            strokeWeight(0);
            stroke(0);
            text(titel[Math.round(Math.random() * 4)], ik + 10, 70)
            text(rating[Math.round(Math.random() * 4)], ik + 10, 95)
            textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 105, 340, 150)
            textSize(22);
            if (shape2 == 0) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 360, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 270)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * 9)], ik + 10, 305, 340, 150)
                textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
                    text(inhoud[Math.round(Math.random() * 7)], ik + 10, 505, 340, 150)
                    textSize(22);
                } else if (shape3 == 1) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 160, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 505, 140, 150)
            textSize(22);
                }
            } else if (shape2 == 1) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 160, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 270)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 295)
                textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 305, 140, 150)
            textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
                    text(inhoud[Math.round(Math.random() * 7)], ik + 10, 505, 340, 150)
                    textSize(22);
                } else if (shape3 == 1) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 160, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 505, 140, 150)
            textSize(22);
                }
            }
            else if (shape2 == 2) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 160, 360)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 270)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * 9)], ik + 10, 305, 140, 350)
                textSize(22);
            }
        } else if (shape == 1) {
            fill('#FFFFFF');
            strokeWeight(2);
            stroke(200);
            rect(ik, 50, 160, 160)
            fill('#000001');
            strokeWeight(0);
            stroke(0);
            text(titel[Math.round(Math.random() * 4)], ik + 10, 70)
            text(rating[Math.round(Math.random() * 4)], ik + 10, 95)
            textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 105, 140, 150)
            textSize(22);
            if (shape2 == 0) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 360, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 270)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * 7)], ik + 10, 305, 340, 150)
                textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
                    text(inhoud[Math.round(Math.random() * 7)], ik + 10, 505, 340, 150)
                    textSize(22);
                } else if (shape3 == 1) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 160, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 505, 140, 150)
            textSize(22);
                }
            } else if (shape2 == 1) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 160, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 270)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 295)
                textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 305, 140, 150)
            textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
                    text(inhoud[Math.round(Math.random() * 7)], ik + 10, 505, 340, 150)
                    textSize(22);
                } else if (shape3 == 1) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 160, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                    text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 505, 140, 150)
            textSize(22);
                }
            }
            else if (shape2 == 2) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 160, 360)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 270)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * 9)], ik + 10, 305, 140, 350)
                textSize(22);
            }
        } else if (shape == 2) {
            fill('#FFFFFF');
            strokeWeight(2);
            stroke(200);
            rect(ik, 50, 160, 360)
            fill('#000001');
            strokeWeight(0);
            stroke(0);
            text(titel[Math.round(Math.random() * 4)], ik + 10, 70)
            text(rating[Math.round(Math.random() * 4)], ik + 10, 95)
            textSize(15);
                text(inhoud[Math.round(Math.random() * 9)], ik + 10, 105, 140, 350)
                textSize(22);
            if (shape3 == 0) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 450, 360, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                textSize(15);
                text(inhoud[Math.round(Math.random() * 7)], ik + 10, 505, 340, 150)
                textSize(22);
            } else if (shape3 == 1) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 450, 160, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * 4)], ik + 10, 470)
                text(rating[Math.round(Math.random() * 4)], ik + 10, 495)
                textSize(15);
            text(inhoud[Math.round(Math.random() * 9)], ik + 10, 505, 140, 150)
            textSize(22);
            }
        }
    }
}
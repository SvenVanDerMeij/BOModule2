let titel = ["top", "jeepers", "bazinga", "zoinks", "epic"]
let rating = ["10/10", "6,2/10", "7,2/10", "8,3/10", "83/19"]
let inhoud = ["My Wife wept of Joy, Great place", "my child was born here, I'm mildly worried", "Someone got mad at me but walked away immediately after", "Great Museum, disappointing hockey rink", "Maria, I miss the kids, I want them back", "Very specific, beautiful, but also elegant, It speaks to me, but also not", "Nice building, unfortunate that they don't have a fortnite battlepass", "Great hockey rink, disappointing museum", "I'm blind, I thought it was amazing", "Sorry Herman, you're not getting the kids back", "If you call this art, you can call me Van Gogh", "I won a lot of money in the pokerclub in the basement", "I wasn't allowed to take a painting, even though I asked nicely", "Help, I'm stuck on the toilet on floor 3, west wing", "This made me slightly less depressed, NO OF COURSE NOT", "Nice that there was a free entry, unfortunate you have to come through the window and not be seen by the cameras", "Apparently the toilet was 'art' and the museum got mad at my for pooping, I just had diarrhea from last night, my wife Anita made chinese food, It was very good though, From Hank"]
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
            text(titel[Math.round(Math.random() * (titel.length-1))], k * 400 -35, l * 200 + 70)
            text(rating[Math.round(Math.random() * (rating.length-1))], k * 400 -35, l * 200 + 95)
            textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], k * 400 - 35, l * 200 + 105, 140, 150)
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
            text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 70)
            text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 95)
            textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 105, 340, 150)
            textSize(22);
            if (shape2 == 0) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 360, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 270)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 305, 340, 150)
                textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
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
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 505, 140, 150)
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
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 270)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 295)
                textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 305, 140, 150)
            textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                    textSize(15);
                    text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 505, 340, 150)
                    textSize(22);
                } else if (shape3 == 1) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 160, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 505, 140, 150)
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
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 270)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 305, 140, 350)
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
            text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 70)
            text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 95)
            textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 105, 140, 150)
            textSize(22);
            if (shape2 == 0) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 250, 360, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 270)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 305, 340, 150)
                textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                    textSize(15);
                    text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 505, 340, 150)
                    textSize(22);
                } else if (shape3 == 1) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 160, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 505, 140, 150)
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
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 270)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 295)
                textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 305, 140, 150)
            textSize(22);
                if (shape3 == 0) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 360, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                    textSize(15);
                    text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 505, 340, 150)
                    textSize(22);
                } else if (shape3 == 1) {
                    fill('#FFFFFF');
                    strokeWeight(2);
                    stroke(200);
                    rect(ik, 450, 160, 160)
                    fill('#000001');
                    strokeWeight(0);
                    stroke(0);
                    text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                    text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                    textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 505, 140, 150)
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
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 270)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 295)
                textSize(15);
                text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 305, 140, 350)
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
            text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 70)
            text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 95)
            textSize(15);
                text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 105, 140, 350)
                textSize(22);
            if (shape3 == 0) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 450, 360, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                textSize(15);
                text(inhoud[Math.round(Math.random() * (inhoud.length-1))], ik + 10, 505, 340, 150)
                textSize(22);
            } else if (shape3 == 1) {
                fill('#FFFFFF');
                strokeWeight(2);
                stroke(200);
                rect(ik, 450, 160, 160)
                fill('#000001');
                strokeWeight(0);
                stroke(0);
                text(titel[Math.round(Math.random() * (titel.length-1))], ik + 10, 470)
                text(rating[Math.round(Math.random() * (rating.length-1))], ik + 10, 495)
                textSize(15);
            text(inhoud[Math.round(Math.random() * (inhoud.length-3))], ik + 10, 505, 140, 150)
            textSize(22);
            }
        }
    }
}

let questionArr = ['?עם איזה בוקסה מחזקים את הצלבים',
    '?מה אומרת האות ב בטלת ',
    '?מה 3 הנוזלים שצריך לבדוק',
    '?לפי איזה ראשי תיבות זוכרים טאת',
    '?מה עושים באות כ',
    '?מה פירוש האות מ ',
    '?איזה ברגים מחזקים בגלגלים בטפש',
    '?מה יש לעשות בטיפול מצברים']

let answerArr = [['15/16','9/16+3/4','11/16+3/4',''],
['בדיקות כלליות', 'בדיקות בטיחות', 'בטיחות בנסיעה', ''],
['סולר מים ושמן', 'טאת', ' ', ' '],
['חנכ תמר', 'פג שכח מצברים', 'חסן דפק ברז', ''],
['בודקים כבש עולה ויורד', 'בודקים שיש כוסית משקעים', 'בודקים שיש כבל אנטנה תקין', ''],
['מזקו"ם', 'מצברים', 'מחיצות', 'טפש'],
['בוקסה 11/16 צורת משולש', 'בוקסה 15/16 הכל', 'בוקסה 15/16 צורת משולש', ''],
['לנקות עם מטלית ולחרור את החורים שעל הפקקים', 'למלא מים בפקקים של המצברים ולנקות אותם מאבק', 'לחורר את הפקקים ולמלא בהם מים עד הסוף', '']];

let rightAnswerArr = [ 1,0, 0, 0, 0, 0, 1, 0];

let questionIndex=0;


let topArr=[80,80,56,70,29,46,23,2];
let rightArr=[76,61,53,10,38,7,9,5];

window.addEventListener("load", (event) => {

    if(questionIndex===0){
        for(let i = 0; i < document.getElementsByClassName("answer").length; i++ ){
            document.getElementsByClassName("answer")[i].addEventListener("click", ()=>{
                if (event.currentTarget.id === "i2") {
                    document.getElementById(`${event.currentTarget.id}`).classList.add("right");
                    setTimeout(() => {
                        document.getElementById("questionSection").style.visibility='hidden';
                        for(let i = 0; i < document.getElementsByClassName("answer").length; i++ ){
                            document.getElementsByClassName("answer")[i].classList.remove("right");
                        }
                    }, 2000);
                } else {
                    document.getElementById(`${event.currentTarget.id}`).classList.add("wrong");
                    setTimeout(() => {
                        document.getElementById("questionSection").style.visibility='hidden';
                        for(let i = 0; i < document.getElementsByClassName("answer").length; i++ ){
                            document.getElementsByClassName("answer")[i].classList.remove("wrong");
                        }
                    }, 2000);
                }
            });
        }
    }

    document.addEventListener('keydown',(event)=>{
        if(event.code=== 'Space'&&questionIndex<=7){
            document.getElementById("questionSection").style.visibility='visible';
            
            document.getElementById("question").innerText= questionArr[questionIndex];

            
            document.getElementById("i1").innerText = answerArr[questionIndex][0];
            document.getElementById("i2").innerText = answerArr[questionIndex][1];
            document.getElementById("i3").innerText = answerArr[questionIndex][2];
            document.getElementById("i4").innerText = answerArr[questionIndex][3];

            for(let i = 0; i < document.getElementsByClassName("answer").length; i++ ){
                document.getElementsByClassName("answer")[i].addEventListener("click", checkAnswer);
            }
            document.getElementById("frog").style=`top:${topArr[questionIndex]}vh;right:${rightArr[questionIndex]}vw;`;
        }
    });
})

const checkAnswer = (event) => {

    for (let i = 0; i < document.getElementsByClassName("answer").length; i++) {
        document.getElementsByClassName("answer")[i].removeEventListener("click", checkAnswer);
    }

    if (event.currentTarget.innerText === answerArr[questionIndex][rightAnswerArr[questionIndex]]) {
        document.getElementById(`${event.currentTarget.id}`).classList.add("right");
        setTimeout(() => {
            document.getElementById("questionSection").style.visibility='hidden';

            for(let i = 0; i < document.getElementsByClassName("answer").length; i++ ){
                document.getElementsByClassName("answer")[i].classList.remove("right");
            }
        }, 2000);
    } else {
        document.getElementById(`${event.currentTarget.id}`).classList.add("wrong");
        setTimeout(() => {
            document.getElementById("questionSection").style.visibility='hidden';
            
            for(let i = 0; i < document.getElementsByClassName("answer").length; i++ ){
                document.getElementsByClassName("answer")[i].classList.remove("wrong");
            }
        }, 2000);
    }
    questionIndex++;

}
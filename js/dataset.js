// 問題をHTMLにセットする
var html = "<form action='answer.html' method='GET'>";
for (var q in questions){
    html += "<section><p>【問題 " + (parseInt(q) +1) + " 】" + questions[q][0] + "<br><br>";
    
    if (questions[q][4] != ""){
        html += "<img src='" + questions[q][4] + "' alt='image' width='250' height='250'>";
        
    }
    html += "<input type='radio' name=q" + (parseInt(q) +1) + " value='1'>1)" + questions[q][1] + "<br>";
    html += "<input type='radio' name=q" + (parseInt(q) +1) + " value='2'>2)" + questions[q][2] + "<br>";
    html += "<input type='radio' name=q" + (parseInt(q) +1) + " value='3'>3)" + questions[q][3] + "<br>";
    html +=  "</p></section>";
}
html +=  "<input type='submit' value='採点'></form>";

document.getElementById("questions").innerHTML = html;
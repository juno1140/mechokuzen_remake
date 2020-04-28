let ans = [];

// 正否照合
questions.forEach(function(val, key){
    let qnum = (key + 1);
    ans[qnum] = getParam("q" + qnum) == val[5] ? true : false;
});

// 点数算出
let true_count = 0;
true_count = ans.filter(function(a){return a===true}).length; // trueの個数

// メッセージ設定
let message = "";
if (true_count == 30){
    message = "おめでとうございます！満点です！<br>合格への近道はとにかく過去問を解いて間違えた問題を復習し、解けるようにすることです。これを続ければ残り1週間でもかなり点数は上がります。<br>まだノー勉で「今年はダメかな」と思っている人もまだ諦めないでください！残り１週間で効率よく勉強して頑張れば点数は上がります。<br>試験が終わるまで気を抜かず勉強していきましょう！";
}else if (true_count > 20){
    message = "基本的な知識は身についていますね。<br>まだ一部曖昧な部分があるので、間違えた箇所は参考書で復習し、再度問題を解いて満点にしましょう！";
}else if (true_count > 10){
    message = "まだまだ合格までの知識は足りていません。<br>間違えた箇所を重点的に復習しましょう。<br>一通り復習したら当テストを再度解いてみましょう。";
}else{
    message = "勉強が全然足りないです。<br>解説を読んで、まずは当テストで満点を目指しましょう！";
}

// 点数の出力
document.getElementById("result").innerHTML = "採点結果、あなたの得点は <span class='score'>" + true_count + "</span> 点でした！";
document.getElementById("result").innerHTML += "<a href='https://twitter.com/share's class='twitter-share-button' data-text='ＭＥ2種試験直前実力テストの結果は【" + true_count + "点】でした！' data-url='https://mechokuzen.site'>Tweet</a>";

// メッセージ出力
document.getElementById("message").innerHTML = message;

// 問題と解説の出力
var html = "";
for (var q in questions){
    html += "<section><p>【問題 " + (parseInt(q) +1) + " 】" + questions[q][0] + "<span class='font-color-red'>【正解 " + questions[q][5] + " 】</span><br><br>";

    if (questions[q][4] != ""){
        html += "<img src='" + questions[q][4] + "' alt='image' width='250' height='250'>";
    }

    html += "<input type='radio' name=q" + (parseInt(q) +1) + " value='1'" + (getParam("q" + (parseInt(q) +1)) == 1 ? 'checked' : '') + ">1)" + questions[q][1] + "<br>";
    html += "<input type='radio' name=q" + (parseInt(q) +1) + " value='2'" + (getParam("q" + (parseInt(q) +1)) == 2 ? 'checked' : '') + ">2)" + questions[q][2] + "<br>";
    html += "<input type='radio' name=q" + (parseInt(q) +1) + " value='3'" + (getParam("q" + (parseInt(q) +1)) == 3 ? 'checked' : '') + ">3)" + questions[q][3] + "<br>";

    if (ans[parseInt(q) +1]){
        html += "<p class='explanation' style='background: #cfc;'>正解！<br>" + questions[q][6] + "</p>";
    }else{
        html += "<p class='explanation' style='background: #fcc;'>誤り！<br>" + questions[q][6] + "</p>";
    }
    html +=  "</p></section>";
}
html += "<a href='index.html'><button>もう一度トライ</button></a>";
document.getElementById("questions").innerHTML = html;

// 指定したURLパラメータの値を取得
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
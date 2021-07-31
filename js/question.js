/*====== slick ======*/
$('#slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'slide-dots',
});
/*====== slick ======*/

/*====== クイズアプリ ======*/

// 質問と回答をまとめたオブジェクトの作成
let Question = {
    question1: '絵画の写真から出題：このレストランはどっち？',
    question1_answer: ['センターストリート・コーヒーハウス','イーストサイド・カフェ'],
    question2: 'お城の写真から出題：このお城で暮らすプリンセスはどっち？',
    question2_answer: ['オーロラ','ベル'],
    question3: '最後の写真から出題：望遠鏡を覗くこの鳥の名前は？',
    question3_answer: ['スカットル','スクロット'],
};

console.log(Question);

// 質問エリアのID取得
let Qwrap = document.getElementById('question-wrap');
let Q1 = document.getElementById('Q1-area');
let Q2 = document.getElementById('Q2-area');
let Q3 = document.getElementById('Q3-area');

// オブジェクトから質問文を取得し、HTML上に書き出し
let Q1_code = '<p>' + Question.question1 + '</p>';
let Q2_code = '<p>' + Question.question2 + '</p>';
let Q3_code = '<p>' + Question.question3 + '</p>';

// オブジェクトから選択肢を取得し、HTML上に書き出し
Q1.innerHTML = Q1_code + '<input id="Q1_A" type="radio" name="no1">' + Question.question1_answer[0] + '<input id="Q1_B" type="radio" name="no1">' + Question.question1_answer[1] + '<div id="error_msg01"></div>';
Q2.innerHTML = Q2_code + '<input id="Q2_A" type="radio" name="no2">' + Question.question2_answer[0] + '<input id="Q2_B" type="radio" name="no2">' + Question.question2_answer[1] + '<div id="error_msg02"></div>';
Q3.innerHTML = Q3_code + '<input id="Q3_A" type="radio" name="no3">' + Question.question3_answer[0] + '<input id="Q3_B" type="radio" name="no3">' + Question.question3_answer[1] + '<div id="error_msg03"></div>';

// エラーメッセージ表示箇所
let errorMsg_01 = document.getElementById('error_msg01');
let errorMsg_02 = document.getElementById('error_msg02');
let errorMsg_03 = document.getElementById('error_msg03');

let btn = document.getElementById('btn'); // 確認ボタン

let result = document.getElementById('result-area'); // 回答結果

// 確認ボタンが押下された時にイベント実行
btn.addEventListener('click', function(){

    let answer_box = []; // 正解数をここに集計

    // 問1の処理
    if( !quiz_form.no1[0].checked && !quiz_form.no1[1].checked ) {
        // どの選択肢も押されていない時にエラーメッセージを表示させる
        errorMsg_01.style.display = 'block';
        errorMsg_01.innerHTML = '<p class="error_1">問1の選択肢が押されていません！</p>';
    } else if( quiz_form.no1[0].checked || quiz_form.no1[1].checked ) {
        // どちらかが押された時に正誤判定を行う
        errorMsg_01.style.display = 'none'; // エラーメッセージが表示されていた場合消去
        if( quiz_form.no1[0].checked ) {
            answer_box.push('正解');
        } else {
            answer_box.push('不正解');
        }
    }
    // 問2の処理
    if( !quiz_form.no2[0].checked && !quiz_form.no2[1].checked ) {
        // どの選択肢も押されていない時にエラーメッセージを表示させる
        errorMsg_02.style.display = 'block';
        errorMsg_02.innerHTML = '<p>問2の選択肢が押されていません！</p>';
    } else if( quiz_form.no2[0].checked || quiz_form.no2[1].checked ) {
        // どちらかが押された時に正誤判定を行う
        errorMsg_02.style.display = 'none'; // エラーメッセージが表示されていた場合消去
        if( quiz_form.no2[1].checked ) {
            answer_box.push('正解');
        } else {
            answer_box.push('不正解');
        }
    }
    // 問3の処理
    if( !quiz_form.no3[0].checked && !quiz_form.no3[1].checked ) {
        // どの選択肢も押されていない時にエラーメッセージを表示させる
        errorMsg_03.style.display = 'block';
        errorMsg_03.innerHTML = '<p>問3の選択肢が押されていません！</p>';
    } else if( quiz_form.no3[0].checked || quiz_form.no3[1].checked ) {
        // どちらかが押された時に正誤判定を行う
        errorMsg_03.style.display = 'none'; // エラーメッセージが表示されていた場合消去
        if( quiz_form.no3[0].checked ) {
            answer_box.push('正解');
        } else {
            answer_box.push('不正解');
        }
    }

    // 正解数を集計
    let correct = answer_box.filter(function(value) {
        return value === '正解';
    });

    // ※確認用 結果が正しく集計されているか？
    console.log(answer_box); // 正誤判定
    console.log(correct.length); //正解数

    // 問題が全て押されていれば結果表示、1問でも漏れていれば警告文表示
    if(answer_box.length == 3) {
        result.innerHTML = '3問中...<span>' + correct.length + '</span>問正解！';
    } else {
        result.innerHTML = '<p>全ての問題に回答してください！</p>';
    }
});

/*====== クイズアプリ ======*/

/*====== CSSでJavaScript書き換え ======*/

// 実行ボタンのID取得
let change_action = document.getElementById('change-btn');

// 実行ボタンが押された時に該当箇所にclassを付与、classを持っているならば外す
change_action.addEventListener('click', function(){
    if(Qwrap.classList.contains('change-BG')) {
        Qwrap.classList.remove('change-BG');
        change_action.innerText = '背景を変える';
    } else {
        Qwrap.classList.add('change-BG');
        change_action.innerText = '背景を戻す';
    }
});

/*====== CSSでJavaScript書き換え ======*/
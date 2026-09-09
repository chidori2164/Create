// ==========================
// 目前劇情位置
// ==========================

let currentLine = 0;


// ==========================
// 找到 HTML 元素
// ==========================

const game =
    document.getElementById("game");

const backgroundText =
    document.getElementById("background-text");

const character =
    document.getElementById("character");

const name =
    document.getElementById("name");

const text =
    document.getElementById("text");


// ==========================
// 顯示劇情
// ==========================

function showLine() {

    // 取得目前這一句
    const line = story[currentLine];


    // --------------------------
    // 更新背景
    // --------------------------

    backgroundText.innerText =
        line.background;


    // --------------------------
    // 更新角色
    // --------------------------

    character.innerText =
        line.character;


    // --------------------------
    // 更新名字
    // --------------------------

    name.innerText =
        line.name;


    // --------------------------
    // 更新台詞
    // --------------------------

    text.innerText =
        line.text;
}


// ==========================
// 下一句
// ==========================

function nextLine() {

    // 下一句
    currentLine++;


    // --------------------------
    // 還有劇情
    // --------------------------

    if (currentLine < story.length) {

        showLine();

    }


    // --------------------------
    // 劇情結束
    // --------------------------

    else {

        name.innerText = "";

        text.innerText =
            "—— 第一章結束 ——";

        character.innerText = "";

        document.getElementById("next").innerText = "";
    }
}


// ==========================
// 玩家點擊遊戲畫面
// ==========================

game.addEventListener(
    "click",
    nextLine
);


// ==========================
// 遊戲開始
// ==========================

showLine();

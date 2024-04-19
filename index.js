const express = require("express");
const app = express();

// テンプレートエンジンにEJS使用するように設定
app.set("view engine", "ejs");

// publicフォルダ内のファイルを、を静的ファイルとして扱うよう設定
app.use("/public", express.static("public"));

// ルーティングを読み込む
const routers = require("./routes");
app.use(routers);

// localhost:3000で起動
app.listen(3000, () => {
    console.log("Listening on localhost port 3000");
});
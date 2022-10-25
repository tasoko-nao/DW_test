"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
// インプットを取得
var targetInput = document.querySelector(".targetInput");
// ボタンを取得
var targetButton = document.querySelector(".targetButton");
// リクエスト送信の処理
var requestImagePath = function () {
    // axios.get("http://example.com/").then((res) => {});
    axios_1.default.get("api/saveImageClass/").then(function (res) {
        console.log(res);
        console.log("success");
    });
};
// ボタンに処理を割り当てる
targetButton.addEventListener("click", requestImagePath);
//# sourceMappingURL=app.js.map
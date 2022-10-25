import axios from "axios";

// インプットを取得
const targetInput = document.querySelector(".targetInput");

// ボタンを取得
const targetButton = document.querySelector(".targetButton")!;

// リクエスト送信の処理
const requestImagePath = () => {
  // axios.get("http://example.com/").then((res) => {});
  axios.get("api/saveImageClass/").then((res: any) => {
    console.log(res);
    console.log("success");
  });
};

// ボタンに処理を割り当てる
targetButton.addEventListener("click", requestImagePath);

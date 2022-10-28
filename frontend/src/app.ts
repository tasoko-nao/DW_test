import axios, { AxiosResponse } from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

// 型を定義
type analytics_res = {
  success: string;
  message: string;
  estimated_data: {
    class: number;
    confidence: number;
  };
};

// インプットを取得
const targetInput: HTMLInputElement = document.querySelector(".targetInput")!;

// ボタンを取得
const targetButton: HTMLButtonElement =
  document.querySelector(".targetButton")!;

// 結果表示のDOMを取得
const targetResult: HTMLParagraphElement =
  document.querySelector(".targetResult")!;

// リクエスト送信の処理
const requestImagePath = async () => {
  const image_path = targetInput.value;

  // リクエスト送信時のtimestampを定義
  const request_timestamp = Math.floor(Date.now() / 1000);

  axios
    // .post("http://example.com/", image_path)
    .post("api/returnImageClass/", image_path)
    .then((res: AxiosResponse<analytics_res>) => {
      const { data } = res;

      // レスポンス受信時のtimestampを定義
      const response_timestamp = Math.floor(Date.now() / 1000);

      // レスポンスから保存するデータを定義
      const save_data = {
        image_path,
        success: data.success,
        message: data.message,
        class_num: data.estimated_data?.class || null,
        confidence: data.estimated_data?.confidence || null,
        request_timestamp,
        response_timestamp,
      };

      // 保存するAPIへデータを送信
      axios({
        method: "POST",
        url: "api/saveImageClass/",
        data: { save_data },
      }).then((res: AxiosResponse) => {
        // 保存したデータを画面に描画
        const saved_analytics_log = res.data.result[0];
        targetResult.innerHTML = JSON.stringify(
          saved_analytics_log,
          null,
          "\t"
        );
      });
    })
    .catch(() => {
      alert("エラーが発生しました。時間をおいて再度実行してください。");
    });
};

// ボタンに処理を割り当てる
targetButton.addEventListener("click", requestImagePath);

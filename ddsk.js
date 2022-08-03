/**
 * 【問題】配列{"ドド","スコ"}からランダムに要素を標準出力し続け、
 * 『その並びが「ドドスコスコスコ」を3回繰り返したもの』に一致したときに
 * 「ラブ注入♡」と標準出力して終了するプログラムを作成せよ(配点:5点)
 */
const dd = "ドド";
const sk = "スコ";
const ddsk = () => {
  return ["ドド", "スコ"][Math.round(Math.random())];
};
let arr = new Array(12).fill().map(() => ddsk());
const FINISH = "ラブ注入♡";
while (arr.join("") != (dd + sk + sk + sk).repeat(3)) {
  const w = ddsk();
  arr.shift();
  arr.push(w);
  process.stdout.write(w);
}
console.log(FINISH);

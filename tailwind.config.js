/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
  // src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성 해줍니다.

  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FF3F6D",
        sub1: "#FF5F85",
        sub2: "#FF8CA7",
        container1: "#FFD8E1",
        container2: "#FFEEF2",
        "main-text": "#000000",
        "sub-text1": "#333333",
        "sub-text2": "#4A5160",
        "sub-text3": "#D1D1D1",
        "sub-text4": "#F1F1F1",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

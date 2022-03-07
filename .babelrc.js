///npm i -D @babel/core @babel/preset-env
//browser list가 package.json 파일에 추가되어야 한다.
//babel은 es6이상의 버전을 es5이하에서도 동작하도록 바꾸어주는것
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin=transform-runtime']
  ]

}
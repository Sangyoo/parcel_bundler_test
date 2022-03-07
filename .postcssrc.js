//ESM 모듈 => import, export의 형식 기본적인 javascript 모듈
//그러나 node.js에서는 esm을 지원하지 않고 commonJS를 지원한다.
//commonJs에서는 import 대신에 require(), export 대신에 module.exports를 사용
//javascript는 브라우저에서 동작하는 환경이 있고, browser에서 동작하는 환경이 있다
//이 .postcssrc.js파일은 bundler를 통해서 변환하는 용도로 사용하기 때문에
//브라우저가 아닌 node.js에서 동작하는 것이기 때문이다.

//import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export{
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    autoprefixer
  ]
}
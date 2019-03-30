// bin.js 는 서버 실행

const server = require('./server');
const hostname = '127.0.0.1'; // 사용할 서버 호스트네임
const port = 3000; // 사용할 서버 포트

server.listen(port, hostname, () => { // 요청 대기가 완료되면 실행되는 콜백 함수
    // 터미널에 로그를 기록
    console.log(`Server running at http://${hostname}:${port}/`);
})
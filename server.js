const http = require('http'); // 노드 모듈 가져오기

const hostname = '127.0.0.1'; // 사용할 서버 호스트네임
const port = 3000; // 사용할 서버 포트

// 서버 생성
const server = http.createServer((req, res) => { // 요청이 오면 실행되는 콜백 함수
    res.statusCode = 200; // 응답 상태값 설정
    res.setHeader('Content-Type', 'text/plain'); // 응답 헤더 중 Content-Type 설정
    res.end('Hello, World!\n'); // 응답 데이터 전송
})

server.listen(port, hostname, () => { // 요청 대기가 완료되면 실행되는 콜백 함수
    // 터미널에 로그를 기록
    console.log(`Server running at http://${hostname}:${port}/`);
})
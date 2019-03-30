require('should');
const server = require('./server');

describe('server', () => {
    // 서버 인스턴스가 간단히 listen 메서드만 가져야 한다는 코드이다.
    it('should have listen()', () => {
        server.should.have.property('listen');
        should(typeof server.listen).be.equal('function');
    })
})

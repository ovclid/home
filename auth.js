document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    //const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 여기에서 실제 사용자 이름과 비밀번호를 설정합니다
    const validUsername = 'admin';
    const validPassword = '0000';

    //if (username === validUsername && password === validPassword) {
    if (password === validPassword) {
        document.getElementById('message').textContent = '로그인에 성공하였습니다.';
        // 인증이 성공하면 다른 페이지로 리디렉션할 수 있습니다
        window.location.href = 'role.html';
    } else {
        document.getElementById('message').textContent = '유효하지 않은 암호입니다.';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 여기에서 실제 사용자 이름과 비밀번호를 설정합니다
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        document.getElementById('message').textContent = 'Login successful!';
        // 인증이 성공하면 다른 페이지로 리디렉션할 수 있습니다
        window.location.href = 'protected.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});

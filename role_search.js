// search.js 파일 예시
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const content = document.getElementById('content');
    const sections = content.querySelectorAll('h2');

    let found = false;

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            section.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('No matching section found.');
    }
});

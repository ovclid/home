fetch('.env')
  .then(response => response.json()) // 응답을 JSON으로 파싱
  .then(data => console.log(data))   // 파싱된 데이터를 콘솔에 출력
  .catch(error => console.error('Error:', error));


require('dotenv').config();
console.log("DB_HOST:", process.env);

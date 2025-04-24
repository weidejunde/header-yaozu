// File header.js

// Định nghĩa chuỗi HTML cho phần header
const headerHTML = `
  <header>
    <nav>
      <ul>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/about">Giới thiệu</a></li>
        <li><a href="/contact">Liên hệ</a></li>
      </ul>
    </nav>
  </header>
`;

// Đảm bảo rằng khi tệp JS này được tải, phần header sẽ được chèn vào trang
document.addEventListener("DOMContentLoaded", function() {
  // Chèn header vào phần đầu trang
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

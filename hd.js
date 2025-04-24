// File header.js

// Hàm chèn CSS và HTML vào trang
function insertHeader() {
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

  // Định nghĩa CSS cho phần header
  const headerCSS = `
    <style>
      header {
        background-color: #333;
        padding: 10px 0;
      }
      nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      nav ul li {
        display: inline;
        margin-right: 20px;
      }
      nav ul li a {
        color: white;
        text-decoration: none;
        font-size: 16px;
      }
      nav ul li a:hover {
        text-decoration: underline;
      }
    </style>
  `;

  // Chèn CSS vào phần head của tài liệu
  document.head.insertAdjacentHTML('beforeend', headerCSS);

  // Chèn header vào phần đầu trang
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Đảm bảo hàm này được gọi khi tài liệu đã tải xong
document.addEventListener("DOMContentLoaded", insertHeader);

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

// Định nghĩa chuỗi CSS cho phần header
const headerCSS = `
  header {
    background-color: #333;
    color: white;
    padding: 10px 0;
  }
  nav ul {
    list-style: none;
    padding: 0;
  }
  nav ul li {
    display: inline-block;
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
`;

// Đảm bảo rằng khi tệp JS này được tải, phần header và CSS sẽ được chèn vào trang
document.addEventListener("DOMContentLoaded", function() {
  // Chèn header vào phần đầu trang
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Chèn CSS vào phần <head> của trang
  const style = document.createElement('style');
  style.textContent = headerCSS;
  document.head.appendChild(style);
});

// File JavaScript này sẽ chứa nội dung HTML dưới dạng chuỗi
const headerHTML = `
  <header>
    <nav>
      <ul>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/about">Giới thiệu</a></li>
        <li><a href="/contact">Liên hệ</a></li>
        <li><a href="/dictionary">Từ điển</a></li>
      </ul>
    </nav>
  </header>
  <style>
    header {
      background-color: #333;
      color: white;
      padding: 10px 20px;
    }
    nav ul {
      list-style: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin-right: 15px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
    }
    nav ul li a:hover {
      text-decoration: underline;
    }
  </style>
`;

// Chèn HTML vào trang khi tài liệu tải xong
document.body.insertAdjacentHTML('afterbegin', headerHTML);
document.body.classList.remove('hidden');

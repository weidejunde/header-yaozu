// header.js

const headerHTML = `
  <style>
    header {
      background-color: #333;
      padding: 10px;
      color: white;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin-right: 20px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
    }
  </style>
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
`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);

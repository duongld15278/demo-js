import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

// Tương đương với việc viết data-navigo để không phải reload lại trang
const router = new Navigo("/", { linksSelector: "a" });

// Tạo ra 1 hàm(arrow function) nhận về 1 tham số là content
const print = (content) => {
    // InnerHtml phương thức của 1 đối tượng (content đang đuọc truyền vào 1 là 1 đối tượng)
    document.querySelector("#app").innerHTML = content.render();
};

// Tạo router để chuyển hướng => chuyển 1 object vào trong hàm print()
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
});

// Chạy router
router.resolve();
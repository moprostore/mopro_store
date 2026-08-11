// تأثير بسيط عند الضغط على أزرار الموقع
document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        link.style.transform = "scale(0.96)";

        setTimeout(function () {
            link.style.transform = "";
        }, 150);
    });
});


// زر الرجوع لأعلى الصفحة
const topButton = document.createElement("button");

topButton.innerHTML = "⬆️";
topButton.title = "العودة لأعلى";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.left = "20px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.borderRadius = "50%";
topButton.style.border = "1px solid #d4af37";
topButton.style.background = "#075cff";
topButton.style.color = "#ffffff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "9999";

document.body.appendChild(topButton);


// إظهار زر الرجوع عند النزول
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});


// الرجوع لأعلى الصفحة
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

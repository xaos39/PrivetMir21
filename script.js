function showHello() {
    const message = document.getElementById("message");
    message.textContent = "Hello, World!";
    message.classList.add("animation-text");

    // Удаляем класс анимации после завершения для возможности повторной анимации
    setTimeout(() => {
        message.classList.remove("animation-text");
    }, 600);
}
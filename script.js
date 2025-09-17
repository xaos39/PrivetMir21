function showHello() {
    const message = document.getElementById("message");
    message.textContent = "Hello, World!";
    message.classList.add("animation-text");

    // ������� ����� �������� ����� ���������� ��� ����������� ��������� ��������
    setTimeout(() => {
        message.classList.remove("animation-text");
    }, 600);
}
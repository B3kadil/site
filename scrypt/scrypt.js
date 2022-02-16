darkMode.onclick() {
    document.body.classList.toggle("dark")
    darkMode.innerText = document.body.classList.contains("dark") ? "" : ""
}
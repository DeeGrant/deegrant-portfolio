function setCopyrightCurrentYear() {
    const domYear = document.getElementById('copyright-year')

    domYear.innerText = new Date().getFullYear().toString()
}

setCopyrightCurrentYear()
function Encender() {
    const html = document.documentElement

    html.classList.toggle('Dark')

    /*if(html.classList.contains('Dark')) {
       html.classList.remove('Dark')
    } else {
       html.classList.add('Dark')
    } */

    const img = document.querySelector("#Perfil img")

    if (html.classList.contains("Dark")) {
        img.setAttribute("src", "./assets/desktop-wallpaper-galaxia-darkness-meta-knight-by-kurama805-on-deviantart-backgrounds-thumbnail.jpg")
    } else {
        img.setAttribute("src", "./assets/download (1).png")
    }
  
}
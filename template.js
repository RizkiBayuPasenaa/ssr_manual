const templateHome = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
</head>
<body>
  <header>
    <h1>{{heading}}</h1>
  </header>
  <main>
    <p>{{content}}</p>
    <p>Current time: {{currentTime}}</p>
  </main>
  <footer>
    <p>&copy; {{year}} My Website</p>
  </footer>
  <script>
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const currentlyOpen = document.querySelector(".accordion-content.open");

        // Tutup yang terbuka (jika ada) kecuali yang diklik
        if (currentlyOpen && currentlyOpen !== header.nextElementSibling) {
          currentlyOpen.classList.remove("open");
        }

        // Toggle konten yang diklik
        const content = header.nextElementSibling;
        content.classList.toggle("open");
      });
    });
  </script>
</body>
</html>
`;


const templateAbout = `
<html>
  <head>
    <title>About</title>
  </head>
  <body>
    <h1>About</h1>
    <p>This is the about page.</p>
  </body>
</html>
`;


export { templateHome, templateAbout };
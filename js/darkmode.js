const darkmodeToggle = document.querySelector(".darkmode");

      darkmodeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        const isDarkMode = document.body.classList.contains("dark");
        document.body.style.background = isDarkMode ? "#252525" : "#f9f9f9";
        document.body.style.color = isDarkMode ? "#f9f9f9" : "#252525";

        // Toggle visibility of light and dark mode icons
        const lightIcon = document.querySelector(".darkmode .light");
        const darkIcon = document.querySelector(".darkmode .dark");

        if (isDarkMode) {
          lightIcon.style.display = "inline-block";
          darkIcon.style.display = "none";
        } else {
          lightIcon.style.display = "none";
          darkIcon.style.display = "inline-block";
        }
      });
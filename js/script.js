    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('offen');
      overlay.classList.toggle('aktiv');
      
      if (sidebar.classList.contains('offen')) {
        menuBtn.textContent = 'X CLOSE';
      } else {
        menuBtn.textContent = '_> MENU';
      }
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('offen');
      overlay.classList.remove('aktiv');
      menuBtn.textContent = '_> MENU';
    });




    const titleText = "Registry";
        let isDeleting = false;
        let currentText = '';

        function typeTabTitle() {
            if (!isDeleting) {
                currentText = titleText.substring(0, currentText.length + 1);
            } else {
                currentText = titleText.substring(0, currentText.length - 1);
            }

            document.title = currentText || 'by P.E'; 

            let typeSpeed = isDeleting ? 150 : 250;

            if (!isDeleting && currentText === titleText) {
                typeSpeed = 2000; 
                isDeleting = true;
            } 

            else if (isDeleting && currentText === '') {
                isDeleting = false;
                typeSpeed = 500; 
            }

            setTimeout(typeTabTitle, typeSpeed);
        }
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(typeTabTitle, 1000);
        });
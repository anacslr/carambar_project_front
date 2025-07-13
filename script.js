async function afficherBlague() {
      const container = document.getElementById('blague');
      container.textContent = "Chargement...";

      try {
        const res = await fetch('https://carambar-project-back.onrender.com/api/v1/blagues/random');
        const data = await res.json();

          if (data && data.question && data.answer) {
            container.innerHTML = `<strong>${data.question}</strong><br>${data.answer}`;
          } else {
            container.textContent = "Oops ! Aucune blague trouvée.";
          }
      } catch (error) {
        console.error(error);
        container.textContent = "Erreur lors du chargement de la blague.";
      }
    }
README - Portfolio TCHOUMBA TIBONCHO FRED JUNIOR

Contenu:
- index.html
- projets.html
- competences.html
- services.html
- temoignages.html
- contact.html
- style.css
- main.js
- cv.pdf (modèle vide)
- favicon.ico

Installation et test local:
1. Ouvre le dossier dans Visual Studio Code.
2. Installe l'extension Live Server (si tu ne l'as pas).
3. Clique droit sur index.html -> "Open with Live Server".

Configurer EmailJS (formulaire contact):
1. Crée un compte sur https://www.emailjs.com/
2. Ajoute un service email (ex: Gmail) et crée un template.
3. Dans contact.html remplace:
   - YOUR_SERVICE_ID par l'ID du service
   - YOUR_TEMPLATE_ID par l'ID du template
   - YOUR_PUBLIC_KEY par ta clé publique EmailJS (dans le script d'initialisation en haut de contact.html)
4. Dans main.js décommente la partie emailjs.send(...) et supprime la simulation.
5. Dans le template EmailJS, configure la variable de réception (ton adresse) et les champs: from_name, reply_to, message.

Modifier le CV:
- Remplace cv.pdf par ton fichier CV (même nom ou modifie le lien dans index.html).

Changer les couleurs:
- Ouvre style.css et modifie la couleur principale (#33ccff) ou autres règles.

Support:
Si tu veux que j'intègre ta clé EmailJS et ton adresse (ou que je personnalise davantage), dis-le et je t'explique comment procéder en toute sécurité.

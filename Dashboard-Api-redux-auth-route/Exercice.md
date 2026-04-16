Dans ce projet Dashboard-api
- Créer un fichier services.js contenant un ensemble de fonction pour les appel de l'API
    - src/
        - services/
            - services.js
                - getTasks() : on récupère les taches depuis l'API
                - createTask() : on envoie un appel API afin de créer une nouvelle tâche (POST)
                - deleteTask() : on envoie un appel API afin de supprimer une des tâche existante (DELETE)

- Appel des services dans TaskDashboard
- Un useEffect() pour getTask
- createTask() lors de la validation du form (pensez à affichez vous même la tâche dans la page)
- deleteTask() dans une nouvelle fonction qui sera envoyée en prop à TaskCard
    - Il faudra créer un bouton pour chaque tâche permettant de déclencher la suppression (pensez à supprimer vous même la tâche dans la page)
- Créer un nouveau component : ErrorAlert.jsx afin d'afficher les erreurs potentielles sur les appel de l'API
- Optionel :
    - Mettre une animation lors du chargement des tâches (bootstrap : spinner)
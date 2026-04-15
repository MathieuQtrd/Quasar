Mettre en place Redux toolkit pour la gestion des tâches sur le Dashboard
    - Creation du store
    - Creation du slice pour les tasks
        - initialState
        - addTask()
        - deleteTask()
        - toggleTaskStatus() (En cours - Terminée)        
        - setFilter()
            - Possibilité de filtrer par statut et par priorité
        - changePriority() - optionnel

    - Provider pour rendre le store disponible dans toute l'application
    - Appel de nos action sur les components correspondant
        - Possibilités de les passer en prop si vous le souhaitez mais le fait d'utiliser Redux nous permet un organisation plus cohérente.
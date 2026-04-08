# DASHBOARD
   Le dashboard doit avoir plusieurs blocs d'informations :
        listing de tâches avec les informations suivantes :
                - créateur de la tâche
                - employé affecté sur la tâche
                - état (en attente, en cours, en attente de validation, validée, fermée)
                - priorité (faible, normale, haute, urgente)
                - date de création
            Un input permettant de filtrer les taches par mots clés
            Un select permettant de filtrer les taches par employé
            Un input | boutons permettant de filtrer les taches par état
            Un input | boutons permettant de filtrer les taches par priorité

            Lors du clic sur une tache on ouvre une modal avec le détail de la tâche 
                - les informations déjà présentes + la description de la tache + toute sorte d'informations selon le sujet (maquette, liens, commentaires ...)
            
            Donner la possibilité de changer la priorité d'une tache
            Donner la possibilité de changer l'état d'une tache
            Donner la possibilité de changer l'employé affecté à une tache
            Donner la possibilité d'ordonner les tâches selon leur état et/ou leur priorité

        Un bloc avec des widgets
            - Total des utilisateurs (employés)
            - Nombre totale de en cours 
            - Nombre totale de en attente de validation 
            - Nombre total de tâche terminées
                Si on change un état, les données des widgets doivent changer en conséquence

            - Donner la possibilité d'afficher ou de cacher un widget
            - Donner la possibilité d'afficher ou de cacher le bloc de tous les widgets
    
    Utilisation de useState, useReducer, useContext



# EVENTS
    Un site permettant de lister des évènements
        - se baser sur l'export json pour les données des évènements
    - Un bloc avec une liste des évènement
    - ou 
    - Plusieurs bloc avec des évènement de même type

    - Possibilités de filtrer les évènements
        - par recherche sur le titre, la description
        - par date
        - par accessibilité  (accessibility dans l'export json)
        - par code postal
        - Payant / Gratuit 
        - Par audience
        - par catégorie ("qfap_tags" dans l'export)
    - Au clic sur un event, on ouvre une modal avec les informations complète de l'event
    - Mettre en place une pagination
        - On affiche un certain nombre d'event, si on clic sur la page suivante, on change les event par les suivants
            - Par exemple on affiche les 9 premiers events, si on clic sur la pagination sur la page 2, on affiche les 9 suivants et ainsi de suite
    - Donner la possibilité à l'utilisateur de liker un event ou à l'inverse d'annuler son like via un icone au clic.

    Utilisation de useState, useReducer, useContext
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// createAsyncThunk sert à gérer les actions asynchrones dans Redux
    // Les données ne sont disponibles immédiatement
    // permet la gestion des appels API en automatisant les étapes

    // Crée automatiquement :
        // tasks/fetchTasks/pending : en cours
        // tasks/fetchTasks/fulfilled : succes
        // tasks/fetchTasks/rejected : erreur

// Avec createAsyncThunk on  ne remplit plus reduces pour les actions liées à l'API. On passera par extraReducers

// On garde toujours les reducers pour les actions qui ne sont pas liées à l'api

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
    const data = await res.json()

    return data.map((task) => ({
        id: task.id,
        title: task.title,
        description: 'Tâche provenant de l\'api',
        priority: 'low',
        done: task.completed,
    }))

})

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task),    
    })
    const data = await res.json()

    return {
        id: Date.now(), // on change l'id car l'api renvoie toujours le même id (201)
        title: data.title,
        description: 'Tâche provenant de l\'api',
        priority: 'low',
        done: data.completed,
    }
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id,  {
        method: 'DELETE'
    })
    return id
})

const initialState = {
    items: [],

    filter: "all",
    loading: false,
    error: null,

}


const tasksSlice = createSlice({
    name: 'tasks',

    initialState,

    reducers: {
        
        // Changer le statut acheté / non acheté
        toggleTaskStatus: (state, action) => {
            // action.payload : l'id du produit
            const item = state.items.find(
                (task) => task.id === action.payload
            )
            // on vérifie
            if(item) {
                // on inverse
                item.done = !item.done 
            }
        },

        // Filtre pour afficher les produit de la liste 
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        // extraReducers permet de réagir à des actions qui ne sont pas définies dans le slice
        builder 
        // builder est un objet fourni par redux toolkit dans extraReducers
        // nous permet de déclarer des réaction à des actions
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true
            state.erreur = null
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload // on place les données reçues
        })
        .addCase(fetchTasks.rejected, (state) => {
            state.loading = false
            state.erreur = 'Erreur lors du chargement des tâches'
        })
        .addCase(addTask.pending, (state) => {
            state.loading = true
            state.erreur = null
        })
        .addCase(addTask.fulfilled, (state, action) => {
            state.loading = false
            state.items.unshift(action.payload); // on place les données reçues
        })
        .addCase(addTask.rejected, (state) => {
            state.loading = false
            state.erreur = 'Erreur lors de la création'
        })
        .addCase(deleteTask.pending, (state) => {
            state.loading = true
            state.erreur = null
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
            state.loading = false
            state.items = state.items.filter(
                (task) => task.id !== action.payload
            ) // on supprime la tâche concernée
        })
        .addCase(deleteTask.rejected, (state) => {
            state.loading = false
            state.erreur = 'Erreur lors de la suppression de la tâche'
        })
    }

})

export const { toggleTaskStatus, setFilter } = tasksSlice.actions 
export default tasksSlice.reducer 
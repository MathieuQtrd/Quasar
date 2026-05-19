# Le accessToken a une durée de vie limitée (15 min par exemple)
# Le refreshToken : connexion persistante moderne : permet de récupérer un nouveau accessToken

# Le accessToken permet d’accéder à l’API.
# Le refreshToken permet d’obtenir un nouveau accessToken sans refaire login.


EXEMPLE AVEC LARAVEL :
Laravel Sanctum utilise bien le header Authorization: Bearer <token> pour les tokens API
# ------------------------------------------------ 
Laravel envoie :
    {
        "user": {
            "id": 1,
            "name": "Mathieu",
            "email": "mathieu@test.fr"
        },
        "accessToken": "ACCESS_TOKEN_COURT",
        "refreshToken": "REFRESH_TOKEN_LONG"
    }
# ------------------------------------------------ 
Côté React : login
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
# ------------------------------------------------ 
Côté React requete protégée :
    async function getProfile() {
        const accessToken = localStorage.getItem("accessToken");

        const response = await fetch("http://localhost:8000/api/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.json();
    }
# ------------------------------------------------         
Laravel : Token expiré 
    {
        "message": "Token expired"
    }
# ------------------------------------------------        
Côté React : on utilise le refreshToken 
    async function refreshAccessToken() {
        const refreshToken = localStorage.getItem("refreshToken");

        const response = await fetch("http://localhost:8000/api/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refreshToken,
            }),
        });

        if (!response.ok) {
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            throw new Error("Session expirée");
        }

        const data = await response.json();

        localStorage.setItem("accessToken", data.accessToken);

        return data.accessToken;
    }
# ------------------------------------------------         
Il est possible de gérer le refresh directement :
    async function apiFetch(url, options = {}) {
        let accessToken = localStorage.getItem("accessToken");

        let response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (response.status === 401) {
            accessToken = await refreshAccessToken();

            response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        }

        return response;
    }
    #...
    #...
    async function getProtectedProfile() {
        const response = await apiFetch("http://localhost:8000/api/me");

        return response.json();
    }
# ------------------------------------------------         
Routes protégées côté Laravel :
    use App\Http\Controllers\Api\AuthController;
    use Illuminate\Support\Facades\Route;

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/refresh', [AuthController::class, 'refresh']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });

    La bdd doit avoir une colonne refresh_token dans la table users

import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false)
    const [error, setError] = useState(false)
    const [cadastro, setCadastro] = useState(false);
    const [usuarioId, setUsuarioId] = useState(0);

    async function Login(email, senha) {      
        console.log(email,senha); 
        if (email != "" && senha != "") {
           
            await fetch('http://10.139.75.43:5251/api/Usuarios/Login/' + email + "/" + senha, {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })
            .then(res => res.json())
            .then(json => {
                if(json.usuarioId != 0){
                    setLogado(true);
                    setUsuarioId(json.usuarioId);
                }                
            })
            .catch(err=> console.log(err))
        } else {
            setError(true);
        }
    }
    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, cadastro: cadastro,usuarioId:usuarioId, setCadastro }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
/*
Twitter card, 4 elementos principales
Imagen, nombre, nombre de usuario, boton
*/
// <></> es React.Fragment oculto
// section-App- Estilo separado para agregar margin a la app y no a cada elemento

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFolowing: true
    },
    {
        userName: 'facurs',
        name: 'Facundo Romero Sosa',
        isFolowing: true
    }
]

export function App () {
    //funcion como paramentro(props) const format = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev" initialIsFollowing={false}>
                <h1>Miguel Angel Durán</h1>
            </TwitterFollowCard>
            <TwitterFollowCard userName="facurs" >
                <strong>Facundo Romero Sosa</strong>
            </TwitterFollowCard>
            <TwitterFollowCard userName="DotCSV" >
                Carlos Santana
            </TwitterFollowCard>
            <TwitterFollowCard userName="OpenAI" >
                OpenAI
            </TwitterFollowCard>
            <TwitterFollowCard /*userName="OpenAI" Missing comentario jsx*/ >
                OpenAI
            </TwitterFollowCard>

            {
                users.map(user => {
                    const { userName, name, isFolowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName} /* lo mejor es poner la id de bd */
                            userName={userName}
                            initialIsFollowing={isFolowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
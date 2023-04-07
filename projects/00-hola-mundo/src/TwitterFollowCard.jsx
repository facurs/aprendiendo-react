import { useState } from "react"
//Para que el componente sea de verdad reutilizable se le deben pasar props o parametros 
//children prop especial
export function TwitterFollowCard ({userName = 'Unknown',children, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    //React dinamico
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' 

    const handClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/${userName}`}
                alt="El avatar de Midudev" />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
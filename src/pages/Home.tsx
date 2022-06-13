import ilustrationIgm from '../assets/image/illustration.svg'
import logoImg from '../assets/image/logo.svg'
import googleIconImg from '../assets/image/google-icon.svg'
import '../styles/auth.css'
import { Button } from '../components/Button'

export function Home(){
    return (
        <div id="page-auth">
            <aside id="aside">
                <img src={ilustrationIgm} alt="Ilustração simbolizando perguntas e respostas" id="img-ilustration"/>
                <strong id="aside-strong">Crie salas de Q&amp;A ao-vivo</strong>
                <p id="aside-p">Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main id="main">
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" id="main-img"/>
                    <button  className='button-google'>
                        <img src={googleIconImg} alt="Logo do Google" id="img-google"/>
                        Crie a sua sala com o Goole
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form id="form">
                        <input id="form-input"
                            type="text"
                            placeholder='Digite o código da sala'
                        />
                        <Button type="submit" id="form-button">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
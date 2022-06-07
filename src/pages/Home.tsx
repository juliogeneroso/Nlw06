import ilustrationIgm from '../assets/image/illustration.svg'
import logoImg from '../assets/image/logo.svg'
import googleIconImg from '../assets/image/google-icon.svg'

export function Home(){
    return (
        <div>
            <aside>
                <img src={ilustrationIgm} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask"/>
                    <button>
                        <img src={googleIconImg} alt="Logo do Google"/>
                        Crie a sua sala com o Goole
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder='Digite o código da sala'
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
import Navbar from './Navbar'
import Footer from './Footer'
import '../Reset.css'
import '../App.css'

function Login() {
    return (
        <>
            <Navbar/>
            <div className='divlogin'>
                <section className='login'>
                        <h1>Acessar</h1>
                        <input type="email" name="email" id="email" placeholder='Email or Login'/>
                        <input type="password" name="senha" id="senha" placeholder='Passoword'/>
                        <button className='LoginBtn'>Login</button>
                        <h3 className='Cadastro'>cadastre-se</h3>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Login
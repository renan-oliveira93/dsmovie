import { ReactComponent as GithubIcon } from 'assets/img/githubIcon.svg';
import './styles.css';

export default function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/renan-oliveira93">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
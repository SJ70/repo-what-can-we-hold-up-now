import './Header.css';
import 'material-symbols'

function Header() {
  return (
    <header className="header">
      <div className='header-filler'></div>
      <div className='header-items'>
        <img src='/img/game-title.png' alt='repo' height='60px' />
        <span>우리는 지금 무엇을 들 수 있을까</span>
        <button>
          <span className="material-symbols-outlined"> info </span>
        </button>
      </div>
    </header>
  )
}
export default Header;
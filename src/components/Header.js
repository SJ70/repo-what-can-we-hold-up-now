import './Header.css';
import 'material-symbols';
import InfoViewer from './InfoViewer';
import { useState } from 'react';

function Header() {

  const [viewInfo, setViewInfo] = useState(false);

  return (
    <header className="header">
      <div className='header-filler'></div>
      <div className='header-items'>
        <img src={process.env.PUBLIC_URL + '/img/game-title.png'} alt='repo' height='60px' />
        <span>우리는 지금 무엇을 들 수 있을까</span>
        <button onClick={() => setViewInfo(true)}>
          <span className="material-symbols-outlined"> info </span>
        </button>
      </div>
      {viewInfo && (<InfoViewer onClose={() => setViewInfo(false)} />)}
    </header>
  )
}
export default Header;
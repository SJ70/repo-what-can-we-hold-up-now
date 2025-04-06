import './InfoViewer.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const InfoViewer = ({ onClose }) => {
  const [md, setMd] = useState('');

  useEffect(() => {
    fetch('/docs/info.md')
      .then(res => res.text())
      .then(setMd);
  }, []);

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="info-viewer scroll" onClick={(e) => e.stopPropagation()}>
        <ReactMarkdown>{md}</ReactMarkdown>
        <button onClick={onClose}>
          <span className="material-symbols-outlined"> close </span>
        </button>
      </div>
    </div>
  );
};

export default InfoViewer;
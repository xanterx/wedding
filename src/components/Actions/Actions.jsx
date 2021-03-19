import './Actions.css';

const Actions: React.FC = () => {
  return (
    <div className="Actions">
      <div className="Language">
        <div className="Button" onClick={() => console.log('English')}>
          English
        </div>
        <div className="Button" onClick={() => console.log('Hindi')}>
          हिन्दी
        </div>
      </div>
    </div>
  );
};

export default Actions;

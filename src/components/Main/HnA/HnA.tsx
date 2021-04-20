import './HnA.css';

interface IProps {
  isEnglish: boolean;
}

const HnA: React.FC<IProps> = ({ isEnglish }) => {
  return (
    <div className="HnA">
      <div className="Invite">
        {isEnglish ? (
          <div className="English">
            <p className="SubScript">Due to Corona</p>
            <p>Our Marriage is Delayed</p>
            <p className="SubScript">please</p>
            <a>
              <p>Stay Tuned</p>
            </a>
          </div>
        ) : (
          <div className="Hindi">
            <p className="SubScript">कोरोना के कारण</p>
            <p>हमारी शादी विलंबित होगयी है</p>
            <p className="SubScript">कृपया</p>
            <a>
              <p>हमारे साथ बने रहे</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HnA;

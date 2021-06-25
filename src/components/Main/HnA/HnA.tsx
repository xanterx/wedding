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
            <p className="SubScript">ARE GETTING MARRIED</p>
            <p>2nd of July 2021</p>
            <p className="SubScript">AT</p>
            <a href="https://goo.gl/maps/vx4uyb3fL1CCgVAe8">
              <p>Shree Krishan Janmashtmi Ashram Vrindavan</p>
            </a>
          </div>
        ) : (
          <div className="Hindi">
            <p className="SubScript">का विवाह</p>
            <p>२ जुलाई २०२१</p>
            <p className="SubScript">को</p>
            <a href="https://goo.gl/maps/vx4uyb3fL1CCgVAe8">
              <p>श्री कृष्ण जन्माष्टमी आश्रम वृंदावन</p>
            </a>
            <p className="SubScript">में है</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HnA;

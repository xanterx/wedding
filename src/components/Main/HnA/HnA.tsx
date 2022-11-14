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
            <p>2nd of December 2022</p>
            <p className="SubScript">AT</p>
            <a href="https://goo.gl/maps/yGHYhv7mjhiCssk26">
              <p>Utsav Vatika near Jiwaji club, Gwalior</p>
            </a>
          </div>
        ) : (
          <div className="Hindi">
            <p className="SubScript">का विवाह</p>
            <p>२ दिसंबर २०२१</p>
            <p className="SubScript">को</p>
            <a href="https://goo.gl/maps/yGHYhv7mjhiCssk26">
              <p>उत्सव वाटिका, जीवाजी क्लब के पास, ग्वालियर</p>
            </a>
            <p className="SubScript">में है</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HnA;

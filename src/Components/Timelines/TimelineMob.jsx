import './svgAnimation.scss';
import { useSelector } from 'react-redux';

// position: absolute;
// justify-self: flex-start;
const TimelineMob = () => {
  const state = useSelector((state) => state.quiz);
  const { step } = state.userState;
  const { numberOfSteps } = state.defaultJson;

  const ropeOneHeight = 710;

  // return <div className='svg-animation-mob'>hello</div>;
};

export default TimelineMob;

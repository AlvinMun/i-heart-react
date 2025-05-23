import heart from '../assets/heart.svg';

const Heart = (props) => {
  return (
    <div className = 'heart'>
      <img className = 'heart-img' src = {heart} alt ='heart' />
      <p className = 'heart-message'>{props.msg}</p>
    </div>
  )
};

export default Heart;
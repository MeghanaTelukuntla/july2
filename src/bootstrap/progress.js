import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomProgress(prop) {
  const{scale}=prop
  return <ProgressBar now={scale} />;
}

export default CustomProgress;
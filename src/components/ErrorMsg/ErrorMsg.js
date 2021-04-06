import styled from 'styled-components';
import { motion } from 'framer-motion';

const ErrorMsgBlock = ({ className, children }) => {
  return (
    <ErrorMsg
      initial={{ x: '-30vw', opacity: 0, scale: 0, rotateZ: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1, rotateZ: 360 }}
      className={className}
    >
      {children}
    </ErrorMsg>
  );
};

const ErrorMsg = styled(motion('span'))`
  display: inline-block;
  margin-top: 10px;
  color: #c92a2a;
  font-size: 14px;
  font-weight: bold;
`;

export default ErrorMsgBlock;

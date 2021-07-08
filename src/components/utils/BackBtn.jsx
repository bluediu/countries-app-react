import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { startCleanDetails } from '../../context/actions/country';

const BackBtnStyled = styled.div`
  .back-btn {
    display: block;
    padding: 1rem 2rem;
    box-shadow: var(--shadow);
    width: 30%;
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
    text-align: left;
    color: var(--white);
    background-color: var(--darkBlue);
    margin-bottom: 5rem;
    margin-top: 2.4rem;
    margin-left: 2.4rem;
    cursor: pointer;

    @media only screen and (min-width: 1024px) {
      width: 10%;
      margin-bottom: 5rem;
      margin-left: 2.4rem;
    }
  }
`;

function BackBtn() {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleCleanData = () => {
    dispatch(startCleanDetails());
  };

  return (
    <BackBtnStyled>
      <span
        className="back-btn"
        onClick={() => {
          history.goBack();

          handleCleanData();
        }}
      >
        &larr; Back
      </span>
    </BackBtnStyled>
  );
}

export default BackBtn;

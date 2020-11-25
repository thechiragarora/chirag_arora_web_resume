import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

export default () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <Container>
      <Title title="Skills" />
      <div id="skills-container" style={{ marginBottom: '4em', fontSize: 'medium' }}>
      {skills.map(({ name }) => (
        <Row style={{ justifyContent: 'center', marginBottom: '0.5em' }}>{name}</Row>
      ))}
      </div>
    </Container>
  );
};

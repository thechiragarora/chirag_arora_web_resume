import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

export default () => {
  const { certifications } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="certification">
      <Container>
        <div className="certification-wrapper">
          <Title title="Certifications" />
          {certifications.map((certification) => {
            const { name, issuingOrganization, description, linkOfProof } = certification;

            return (
              <Row>
                {/* <Col lg={4} sm={12}> */}
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="certification-wrapper__text">
                    <h3 className="certification-wrapper__text-title">{name}</h3>
                    <h5>{issuingOrganization}</h5>
                    <div>
                      <p>{description}</p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href={linkOfProof}
                    >
                      See Credential
                    </a>
                  </div>
                </Fade>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

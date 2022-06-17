import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2022, text: 'AEC in Web Developpement'},
  { number: 2020, text: 'University Certificate in Accounting', },
  { number: 2019, text: 'DEC in Accounting', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <br/>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

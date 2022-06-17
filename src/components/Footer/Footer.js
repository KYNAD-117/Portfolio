import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:514-318-7945'>(514) 318-7945</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:danyk.allard@hotmail.com'>danyk.allard@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Trying my best to be the best !</Slogan>
        </CompanyContainer>
          <SocialContainer>
            <SocialIcons href='https://github.com/KYNAD-117?tab=repositories'>
              <AiFillGithub size="3rem "/>
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/danyk-allard/'>
              <AiFillLinkedin size="3rem "/>
            </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

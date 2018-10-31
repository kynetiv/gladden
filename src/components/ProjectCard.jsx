/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';

const Wrapper = styled.div`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = ({ title, link, children, bg }) => (
    <Link to={link}>
      <Wrapper href={link} rel="noopener noreferrer" bg={bg}>
        <Text>{children}</Text>
        <Title>{title}</Title>
      </Wrapper>
    </Link>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
};

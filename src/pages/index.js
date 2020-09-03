import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { VerticalTimeline } from "react-vertical-timeline-component"
import Fade from "react-reveal/Fade"

import profileImage from "../images/eu.png"
import TimelineItem from "../components/Timeline"
import Layout from "../components/layout"
import SEO from "../components/seo"
import curriculo from "../data/curriculo"

export default function Main() {
  return (
    <>
      <Layout>
        <SEO title="Bem vindo" />
        <Header className="d-flex justify-content-center align-items-center">
          <Fade big>
            <ProfileImage src={profileImage} />
          </Fade>
          <Fade big>
            <Name>
              <b>Matheus</b> Trindade dos Santos
            </Name>
          </Fade>
          <Fade big>
            <Desc className="text-muted">
              Desenvolvedor Front-End na Advice Group
            </Desc>
          </Fade>
          <Fade big>
            <Social>
              <IconArea href="https://github.com/trindadematheus" target="_blank">
                <FaGithub />
              </IconArea>
              <IconArea
                href="https://www.linkedin.com/in/trindadematheus/"
                target="_blank"
              >
                <FaLinkedinIn />
              </IconArea>
              <IconArea href="https://twitter.com/trnddev" target="_blank">
                <FaTwitter />
              </IconArea>
            </Social>
          </Fade>
        </Header>
      </Layout>
      <Body>
        <Container>
          <VerticalTimeline>
            {curriculo.map(item => {
              return <TimelineItem item={item} />
            })}
          </VerticalTimeline>
        </Container>
      </Body>
    </>
  )
}

const Header = styled.div`
  min-height: 35vh;
  padding: 40px 0px;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: -23px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${props => props.src});
  background-size: cover;
  border-radius: 3px;
`

const Name = styled.span`
  color: #333;
  font-size: 24px;
  margin-top: 20px;
`

const Desc = styled.p`
  font-weight: normal;
`

const Social = styled.div``

const IconArea = styled.a`
  padding: 10px 15px;
`

const Body = styled.div`
  background: white;
`

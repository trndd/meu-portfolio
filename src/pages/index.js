import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import Timeline from "../components/Timeline"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Main() {
  return (
    <Layout>
      <SEO title="Main" />
      <Header className="d-flex justify-content-center align-items-center">
        <ProfileImage src="https://i.imgur.com/ltSnKYz.png" />
        <Name>
          <b>Matheus</b> Trindade dos Santos
        </Name>
        <Desc className="text-muted">
          Desenvolvedor Front-End na Advice Group
        </Desc>
        <Social>
          <IconArea href="https://github.com/trndd" target="_blank">
            <FaGithub />
          </IconArea>
          <IconArea href="https://www.linkedin.com/in/trndd/" target="_blank">
            <FaLinkedinIn />
          </IconArea>
          <IconArea href="https://twitter.com/trnddev" target="_blank">
            <FaTwitter />
          </IconArea>
        </Social>
      </Header>
      <Body>
        <Timeline />
      </Body>
    </Layout>
  )
}

const Header = styled.div`
  min-height: 35vh;
  padding: 40px 0px;
  border-bottom: 1px solid #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
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
  margin-top: 30px;
`

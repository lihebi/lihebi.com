import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

import {
  ChakraProvider,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Alert,
  AlertIcon,
  Image,
} from "@chakra-ui/react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Info() {
  return (
    <div className="container">
      <Flex direction="row">
        <div>
          <Heading>Hebi Li</Heading>

          <Text>
            I'm currently a PhD student in CS@ISU starting 2014 Fall. I
            graduated from Electrical Engineering (1010) of USTC in 2014. See
            details in my CV(pdf).
          </Text>
          <Text>
            My research interests:
            <UnorderedList>
              <ListItem>Programming Language</ListItem>
              <ListItem>Artificial Intelligence</ListItem>
              <ListItem>Operating System </ListItem>
              <ListItem>Embedded system</ListItem>
            </UnorderedList>
          </Text>
        </div>
        <img src="../../static/img/hebi.png" width="200px" />
      </Flex>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ChakraProvider>
      <Layout
        title="Home"
        description="Description will go into a meta tag in <head />"
      >
        {/* <HomepageHeader /> */}
        <Info />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </ChakraProvider>
  );
}

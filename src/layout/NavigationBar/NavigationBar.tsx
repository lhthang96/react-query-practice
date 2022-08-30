import { Button, Image, Input, Navbar, Text } from '@nextui-org/react';
import React from 'react';
import IGDBLogo from 'src/assets/igdb_logo.jpeg';
import { StyledNavigationBar } from './NavigationBar.styles';

export const NavigationBar: React.FC = () => {
  return (
    <StyledNavigationBar>
      <Navbar.Brand>
        <Image src={IGDBLogo} alt="IGDB logo" width={72} />
        <Text b color="inherit" hideIn="xs">
          Query
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Input placeholder="Search" />
        </Navbar.Item>
        <Navbar.Item>
          <Button auto flat>
            Favorite
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </StyledNavigationBar>
  );
};

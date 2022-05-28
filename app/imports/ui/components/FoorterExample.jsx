import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class FooterExample extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
      <footer className='footer'>
        <div style={divStyle} className="ui center aligned container">
          <Grid textAlign='left' container columns="two">
            <Grid.Column>
              <h3>Links</h3>
              <List>
                <List.Item><a href="">Home</a></List.Item>
                <List.Item><a href="">About Us</a></List.Item>
                <List.Item><a href="">Location</a></List.Item>
                <List.Item><a href="">Newsletter</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <h3>Contact</h3>
              <List>
                <List.Item><a href="">Facebook</a></List.Item>
                <List.Item><a href="">Instagram</a></List.Item>
                <List.Item><a href="">Twitter</a></List.Item>
                <List.Item><a href="">LinkedIn</a></List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
      </footer>
    );
  }
}

export default FooterExample;

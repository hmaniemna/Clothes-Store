import React from "react";
import {Switch,Route ,BrowserRouter} from "react-router-dom";
import HomeP from "./pages/Home/Home";
import MenP from "./pages/Men/Men";
import WomenP from "./pages/Women/Women";
import {Container} from "react-bootstrap";


export default function MainRouter()
{
    return(
      <BrowserRouter>
       <Switch>
          <Route exact path="/">
            <Container>
              <HomeP/>
            </Container>
          </Route>
          <Route exact path="/Men">
            <Container>
              <MenP/>
            </Container>
          </Route>
          <Route exact path="/Women">
            <Container>
              <WomenP/>
            </Container>
          </Route>
        </Switch>
      </BrowserRouter>
       
    )
}


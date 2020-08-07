import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import TabelBuah from '../tugas11/TabelBuah.js';
import ClockCount from "../tugas12/ClockCount";
import Lists from '../tugas13/Lists.js';
import Listx from '../tugas14/Listx.js';
import TabelBuahx from '../tugas15/TabelBuah.js';

const Routes = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/tabelbuah">Tugas 11</Link>
                    </li>
                    <li>
                    <Link to="/clockcount">Tugas 12</Link>
                    </li>
                    <li>
                    <Link to="/lists">Tugas 13</Link>
                    </li>
                    <li>
                    <Link to="/listx">Tugas 14</Link>
                    </li>
                    <li>
                    <Link to="/tabelbuahx">Tugas 15</Link>
                    </li>
                </ul>
            </nav>

        <Switch>
          <Route path="/tablebuah">
            <TabelBuah/>
          </Route>
          <Route path="/clockcount">
            <ClockCount startCount = {101}/>
          </Route>
          <Route path="/lists">
            <Lists/>
          </Route>
          <Route path="/listx">
            <Listx/>
          </Route>
          <Route path="/tabelbuahx">
            <TabelBuahx/>
          </Route>
          <Route exact path="/">
            <TabelBuah/>
          </Route>
        </Switch>
      </div>
  );
}

export default Routes;
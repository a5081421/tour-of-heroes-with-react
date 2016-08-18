/**
* @file
*/
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import '../style/heroes.scss';

export class Heroes extends Component {
  constructor(props) {
    super(props);
  }

  onSelect(selectedHero) {
    this.props.actions.selectHero(selectedHero.id);
  }

  gotoDetail(selectedHero_id) {
    browserHistory.push(`/heroes/${selectedHero_id}`);
  }

  render() {
    const heroes = this.props.heroAppState.heroes;
    const selectedHero = this.props.heroAppState.selectedHero
    const heroNodes = heroes.map(hero => {
      return (
            <li
              key={hero.id}
              className={selectedHero === hero ? 'selected' : null }
              onClick={() => this.onSelect(hero)}>
              <span className="badge">{hero.id}</span> {hero.name}
            </li>

      );
    });

    let selectedHeroNode;
    if (selectedHero) {
      selectedHeroNode = (
        <div>
          <h2>{selectedHero.name.toUpperCase()} is my hero</h2>
          <button onClick={() => this.gotoDetail(selectedHero.id)}>View Details</button>
        </div>
      );
    }

    const style = { marginTop: '20px' };
    return (
      <div style={style}>
        <h2>My heroes</h2>
        <ul className="heroes">
          {heroNodes}
        </ul>
        {selectedHeroNode}
      </div>
    );
  }
}

export default Heroes;

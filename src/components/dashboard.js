/**
* @file
*/
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import '../style/dashboard.scss';

export default class Dashboard extends Component {
    gotoDetail(heroId) {
     browserHistory.push(`/heroes/${heroId}`);
   }

   render() {
     const heroes = this.props.heroAppState.heroes;

     const topHeroes = (heroes || []).slice(1, 5);
     const topHeroNodes = topHeroes.map(hero => {
       return (
         <div className="col-1-4" key={hero.id} onClick={() => this.gotoDetail(hero.id)}>
           <div className="module">
             <h4>{hero.name}</h4>
           </div>
         </div>
       );
     });
     return (
       <div>
         <h3>Top Heroes</h3>
         <div className="grid grid-pad">
           {topHeroNodes}
         </div>
       </div>
     );
   }
 }

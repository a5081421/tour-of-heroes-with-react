/**
* @file
*/
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import '../style/hero-detail.scss';

export default class HeroDetail extends Component {
    constructor(props) {
       super(props);
       this.onHeroClick = this.onHeroClick.bind(this);
     }

     componentDidMount() {
       const heroId = parseInt(this.props.params.id);
       this.onHeroClick(heroId);
     }

     onHeroClick(id) {
         this.props.actions.selectHero(id);
       }

     updateHeroName(selected_hero_id, event) {
         this.props.actions.changeName(selected_hero_id, event.target.value);
     }

    // Method2 onChange={this.updateHeroName }
    //  updateHeroName = (event) => {
    //      this.props.actions.changeName(this.props.heroAppState.selectedHero.id, event.target.value);
    //  }

     render() {
       const _hero = this.props.heroAppState.selectedHero;
       const style = { marginTop: '20px' };

       if (_hero) {
         return (
           <div style={style}>
             <h2>{_hero.name} details!</h2>
             <div><label>id: </label>{_hero.id}</div>
             <div>
               <label>name: </label>
               <div>
                 <input placeholder="name"
                   value={_hero.name}
                   onChange={(event) => this.updateHeroName(_hero.id, event) }/>

               </div>
             </div>
             <button onClick={() => browserHistory.goBack()}>Back</button>
           </div>
         );
       }
       return (<div style={style}><h2>Hero Not Found!</h2>
       <button onClick={() => browserHistory.goBack()}>Back</button>
       </div>);
     }
    }

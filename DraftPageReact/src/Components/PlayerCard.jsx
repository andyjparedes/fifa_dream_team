import firebase from '../Firebase/firebase';
import React,{Component} from 'react';

/**
 * 
 */
export default class PlayerCard extends Component { 
    constructor(props) {
        super(props);
    }
    getBackgroundImg() {
        // https://futhead.cursecdn.com/static/img/19/cards/large/1_1_3.png GOLD
        // https://futhead.cursecdn.com/static/img/19/cards/large/1_1_2.png SILVER
        // https://futhead.cursecdn.com/static/img/19/cards/large/1_1_1.png BRONZE
    }

    render() {
        return (<div style={{backgroundImage:{getBackgroundImg()}}}></div>)
    }
}
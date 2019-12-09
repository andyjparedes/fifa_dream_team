import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const imgGold = "https://futhead.cursecdn.com/static/img/19/cards/large/1_1_3.png";
/** 442 start
 * 
 */
class Formation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ST1:"",
            ST2:"",
            LM:"",
            RM:"",
            CM1:"",
            CM2:"",
            LB:"",
            RB:"",
            CB1:"",
            CB2:"",
            GK:""
        }

    }
    getData() {
		
		let team = this.props.curTeam;
		let data;
		if(team ==1) {
           data = this.props.t1;
        }
        else if(team ==2) {
			data = this.props.t2;
        }
        else if(team ==3) {
			data = this.props.t3;
        }
        else if(team ==4) {
			data = this.props.t4;        }
        else if(team ==5) {
			data = this.props.t5;        }
        else if(team ==6) {
			data = this.props.t6;        }
		return data;
	}
    componentWillReceiveProps() {
    for(let i = 0 ; i < this.getData().length; ++i) {
       switch (this.getData()[i].POSITION) {
           case "ST":
               if (this.state.ST1 != "") {
                   this.setState.ST1 = imgGold;
               } else if (this.state.ST2 != "") {
                   this.setState.ST2 = imgGold;
               }
               break;
           case "CM":
               if (this.state.CM1 != "") {
                   this.setState.CM1 = imgGold;
               } else if (this.state.CM2 != "") {
                   this.setState.CM2 = imgGold;
               }
               break;
           case "LM":
               if (this.state.LM != "") {
                   this.setState.LM = imgGold;
               }
               break;
           case "RM":
               if (this.state.RM != "") {
                   this.setState.RM = imgGold;
               }
               break;
           case "LB":
               if (this.state.LB != "") {
                   this.setState.LB = imgGold;
               }
               break;
           case "RB":
               if (this.state.RB != "") {
                   this.setState.RB = imgGold;
               }
               break;
           case "CB":
               if (this.state.CB1 != "") {
                   this.setState.CB1 = imgGold;
               } else if (this.state.CB2 != "") {
                   this.setState.CB2 = imgGold;
               }
               break;
           case "GK":
               if (this.state.GK != "") {
                   this.setState.GK = imgGold;
               }
               break;
       }
    }
    }
    render() {
        return(
            <div>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="400"
      height="300"
      viewBox="0 0 640 640"
    >
      <defs>
       
        <path id="a" d="M187.21 133.11h249.18v6.56H187.21v-6.56z"></path>
        <path id="b" d="M187.21 280.82h249.18v6.56H187.21v-6.56z"></path>
        <path id="c" d="M462.79 280.82h144.26v6.56H462.79v-6.56z"></path>
        <path id="d" d="M13.11 280.82h144.27v6.56H13.11v-6.56z"></path>
        <path
          id="e"
          d="M175.18 139.72l-1.1 135.26-6.47-.06 1.1-135.25 6.47.05z"
        ></path>
        <path
          id="f"
          d="M452.39 139.72l-1.1 135.26-6.47-.06 1.1-135.25 6.47.05z"
        ></path>
        <path
          id="g"
          d="M452.39 310.54l-1.1 135.26-6.47-.06 1.1-135.25 6.47.05z"
        ></path>
        <path
          id="h"
          d="M175.18 310.54l-1.1 135.26-6.47-.06 1.1-135.25 6.47.05z"
        ></path>
        <path
          id="i"
          d="M610.83 310.54l-1.1 135.26-6.46-.06 1.1-135.25 6.46.05z"
        ></path>
        <path
          id="j"
          d="M16.9 310.54L15.8 445.8l-6.47-.06 1.1-135.25 6.47.05z"
        ></path>
        <path id="k" d="M13.11 468.69h144.27v6.56H13.11v-6.56z"></path>
        <path id="l" d="M459 468.69h144.27v6.56H459v-6.56z"></path>
        <path id="m" d="M187.21 468.69h249.18v6.56H187.21v-6.56z"></path>
        <path
          id="n"
          d="M167.61 476.38l99.27 106.35 4.73-4.41-99.27-106.35-4.73 4.41z"
        ></path>
        <path
          id="o"
          d="M346.46 581.6l99.27-106.35 4.73 4.41-99.27 106.35-4.73-4.41z"
        ></path>
      </defs>
      <use fill="#5ce039" xlinkHref="#a"></use>
      <use fill="#5ce039" xlinkHref="#b"></use>
      <use fill="#5ce039" xlinkHref="#c"></use>
      <use fill="#5ce039" xlinkHref="#d"></use>
      <use fill="#5ce039" xlinkHref="#e"></use>
      <use fill="#5ce039" xlinkHref="#f"></use>
      <use fill="#5ce039" xlinkHref="#g"></use>
      <use fill="#5ce039" xlinkHref="#h"></use>
      <use fill="#5ce039" xlinkHref="#i"></use>
      <use fill="#5ce039" xlinkHref="#j"></use>
      <use fill="#5ce039" xlinkHref="#k"></use>
      <use fill="#5ce039" xlinkHref="#l"></use>
      <use fill="#5ce039" xlinkHref="#m"></use>
      <use fill="#5ce039" xlinkHref="#n"></use>
      <use fill="#5ce039" xlinkHref="#o"></use>
      <image href={this.state.ST1} width="50px"></image>
      <image href={this.state.ST2} width="50px"></image>
      <image href={this.state.LM} width="50px"></image>
      <image href={this.state.CM1} width="50px"></image>
      <image href={this.state.CM2} width="50px"></image>
      <image href={this.state.RM} width="50px"></image>
      <image href={this.state.LB} width="50px"></image>
      <image href={this.state.RB} width="50px"></image>
      <image href={this.state.CB1} width="50px"></image>
      <image href={this.state.CB2} width="50px"></image>
      <image href={this.state.GK} width="50px"></image>
    </svg>
            </div>
        )
    }
}

export default Formation;
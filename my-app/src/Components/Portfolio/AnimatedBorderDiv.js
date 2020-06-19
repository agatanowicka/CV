import React from 'react';
import styled, { keyframes } from 'styled-components';

const AnimatedBorder = styled.div`
    margin: 0px 30px;
    min-height: 240px;
    height: 240px;
    text-align:center;
    position:relative;
`;

const leftBorderTopBottom = keyframes`
    from {height: 0%;}
    to {height: 100%;}
`
const LeftBorder = styled.div`
    top: 30px;
    left: 0px;
    width: 3px;
    height: 240px;
    animation: ${leftBorderTopBottom};
    animation-duration: 10s;
    background-color: #ffa41b;
    position: absolute;
    backface-visibility: hidden;
`
const rightBorderTopBottom = keyframes`
    from {height: 0%;}
    to {height: 100%;}
`
const RightBorder = styled.div`
    top: 30px;
    right: 0px;
    width: 3px;
    height: 100%;
    animation: ${rightBorderTopBottom};
    animation-duration: 10s;
    background-color:#ffa41b;
    position: absolute;
`
const topBorderTopBottom = keyframes`
    from {width: 0%;}
    to {width: 100%;}
`
const TopBorder = styled.div`
    top: 30px;
    left: 0px;
    width: 100%;
    height: 3px;
    animation: ${topBorderTopBottom};
    animation-duration: 10s;
    background-color: #ffa41b;
    position: absolute;
    backface-visibility: hidden;
`
const bottomBorderTopBottom = keyframes`
    from {width: 0%;}
    to {width: 100%;}
`
const BottomBorder = styled.div`
    bottom: -30px;
    left: 0px;
    width: 100%;
    height: 3px;
    animation: ${bottomBorderTopBottom};
    animation-duration: 10s;
    background-color: #ffa41b;
    position: absolute;
`
class AnimatedBorderDiv extends React.Component {
    
    constructor(props){
        super(props)
        this.onAnimationStart = this.onAnimationStart.bind(this)
        this.onAnimationEnd = this.onAnimationEnd.bind(this)
        this.state = {
            animateRemaningBorders: false
        }
    }

    componentDidMount(){
        let el = document.getElementById("leftBorderAnimated")
        this.prefixEventHandler(el, "AnimationStart", this.onAnimationStart)
        this.prefixEventHandler(el, "AnimationEnd", this.onAnimationEnd)
    }

    onAnimationStart(props){
        console.log("Animation start props!!")
        console.log(props)
    }

    onAnimationEnd(props){
        console.log("Animation end props!1")
        console.log(props)

        this.setState({animateRemaningBorders: true})
    }

    prefixEventHandler(node, name, handler, remove) {
        var prefixes = ['webkit', 'moz', 'MS', 'o', ''];
        for(var i = 0; i < prefixes.length; i++) {
            var eventName = (prefixes[i] === '') ? name.toLowerCase() : prefixes[i] + name;
            if(!remove) {
                node.addEventListener(eventName, handler);
            }
            else {
                node.removeEventListener(eventName, handler);
            }
        }
    }

    render(){
        let otherDivs = null;

        if(this.state.animateRemaningBorders){
            otherDivs = [<RightBorder/>,
                         <BottomBorder/>]
        }

        return (
            <AnimatedBorder >
                {this.props.children}
                <TopBorder/>
                <LeftBorder id="leftBorderAnimated"/>
                {otherDivs}
            </AnimatedBorder>
        )
    }

}

export default AnimatedBorderDiv;
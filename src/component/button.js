import React from 'react';
import './button.css'


class Button extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef()
        this.state={
            active: false,
            finalX: 0,
            finalY: 0,

        }
    }
    change(event){
        
        console.log('clicking')
        console.log("clientX="+ event.clientX)                  //鼠标x
        console.log("clientY=" +event.clientY)                  //鼠标y
        console.log(this.myRef.current.getBoundingClientRect())
        let { left, top } = this.myRef.current.getBoundingClientRect()
        let { clientX, clientY } = event 
        var finalX = clientX - left
        var finalY = clientY - top
        this.setState({
             active: true,
             finalX: finalX ,
             finalY: finalY,

        })                         
                                  //获取到鼠标点击在dom元素的相对坐标
    }
    changeAgain(){
        this.setState({
            active: false
        })
    }
    render(){
        return <div className="layout" >
                   <button ref={this.myRef} className="click" onClick={this.change.bind(this)}>
                       <span className="value">Click me</span>

                        
                        
                        {this.state.active === true?( 
                            <span 
                                 className="circle"
                                 onAnimationEnd={this.changeAgain.bind(this)}
                                 style={{ left: this.state.finalX, top: this.state.finalY }}
                             />
                         ) : ( 
                              '' 
                              )}
                        
                   </button>
               </div>   
    }

 
}
export default Button
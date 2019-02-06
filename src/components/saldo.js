import React, {Component} from "react"
import ReactDOM from "react-dom"

class Saldo extends Component{
    constructor(){
        super()
        this.state = {
            isToggleOn : true,
            value: [this.state.value]
        }
        this.handelClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn

        }));
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit() {
          }
      
        

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Saldo: {this.state.saldo}</h1>
                    <p>Ingrese monto a apostar: </p>
                    <input type="text" name="montoApostar" value={this.state.value} onChange={this.handleChange}/>
                    <p>Porcentaje con el que aposto: </p>
                    <input type="text" name="procentajeApuesta" />
                    <br/>
                    <input onClick={this.handelClick} type="button" value="OK" name="okBtn"/>
                    <br/>
                    {this.state.isToggleOn ? 
                        <input value="Gano" type="button"/> : 
                        <input value="Perdio" type="button"/>}
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Saldo
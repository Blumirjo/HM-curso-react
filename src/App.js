import {Component} from "react"


class Input extends Component {
 
  render() {
    return(
      <input 
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

class App extends Component {
  state = {
    nombre:'',
    apellido: '',
  }

  updateValues = (prop,value)=> {
    this.setState({[prop]: value})
  }
  render(){
    return(
      <p>
        Nombre completo:{`${this.state.nombre} ${this.state.apellido}`}
        <Input
        value={this.state.nombre}
        onChange={e => this.updateValues("nombre", e.target.value)}
        />
        <Input 
        value={this.state.apellido}
        onChange={e => this.updateValues("apellido", e.target.value)}
        />
      </p>
    )
  }
}



//----------------------------

// class Input extends Component {
//   state = {valor: ""}

//   handleChange = (value) => {
//     this.setState({ valor: value })
//   }
//   render() {
//     return(
//       <input 
//         value={this.state.value}
//         onChange={e => this.handleChange(e.target.value)}
//       />
//     )
//   }
// }

// class App extends Component {
//   render(){
//     return(
//       <p>
//         Nombre completo:
//         <Input />
//         <Input />
//       </p>
//     )
//   }
// }


//---------------------------------------------------------

//  class Button extends Component {
//    state = {};
   
//    constructor(props) {
//      super(props)
//      console.log('constructor', props)
//    }

//    componentDidMount(){
//      console.log("componentDidMount")
//    }

//    componentDidUpdate(prevProps, PrevState){
//      console.log('componentDidUpdate', prevProps,PrevState)
//    }

//    componentWillUnmount(){
//      console.log('desmontando component', this.props, this.state)
//    }

//    render(){
//      console.log('Ejecutando metodo render de button');
//      return(
//        <button onClick={()=> this.setState({prop: 1})}>
//          Enviar
//        </button>
//      )
//    }
//  }
 
// class App extends Component {
//     state = {
//       valor: 3
//     };

  

//   render() {
//      console.log(this.state);
//     return(
//       <div>
//       <p>
//         Hola mundo
//       </p>
//       {this.state.valor === 3 ? <Button chanchito='feliz' /> : null}
//       <button className={`${this.state.valor}`} onClick={() => this.setState({valor: 2})}>
//         Enviaren App
//       </button>
//       </div>
     
//     )
//   }
// }

export default App;

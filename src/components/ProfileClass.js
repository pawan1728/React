import React from "react";
class Profile extends React.Component {
  //Create Single State
  // constructor(props){
  //     super(props)
  //     this.state = {
  //         count :1,
  //     }
  // }

  //Create MultiPle State
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 100,
    };
    // React Life Cycle WOrkflow
    // First Contructor after that Render Method called
    console.log("React LifeCycle first Phase is Constructor");
  }
  componentDidMount() {
    // This is the Place for CAlling An Api
   this.SetIntervalCalled = setInterval(()=>{
    console.log("set Interval Called");
    },1000)
    console.log(
      "Component DidMount" + " => " + "this is the Third Phase of Lifecycle"
    );
  }
  componentWillUnmount() {
    clearInterval(this.SetIntervalCalled)
    console.log(
      "Unmount is called"
    );
    // this will unmount our component when changing component
  }
  render() {
    // React Life Cycle WOrkflow
    // After Contructor Render Method called
    console.log("React LifeCycle Second Phase is Render");

    // Destructuring
    const { count } = this.state;
    return (
      <div>
        <h2>This is my Profile From Class Component</h2>
        <h3>Name:{this.props.name}</h3>
        {/* <h3>Count:{this.state.count}</h3> */}
        {/* using Destructuring */}
        <h3>Count:{count}</h3>
        {/* without using destructing */}
        <h3>Count-2nd State without Destructuring:{this.state.count2}</h3>
        {/*WE DONOT MUTATE STATE DIRECTY
        NEVER DO LIKE this.state = Somethings
        */}
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 200,
            });
          }}
        >
          Change State
        </button>
      </div>
    );
  }
}
export default Profile;

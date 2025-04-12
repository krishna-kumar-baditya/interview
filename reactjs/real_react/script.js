// function Counter(){
//     const [count,setCount] = React.useState(0)
//     let count1 = 1
//     const increment = ()=>{
//         setCount(count + 1)
//         count1 += 1
//     }
//     const counter =  React.createElement("div",null,
//         React.createElement("p",null,`Count : ${count}`),
//         React.createElement("button",{onClick : increment},`Increment`)
//     )
//     console.log("count rendered",counter);
//     return counter
//     // return (
//     //     <div>
//     //         <p>Count : {count}</p>
//     //         <p>Count1 : {count1}</p>
//     //         <button type="button" onClick={increment}>Increment</button>
//     //     </div>
//     // )
// }
// const CounterParent = ()=>{
//     const [showMessage,setShowMessage] = React.useState(false)
//     const [showMessage2,setShowMessage2] = React.useState(false)
//     const [toggleCounter,setToggleCounter] = React.useState(false)
//     console.log('Parent Rerendered');

//     const toggle = ()=>{
//         setShowMessage(!showMessage)
//         setShowMessage2(!showMessage2)
//     }

//     return(
//         <div>
//             {/* <h1>Counter</h1>
//             <Counter/>
//             <br/>
//             {showMessage && <b>Now You see Me</b>}
//             {showMessage2 && <b>Now You see Me Again</b>}
//             <button type="button" onClick={toggle}>Show Message</button> */}
//             {toggleCounter ? (
//                 <div>
//                     <h1>Counter</h1>
//                     <Counter/>
//                 </div>
//             ) : (
//                 <span>
//                     <p>Counter Off</p>
//                 </span>
//             )}
//             <button type="button" onClick={()=>setToggleCounter(!toggleCounter)}>Toggle Counter</button>
//             <br/>
//             {showMessage && <b>Now You see Me</b>}
//             {showMessage2 && <b>Now You see Me Again</b>}
//             <button type="button" onClick={toggle}>Show Message</button>
//             <br/>
//             <FramwWork/>
//         </div>
//     )
// }
// function FramwWork(){
//     // const [framework,setFramework] = React.useState(["react","angular"])
//     const [framework,setFramework] = React.useState([
//         {id : 118 , name : "react"},
//         {id : 119 , name : "angular"}
//     ])
//     return(
//         <div>
//             <h3>Popular Frameworks</h3>
//             {/* <div>
//                 {
//                     framework.map((item,index)=>(
//                         <p key={index + 1}>{item}</p>
//                     ))
//                 }
//             </div>
//             <button type="button" onClick={()=>setFramework([...framework,"vue"])}>
//                 Add New
//             </button> */}
//             {/* or */}
//             <div>
//                 {
//                     framework.map((item)=>(
//                         <p key={item.id}>{item.name}</p>
//                     ))
//                 }
//             </div>
//             <button type="button" onClick={()=>setFramework([{id : 147,name : "vue"},...framework])}>
//                 Add New
//             </button>
//         </div>
//     )
// }
// Q4. what is the difference between state and props?

// const MyComponent = ()=>{
//     return (
//         <>
//         <h1>Hi</h1>
//         <StateVsProps propEx={"i am a prop"} />
//         {/*
//         Mutabilty : state is mutable and managed within the component itself,while props are immutable and passed from parent to child components.
//         Ownership : components own and manage their own state,while props are owned and manged by the parent component.
//         Usage : state is used for inernal component data that might change over time,
//         while props are used to pass data from parent to child components.
//         */}
//         </>
//     )
// }
// const StateVsProps = (props)=>{
//     const [state,setState] = React.useState("I am a state")
//     return (
//         <ul>
//             <li>{state}</li>
//             <li>It can be a class or function that returns jsx.</li>
//             <li>{props.propEx}</li>
//         </ul>
//     )
// }
// Q5. what is prop drilling
// function GrandparentComponent(){
//     const data = "Hello from parent"
//     return  (
//         <>
//             <h1>Hello</h1>
//             <ParentComponent data={data}/>
//         </>
//     )
// }
// function ParentComponent({data}){
//     return  <ChildComponent data={data} />
// }
// function ChildComponent({data}){
//     return  <GrandChildComponent data={data} />

// }
// function GrandChildComponent(props){
//     return  <p>{props.data} in child component</p>
// }

// Ques 6: What is a React fragment, and why is it used?
// const Fragment = (props)=>{
//         const [state,setState] = React.useState("I am a state")
//         return (
//             <React.Fragment>
//                 <li>{state}</li>
//                 <li>It can be a class or function that returns jsx.</li>
//             </React.Fragment>
//         )
//     }

// Ques 7: How do you define and use state in a React Functional component? How are they different from normal variables?
// const Counter = ()=>{
//     const [count,setCount] = React.useState(0)
//     const normalcount = 0
//     const increment = ()=>{
//         setCount(count + 1)
//         normalcount = normalcount + 1   //  it does not incresed
//     }
//     return(
//         <>
//         <p>Count : {count} </p>
//         <p>NormalCount : {normalcount} </p>

//         <button type="button" onClick={increment} >Increment</button>
//         </>
//     )
// }

// Ques 8: How do you define and use state in a React class component?
// class CounterNew extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count : 0
//         }

//     }
//     incrementCount(){
//         this.setState({count : this.state.count + 1})
//     }
//     render(){
//         return(
//             <>
//                 <p>Count : {this.state.count}</p>
//                 <button type="button" onClick={()=>incrementCount()}  >Increment</button>
//             </>
//         )
//     }
// }
// function Counter(){
//     console.log("count rendered");
//     return (
//         <div>
//             <p>Count :</p>
//             <p>Count1 : </p>
//         </div>
//     )
// }
// Ques 10: What are PropTypes?
// const MyComponent = () => {
//     return (
//         <>
//             <h1>Hi</h1>
//             <StateVsProps propEx={"i am a prop"} />
//         </>
//     );
// };
// const StateVsProps = (props) => {
//     const [state, setState] = React.useState("I am a state");
//     return (
//         <ul>
//             <li>{state}</li>
//             <li>It can be a class or function that returns jsx.</li>
//             <li>{props.propEx}</li>
//         </ul>
//     );
// };
// StateVsProps.propTypes = {
//     propExample: PropTypes.string,
// };

// Ques 11: How do you use props in a class component?
function Counter(){
        console.log("count rendered");
        return (
            <div>
                <p>Count </p>
                <DispalyCount countProp={1}/>
            </div>
        )
    }
class DispalyCount extends React.Component{
    render(){
        return (
            <>
                <p>Count : {this.props.countProp}</p>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));

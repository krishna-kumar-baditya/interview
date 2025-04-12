const products = [
    { id: 1, name: "Product A", price: 20, category: "Electronics" },
    { id: 2, name: "Product B", price: 30, category: "Clothing" },
    { id: 3, name: "Product C", price: 15, category: "Electronics" },
    { id: 4, name: "Product D", price: 25, category: "Clothing" },
    { id: 5, name: "Product E", price: 50, category: "Electronics" },
    { id: 6, name: "Product F", price: 40, category: "Electronics" },
];
const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
function App() {
    return (
        <>
            <h2>Rendering Lists and Conditinal Operators</h2>
            <h5>
                Q1. How does the map function work in react for rendering lists?
            </h5>
            {
                // commonly used to iterate through an array and render components dynamically.
                // it allows you to create a new array of React elements based on the original array.
            }
            <ul>
                {products.map((product) => {
                    return (
                        <li>
                            {product.name} - ${product.price}
                        </li>
                    );
                })}
            </ul>
            <h5>Q2. How can you filter products with a specific category?</h5>
            <ul>
                {products
                    .filter((product) => product.category === "Electronics")
                    .map((product) => {
                        console.log(product);

                        return (
                            <li>
                                {product.name} - ${product.price}
                            </li>
                        );
                    })}
            </ul>
            <h5>
                Q3. How can you render a summary of total prices for products?
            </h5>
            <div>
                <p>
                    Total Price Summary :
                    {products.reduce((acc, curr) => acc + curr.price, 0)}
                </p>
            </div>
            <h5>
                Q4. add discountedPrice key with 10% discount to all the
                products with price more than $20 and render it
            </h5>
            <div>
                <ul>
                    {products
                        .filter((product) => product.price > 20)
                        .map((product) => {
                            return {
                                ...product,
                                discountedPrice: product.price * (10 / 100),
                            };
                        })
                        .map((product) => (
                            <li key={product.id}>
                                {product.name} - ${product.discountedPrice} -
                                Discounted from : {product.price}
                            </li>
                        ))}
                </ul>
            </div>
            <h5>
                Q5. How can you filter and render unique elements from an array
                using filter in react
            </h5>
            <ul>
                {names
                    .filter((name, index) => {
                        return names.indexOf(name) === index;
                    })
                    .map((name) => {
                        return <li>{name}</li>;
                    })}
            </ul>
            <h5>Q6. Difference between && vs || ?</h5>
            <Conditinal/>
            <h5>Q7. Difference between .? vs || ??</h5>
            <OptionalChaining />
            <NullishCoalishing/>
        </>
    );
}
const Conditinal = ()=>{
    let x = 5;
    let y = 10;
    if(x > 0 && y > 0){
        return <span> Both are greater than 0</span>
    }
    else return <></>
}
const OptionalChaining = ()=>{
    let user = {
        name : "John Snow",
        address : {
            city : "New York"
        }
    }
    // return user && user.address && <p>{user.address.city}</p>
    return <p>{user?.address?.city}</p>

}
const NullishCoalishing = ()=>{
    let userInput = "krish"
    let defaultValue = "Hi"
    // return <p>{userInput ? userInput : defaultValue}</p>
    return <p>{userInput?? defaultValue}</p>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

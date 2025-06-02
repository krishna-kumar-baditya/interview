try {
    let result = add(10,20)
    console.log(result);
    
} catch (error) {
    console.log({name : error.name,message : error.message});
    
}
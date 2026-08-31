function setUsername(username){
    //db requests
    this.username = username;
}

function user(username,userId,password){
    setUsername.call(this,username);

    this.userId = userId;
    this.password = password;
}

const harsh = new user("Harsh","Hsr234","jfskvbnfb");
console.log(harsh)

/*  here first global execution is come then user function and in this setUsername function but when we call the setUser fuction it is call and set value but when it completed then this valuse will not stay means when this setUsername function will it will remove all value of its this (current context) so thats why we use call so that that vlaue will stay and also pass this key word so that we can get this vlaue*/
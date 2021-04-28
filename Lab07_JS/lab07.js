function askpassword(ok,fail){
    let password = prompt("passport?",'');
    if(password == "rockstar") ok();
    else fail();
}
let user ={
    name:'john',
    loginOk(){
        alert('${this.name} logged in');
    },
    loginFail(){
        alert('${this.name} failed to log in');
    },
};
// askpassword(user.loginOk,user.loginFail);

// line 15 causes issue for this.name since it is in global scope this refers to window. Therefore to fix the issue we have three ways for now i.e. bind, call and apply.
// Using bind
askpassword(user.loginOk.bind(user),user.loginFail.bind(user));

// Using call
askpassword(()=>user.loginOk.call(user),()=>user.loginFail.call(user));

// Using apply
askpassword(()=>user.loginOk.apply(user),()=>user.loginFail.apply(user));
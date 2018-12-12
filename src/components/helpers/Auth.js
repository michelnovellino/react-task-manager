import {firebaseAuth, ref} from '../../data/config';

const saveUser = (user)=>{

    ref()
        .child()
            .set({})
                .then(() =>{})
              
}

const auth = (email,password)=>{
  
    firebaseAuth()
        .createUserWithEmailAndPassword(email,password)
            .then(saveUser)
               
    
}


const login = (email,password) => firebaseAuth().signInWithEmailAndPassword(email,password)


const logout = () => firebaseAuth().signOut()

const resetPassword = (email) => firebaseAuth().sendPasswordResetEmail(email)

export{
    saveUser,
    auth,
    login,
    logout,
    resetPassword
}
/*  The callback function passed in this function get's triggered on reload and recives one arguement
	if the arguement is not null / undefined that means the user is already signed in. 
	You can access all the information from that object  */ 
auth.onAuthStateChanged(user => {
	if (user) {
		console.log(user)
		userLoggedIn(user)
	} else {
		console.log("정보 없음")
	}
})

const signUpUser = (email, pass) => {
	auth.createUserWithEmailAndPassword(email, pass)
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		errorHandler(err)
	})
}

const signInUser = (email, pass) => {
	auth.signInWithEmailAndPassword(email, pass)
	.then(res => {
		// No need of handling anything here auth.onAuthStateChanged function got this
		console.log("Signed In")
		// console.log(res)
	})
	.catch(err => {
		errorHandler(err)
	})
}

const signOutUser = () => {
	auth.signOut()
	.then(() => {
		console.log("완료")
		userLoggedOut()
	})
	.catch(err => {
		console.log(err)
		errorHandler(err)
	})
}

const verifyEmail = () => {
	const user = auth.currentUser
	user.sendEmailVerification()
	.then(() => {
		errorHandler({message: "인증 이메일이 전송되었습니다!"}, true)
	})
	.catch(err => {
		errorHandler(err)
	})
}

const resetPassword = (email) => {
	auth.sendPasswordResetEmail(email)
	.then(() => {
		errorHandler({message: "인증 이메일이 전송되었습니다!"}, true)
	})
	.catch(err => {
		errorHandler(err)
	})
}

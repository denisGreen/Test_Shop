import React, {useState} from 'react'
import './Login.css'

function checkLength(value){
		return (value.length < 8) ? true : false
	}

const Login = ({user, dispatch})=> {
	const login = useFormInput("gest")
	const password = useFormInput("pswd")
	const [loginFormError, setLoginFormError] = useState("")

	const checkForm = (value)=>{
		return (value.length < 8) ? "form-input red-border" : "form-input"
	}

	const onChangeForm = (e)=>{
		e.preventDefault()
		if(checkLength(login.value) || checkLength(password.value)){
			setLoginFormError("Login and password should be more then 8 simbols")
		}
	}
	const handleSubmit = (e)=>{
		e.preventDefault()
		if((checkLength(login.value) || checkLength(password.value))){
			setLoginFormError("Login and password should be not empty and more then 8 simbols")
			console.log(loginFormError)
		}
		
	}
	
	return (
			<div>
				<p>{loginFormError}</p>
				<form  onSubmit= {handleSubmit} onChange={onChangeForm}>
					<label htmlFor="login">
						login:
						<input className={checkForm(login.value)}type="text" name="login" value={login.value} onChange={login.onChange}/>

					</label>
					<label htmlFor="password">
						password:
						<input className={checkForm(password.value)} type="text" name="password" value={password.value} onChange={password.onChange}/>

					</label>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	
	

	function useFormInput(initialValue){
		const[value, setValue]= useState(initialValue)

		function handleFormChange(e){
			e.preventDefault()
			setValue(
					e.target.value.trim()
				)			
		}
	
	return {value, onChange: handleFormChange} 
	}
}


export default Login
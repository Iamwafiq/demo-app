export const removeSession=()=>{
	sessionStorage.removeItem('authToken')
}
export const setSession=(arg)=>{
	sessionStorage.setItem('authToken',arg)
}
export const getSession=(arg)=>{
	return sessionStorage.getItem('authToken')
}

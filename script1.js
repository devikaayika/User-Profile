var profile=document.querySelector("#profile")
var fname=document.querySelector("#name")
var gender=document.querySelector("#gender")
var email=document.querySelector("#email")
var phoneno=document.querySelector("#phoneno")
fname.innerHTML="Loading..."
gender.innerHTML="Loading..."
email.innerHTML="Loading..."
phoneno.innerHTML="Loading..."
async function fetchUsers() {
    const rawdata=await fetch('https://randomuser.me/api')
    const data=await rawdata.json()
    const user=data.results[0]
    fname.innerHTML=`${user.name.title}.${user.name.first}${user.name.last}`
    email.innerHTML=user.email
    gender.innerHTML=user.gender
    phoneno.innerHTML=user.phone
    profile.src=user.picture.large
}
fetchUsers()
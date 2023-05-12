class user{
   constructor(name,email,password,dateofBirth,location,profilePicture){
    this.name=name
    this.email=email
    this.password=password
    this.dateofBirth=dateofBirth
    this.location=location
    this.profilePicture=profilePicture
   }
   createUser(){
   console.log (
        `The Name of the user is ${this.name},
        The Email of the user is ${this.email},
        The Password of the user is ${this.password},
        The DOB of the user is ${this.dateofBirth},
        The location of the user is ${this.location},
        The Profile Picture of the user is ${this.profilePicture}`
    )
   }
}

const Harsh = new user("Harsh", "harsh@gmail.com","******","01/01/2000","India","")

Harsh.createUser()
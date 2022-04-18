export class User{
    constructor (private email:string,
         private token:string,
         private localId:string,
         private expirateionDate :Date){ }

         getexpiryDate(){
             return this.expirateionDate
         }

         getUserToken(){
            return this.token
        }


}
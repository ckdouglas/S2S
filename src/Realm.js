import Realm from 'realm';
export const usersSchema = 's2sUsersSchema';

export const users_Schema = {
    name: usersSchema,
    primaryKey:'_id',
    properties:{
        _id: 'string',
        email: 'string',
        username: 'string',
        // dateJoined:{type:'string', optional:true}
        phone_number:{type:'string',optional:true},
        dob:{type:'string',optional:true},
        return_address:{type:'string',optional:true},
        seller101:{type:'bool',default:false,optional:true}
    }
}

const databaseOptions = {
    path:'s2s.realm',
    schema:[users_Schema],
    schemaVersion:1
}

export const saveUser = user => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then(realm =>{
        realm.write(() =>{
            realm.create(usersSchema,user);
            resolve(user);
        })
    }).catch((e)=>reject(e))
})

export const updateUser = user => new Promise((resolve, reject)=>{
     Realm.open(databaseOptions).then(realm=>{
         realm.write(()=>{
              let userUpdate = realm.objectForPrimaryKey(usersSchema, user.ID);
             if(user.phone_number) userUpdate.phone_number = user.phone_number;
             if(user.dob)userUpdate.dob = user.dob;
             if(user.return_address)userUpdate.return_address = user.return_address;
             if (user.seller101 == true) userUpdate.seller101 = user.seller101;
             resolve(userUpdate)
         })
     }).catch((e)=>reject(e))
})

export const findAllUsers = () => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        resolve(JSON.parse(JSON.stringify(Array.from(realm.objects(usersSchema)))))
    }).catch((e)=>{
        reject(e)
    })
})

export const deleteUsers = () => new Promise( (resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
         realm.write(()=>{
            realm.delete(realm.objects(usersSchema));
            resolve('deleted')
         });
    } ).catch( (e)=>{
        reject(e)
    })
})
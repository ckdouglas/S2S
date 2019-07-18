import Realm from 'realm';
export const usersSchema = 's2sUsersSchema';
export const users_Schema = {
    name: usersSchema,
    primaryKey:'_id',
    properties:{
        _id: 'string',
        email: 'string',
        username: 'string'
        // dateJoined:{type:'string', optional:true}
        
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
             if(user.cartVisited)userUpdate.cartVisited = user.cartVisited;
             if(user.socialLogin == true)userUpdate.socialLogin = '';
             if(user.metaData)userUpdate.metaData = user.metaData;
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

export const deleteUsers = () => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
         realm.write(()=>{
            realm.delete(realm.objects(usersSchema));
            resolve('deleted')
         });
    }).catch((e)=>{
        reject(e)
    })
})

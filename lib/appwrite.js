import { Account, Client, ID } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.shaheen.aora',
    projectId: '666618520004d97d2127',
    databaseId: '6666198e003ac65778c9',
    userCollectionId: '666619ae0011c0a36986',
    videoCollectionId: '666619ca0004ce57cf75',
    storageId: '66661ad50039becf5d45'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform) 
;

const account = new Account(client);

export const createUser = () => {
// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
} 



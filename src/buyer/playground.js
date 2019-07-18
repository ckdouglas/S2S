GoogleSignin.configure({
scopes: ['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/profile.agerange.read','https://www.googleapis.com/auth/user.addresses.read','https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
webClientId: '897503851113-07ejsqke669srp4ksqjhub9d3d4vohsf.apps.googleusercontent.com'
});
class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        activeButton: 'LOGIN',
        inputs:inputs[0],
        currentIndex:0,
        loader:''
        };
    }
    componentWillMount(){
        var currentIndex = this.state.currentIndex;
        setTimeout(()=>this.setState({inputs:inputs[currentIndex]}),1);
        //AccessToken.getCurrentAccessToken().then().catch(e=>alert(e))
    }


handleFacebookLogin(callback){
LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
(result) =>{
if (result.isCancelled) {
console.log('Login cancelled')
} else {
    AccessToken.getCurrentAccessToken()
    .then((data) => {
    callback(data.accessToken)
    })
    .catch(error => {
    console.log(error)
    })
}}, function (error) {
    console.log('Login fail with error: ' + error)
    }
)}

async FBGraphRequest(fields, callback) {
    const accessData = await AccessToken.getCurrentAccessToken();
    // Create a graph request asking for user information
    const infoRequest = new GraphRequest('/me', {
    accessToken: accessData.accessToken,
        parameters: {
        fields: {string: fields}
        }
    }, callback.bind(this));
    // Execute the graph request created above
    new GraphRequestManager().addRequest(infoRequest).start();
}

async FBLoginCallback(error, result) {
    if (error) {
        this.setState({
        showLoadingModal: false,
        notificationMessage: I18n.t('welcome.FACEBOOK_GRAPH_REQUEST_ERROR')
        });
    } else {
        if(result.email)
        this.actionIndex('socialLogin',{
            type:'facebookLogin',
            email:result.email,
            photo:result.picture.data.url,
            name:result.first_name+' '+result.last_name
        });
        else{
            Alert.alert('Error logging in with facebook', 'We could not find a valid email address from this account.',[{text:'OK'}]);
            LoginManager.logOut();
        }
    }
}







signIn = async () => {
try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    var user = userInfo.user;
    this.actionIndex('socialLogin',{
    type:'googleLogin',
    email:user.email,
    photo:user.photo,
    name:'brian henry' //user.name
});
// call the storage fucnt
} catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
    // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    // play services not available or outdated
    } else {
    // some other error happened
    }
    }
}}



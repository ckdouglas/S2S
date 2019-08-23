//constants
import { Colors } from './common/Colors';
import {App_Name} from './common/Constants';
import Styles from './common/Styles';

//screens
import Welcome from './buyer/Welcome';
import Sign_Up from './buyer/Sign_Up';
import PasswordReset from './buyer/PasswordReset';
import ProfileSetUp from './buyer/ProfileSetUp';
import Home from './buyer/Home';
import Browse from './buyer/Browse';
import Search from './buyer/Search';
import Sell from './buyer/Sell';
import Profile from './buyer/Profile';
import PhoneVerification from './buyer/PhoneVerification';
import UserPersonalization from './buyer/UserPersonalization';
import Confirmation from './buyer/Confirmation';
import Details from './buyer/Details';
import CheckOut from './buyer/CheckOut';
import MoreSizes from './buyer/MoreSizes';
import Offer from './buyer/Offer';
import OwnItem from './buyer/OwnItem';
import ViewWear  from './buyer/ViewWear';
import ProfileSettings from './buyer/ProfileSettings';
// seller screens
import Auth_ from './seller/Auth_';
import PersonalInfor from './seller/PersonalInfor';
import ReturnAddress from './seller/ReturnAddress';
import  Seller101 from './seller/Seller101';
import Selling from './seller/Selling';
import Seller102 from './seller/Seller102'

// components
import AwesomeIcon from './common/components/AwesomeIcon';
import IonicIcon from './common/components/IonicIcon';

import ModalWant from './buyer/ModalWant';


export {
    /* constants */
    App_Name, Colors, Styles,
    /* screens */
    Welcome, Sign_Up, PasswordReset, ProfileSetUp, Home, Browse, Search, Sell, Profile, PhoneVerification, UserPersonalization,
    Confirmation, Details, CheckOut, MoreSizes, Offer, OwnItem, ViewWear,ProfileSettings, Selling,

    Auth_,PersonalInfor,ReturnAddress,Seller101,Seller102,
    /* components  */
    AwesomeIcon, IonicIcon,

    ModalWant
}
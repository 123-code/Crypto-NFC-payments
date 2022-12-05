import axios from 'axios';
import { OauthClient } from './OauthClient';

const getAccessAndBearerTokenUrl = ({accessToken})=>
`https://www.googleapis.com/oauth2/v1userinfo?alt=json&access_token=${accessToken}`

// code google sends as an argument 
export const getGoogleuser = async ({code})=>{
const {tokens} = await OauthClient.getToken(code);
const response = await axios.get(
    getAccessAndBearerTokenUrl({accessToken:tokens.access_token }),
    {headers:{Authorization: `Bearer ${tokens.id_token}`}},
);
return response.data;
}
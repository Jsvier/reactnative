
import axios from 'axios';
import { API_LOGIN } from '../../Config/const';
 
import {
    SET_SESSION
} from '../ActionTypes';

export const login = ({ email, password }) => (dispatch, getState) => {
	return new Promise((resolve, reject) => {
		axios.post(API_LOGIN,{
                "email": email,
                "password": password
			})
			.then((respJson) => {
				dispatch({
					type: SET_SESSION,
					user: respJson.token_type,
					token: respJson.data.access_token
				}) 
				return resolve(respJson.data)
			})
			.catch( (err) => {
				console.warn(err);
				if(err.response && err.response.data)
					return reject(err.response.data)
				else
					return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});
			});
	});
}
import { Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserActionType, IAuthUser } from "../auth/types";
import "./DefaultHeader.css";
import Menu from "./menu/Menu";

const DefaultHeader = () => {


  //   const navigator = useNavigate();
  // const {isAuth, user} = useSelector ((store: any) => store.auth as IAuthUser);

  // const dispatch = useDispatch();

  // const logout = (e: any) => {
  //   e.preventDefault();
  //   localStorage.removeItem('token');
  //   http.defaults.headers.common[
  //     "Authorization"
  //     ] = ``;
  //     dispatch({type: AuthUserActionType.LOGOUT_USER});
  //     navigator('/');
  // }

  // const isAdmin : boolean = user?.roles==="Admin";
    return(
        <>
          <Menu/>
        </>
    )
}

export default DefaultHeader;
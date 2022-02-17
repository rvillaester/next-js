import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { setCookie, removeCookie } from "../../util/cookieUtil";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const onLoginHandler = () => {
    setCookie("isAuthenticated", "true", 20);
    setIsAuthenticated(true);
  };

  const onNewStoreHandler = () => {
    router.push("/admin");
  };

  const onLogoutHandler = () => {
    removeCookie("isAuthenticated");
    setIsAuthenticated(false);
  };

  const onCorsClickHandler = async () => {
    try {
      await fetch(
        "https://ndamt9wh03.execute-api.ap-southeast-1.amazonaws.com/dev/cors"
      );
    } catch (error) {
      alert(error);
    }
    // const response = await fetch('/api/cors');
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Amazing Stores</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Stores</Link>
          </li>
          <li>
            <Link href="/new-store">New Store</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          {!isAuthenticated && (
            <li>
              <div className={classes.actions}>
                <button onClick={onLoginHandler}>Login</button>
              </div>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <div className={classes.actions}>
                <button onClick={onLogoutHandler}>Logout</button>
              </div>
            </li>
          )}
          <li>
            <div className={classes.actions}>
              <button onClick={onCorsClickHandler}>Test CORS</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

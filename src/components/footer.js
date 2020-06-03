import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
    componentDidMount() {
        // cookies
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
    } else {
       setCookie("username", 'vessel', 30);
       var bar = document.getElementsByClassName("cookies-bar");
       bar[0].classList.add("showing");
       var cookies = document.getElementById("cookies");
       cookies.addEventListener('click', (event) => {
        event.preventDefault();
      var bar = document.getElementsByClassName("cookies-bar");
         bar[0].classList.remove("showing");
       });
    }
  }
  checkCookie();
    }
    render() {
        return (
        <div className="cookies-bar">
            <div className="w-container">
              <div className="cookies-notice">
                <p className="paragraph-28 cookies">This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies.
                <Link to="/privacy-policy">Learn more</Link>
                </p>
                <Link to="#" className="dark-bt cookies w-button" id="cookies">Got it</Link>
                </div>
            </div>
        </div>
            )
    }
}
export default Footer
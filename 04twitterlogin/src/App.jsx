import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col">
        <div id="abovefooter" className=" bg-black flex w-full">
          <div
            id="left"
            className="h-screen w-1/2 flex justify-center items-center"
          >
            <div
              style={{ width: "330px", height: "330px" }}
              className="flex justify-center items-center"
            >
              <img
                src="./public/twitter.svg"
                alt=""
                style={{ width: "330px", height: "330px" }}
              />
            </div>
          </div>
          <div id="right" className="h-screen w-1/2">
            <div
              id="rightcontent"
              className="p-10 px-10 py-20"
              style={{ width: "600px", height: "600px" }}
            >
              <div
                id="headings"
                className="flex flex-col justify-between"
                style={{ width: "600px", height: "160px" }}
              >
                <h1 className="text-white text-7xl font-bold">Happening now</h1>
                <h1 className="text-white text-4xl font-bold">Join today.</h1>
              </div>
              <div
                id="buttons"
                className="flex flex-col gap-2 mt-10"
                style={{ width: "320px", height: "260px" }}
              >
                <button
                  className="bg-white rounded-3xl font-medium flex items-center justify-center gap-2"
                  style={{ width: "320px", height: "40px" }}
                >
                  {" "}
                  <img
                    src="./public/googlelogo.png"
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />{" "}
                  Sign up with Google
                </button>
                <button
                  className="bg-white rounded-3xl font-bold flex  items-center justify-center"
                  style={{ width: "320px", height: "40px" }}
                >
                  <img
                    src="./public/applelogo.png"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                  />
                  Sign up with Apple
                </button>
                <div class="flex items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                  <span class="mx-4 text-gray-500">or</span>
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <button
                  className=" rounded-3xl font-bold flex  items-center justify-center text-white"
                  style={{
                    width: "320px",
                    height: "40px",
                    backgroundColor: "rgb(29, 155, 240)",
                  }}
                >
                  Create account
                </button>
                <p className="text-xs text-[rgba(113,118,123,1)]">
                  By signing up, you agree to the{" "}
                  <a
                    href="https://x.com/en/tos"
                    className="text-[rgba(29,155,240,1)] hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://x.com/en/privacy"
                    className="text-[rgba(29,155,240,1)] hover:underline"
                  >
                    Privacy Policy
                  </a>
                  , including{" "}
                  <a
                    href="https://help.x.com/en/rules-and-policies/x-cookies"
                    className="text-[rgba(29,155,240,1)] hover:underline"
                  >
                    Cookie Use
                  </a>{" "}
                  .
                </p>
              </div>
              <div
                id="haveanacc"
                className="flex flex-col gap-4"
                style={{ width: "300px", height: "90px" }}
              >
                <h3 className="text-white text-xl font-semibold">
                  Already have an account?
                </h3>
                <button
                  className=" rounded-3xl font-bold flex  items-center justify-center text-[rgba(29,155,240,1)] border border-[rgba(29,155,240,0.3)]"
                  style={{
                    width: "320px",
                    height: "40px",
                    backgroundColor: "black",
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="bg-black">
          <div id="links" className="w-full p-2 ">
            <ul className="flex  gap-4 text-[rgba(113,118,123,1)] text-sm justify-center items-center" > 
            <li ><a href="https://about.x.com/en"  className="hover:underline">About</a></li>
            <li><a href="https://help.x.com/en/using-x/download-the-x-app"   className="hover:underline">Download the X app</a></li>
            <li><a href="https://help.x.com/en"  className="hover:underline">Help Center</a></li>
            <li><a href="https://x.com/en/tos"  className="hover:underline">Terms of Service</a></li>
            <li><a href="https://x.com/en/privacy"  className="hover:underline">Privacy Policy</a></li>
            <li><a href="https://help.x.com/en/rules-and-policies/x-cookies"  className="hover:underline">Cookie Policy</a></li>
            <li><a href="https://help.x.com/en/resources/accessibility"  className="hover:underline">Accessibility</a></li>
            <li><a href="https://business.x.com/en/help/troubleshooting/how-x-ads-work"  className="hover:underline">Ads info</a></li>
            <li><a href="https://blog.x.com/"  className="hover:underline">Blog</a></li>
            <li><a href="https://careers.x.com/en"  className="hover:underline">Careers</a></li>
            <li><a href="https://about.x.com/en/who-we-are/brand-toolkit"  className="hover:underline">Brand Resources</a></li>
            <li><a href="https://business.x.com/en/advertising?ref=gl-tw-tw-twitter-advertise"  className="hover:underline">Advertising</a></li>
            <li><a href="https://marketing.x.com/"  className="hover:underline">Marketing</a></li>
            <li><a href="https://business.x.com/en?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"  className="hover:underline">X for Business</a></li>
            <li><a href="https://developer.x.com/en"  className="hover:underline">Developers</a></li>
            <li><a href="https://x.com/i/directory/profiles"  className="hover:underline">Directory</a></li>
            <li><a href="https://x.com/settings/account/personalization"  className="hover:underline">Settings</a></li>
            </ul>
            <ul className="flex text-[rgba(113,118,123,1)] text-sm justify-center items-center mt-2" >
              <li>© 2024 X Corp.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

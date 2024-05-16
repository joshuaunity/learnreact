import firebase from "firebase/compat/app"; // Import the compatibility version of Firebase
import "firebase/compat/auth"; // Import the compatibility version of Firebase Auth

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAw-M50p34tMqY-G2-RsUZrDxWn7NvvgKA",
  authDomain: "minichat-75e63.firebaseapp.com",
  databaseURL: "https://minichat-75e63.firebaseio.com",
  projectId: "minichat-75e63",
  storageBucket: "minichat-75e63.appspot.com",
  messagingSenderId: "487516277408",
  appId: "1:487516277408:web:44974b9c0a8b326666d7c5",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Hero = () => {
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful sign-in
        const user = result.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google sign-in error:", error);
      });
  };

  return (
    <div className="mt-10 lg:mt-28 px-4">
      <div className="grid lg:grid-cols-12 gap-2">
        <div className="md:col-span-5">
          <div className="text-5xl lg:text-6xl 1.5xl:text-7xl font-bold">
            Your cat will go
          </div>
          <div className="font-bold">
            <span className="-cus-rotate tracking-tighter text-5xl lg:text-6xl 1.5xl:text-7xl">
              B
            </span>
            <span className="cus-rotate tracking-tighter text-5xl lg:text-6xl 1.5xl:text-7xl">
              o
            </span>
            <span className="-cus-rotate tracking-tighter text-5xl lg:text-6xl 1.5xl:text-7xl">
              n
            </span>
            <span className="cus-rotate tracking-tighter text-5xl lg:text-6xl 1.5xl:text-7xl">
              k
            </span>
            <span className="-cus-rotate tracking-tighter text-5xl lg:text-6xl 1.5xl:text-7xl">
              e
            </span>
            <span className="cus-rotate tracking-tighter text-5xl lg:text-6xl 1.5xl:text-7xl">
              r
            </span>
            <span className="-cus-rotate tracking-tighter text-5xl lg:text-6xl 1.5xl:text-7xl">
              s
            </span>
          </div>

          <p className="w-3/4 py-8 font-medium text-lg 1.5xl:text-xl">
            ..for the world’s best testing cat food, sourced with only the
            finest ingredients. Made with love from the heart of Mississippi.
          </p>

          <button
            className="text-3xl font-bold bg-btncream p-4 rounded-md hover:border-2 border-black"
            onClick={handleGoogleSignIn}
          >
            <span className="">Get Bonkers</span>
          </button>
        </div>

        <div className="md:col-span-7 md:pt-0 pt-40">
          <div className="relative">
            <div className="absolute -top-32  md:-left-86 p-[280px]  md:p-[440px] object-cover bg-white rounded-full"></div>
            <div className="absolute -top-24 left-6 md:left-20 p-[230px] md:p-[360px] object-cover bg-eggcream rounded-full"></div>
            <img
              className="absolute left-16 md:left-44 object-cover"
              src="./cat.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

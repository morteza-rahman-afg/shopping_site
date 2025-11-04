import { createContext, useContext, useReducer, useEffect } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || [],
};

// --- Reducer اصلی ---
function authReducer(state, action) {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 📦 ۱. هنگام mount، اطلاعات user را از localStorage بخوان
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch({ type: "user", payload: parsedUser });
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
      }
    }
  }, []);

  // 💾 ۲. هر بار که user تغییر کرد، در localStorage ذخیره کن
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  // 🚪 ۳. تابع خروج
  function logout() {
    localStorage.removeItem("user"); // مطمئن شو پاک بشه
    dispatch({ type: "logout" });
    toast.success("شما از حساب خود خارج شدید.");
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        dispatch,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

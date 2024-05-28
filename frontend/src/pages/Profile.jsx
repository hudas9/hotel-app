import { useEffect } from "react";
import axios from "axios";

export default function Profile() {
  // check if token valid
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }

  // get user data from backend
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    };
    fetchUser();
  });

  return (
    <>
      <h1>Profile Page</h1>
    </>
  );
}

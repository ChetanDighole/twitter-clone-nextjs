"use client";
import React, { useCallback } from "react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginComp() {
  const handleLogin = useCallback((cred: any) => {}, []);

  return (
    <div>
      <GoogleLogin
        onSuccess={(cred: any) => {
          console.log(cred);
        }}
        onError={() => console.log("error")}
      />
    </div>
  );
}

export default GoogleLoginComp;

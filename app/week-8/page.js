"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email}).</p>
          <button onClick={handleSignOut}>Sign out</button>
          <p><Link href="/week-8/shopping-list" className="hover:underline">Continue to your Shopping List</Link></p>
        </div>
      ) : (
        <div>
          <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
};
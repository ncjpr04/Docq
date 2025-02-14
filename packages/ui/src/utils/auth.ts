export async function handleAuth(token: string) {
  // Store in localStorage
  localStorage.setItem("auth_token", token);

  // Store in cookie for SSR apps (Updated for SSO)
  document.cookie = `auth_token=${token}; path=/; max-age=86400; SameSite=Lax`; // ✅ `Lax` for local, use `"None; Secure"` in production

  // Broadcast auth event to other tabs/windows
  localStorage.setItem("auth_timestamp", Date.now().toString());
}

export function listenToAuthChanges(callback: (token: string | null) => void) {
  window.addEventListener("storage", (event) => {
    if (event.key === "auth_timestamp") {
      const token = localStorage.getItem("auth_token");
      callback(token);
    }
  });
}

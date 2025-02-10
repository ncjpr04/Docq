export async function handleAuth(token: string) {
  // Store in localStorage
  localStorage.setItem('token', token);
  
  // Store in cookie for SSR apps
  document.cookie = `token=${token}; path=/; max-age=3600; SameSite=Strict`;
  
  // Broadcast auth event to other tabs/windows
  localStorage.setItem('auth_timestamp', Date.now().toString());
}

export function listenToAuthChanges(callback: (token: string | null) => void) {
  window.addEventListener('storage', (event) => {
    if (event.key === 'auth_timestamp') {
      const token = localStorage.getItem('token');
      callback(token);
    }
  });
} 
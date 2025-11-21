// frontend/src/services/api.ts
export const checkAuth = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/check/`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Auth check failed:', data);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Error checking auth:', err);
    return null;
  }
};





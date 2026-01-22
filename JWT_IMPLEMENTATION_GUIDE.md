# JWT Authentication Implementation for Private Routes

This document explains the JWT authentication implementation for the frontend to work with the backend API JWT authentication.

## Overview

The frontend now has complete JWT authentication protection for all private routes. This includes:

1. **Auth Context** - Global authentication state management
2. **Protected Route Wrapper** - Client-side route protection
3. **Middleware** - Server-side route protection
4. **API Client** - Automatic JWT token inclusion in API requests
5. **Token Verification** - Verification of JWT tokens on app initialization

## Files Created/Modified

### New Files

1. **`lib/auth-context.tsx`**
   - React Context for managing authentication state
   - Handles login, register, and logout operations
   - Manages JWT tokens and user data

2. **`lib/api-client.ts`**
   - HTTP client that automatically includes JWT tokens in requests
   - Provides typed methods for GET, POST, PUT, DELETE
   - Handles Authorization headers

3. **`middleware.ts`** (Root level)
   - Server-side route protection
   - Redirects unauthenticated users to login page
   - Protects routes: `/dashboard`, `/vocabulary-list`, `/learning`, `/practice`, `/mock-test`

4. **`components/protected-route-wrapper.tsx`**
   - Client-side wrapper component for protected routes
   - Shows loading spinner while verifying authentication
   - Redirects to login if not authenticated

5. **`components/ui/spinner.tsx`**
   - Loading spinner component

### Modified Files

1. **`app/layout.tsx`**
   - Added `AuthProvider` wrapper to enable authentication context globally

2. **`app/(private)/layout.tsx`**
   - Wrapped with `ProtectedRouteWrapper` to enforce authentication

## How It Works

### 1. Authentication Flow

```
User visits private route
    ↓
Middleware checks for token in cookies
    ↓
If no token → Redirect to /login
    ↓
If token exists → Load ProtectedRouteWrapper
    ↓
Component verifies token with backend
    ↓
If valid → Show content
If invalid → Redirect to /login
```

### 2. Login/Register Flow

```
User submits login/register form
    ↓
apiClient sends request to backend with credentials
    ↓
Backend returns { access_token, user }
    ↓
Token stored in localStorage and cookies
    ↓
User data stored in context
    ↓
Redirect to dashboard
```

### 3. Token Verification

- On app initialization, the auth context:
  - Retrieves stored token from localStorage
  - Calls `/auth/profile` endpoint with token
  - If valid: Updates user state
  - If invalid: Clears stored data and redirects to login

### 4. API Requests

All API requests made via `apiClient`:
- Automatically include JWT token in `Authorization: Bearer <token>` header
- Use the stored token from localStorage
- If request fails (401/403), token may have expired

## Usage Examples

### Using Authentication Context

```tsx
'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    // Your login form here
  );
}
```

### Using API Client

```tsx
'use client';

import { apiClient } from '@/lib/api-client';

export default function VocabularyList() {
  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const data = await apiClient.get('/vocabulary');
        setVocabulary(data);
      } catch (error) {
        console.error('Failed to fetch vocabulary:', error);
      }
    };

    fetchVocabulary();
  }, []);

  // Component code
}
```

### Accessing User Data

```tsx
'use client';

import { useAuth } from '@/lib/auth-context';

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

## Protected Routes

The following routes are protected and require authentication:
- `/dashboard`
- `/vocabulary-list`
- `/learning`
- `/practice`
- `/mock-test`

Any child routes under these paths are also protected.

## Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

This tells the API client where to send requests. Defaults to `http://localhost:3000` if not set.

## Token Storage

- **localStorage**: `access_token` - Persists between sessions
- **Cookies**: `access_token` - Used by middleware for server-side protection
- **Memory**: Auth context state - Live during session

## Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Secure Cookies**: Consider using `httpOnly` cookies with backend support
3. **Token Expiration**: Set appropriate JWT expiration times in backend
4. **CORS**: Ensure backend CORS is properly configured
5. **XSS Protection**: Store sensitive data securely, avoid inline scripts

## Troubleshooting

### Users redirected to login on page refresh
- **Cause**: Token validation failing
- **Solution**: Check backend JWT_SECRET and JWT_EXPIRES_IN configuration

### 401 errors on API requests
- **Cause**: Token expired or invalid
- **Solution**: Re-login or implement refresh token mechanism

### Middleware not redirecting to login
- **Cause**: Cookie not being set properly
- **Solution**: Check `auth-context.tsx` cookie setting code

## Next Steps

1. **Refresh Token**: Implement refresh token mechanism for better UX
2. **Error Handling**: Add better error handling for expired tokens
3. **Logout on all tabs**: Implement storage event listener for multi-tab logout
4. **Token Refresh**: Automatically refresh token before expiration

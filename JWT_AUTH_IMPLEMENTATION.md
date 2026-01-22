# JWT Authentication Integration Summary

## 🎯 Objective
Implement JWT authentication for the private routes in the frontend to work seamlessly with the NestJS backend API.

## ✅ Implementation Complete

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Frontend                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────┐       │
│  │         Root Layout (app/layout.tsx)            │       │
│  │              ↓ AuthProvider wrapper              │       │
│  └─────────────────────────────────────────────────┘       │
│                         ↓                                   │
│  ┌─────────────────────────────────────────────────┐       │
│  │    Private Layout (app/(private)/layout.tsx)    │       │
│  │       ↓ ProtectedRouteWrapper component          │       │
│  └─────────────────────────────────────────────────┘       │
│                         ↓                                   │
│  Protected Routes (dashboard, learning, etc.)              │
│                                                              │
│  Components access auth via: useAuth() hook                │
│  API calls use: apiClient (auto-includes JWT)              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
          ↓                                          ↓
   Middleware.ts                          NestJS Backend API
   (Server-side checks)                   (JWT validation)
          ↓                                          ↓
    Token in cookies ←──────────────→ /auth/login
    Redirects to /login                  /auth/register
                                        /auth/profile
                                        Other protected routes
```

## 📁 File Structure

```
frontend/
├── middleware.ts                          # Server-side protection
├── app/
│   ├── layout.tsx                        # ✅ Modified - Added AuthProvider
│   └── (private)/
│       └── layout.tsx                    # ✅ Modified - Added ProtectedRouteWrapper
├── components/
│   ├── protected-route-wrapper.tsx       # ✅ New - Client-side protection
│   └── ui/
│       └── spinner.tsx                   # ✅ New - Loading spinner
└── lib/
    ├── auth-context.tsx                  # ✅ New - Auth state management
    ├── api-client.ts                     # ✅ New - HTTP client with JWT
    ├── constant.ts                       # (unchanged)
    └── types.ts                          # (unchanged)
```

## 🔐 Authentication Flow

### Initial Load
```
1. App starts → Auth context initializes
2. Check localStorage for 'access_token'
3. If token exists:
   a. Call GET /auth/profile with token
   b. If valid → Load user data and show content
   c. If invalid → Clear storage and redirect to /login
4. If no token → Show login page
```

### Login Flow
```
1. User enters credentials
2. POST /auth/login → { access_token, user }
3. Store token in:
   - localStorage (persistence)
   - cookies (middleware access)
4. Update auth context
5. Redirect to /dashboard
```

### Protected Route Access
```
1. Middleware checks: Is route protected?
2. If yes:
   a. Look for token in cookies
   b. If found → Allow access
   c. If not found → Redirect to /login
3. Client-side: ProtectedRouteWrapper verifies auth
4. If not authenticated → Show spinner + redirect
```

## 🛠️ Component Usage Examples

### Example 1: Login Component
```tsx
'use client';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login('user@example.com', 'password');
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### Example 2: Protected Component with User Data
```tsx
'use client';
import { useAuth } from '@/lib/auth-context';

export default function UserProfile() {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <div>Not authenticated</div>;

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Example 3: API Call with JWT
```tsx
'use client';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api-client';

export default function VocabularyList() {
  const [vocabulary, setVocabulary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        // JWT automatically included in Authorization header
        const data = await apiClient.get('/vocabulary');
        setVocabulary(data);
      } catch (error) {
        console.error('Failed to fetch vocabulary:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVocabulary();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {vocabulary.map(word => (
        <div key={word.id}>{word.word}</div>
      ))}
    </div>
  );
}
```

## 🔄 Token Management

### Storage
| Location | Purpose | Lifespan |
|----------|---------|----------|
| localStorage | Persist across sessions | Until logout or expiration |
| Cookies | Used by middleware | HTTP only, same as token |
| Context | In-memory state | Current session |

### Token Lifecycle
```
Login/Register
    ↓
Token created by backend
    ↓
Stored in localStorage + cookies
    ↓
Used for all API requests
    ↓
Verified on each protected route
    ↓
On expiration (401) or logout → Clear all storage
```

## 🛡️ Security Features

✅ **Server-side Middleware** - Prevents unauthorized access at router level
✅ **Token Verification** - Validates JWT on app initialization
✅ **HTTPOnly Cookies** - Safe storage (can be enabled in backend)
✅ **Authorization Header** - Proper JWT format: `Bearer <token>`
✅ **Automatic Logout** - Invalid tokens automatically clear storage
✅ **Protected Routes** - Client and server-side validation

## 🚀 Deployment Checklist

- [ ] Update `.env.local` with backend URL
- [ ] Ensure backend CORS includes frontend domain
- [ ] Verify JWT_SECRET is strong in backend `.env`
- [ ] Set JWT expiration appropriately (24h recommended)
- [ ] Use HTTPS in production
- [ ] Consider refresh token implementation
- [ ] Test logout across multiple tabs
- [ ] Verify token storage security

## 📝 Backend Endpoints Required

Your NestJS backend must provide (already configured):

```
POST   /auth/register    → { access_token, user }
POST   /auth/login       → { access_token, user }
GET    /auth/profile     → user data (requires JWT)
```

## 🔧 Configuration

`.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📚 Documentation

- [JWT_IMPLEMENTATION_GUIDE.md](./JWT_IMPLEMENTATION_GUIDE.md) - Detailed implementation guide
- [FRONTEND_JWT_SETUP.md](./FRONTEND_JWT_SETUP.md) - Setup instructions
- Backend docs: [JWT_QUICK_REFERENCE.md](../renshyuu_nihongo_be/JWT_QUICK_REFERENCE.md)

## ✨ What's Now Protected

All child routes under these are protected:
- `/dashboard` - Dashboard pages
- `/vocabulary-list` - Vocabulary management
- `/learning` - Learning modules
- `/practice` - Practice sections
- `/mock-test` - Mock tests

Users without valid JWT tokens will be redirected to `/login`.

## 🎓 Testing the Implementation

1. **Test unauthorized access:**
   - Clear localStorage and cookies
   - Navigate to `/dashboard`
   - Should redirect to `/login`

2. **Test login:**
   - Fill in login form with valid credentials
   - Should redirect to `/dashboard`
   - Check localStorage for token

3. **Test persistence:**
   - Refresh page
   - Should remain authenticated
   - User data should load

4. **Test logout:**
   - Click logout button
   - Should redirect to `/login`
   - localStorage and cookies cleared

5. **Test API calls:**
   - Make API requests from protected pages
   - Check Network tab: Authorization header should be present
   - Token should be sent automatically

---

**Status**: ✅ Implementation Complete and Ready to Use

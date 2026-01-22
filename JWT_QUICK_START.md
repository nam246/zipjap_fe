# JWT Authentication - Quick Reference 🚀

## 📦 Installation - Already Done! ✅

All files are created and integrated. No npm packages needed.

## 🔧 Configuration

Add to `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📖 3 Main Hooks/Utils

### 1️⃣ `useAuth()` - Access authentication state
```tsx
'use client';
import { useAuth } from '@/lib/auth-context';

export default function Component() {
  const { user, token, isLoading, isAuthenticated, login, logout } = useAuth();
  
  // user: { id, email, username, name }
  // isAuthenticated: boolean
  // login(email, password): Promise<void>
  // logout(): void
}
```

### 2️⃣ `apiClient` - Make API calls with JWT
```tsx
'use client';
import { apiClient } from '@/lib/api-client';

export default function Component() {
  useEffect(() => {
    // Automatically includes JWT in Authorization header
    const data = await apiClient.get('/vocabulary');
    const result = await apiClient.post('/vocabulary', { word: 'test' });
    const updated = await apiClient.put('/vocabulary/id', { word: 'updated' });
    await apiClient.delete('/vocabulary/id');
  }, []);
}
```

### 3️⃣ `<ProtectedRouteWrapper>` - Already wrapped! ✅
```tsx
// Already applied to app/(private)/layout.tsx
// No action needed - it protects all private routes automatically
```

## 🔐 Protected Routes

```
/dashboard           ← Requires auth
/vocabulary-list     ← Requires auth
/learning            ← Requires auth
/practice            ← Requires auth
/mock-test           ← Requires auth
/login               ← Public
/                    ← Public
```

## 💻 Common Patterns

### Login Form
```tsx
'use client';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await login(
        formData.get('email') as string,
        formData.get('password') as string
      );
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### User Profile Display
```tsx
'use client';
import { useAuth } from '@/lib/auth-context';

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <p>ID: {user?.id}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Fetch Protected Data
```tsx
'use client';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api-client';

interface Vocabulary {
  id: string;
  word: string;
  meaning: string;
}

export default function VocabularyList() {
  const [items, setItems] = useState<Vocabulary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        // JWT is automatically included!
        const data = await apiClient.get<Vocabulary[]>('/vocabulary');
        setItems(data);
      } catch (err) {
        setError('Failed to fetch vocabulary');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVocabulary();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.word} - {item.meaning}</li>
      ))}
    </ul>
  );
}
```

### Logout Button in Dropdown
```tsx
'use client';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function ProfileDropdown({ trigger }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            <p>{user?.name}</p>
            <p className="text-xs">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## 🔄 Token Flow

```
App Starts
  ↓
AuthProvider initializes
  ↓
Load token from localStorage
  ↓
Verify with GET /auth/profile
  ↓
If valid → Set user state
If invalid → Clear storage, redirect to /login
```

## 🛡️ Double Protection

### Server-Side (middleware.ts)
```
Client Request → Middleware checks cookies
              → If no token → Redirect to /login
              → If token exists → Allow request
```

### Client-Side (ProtectedRouteWrapper)
```
Route loads → Check isAuthenticated
           → If false → Show spinner
           → If true → Render content
           → On mount, redirect if not auth
```

## ❌ Common Mistakes to Avoid

```tsx
// ❌ DON'T: Use fetch for API calls
fetch('/api/vocabulary')

// ✅ DO: Use apiClient
apiClient.get('/vocabulary')

// ❌ DON'T: Forget 'use client' directive
export default function Component() { }

// ✅ DO: Add 'use client' for hooks
'use client';
export default function Component() { }

// ❌ DON'T: Call login without try-catch
await login(email, password);

// ✅ DO: Handle errors
try {
  await login(email, password);
} catch (error) {
  console.error('Login failed', error);
}
```

## 🧪 Quick Test

1. **Test auth redirect:**
   ```bash
   # Clear localStorage and cookies
   # Navigate to: http://localhost:3000/dashboard
   # Should redirect to: http://localhost:3000/login ✓
   ```

2. **Test JWT in requests:**
   ```bash
   # Open DevTools > Network
   # Make API call from protected page
   # Check request headers for: Authorization: Bearer xxx... ✓
   ```

3. **Test token persistence:**
   ```bash
   # Login successfully
   # Refresh page
   # Should stay logged in ✓
   ```

## 📞 API Methods

```tsx
import { apiClient } from '@/lib/api-client';

// GET
const data = await apiClient.get<DataType>('/endpoint');

// POST
const response = await apiClient.post<ResponseType>('/endpoint', { body });

// PUT
const updated = await apiClient.put<ResponseType>('/endpoint', { body });

// DELETE
await apiClient.delete<ResponseType>('/endpoint');
```

## 🎯 Files You Need to Know

| File | What to Use |
|------|------------|
| `lib/auth-context.tsx` | `useAuth()` hook |
| `lib/api-client.ts` | `apiClient` utility |
| `middleware.ts` | Server protection (don't edit) |
| `components/protected-route-wrapper.tsx` | Already applied (don't edit) |

## ⚡ Quick Start Checklist

- [ ] Add `NEXT_PUBLIC_API_URL` to `.env.local`
- [ ] Update your **login page** to use `useAuth()` hook
- [ ] Update your **API calls** to use `apiClient`
- [ ] Update your **profile dropdown** with logout
- [ ] Test unauthorized access → Should redirect ✓
- [ ] Test login flow ✓
- [ ] Test API calls include JWT ✓
- [ ] Test logout clears storage ✓

---

**Ready to go!** 🚀 All JWT auth is implemented. Just integrate the hooks into your components.

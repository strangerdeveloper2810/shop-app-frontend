# CLAUDE.md - Angular E-Commerce Frontend

> Hướng dẫn cho Claude Code khi làm việc với dự án Angular e-commerce frontend

---

## 🎯 PROJECT OVERVIEW

**Type:** Angular 16.2.6 E-Commerce Frontend Application
**Purpose:** Learning project (Newbie → Mid-level Angular Developer)
**Backend:** Spring Boot API (separate repository)
**Status:** 🚧 In Development - Week 2/4
**Package Manager:** pnpm (preferred), npm (fallback)

### Key Characteristics
- JWT-based authentication system
- TypeScript strict mode enabled
- Bootstrap 5.3 + FontAwesome UI
- SCSS styling
- Learning-focused codebase với Vietnamese comments
- Production-ready patterns cho interview prep

---

## 🏗️ PROJECT STRUCTURE

```
angular-frontend/
├── src/app/
│   ├── components/          # UI Components (feature-based)
│   │   ├── login/           # Login page & auth logic
│   │   ├── register/        # User registration
│   │   ├── home/            # Main dashboard
│   │   ├── header/          # Navigation header
│   │   ├── footer/          # Page footer
│   │   ├── detail-product/  # Product detail view
│   │   ├── order/           # Order management
│   │   └── order-confirm/   # Order confirmation
│   ├── services/            # Business logic & API integration
│   │   ├── user.service.ts       # User authentication APIs
│   │   ├── token.service.ts      # JWT token management
│   │   ├── role.service.ts       # User role logic
│   │   └── http.util.service.ts  # HTTP utilities & headers
│   ├── guards/              # Route protection
│   │   └── auth.guard.ts         # Authentication guard
│   ├── interceptor/         # HTTP request/response handling
│   │   └── token.interceptor.ts  # Add JWT to requests
│   ├── models/              # Domain models
│   │   └── role.ts               # User role model
│   ├── dtos/                # Data Transfer Objects
│   │   └── user/
│   │       ├── login.dtos.ts     # Login request DTO
│   │       └── register.dto.ts   # Register request DTO
│   ├── response/            # API response types
│   │   ├── LoginResponse/
│   │   └── RegisterResponse/
│   ├── environments/        # Environment configuration
│   │   └── index.ts              # API base URL config
│   ├── app-routing.module.ts     # Route definitions
│   └── app.module.ts             # Root module
├── docs/                    # 📚 Documentation
│   ├── notes/               # Learning notes (session logs)
│   ├── plans/               # Roadmaps & interview prep
│   └── resources/           # Useful links & tools
└── angular.json             # Angular CLI configuration
```

---

## 🔧 TECH STACK & DEPENDENCIES

### Core Framework
- **Angular:** 16.2.6 (NOT latest - learning version)
- **TypeScript:** 5.1.3 with strict mode
- **RxJS:** 7.8.0 (Observables & reactive programming)

### UI & Styling
- **Bootstrap:** 5.3.0 (CSS framework)
- **FontAwesome:** 6.4.2 (icon library)
- **SCSS:** Preferred styling approach

### Utilities
- **class-transformer:** 0.5.1 (DTO transformation)
- **class-validator:** 0.14.1 (DTO validation)

### Testing (configured but not implemented yet)
- Jasmine + Karma (unit tests)
- E2E testing (planned for Week 4)

---

## 📋 CODING CONVENTIONS

### File & Class Naming
```typescript
// ✅ CORRECT
LoginComponent          → login.component.ts
UserService            → user.service.ts
AuthGuard              → auth.guard.ts
LoginDTO               → login.dtos.ts

// ❌ INCORRECT
login_component.ts      // Use kebab-case
UserService.ts          // File name should be lowercase
authguard.ts            // Missing dot notation
```

### TypeScript Standards
```typescript
// ✅ STRICT MODE - Always enabled
// tsconfig.json: "strict": true

// Type annotations required
function login(email: string, password: string): Observable<any> { }

// Interface over type when possible
interface User { }  // ✅ Preferred
type User = { }     // ⚠️ Use only when necessary

// providedIn: 'root' for singleton services
@Injectable({
  providedIn: 'root'  // ✅ Tree-shakeable
})
```

### Styling Approach
```scss
// ✅ SCSS (preferred)
.login-container {
  .form-group {
    margin-bottom: 1rem;
  }
}

// Bootstrap classes for layout
<div class="container">
  <div class="row">
    <div class="col-md-6">
```

### Comments & Documentation
```typescript
// ✅ Vietnamese comments for learning purposes
// Hàm này xử lý logic đăng nhập
login(loginDTO: LoginDTO): Observable<any> {
  // Gửi request đến API
  return this.http.post(this.apiAuth.login, loginDTO);
}

// ✅ English for production-critical code
// TODO: Implement error handling
// FIXME: Memory leak in subscription
```

### Component Structure
```typescript
// ✅ Standard Angular component order
@Component({ })
export class LoginComponent {
  // 1. Public properties
  loginForm: FormGroup;

  // 2. Private properties
  private destroy$ = new Subject<void>();

  // 3. Constructor with DI
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  // 4. Lifecycle hooks (in order)
  ngOnInit() { }
  ngOnDestroy() { }

  // 5. Public methods
  onSubmit() { }

  // 6. Private methods
  private handleError() { }
}
```

---

## 🔐 AUTHENTICATION FLOW

### Current Implementation
```
1. User submits login form (LoginComponent)
   ↓
2. UserService.login(loginDTO) → POST /api/users/login
   ↓
3. Backend returns JWT token + user data
   ↓
4. TokenService saves token to localStorage
   ↓
5. Router navigates to /home
   ↓
6. AuthGuard checks token on protected routes
   ↓
7. TokenInterceptor adds "Authorization: Bearer {token}" to all requests
```

### Key Files
- **Login Logic:** `components/login/login.component.ts`
- **API Calls:** `services/user.service.ts`
- **Token Storage:** `services/token.service.ts`
- **Route Protection:** `guards/auth.guard.ts`
- **HTTP Interceptor:** `interceptor/token.interceptor.ts`

### Protected vs Public Routes
```typescript
// Public routes (no AuthGuard)
/login
/register

// Protected routes (requires authentication)
/home                  → HomeComponent
/products/:id          → DetailProductComponent
/orders                → OrderComponent
/orders/confirm        → OrderConfirmComponent
```

---

## 🛠️ DEVELOPMENT GUIDELINES

### Running the Project
```bash
# Start dev server (preferred)
pnpm start
# or
npm start

# App runs at http://localhost:4200/

# Build for production
pnpm build

# Run tests (when implemented)
pnpm test
```

### Environment Configuration
```typescript
// src/app/environments/index.ts
export const environments = {
  apiBaseUrl: 'http://localhost:8088/api/v1',  // Spring Boot backend
  production: false
};
```

### Generating New Components/Services
```bash
# Generate component
ng g c components/feature-name

# Generate service
ng g s services/feature-name

# Generate guard
ng g guard guards/guard-name
```

---

## 🚨 CRITICAL RULES FOR CLAUDE

### DO ✅
- **Use pnpm** as default package manager (fallback to npm)
- **Follow TypeScript strict mode** - no `any` types without justification
- **Use RxJS Observables** for async operations (not Promises)
- **Implement proper unsubscribe** patterns (Subject + takeUntil)
- **Add Vietnamese comments** for learning purposes
- **Check authentication** before protected route changes
- **Use Bootstrap classes** for layout/styling
- **Follow Angular Style Guide** conventions
- **Test changes** with `pnpm start` before completion
- **Update documentation** in `docs/` when adding major features

### DON'T ❌
- **Don't upgrade Angular version** (16.2.6 is intentional for learning)
- **Don't use standalone components** (module-based architecture)
- **Don't skip AuthGuard** on protected routes
- **Don't hardcode API URLs** (use environments/index.ts)
- **Don't commit tokens** or sensitive data
- **Don't use inline styles** (use SCSS files)
- **Don't introduce new dependencies** without asking
- **Don't refactor large sections** without planning
- **Don't remove learning comments** (Vietnamese comments are intentional)
- **Don't implement features** without updating roadmap in `docs/`

### When Modifying Authentication
```typescript
// ⚠️ CRITICAL - Always maintain these patterns
// 1. TokenService must handle localStorage
// 2. AuthGuard must check token validity
// 3. TokenInterceptor must add headers
// 4. Logout must clear token + redirect to /login
```

### When Adding New Routes
```typescript
// ✅ ALWAYS add AuthGuard to protected routes
{
  path: 'new-feature',
  component: NewFeatureComponent,
  canActivate: [AuthGuard]  // 🔒 Don't forget this!
}
```

---

## 📚 DOCUMENTATION SYSTEM

### docs/ Folder Structure
```
docs/
├── notes/
│   └── LEARNING_NOTES.md       # Session-by-session learning log
├── plans/
│   ├── 4-WEEK-ROADMAP.md       # 4-week learning plan with progress
│   └── INTERVIEW_PREP.md       # Interview Q&A preparation
└── resources/
    └── USEFUL_LINKS.md         # Bookmarked resources
```

### When to Update Docs
- **After implementing features** → Update `LEARNING_NOTES.md`
- **When completing roadmap tasks** → Tick checkboxes in `4-WEEK-ROADMAP.md`
- **When learning concepts** → Add to `INTERVIEW_PREP.md`
- **Finding useful resources** → Add to `USEFUL_LINKS.md`

---

## 🎯 CURRENT PROJECT STATUS

### Week 1 ✅ COMPLETED
- [x] Angular fundamentals review
- [x] Routing implementation
- [x] AuthGuard setup
- [x] Layout refactoring (Header/Footer)
- [x] JWT token management
- [x] HTTP Interceptor

### Week 2 🚧 IN PROGRESS
- [ ] Reactive Forms implementation
- [ ] RxJS operators mastery
- [ ] Error handling service
- [ ] Loading states & spinners

### Known Issues & TODOs
- Shopping cart feature not implemented yet
- No centralized error handling service
- Missing loading states on API calls
- Tests not written yet (planned for Week 4)

---

## 🔗 RELATED FILES

### Must-Read Files
- [README.md](README.md) - Project overview & setup
- [.docs-guide.md](.docs-guide.md) - Quick docs reference
- [4-WEEK-ROADMAP.md](docs/plans/4-WEEK-ROADMAP.md) - Learning plan
- [angular.json](angular.json) - Angular CLI configuration
- [package.json](package.json) - Dependencies

### Key Configuration Files
- `tsconfig.json` - TypeScript strict mode config
- `angular.json` - Build config, styles, scripts
- `src/app/environments/index.ts` - API base URL
- `src/app/app-routing.module.ts` - Route definitions
- `src/app/app.module.ts` - Module imports & providers

---

## 🧪 TESTING STRATEGY (Future)

### Unit Tests (Week 4)
```typescript
// Components: .spec.ts files
// Services: Mock HTTP calls
// Guards: Test navigation logic
```

### E2E Tests (Week 4)
```typescript
// User flows: Login → Browse → Order
// Protected routes validation
// Form submissions
```

---

## 🚀 DEPLOYMENT NOTES

### Build Command
```bash
pnpm build
# Output: dist/shopapp-angular/
```

### Environment Variables
```typescript
// Production environment (when ready)
export const environments = {
  apiBaseUrl: 'https://api.production.com/api/v1',
  production: true
};
```

### Deployment Targets (Future)
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

---

## 📞 ADDITIONAL CONTEXT

### Project Purpose
Đây là **learning project** với mục tiêu:
1. Master Angular fundamentals
2. Build production-ready features
3. Prepare cho mid-level Angular interviews
4. Practice best practices & design patterns

### Learning Philosophy
- **Code first, optimize later** - Focus on working features
- **Comment extensively** - Vietnamese comments for learning
- **Document progress** - Update docs/ regularly
- **Interview-ready** - Code quality matters

### Backend Integration
- Spring Boot API (separate repository)
- RESTful API design
- JWT authentication
- Swagger documentation (backend)

---

## 🆘 COMMON ISSUES & SOLUTIONS

### Issue: "Token expired" error
```typescript
// Solution: Implement token refresh in TokenInterceptor
// TODO: Add refresh token logic (Week 3)
```

### Issue: CORS errors in development
```typescript
// Solution: Configure Spring Boot backend CORS
// Add Angular proxy config if needed
```

### Issue: Bootstrap styles not loading
```bash
# Check angular.json styles array
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
]
```

---

## 🎓 LEARNING RESOURCES

### Official Docs
- [Angular Documentation](https://angular.io/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Course
- Udemy: "Viết ứng dụng bán hàng với Java Spring Boot API và Angular"

### Community
- Angular Discord
- Stack Overflow (tag: angular)
- Reddit r/Angular2

---

**Last Updated:** 12/02/2026
**Claude Code Version:** Use this file as source of truth when working on this project
**Next Milestone:** Complete Week 2 - Reactive Forms + RxJS Operators

---

*Hãy hỏi nếu cần clarification về bất kỳ convention hoặc pattern nào trong project này!* 🚀

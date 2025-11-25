# 🛍️ E-Commerce Angular Frontend

Angular frontend cho ứng dụng e-commerce fullstack (Angular + Spring Boot).

**Status:** 🚧 In Development - Learning Project
**Angular Version:** 16.2.6
**Purpose:** Learning Angular từ Newbie → Mid-level

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Development](#development)
- [Learning Progress](#learning-progress)

---

## 🎯 About

Đây là project e-commerce frontend được build với Angular, là phần frontend của fullstack app (Angular + Spring Boot). Project này được tạo ra cho mục đích học tập và chuẩn bị phỏng vấn Mid-level Angular Developer.

**Learning Goals:**
- Master Angular fundamentals
- Build production-ready features
- Prepare for mid-level interviews
- Best practices & patterns

---

## ✨ Features

### **Implemented ✅**
- [x] User Authentication (Login/Register)
- [x] Angular Routing với guards
- [x] Protected routes với AuthGuard
- [x] JWT token management
- [x] HTTP Interceptor cho authentication
- [x] Shared layout (Header/Footer)
- [x] Responsive navigation

### **In Progress 🚧**
- [ ] Shopping Cart
- [ ] Product listing & search
- [ ] Order management
- [ ] User profile

### **Planned 📅**
- [ ] Reactive Forms
- [ ] State management
- [ ] Lazy loading
- [ ] Performance optimization
- [ ] Unit & E2E testing

---

## 🛠️ Tech Stack

**Core:**
- Angular 16.2.6
- TypeScript 5.x
- RxJS 7.8
- Bootstrap 5.3

**Tools:**
- Angular CLI
- npm/pnpm
- VS Code

**Backend:**
- Spring Boot API (separate repo)

---

## 🚀 Getting Started

### **Prerequisites**
```bash
node >= 16.x
npm >= 8.x (or pnpm)
```

### **Installation**

```bash
# Clone repo
git clone <repo-url>
cd angular-frontend

# Install dependencies
npm install
# or
pnpm install

# Start dev server
npm start
# or
pnpm start
```

App sẽ chạy tại `http://localhost:4200/`

### **Environment Setup**

API base URL được config tại `src/app/environments/index.ts`

---

## 📁 Project Structure

```
angular-frontend/
├── src/
│   ├── app/
│   │   ├── components/           # UI Components
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── home/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── services/             # Services
│   │   │   ├── user.service.ts
│   │   │   ├── token.service.ts
│   │   │   └── role.service.ts
│   │   ├── guards/               # Route Guards
│   │   │   └── auth.guard.ts
│   │   ├── interceptor/          # HTTP Interceptors
│   │   │   └── token.interceptor.ts
│   │   ├── models/               # Data Models
│   │   ├── dtos/                 # Data Transfer Objects
│   │   ├── app-routing.module.ts # Routing config
│   │   └── app.module.ts         # Root module
│   └── assets/                   # Static files
├── docs/                         # 📚 Documentation
│   ├── notes/                    # Learning notes
│   ├── plans/                    # Roadmaps & plans
│   └── resources/                # Useful links
└── README.md                     # This file
```

---

## 📚 Documentation

Toàn bộ documentation nằm trong folder `docs/`:

**Quick Links:**
- 📖 [Learning Notes](docs/notes/LEARNING_NOTES.md) - Session notes & concepts
- 🗓️ [4-Week Roadmap](docs/plans/4-WEEK-ROADMAP.md) - Learning plan & progress
- 🎯 [Interview Prep](docs/plans/INTERVIEW_PREP.md) - Interview Q&A
- 🔗 [Useful Links](docs/resources/USEFUL_LINKS.md) - Resources & tools

**See also:** [.docs-guide.md](.docs-guide.md) - Quick reference

---

## 💻 Development

### **Common Commands**

```bash
# Development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linter
npm run lint

# Generate component
ng generate component component-name
ng g c component-name  # shorthand

# Generate service
ng generate service service-name
ng g s service-name
```

### **Code Style**

Project follows [Angular Style Guide](https://angular.io/guide/styleguide)

**Key conventions:**
- Components: PascalCase (e.g., `LoginComponent`)
- Files: kebab-case (e.g., `login.component.ts`)
- Services: PascalCase with `Service` suffix
- Use TypeScript strict mode

---

## 📊 Learning Progress

### **Week 1: Fundamentals + Routing** ✅ COMPLETED
- [x] Angular fundamentals review
- [x] Routing implementation
- [x] AuthGuard setup
- [x] Layout refactoring

**Skills gained:**
- Components & Templates
- Data Binding
- Dependency Injection
- RxJS basics
- Routing & Guards

### **Week 2: Reactive Forms + RxJS** 🚧 IN PROGRESS
- [ ] Reactive Forms
- [ ] RxJS operators
- [ ] Error handling service
- [ ] Loading states

### **Overall Progress:** 25% → Mid-level goal

See [4-Week Roadmap](docs/plans/4-WEEK-ROADMAP.md) for detailed plan.

---

## 🎯 Key Features Explained

### **Authentication Flow**
```
1. User submit login form
2. POST /api/login với credentials
3. Server return JWT token
4. Save token to localStorage
5. Navigate to /home
6. AuthGuard check token on protected routes
7. TokenInterceptor add token to HTTP headers
```

### **Routing Structure**
```
/ (root)
├── /login (public)
├── /register (public)
├── /home (protected)
├── /products/:id (protected)
└── /orders (protected)
```

**Protected routes** require authentication via `AuthGuard`.

---

## 🧪 Testing

**Unit Tests:**
```bash
npm test
```

**E2E Tests:**
```bash
npm run e2e
```

*(Tests sẽ được implement trong Week 4)*

---

## 🚀 Deployment

**Build for production:**
```bash
npm run build
```

Build artifacts sẽ được lưu trong `dist/` directory.

**Deploy to:**
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

---

## 📝 Notes

### **Known Issues**
- Shopping cart feature chưa implement
- Chưa có error handling service
- Chưa có loading states

### **TODOs**
See [4-Week Roadmap](docs/plans/4-WEEK-ROADMAP.md) for complete task list.

---

## 🤝 Contributing

Đây là personal learning project, nhưng feedback luôn được chào đón!

---

## 📄 License

This project is for learning purposes.

---

## 🙏 Acknowledgments

- [Angular Official Docs](https://angular.io/)
- [Udemy Course](https://www.udemy.com/course/viet-ung-dung-ban-hang-voi-java-springbootapi-va-angular/)
- Angular Community

---

## 📧 Contact

**Learning Journey:** Newbie → Mid-level Angular Developer
**Timeline:** 1 tháng
**Goal:** Ready for mid-level interviews

---

**Last Updated:** 25/11/2025
**Next Milestone:** Complete Week 2 (Reactive Forms + RxJS)

---

## 🔗 Quick Links

- [Angular Docs](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [RxJS Docs](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Happy Coding! 🚀**

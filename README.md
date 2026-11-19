# Farhan Khan Portfolio

Next.js 16 + React 19 + TypeScript + Tailwind CSS 4.

## Chalane ka tareeqa

1. Node.js (version 20+) install rakho: https://nodejs.org
2. Is folder mein terminal kholo:

```bash
npm install
npm run dev
```

3. Browser mein http://localhost:3000 kholo.

## Content badalna (code chhoone ki zaroorat nahi)

Sab kuch `lib/data.ts` mein hai: email, social links, about, services, skills, experience, certificates, projects.

- Project ka GitHub ya live link add karne ke liye us project mein `repo: "https://..."` ya `demo: "https://..."` likho. Link na ho to button nahi dikhta.
- CV button: apni PDF `public/Farhan-Khan-CV.pdf` naam se rakho, phir `lib/data.ts` mein `cvUrl: "/Farhan-Khan-CV.pdf"` likho.
- Photo: `public/images/farhan.webp` (4:5 ratio, hero mein dikhti hai).

## Contact form (EmailJS)

1. `.env.example` ko copy kar ke `.env.local` banao.
2. EmailJS dashboard (https://dashboard.emailjs.com) se **Service ID** copy kar ke `NEXT_PUBLIC_EMAILJS_SERVICE_ID` mein likho. Template ID aur Public Key pehle se purane portfolio wale hain.
3. EmailJS template mein ye variables hone chahiye: `{{name}}`, `{{email}}`, `{{message}}`.
4. `npm run dev` dobara chalao.

Jab tak ye set nahi hota, form visitor ka email app khol deta hai (mailto), to message kabhi zaya nahi hota.

## Vercel par free live karna

1. Is folder ko GitHub repository mein upload karo (`node_modules` aur `.next` upload mat karo).
2. https://vercel.com par repository import karo, Deploy dabao.
3. Vercel ki Settings > Environment Variables mein `.env.local` wali values daalo, aur `NEXT_PUBLIC_SITE_URL` mein apna live link likho (social preview ke liye).

## Structure

```
app/
  page.tsx            sections ki tarteeb
  globals.css         rang, fonts, animations
  components/         Navbar, Hero, About, Services, Skills, Experience, Projects, Contact, Footer
lib/data.ts           poora editable content
public/images/        photo, logos, screenshots, certificates
```

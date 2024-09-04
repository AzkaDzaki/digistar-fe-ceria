# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// Case Login Auth
// Authentikasi
LOGIN
- Nembak api login
- Bakal dapat response token / user data
- Simpen token di local storage dengan nama token atau user setItem('token', response.data.token)

// Halaman yang protected
- Bikin context yang bakal ambil token dari local storage getItem('token')
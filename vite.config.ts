import path from "path"
import dns from 'dns'
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
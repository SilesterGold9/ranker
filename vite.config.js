import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import eslintPlugin from "vite-plugin-eslint"; // Para integração do ESLint

// Substitua __dirname com esta solução
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
	plugins: [
		react(),
		eslintPlugin({
			// Adiciona o plugin ESLint
			include: ["src/**/*.js", "src/**/*.jsx"], // Define os arquivos a serem incluídos
		}),
		visualizer({
			open: true,
			gzipSize: true,
			brotliSize: true,
		}), // Plugin para análise de pacotes com mais detalhes
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		sourcemap: true,
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
		chunkSizeWarningLimit: 2000,
	},
	server: {
		port: 5173, // Define uma porta padrão para o servidor de desenvolvimento
		open: true, // Abre o navegador automaticamente ao iniciar o servidor
	},
	// Configurações de otimização para pré-carregar módulos/pacotes
	optimizeDeps: {
		include: ["react", "react-dom"], // Pré-carrega esses módulos para agilizar o reinício do servidor
	},
});

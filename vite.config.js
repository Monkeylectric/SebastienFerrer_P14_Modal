import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.js'),
            name: 'ModalWealthHealth',
            fileName: 'modal-wealth-health',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'styled-components'],
            output: {
                globals: {
                    'react': 'React',
                    'styled-components': 'styled'
                },
            },
        },
    }
})

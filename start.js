// Production başlatma scripti
import { spawn, exec } from 'child_process'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, 'dist')
const indexPath = path.join(distPath, 'index.html')

console.log('🔍 Kontrol ediliyor...')
console.log(`   Dist klasörü: ${distPath}`)
console.log(`   Dist var mı: ${fs.existsSync(distPath)}`)
console.log(`   index.html var mı: ${fs.existsSync(indexPath)}`)

if (!fs.existsSync(distPath)) {
  console.log('\n⚠️  dist klasörü bulunamadı!')
  console.log('📦 Build başlatılıyor...\n')
  
  const build = spawn('npm', ['run', 'build'], { 
    shell: true, 
    stdio: 'inherit',
    cwd: __dirname
  })
  
  build.on('close', (code) => {
    if (code === 0) {
      console.log('\n✅ Build tamamlandı!')
      startServer()
    } else {
      console.error('❌ Build başarısız!')
      process.exit(1)
    }
  })
} else {
  startServer()
}

function startServer() {
  console.log('\n🚀 Sunucu başlatılıyor...\n')
  
  // Set production environment
  process.env.NODE_ENV = 'production'
  
  // Start server
  import('./server/index.js')
}


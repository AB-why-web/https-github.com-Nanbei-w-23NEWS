import Link from 'next/link';

export default function SoccerFormationLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green-800/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回绿茵首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-600 mb-4">
            ⚽ 足球阵型布局：CSS定位系统
          </h1>
          <p className="text-lg text-green-200/90 max-w-2xl mx-auto">
            利用CSS定位技术创建足球阵型图，展示4-4-2、4-3-3等经典阵型的球员位置布局。
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* 足球场地 */}
          <div className="bg-green-900/60 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/20 border border-green-700">
            <div className="p-6 border-b border-green-700">
              <h3 className="text-xl font-semibold text-green-100">🏟️ 足球场地布局</h3>
            </div>
            <div className="p-8">
              {/* 4-4-2 阵型 */}
              <div className="bg-green-800/40 p-6 rounded-lg border border-green-600 mb-8">
                <h4 className="text-lg font-bold text-green-300 mb-6 text-center">4-4-2 经典阵型</h4>
                
                {/* 足球场地容器 */}
                <div className="relative bg-green-700/50 rounded-lg border-2 border-green-500 mx-auto" style={{ width: '600px', height: '400px' }}>
                  {/* 中线 */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
                  {/* 中圈 */}
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* 守门员 */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    GK
                  </div>
                  
                  {/* 后卫线 (4名) */}
                  <div className="absolute bottom-16 left-20 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div className="absolute bottom-16 left-40 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                  <div className="absolute bottom-16 right-40 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    6
                  </div>
                  <div className="absolute bottom-16 right-20 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  
                  {/* 中场线 (4名) */}
                  <div className="absolute bottom-48 left-16 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    11
                  </div>
                  <div className="absolute bottom-48 left-36 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    8
                  </div>
                  <div className="absolute bottom-48 right-36 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    10
                  </div>
                  <div className="absolute bottom-48 right-16 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    7
                  </div>
                  
                  {/* 前锋线 (2名) */}
                  <div className="absolute bottom-80 left-44 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    9
                  </div>
                  <div className="absolute bottom-80 right-44 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    7
                  </div>
                </div>
              </div>

              {/* 4-3-3 阵型 */}
              <div className="bg-green-800/40 p-6 rounded-lg border border-green-600">
                <h4 className="text-lg font-bold text-green-300 mb-6 text-center">4-3-3 现代阵型</h4>
                
                {/* 足球场地容器 */}
                <div className="relative bg-green-700/50 rounded-lg border-2 border-green-500 mx-auto" style={{ width: '600px', height: '400px' }}>
                  {/* 中线 */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
                  {/* 中圈 */}
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* 守门员 */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    GK
                  </div>
                  
                  {/* 后卫线 (4名) */}
                  <div className="absolute bottom-16 left-20 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div className="absolute bottom-16 left-40 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <div className="absolute bottom-16 right-40 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                  <div className="absolute bottom-16 right-20 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  
                  {/* 中场线 (3名) */}
                  <div className="absolute bottom-48 left-32 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    6
                  </div>
                  <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    8
                  </div>
                  <div className="absolute bottom-48 right-32 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    10
                  </div>
                  
                  {/* 前锋线 (3名) */}
                  <div className="absolute bottom-80 left-24 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    11
                  </div>
                  <div className="absolute bottom-80 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    9
                  </div>
                  <div className="absolute bottom-80 right-24 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    7
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 定位说明 */}
          <div className="bg-green-900/60 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/20 border border-green-700">
            <div className="p-6 border-b border-green-700">
              <h3 className="text-xl font-semibold text-green-100">📚 CSS定位技术说明</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
                  <h4 className="text-lg font-bold text-green-300 mb-3">📍 绝对定位 (Absolute)</h4>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li>• 相对于最近的已定位父元素</li>
                    <li>• 球员精确定位到场地特定位置</li>
                    <li>• 脱离文档流，不影响其他元素</li>
                    <li>• 适合固定位置的阵型设计</li>
                  </ul>
                </div>
                
                <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
                  <h4 className="text-lg font-bold text-green-300 mb-3">🎯 相对定位 (Relative)</h4>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li>• 相对于元素原始位置定位</li>
                    <li>• 球员可以基于基础位置微调</li>
                    <li>• 保持在文档流中</li>
                    <li>• 适合战术变化中的位置调整</li>
                  </ul>
                </div>

                <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
                  <h4 className="text-lg font-bold text-green-300 mb-3">🎨 阵型设计原则</h4>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li>• 4-4-2：平衡性强，攻守兼备</li>
                    <li>• 4-3-3：进攻型阵型，边路活跃</li>
                    <li>• 球员位置通过CSS精确控制</li>
                    <li>• 响应式设计适应不同屏幕</li>
                  </ul>
                </div>

                <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
                  <h4 className="text-lg font-bold text-green-300 mb-3">⚽ 位置说明</h4>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li>• 🟡 守门员：最后一道防线</li>
                    <li>• 🔵 后卫：防守核心，稳固后方</li>
                    <li>• 🟢 中场：连接攻防，控制节奏</li>
                    <li>• 🔴 前锋：进攻尖兵，破门得分</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
import Link from 'next/link';

export default function SoccerFieldDesign() {
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
            ⚽ 绿茵场地设计：CSS基础选择器
          </h1>
          <p className="text-lg text-green-200/90 max-w-2xl mx-auto">
            本案例展示了如何使用CSS的三大基础选择器：元素选择器 (h2)、类选择器 (.field-zone)、ID选择器 (#soccer-field) 来设计足球场地布局。
          </p>
        </header>

        <div className="bg-green-900/60 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/20 border border-green-700">
          <div className="p-6 border-b border-green-700">
            <h3 className="text-xl font-semibold text-green-100">🏟️ 场地布局演示</h3>
          </div>
          <div className="p-8 space-y-6">
            {/* 足球场地标题 */}
            <h1 className="text-3xl font-bold text-green-300" style={{ fontFamily: 'monospace' }}>⚽ 绿茵场地设计系统</h1>
            
            {/* ID 选择器目标 - 足球场地 */}
            <h2 id="soccer-field" className="text-2xl font-semibold text-yellow-400 border-2 border-yellow-400 p-4 rounded-lg">
              🏟️ 足球场地主区域 (ID: soccer-field)
            </h2>
            
            {/* 类选择器目标 - 场地区域 */}
            <div className="field-zone bg-green-800/50 border-l-4 border-green-400 pl-6 py-4 rounded-r-lg">
              <p className="text-green-100 italic">
                🥅 这是禁区范围 (class: field-zone)，通过类选择器设置了绿茵场地的特殊样式，包括边框和背景色。
              </p>
            </div>
            
            {/* 元素选择器目标 */}
            <div className="space-y-4">
              <p className="leading-relaxed text-green-200">
                ⚽ 这是场地说明段落。足球场地由多个重要区域组成，每个区域都有其独特的作用。
              </p>

              <div className="p-4 bg-green-800/40 rounded-md border border-green-600">
                <p className="text-green-200">
                  🎯 场地包含了
                  <a href="#" className="mx-2 text-green-300 hover:text-green-200 hover:underline transition-all font-semibold">
                    中圈区域 (a:link)
                  </a>
                  ，以及
                  <a href="#" className="mx-2 text-yellow-300 visited:text-yellow-300 hover:text-yellow-200 hover:underline transition-all font-semibold">
                    球门区域 (a:visited)
                  </a>
                  。
                </p>
              </div>

              {/* 额外的足球元素 */}
              <div className="mt-6 p-6 bg-gradient-to-r from-green-800/30 to-green-700/30 rounded-lg border border-green-600">
                <h3 className="text-lg font-bold text-green-300 mb-3">🏆 场地规格说明</h3>
                <ul className="space-y-2 text-green-200 text-sm">
                  <li>• 标准球场长度：100-110米</li>
                  <li>• 标准球场宽度：64-75米</li>
                  <li>• 球门尺寸：7.32米 × 2.44米</li>
                  <li>• 中圈半径：9.15米</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 
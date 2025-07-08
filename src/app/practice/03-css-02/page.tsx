import Link from 'next/link';

export default function SoccerEquipmentDisplay() {
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
            ⚽ 足球装备展示：CSS盒模型
          </h1>
          <p className="text-lg text-green-200/90 max-w-2xl mx-auto">
            通过CSS盒模型展示足球装备的设计，包括球衣、球鞋和护具的内边距、边框、外边距和内容区域。
          </p>
        </header>

        <div className="bg-green-900/60 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/20 border border-green-700">
          <div className="p-6 border-b border-green-700">
            <h3 className="text-xl font-semibold text-green-100">🎽 足球装备展示区</h3>
          </div>
          <div className="p-8 space-y-8">
            
            {/* 球衣展示 - 盒模型演示 */}
            <div className="bg-green-800/40 p-8 border-4 border-green-600 rounded-lg">
              <h2 className="text-2xl font-bold text-green-300 mb-4">🎽 球衣设计 (盒模型演示)</h2>
              
              <div className="flex flex-wrap gap-6 justify-center">
                {/* 主场球衣 */}
                <div className="bg-white text-green-900 p-6 border-4 border-green-600 rounded-lg shadow-lg m-4" style={{ width: '200px', height: '250px' }}>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">主场球衣</h3>
                    <div className="bg-green-700 text-white p-3 rounded mb-3">
                      <span className="text-2xl font-bold">7</span>
                      <p className="text-sm">C罗</p>
                    </div>
                    <p className="text-sm">
                      内容区域：球衣主体<br/>
                      内边距：舒适穿着<br/>
                      边框：队徽边框<br/>
                      外边距：展示空间
                    </p>
                  </div>
                </div>
                
                {/* 客场球衣 */}
                <div className="bg-green-800 text-green-100 p-6 border-4 border-yellow-500 rounded-lg shadow-lg m-4" style={{ width: '200px', height: '250px' }}>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">客场球衣</h3>
                    <div className="bg-yellow-500 text-green-900 p-3 rounded mb-3">
                      <span className="text-2xl font-bold">7</span>
                      <p className="text-sm">C罗</p>
                    </div>
                    <p className="text-sm">
                      内容区域：球衣主体<br/>
                      内边距：舒适穿着<br/>
                      边框：队徽边框<br/>
                      外边距：展示空间
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 球鞋展示 */}
            <div className="bg-green-800/40 p-6 border-2 border-green-600 rounded-lg">
              <h2 className="text-xl font-bold text-green-300 mb-4">👟 专业球鞋</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-black text-white p-4 border-2 border-green-500 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">训练鞋</h4>
                  <p className="text-sm">适合日常训练</p>
                </div>
                <div className="bg-yellow-600 text-black p-4 border-2 border-green-500 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">比赛鞋</h4>
                  <p className="text-sm">专业比赛专用</p>
                </div>
                <div className="bg-white text-green-900 p-4 border-2 border-green-500 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">休闲鞋</h4>
                  <p className="text-sm">日常穿着舒适</p>
                </div>
              </div>
            </div>

            {/* 护具展示 */}
            <div className="bg-green-800/40 p-6 border-2 border-green-600 rounded-lg">
              <h2 className="text-xl font-bold text-green-300 mb-4">🛡️ 防护装备</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-700/50 p-4 border border-green-500 rounded-lg">
                  <h4 className="font-bold text-green-200 mb-2">护腿板</h4>
                  <p className="text-green-100 text-sm">保护小腿，防止受伤</p>
                </div>
                <div className="bg-green-700/50 p-4 border border-green-500 rounded-lg">
                  <h4 className="font-bold text-green-200 mb-2">守门员手套</h4>
                  <p className="text-green-100 text-sm">增强抓球能力</p>
                </div>
                <div className="bg-green-700/50 p-4 border border-green-500 rounded-lg">
                  <h4 className="font-bold text-green-200 mb-2">护踝</h4>
                  <p className="text-green-100 text-sm">保护脚踝关节</p>
                </div>
              </div>
            </div>

            {/* 盒模型说明 */}
            <div className="bg-green-800/30 p-6 border border-green-600 rounded-lg">
              <h3 className="text-lg font-bold text-green-300 mb-3">📏 CSS盒模型说明</h3>
              <div className="text-green-200 space-y-2 text-sm">
                <p>• <strong>内容区域(Content):</strong> 装备的主要部分，如球衣的布料、球鞋的鞋面</p>
                <p>• <strong>内边距(Padding):</strong> 装备内部的缓冲空间，提供舒适度</p>
                <p>• <strong>边框(Border):</strong> 装备的边缘设计，如队徽边框、鞋底边缘</p>
                <p>• <strong>外边距(Margin):</strong> 装备之间的间隔，展示时的留白空间</p>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
} 
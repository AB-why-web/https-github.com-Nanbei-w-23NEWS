import Link from 'next/link';

export default function SoccerTacticalBoard() {
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

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-600 mb-4">
            ⚽ 足球战术板：CSS 定位 (Position)
          </h1>
          <p className="text-lg text-green-200/90 max-w-3xl mx-auto">
            通过足球战术板演示CSS中 `position` 属性的关键值：`static`、`relative`、`absolute` 和 `fixed`，展示球员在场上的不同定位方式。
          </p>
        </header>

        <div className="space-y-12">
          
          {/* Section: Relative vs Absolute */}
          <section className="bg-green-900/50 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/10 border border-green-700 p-8">
            <h2 className="text-3xl font-bold text-green-300 mb-2 border-l-4 border-green-400 pl-4">⚽ 相对定位 vs 绝对定位</h2>
            <p className="text-green-200 mb-8 pl-5">`absolute` 定位的球员会相对于最近的、非 `static` 定位的父容器（球场）进行定位。如果找不到，则相对于整个视口定位。</p>
            
            <div className="bg-green-800/70 p-10 rounded-lg h-80 relative border-2 border-dashed border-green-500">
              <div className="absolute top-4 left-4 text-xs text-green-300">⚽ 足球场 (position: relative)</div>
              
              <div className="w-48 h-24 bg-green-700/80 border border-green-500 rounded-lg p-4 text-center">
                <p className="font-bold text-green-200">守门员</p>
                <p className="text-sm text-green-300">(position: static)</p>
              </div>

              <div className="w-48 h-24 bg-blue-500/30 border border-blue-500 rounded-lg p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="font-bold text-blue-100">中场核心</p>
                <p className="text-sm text-blue-200">(position: absolute)</p>
                <p className="text-xs text-blue-300">top: 50%; left: 50%</p>
              </div>

               <div className="w-48 h-24 bg-red-500/30 border border-red-500 rounded-lg p-4 text-center absolute bottom-4 right-4">
                <p className="font-bold text-red-100">前锋 - C罗</p>
                <p className="text-sm text-red-200">(position: absolute)</p>
                <p className="text-xs text-red-300">bottom: 1rem; right: 1rem</p>
              </div>
            </div>
          </section>

          {/* Section: Fixed */}
          <section className="bg-green-900/50 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/10 border border-green-700 p-8">
            <h2 className="text-3xl font-bold text-green-300 mb-2 border-l-4 border-green-400 pl-4">🏆 固定定位 (Fixed)</h2>
            <p className="text-green-200 mb-8 pl-5">`fixed` 定位的元素会相对于浏览器视口进行定位，就像球场上的计分板一样，即使页面滚动也会停留在同一位置。</p>
            
            <div className="h-48 flex justify-center items-center bg-green-800/70 p-10 rounded-lg">
                <p className="text-green-300">⬇️ 向下滚动页面，观察右下角的固定计分板。</p>
            </div>
          </section>

          {/* This is the fixed element */}
          <div className="fixed bottom-10 right-10 w-48 h-20 bg-green-500 text-green-900 font-bold rounded-lg shadow-2xl shadow-green-500/50 flex flex-col justify-center items-center z-50 animate-pulse border-2 border-green-400">
            <div className="text-lg">⚽ 计分板</div>
            <div className="text-sm">皇马 2-1 巴萨</div>
          </div>

          {/* 战术说明 */}
          <section className="bg-green-900/50 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/10 border border-green-700 p-8">
            <h2 className="text-3xl font-bold text-green-300 mb-2 border-l-4 border-green-400 pl-4">📋 战术定位说明</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-green-800/40 p-4 rounded-lg border border-green-600">
                <h4 className="font-bold text-green-300 mb-2">🥅 Static (静态)</h4>
                <p className="text-green-200 text-sm">默认定位，像守门员固定在球门前，按正常流程排列。</p>
              </div>
              <div className="bg-green-800/40 p-4 rounded-lg border border-green-600">
                <h4 className="font-bold text-green-300 mb-2">🏃‍♂️ Relative (相对)</h4>
                <p className="text-green-200 text-sm">相对原位置移动，保留原空间，像战术微调。</p>
              </div>
              <div className="bg-green-800/40 p-4 rounded-lg border border-green-600">
                <h4 className="font-bold text-green-300 mb-2">⚽ Absolute (绝对)</h4>
                <p className="text-green-200 text-sm">相对于球场容器定位，脱离正常流程。</p>
              </div>
              <div className="bg-green-800/40 p-4 rounded-lg border border-green-600">
                <h4 className="font-bold text-green-300 mb-2">🏆 Fixed (固定)</h4>
                <p className="text-green-200 text-sm">相对于视口固定，像计分板始终可见。</p>
              </div>
            </div>
          </section>

        </div>

        {/* Add some space to allow for scrolling */}
        <div className="h-96 bg-green-900/20 rounded-xl mt-12 flex items-center justify-center border border-green-700">
          <div className="text-center">
            <p className="text-green-300 text-xl mb-4">🏟️ 继续滚动体验固定定位效果</p>
            <p className="text-green-400 text-sm">观察右下角的计分板是否保持固定位置</p>
          </div>
        </div>

      </main>
    </div>
  );
} 
import Link from 'next/link';

export default function SoccerPlayerMovement() {
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
            ⚽ 球员移动轨迹：相对定位 (Relative)
          </h1>
          <p className="text-lg text-green-200/90 max-w-3xl mx-auto">
            `position: relative` 使球员相对于其在球场中的原始位置进行移动，但原始位置空间仍被保留，就像足球战术中的位置调整。
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Section: Normal Formation */}
          <section className="bg-green-900/50 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/10 border border-green-700 p-8">
            <h2 className="text-2xl font-bold text-green-200 mb-6 text-center">🏟️ 标准阵型</h2>
            <div className="space-y-4 text-green-200 text-center">
              <div className="p-4 bg-green-800/50 rounded-lg border border-green-600">后卫 1</div>
              <div className="p-4 bg-green-800/50 rounded-lg border border-green-600">中场 2</div>
              <div className="p-4 bg-green-700/60 border-2 border-green-400 rounded-lg">前锋 3 (C罗 - 将要移动)</div>
              <div className="p-4 bg-green-800/50 rounded-lg border border-green-600">前锋 4</div>
            </div>
          </section>

          {/* Section: Relative Positioning */}
          <section className="bg-green-900/50 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/10 border border-green-700 p-8">
             <h2 className="text-2xl font-bold text-green-200 mb-6 text-center">🏃‍♂️ 相对定位移动</h2>
             <div className="space-y-4 text-green-200 text-center relative">
              <div className="p-4 bg-green-800/50 rounded-lg border border-green-600">后卫 1</div>
              <div className="p-4 bg-green-800/50 rounded-lg border border-green-600">中场 2</div>
              
              {/* Ghost element showing original position */}
              <div className="p-4 bg-green-800/20 border-2 border-dashed border-green-500 rounded-lg text-green-400">
                C罗的原始位置
              </div>

              {/* The relatively positioned element */}
              <div className="p-4 bg-yellow-500 text-green-900 rounded-lg absolute w-full font-bold" style={{ top: 'calc(8rem + 2rem + 8px)', left: '40px' }}>
                C罗 (position: relative; top: ...; left: 40px;)
              </div>

              <div className="p-4 bg-green-800/50 rounded-lg border border-green-600">前锋 4</div>

              <p className="text-sm text-yellow-300 pt-16 text-center">
                ⚽ 注意：即使C罗移动到新位置，其他球员的位置并未改变，因为C罗在阵型中占据的空间被保留了。
              </p>
            </div>
          </section>
        </div>
        
        <div className="mt-12 bg-green-900/50 backdrop-blur-md rounded-xl p-6 border border-green-700">
          <h3 className="text-xl font-semibold text-green-300 mb-4">🎯 核心代码</h3>
          <pre className="bg-green-900/70 text-sm text-green-100 p-4 rounded-md overflow-x-auto">
            <code>
{`.cristiano-position {
  position: relative;
  top: 50px; /* 相对于原始位置向前移动 50px */
  left: 40px; /* 相对于原始位置向右移动 40px */
  /* 球员移动但保留原始空间 */
}`}
            </code>
          </pre>
        </div>

        <div className="mt-8 bg-green-900/40 backdrop-blur-md rounded-xl p-6 border border-green-700">
          <h3 className="text-xl font-semibold text-green-300 mb-4">⚽ 足球战术应用</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-800/30 p-4 rounded-lg border border-green-600">
              <h4 className="font-bold text-green-300 mb-2">🏃‍♂️ 位置调整</h4>
              <p className="text-green-200 text-sm">球员可以相对于原始位置进行战术性移动，但仍保持阵型结构。</p>
            </div>
            <div className="bg-green-800/30 p-4 rounded-lg border border-green-600">
              <h4 className="font-bold text-green-300 mb-2">🎯 空间保留</h4>
              <p className="text-green-200 text-sm">即使球员移动，其在阵型中的位置空间依然被保留，其他球员位置不变。</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 
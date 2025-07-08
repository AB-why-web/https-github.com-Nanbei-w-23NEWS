import Link from 'next/link';
import Image from 'next/image';

export default function SoccerClassicHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green-800/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回绿茵首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 bg-green-900/70 rounded-xl border border-green-700 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-green-300 mb-4">⚽ 绿茵起源：足球HTML基础标签演示</h2>
          <ul className="list-disc list-inside text-green-200 space-y-2 mb-2">
            <li>本案例展示了HTML基础标签在足球主题中的应用，包括标题、段落、超链接、列表、图片、表格和表单。</li>
            <li>所有元素均可交互体验，表单可直接提交搜索足球相关内容。</li>
            <li>展示纯粹的足球之美和经典HTML设计理念。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto bg-green-900/60 rounded-xl border border-green-700 shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-green-200">🏆 绿茵传奇殿堂</h1>
          <div className="space-y-6">
            
            <p className="text-green-200 leading-relaxed">
              足球是世界第一运动，拥有无与伦比的魅力和激情。在这里我们展示足球的美丽与力量，
              <a href="https://www.fifa.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline transition-colors">
                国际足联官方网站
              </a>
              为我们提供了最权威的足球资讯。
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-green-300 mb-3">🌟 足球传奇球星排行榜</h3>
              <ol className="space-y-2 text-green-200">
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-500 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  克里斯蒂亚诺·罗纳尔多 - 五次金球奖得主
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  利昂内尔·梅西 - 阿根廷足球天才
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  贝利 - 巴西足球之王
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  迭戈·马拉多纳 - 阿根廷传奇
                </li>
              </ol>
            </div>
            
            <div className="flex gap-4 flex-wrap items-center justify-center">
              <div className="text-center">
                <Image 
                  src="/practice/images/生成C罗图片 (12).png" 
                  alt="C罗 - 足球传奇" 
                  width={200} 
                  height={300} 
                  className="rounded-lg shadow-lg border-2 border-green-600"
                />
                <p className="text-green-300 text-sm mt-2 font-semibold">C罗 - 葡萄牙队长</p>
              </div>
              <div className="text-center">
                <Image 
                  src="/practice/images/生成C罗图片 (13).png" 
                  alt="C罗训练照" 
                  width={200} 
                  height={300} 
                  className="rounded-lg shadow-lg border-2 border-green-600"
                />
                <p className="text-green-300 text-sm mt-2 font-semibold">训练中的C罗</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-300 mb-3">📊 C罗职业生涯数据统计</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-green-600 text-green-200 bg-green-800/30">
                  <thead>
                    <tr className="bg-green-700/50">
                      <th className="border border-green-600 p-3 text-green-300">统计项目</th>
                      <th className="border border-green-600 p-3 text-green-300">数值</th>
                      <th className="border border-green-600 p-3 text-green-300">备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-green-600 p-3">职业生涯进球</td>
                      <td className="border border-green-600 p-3 font-bold text-yellow-400">890+</td>
                      <td className="border border-green-600 p-3">历史级别</td>
                    </tr>
                    <tr className="bg-green-800/20">
                      <td className="border border-green-600 p-3">金球奖次数</td>
                      <td className="border border-green-600 p-3 font-bold text-yellow-400">5次</td>
                      <td className="border border-green-600 p-3">足坛最高荣誉</td>
                    </tr>
                    <tr>
                      <td className="border border-green-600 p-3">欧冠冠军</td>
                      <td className="border border-green-600 p-3 font-bold text-yellow-400">5次</td>
                      <td className="border border-green-600 p-3">欧洲之王</td>
                    </tr>
                    <tr className="bg-green-800/20">
                      <td className="border border-green-600 p-3">国家队进球</td>
                      <td className="border border-green-600 p-3 font-bold text-yellow-400">128+</td>
                      <td className="border border-green-600 p-3">国际比赛纪录</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
              <h3 className="text-xl font-semibold text-green-300 mb-3">🔍 足球资讯搜索</h3>
              <p className="text-green-200 mb-4">搜索最新的足球新闻、比赛结果和球员资讯：</p>
              <form action="https://www.google.com/search" method="get" className="flex gap-2 items-center">
                <input type="hidden" name="q" value="site:fifa.com OR site:uefa.com" />
                <input 
                  type="text" 
                  name="q" 
                  className="flex-1 px-4 py-3 rounded-lg bg-green-900 border border-green-600 text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="搜索足球相关内容..." 
                  defaultValue="C罗 最新消息"
                />
                <input 
                  type="submit" 
                  value="⚽ 搜索" 
                  className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition-colors cursor-pointer shadow-lg"
                />
              </form>
            </div>
            
            <div className="text-center bg-green-800/20 p-6 rounded-lg border border-green-600">
              <h3 className="text-lg font-semibold text-green-300 mb-2">💬 足球名言</h3>
              <blockquote className="text-green-200 italic text-lg">
                &ldquo;足球是一项简单的运动，但最困难的是把它踢简单。&rdquo;
              </blockquote>
              <p className="text-green-400 text-sm mt-2">— 足球哲学</p>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
} 
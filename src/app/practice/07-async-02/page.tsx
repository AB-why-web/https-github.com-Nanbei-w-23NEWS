'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SoccerDataAPI() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastMatchDate, setLastMatchDate] = useState<string | null>(null);

  useEffect(() => {
    async function getSoccerData() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('⚽ 正在获取足球比赛数据...');
          resolve();
        }, 2000);
      });
    }
    getSoccerData().then(
      result => console.log('🏆 足球数据获取完成:', result)
    );
    console.log('🏟️ 开始处理足球数据...');

    async function getLastMatchDate(league: string, team: string) {
      // 模拟足球API调用
      try {
        // 模拟API响应延迟
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 模拟足球比赛数据
        const mockData = {
          lastMatch: {
            date: '2024-12-15T15:30:00Z',
            homeTeam: '皇家马德里',
            awayTeam: '巴塞罗那',
            score: '2-1',
            competition: '西甲联赛',
            stadium: '伯纳乌球场'
          },
          nextMatch: {
            date: '2024-12-22T20:00:00Z',
            opponent: '马德里竞技',
            competition: '西甲联赛'
          }
        };
        
        console.log('🏆 获取到比赛数据:', mockData);
        console.log(`📡 模拟API地址: https://api.football-data.org/v2/teams/${team}/matches?league=${league}`);
        return mockData.lastMatch.date;
      } catch (error) {
        console.error('❌ 获取比赛数据失败:', error);
        return null;
      }
    }

    getLastMatchDate('LaLiga', 'real-madrid').then(date => {
      console.log('⚽ 最后一场比赛日期:', date);
      setLastMatchDate(date);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green-800/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回绿茵首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 bg-green-900/70 rounded-xl border border-green-700 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-green-300 mb-4">⚽ 比赛数据API：异步编程与足球数据获取</h2>
          <ul className="list-disc list-inside text-green-200 space-y-2 mb-2">
            <li>本案例展示了如何使用 async/await、Promise、fetch API 获取足球比赛数据。</li>
            <li>页面加载后会自动获取皇家马德里的最后一场比赛数据。</li>
            <li>请按 F12 打开浏览器控制台，观察足球数据处理过程。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto bg-green-900/60 rounded-xl border border-green-700 shadow-2xl p-8">
          <div className="text-center mb-6">
            <Image
              src="/practice/images/生成C罗图片 (11).png"
              alt="足球比赛数据API"
              width={300}
              height={200}
              className="rounded-lg shadow-lg border-2 border-green-600 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-green-200">🏆 足球数据分析系统</h1>
          </div>
          
          <div className="bg-green-800/40 rounded-lg p-6 border border-green-600 mb-6">
            <h3 className="text-lg font-bold text-green-300 mb-3">📊 比赛数据获取状态</h3>
            <div
              id="demo"
              ref={demoRef}
              className="text-lg text-green-200 bg-green-700/60 rounded p-4 text-center w-full"
            >
              {lastMatchDate ? (
                <div className="space-y-2">
                  <span className="block">⚽ 最后一场比赛时间:</span>
                  <span className="text-green-300 font-mono text-xl">
                    {new Date(lastMatchDate).toLocaleString('zh-CN')}
                  </span>
                  <div className="text-sm text-green-400 mt-2">
                    皇家马德里 vs 巴塞罗那 (2-1) - 西甲联赛
                  </div>
                </div>
              ) : (
                <span className="text-green-400">🔄 正在获取比赛数据...</span>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
              <h4 className="text-lg font-bold text-green-300 mb-3">🏟️ 比赛信息</h4>
              <div className="space-y-2 text-green-200 text-sm">
                <p>• 主队：皇家马德里</p>
                <p>• 客队：巴塞罗那</p>
                <p>• 比分：2-1</p>
                <p>• 赛事：西甲联赛</p>
                <p>• 球场：伯纳乌球场</p>
              </div>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
              <h4 className="text-lg font-bold text-green-300 mb-3">⚡ 技术特点</h4>
              <div className="space-y-2 text-green-200 text-sm">
                <p>• 异步数据获取</p>
                <p>• Promise 链式调用</p>
                <p>• 错误处理机制</p>
                <p>• 实时状态更新</p>
                <p>• 模拟API延迟</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 
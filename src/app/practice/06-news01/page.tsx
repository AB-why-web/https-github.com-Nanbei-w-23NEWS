'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SoccerScoreSystem() {
  const [currentScore, setCurrentScore] = useState({ home: 2, away: 1 });
  const [matchTime, setMatchTime] = useState(45);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // 足球比分系统相关的JavaScript示例
    console.log('⚽ 实时比分系统初始化...');
    
    // 模拟比赛数据
    const matchData = {
      homeTeam: '皇家马德里',
      awayTeam: '巴塞罗那',
      competition: '西甲',
      stadium: '伯纳乌球场',
      referee: '马泰乌·拉奥斯'
    };
    
    console.log('🏟️ 比赛信息:', matchData);
    
    // 球员信息数组
    const players = [
      { name: 'C罗', number: 7, position: '前锋', goals: 2 },
      { name: '本泽马', number: 9, position: '前锋', goals: 1 },
      { name: '莫德里奇', number: 10, position: '中场', goals: 0 },
      { name: '拉莫斯', number: 4, position: '后卫', goals: 0 }
    ];
    
    console.log('👥 球员阵容:', players);
    
    // 数据类型演示
    console.log('数据类型检查:');
    console.log('typeof 比赛时间:', typeof matchTime);
    console.log('typeof 主队比分:', typeof currentScore.home);
    console.log('typeof 比赛进行状态:', typeof isPlaying);
    
    // 比赛状态判断
    if (matchTime >= 90) {
      console.log('🏁 比赛结束！');
      setIsPlaying(false);
    } else if (matchTime >= 45) {
      console.log('⏰ 下半场进行中...');
    } else {
      console.log('⏰ 上半场进行中...');
    }
    
    // 模拟进球事件
    const goalEvents = [];
    for (let minute = 15; minute <= 75; minute += 30) {
      goalEvents.push({
        minute: minute,
        player: players[Math.floor(Math.random() * players.length)].name,
        type: '进球'
      });
      console.log(`⚽ ${minute}'分钟 - ${goalEvents[goalEvents.length - 1].player} 进球！`);
    }
    
    // 比赛统计循环
    let possessionHome = 55;
    let possessionAway = 45;
    while (possessionHome + possessionAway !== 100) {
      if (possessionHome + possessionAway > 100) {
        possessionHome--;
      } else {
        possessionAway++;
      }
    }
    console.log(`📊 控球率 - 主队: ${possessionHome}%, 客队: ${possessionAway}%`);
    
    // 函数定义
    function updateScore(homeGoals: number, awayGoals: number) {
      console.log(`📈 比分更新: ${homeGoals}-${awayGoals}`);
      setCurrentScore({ home: homeGoals, away: awayGoals });
    }
    
    function getMatchResult(home: number, away: number) {
      if (home > away) return '主队获胜';
      if (away > home) return '客队获胜';
      return '比赛平局';
    }
    
    function calculatePlayerRating(goals: number, assists: number, playtime: number) {
      const baseRating = 6.0;
      const goalBonus = goals * 0.5;
      const assistBonus = assists * 0.3;
      const timeBonus = playtime / 90 * 0.5;
      return (baseRating + goalBonus + assistBonus + timeBonus).toFixed(1);
    }
    
    // 使用函数
    updateScore(3, 1);
    const result = getMatchResult(3, 1);
    console.log('🏆 比赛结果:', result);
    
    const ronaldoRating = calculatePlayerRating(2, 1, 90);
    console.log('⭐ C罗本场评分:', ronaldoRating);
    
    // 模拟实时更新
    const updateInterval = setInterval(() => {
      setMatchTime(prevTime => {
        const newTime = prevTime + 1;
        
        if (newTime < 90) {
          // 随机进球事件
          if (Math.random() < 0.05) { // 5%概率进球
            const scorer = Math.random() < 0.6 ? 'home' : 'away';
            setCurrentScore(prev => ({
              ...prev,
              [scorer]: prev[scorer] + 1
            }));
            console.log(`⚽ ${newTime}'分钟 - 进球！`);
          }
          return newTime;
        } else {
          setIsPlaying(false);
          console.log('🏁 全场比赛结束！');
          return 90;
        }
      });
    }, 3000); // 3秒更新一次
    
    // 清理函数
    return () => clearInterval(updateInterval);
  }, []); // 空依赖数组，只在组件挂载时执行一次

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
          <h2 className="text-2xl font-bold text-green-300 mb-4">⚽ 实时比分系统：JavaScript交互编程</h2>
          <ul className="list-disc list-inside text-green-200 space-y-2 mb-2">
            <li>本案例展示了JavaScript在足球实时比分系统中的应用：DOM操作、事件处理、定时器和状态管理。</li>
            <li>页面会实时更新比分和比赛时间，模拟真实的足球比赛体验。</li>
            <li>请查看控制台了解详细的比赛数据分析和事件记录。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto bg-green-900/60 rounded-xl border border-green-700 shadow-2xl p-8">
          
          {/* 比赛头部信息 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-200 mb-2">🏆 西甲经典对决</h1>
            <p className="text-green-300">伯纳乌球场 | 马泰乌·拉奥斯 主裁</p>
          </div>
          
          {/* 实时比分显示 */}
          <div className="bg-green-800/40 rounded-lg p-8 mb-8 border border-green-600">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Image
                  src="/practice/images/生成C罗图片 (8).png"
                  alt="皇家马德里"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-2 border-2 border-green-500"
                />
                <h3 className="text-xl font-bold text-green-200">皇家马德里</h3>
                <p className="text-green-400 text-sm">主队</p>
              </div>
              
              <div className="text-center mx-8">
                <div className="text-6xl font-bold text-white mb-2">
                  {currentScore.home} - {currentScore.away}
                </div>
                <div className="text-green-300 text-lg">
                  {isPlaying ? `${matchTime}'` : "全场结束"}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                  isPlaying ? 'bg-red-600 text-white' : 'bg-gray-600 text-gray-200'
                }`}>
                  {isPlaying ? '🔴 直播中' : '⏸️ 已结束'}
                </div>
              </div>
              
              <div className="text-center flex-1">
                <Image
                  src="/practice/images/生成C罗图片 (9).png"
                  alt="巴塞罗那"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-2 border-2 border-green-500"
                />
                <h3 className="text-xl font-bold text-green-200">巴塞罗那</h3>
                <p className="text-green-400 text-sm">客队</p>
              </div>
            </div>
          </div>
          
          {/* 比赛统计 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
              <h4 className="text-lg font-bold text-green-300 mb-4">📊 比赛统计</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-200">控球率</span>
                  <span className="text-white font-semibold">55% - 45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">射门次数</span>
                  <span className="text-white font-semibold">12 - 8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">射正次数</span>
                  <span className="text-white font-semibold">7 - 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">角球</span>
                  <span className="text-white font-semibold">6 - 3</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
              <h4 className="text-lg font-bold text-green-300 mb-4">⭐ 球员表现</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-200">C罗 (7号)</span>
                  <span className="text-yellow-400 font-semibold">⚽⚽ 2球</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">本泽马 (9号)</span>
                  <span className="text-yellow-400 font-semibold">⚽ 1球</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">莫德里奇 (10号)</span>
                  <span className="text-blue-400 font-semibold">🅰️ 1助攻</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-200">库尔图瓦 (1号)</span>
                  <span className="text-green-400 font-semibold">🥅 3扑救</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 比赛事件时间线 */}
          <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
            <h4 className="text-lg font-bold text-green-300 mb-4">⏰ 比赛事件</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">15分</span>
                <span className="text-green-200">⚽ C罗 开场进球！皇马 1-0 巴萨</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">32分</span>
                <span className="text-green-200">🟨 拉莫斯 黄牌警告</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">45分</span>
                <span className="text-green-200">⚽ 本泽马 扩大比分！皇马 2-0 巴萨</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">67分</span>
                <span className="text-green-200">⚽ 梅西 扳回一球！皇马 2-1 巴萨</span>
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
} 
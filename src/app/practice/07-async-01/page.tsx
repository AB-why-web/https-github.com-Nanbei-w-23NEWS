'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TransferData {
  player: {
    name: string;
    age: number;
    position: string;
    nationality: string;
    currentTeam: string;
    previousTeam: string;
    marketValue: string;
    goals: number;
    assists: number;
  };
  transfer: {
    date: string;
    fee: string;
    contractLength: string;
    salary: string;
    agent: string;
  };
}

interface PlayerStats {
  id: string;
  goals: number;
  assists: number;
  matches: number;
}

export default function SoccerTransferSystem() {
  const [transferData, setTransferData] = useState<TransferData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 模拟异步获取球员转会数据
    const fetchTransferData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // 模拟API调用延迟
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // 模拟转会数据
        const mockTransferData: TransferData = {
          player: {
            name: 'C罗',
            age: 39,
            position: '前锋',
            nationality: '葡萄牙',
            currentTeam: 'Al Nassr',
            previousTeam: '曼联',
            marketValue: '€15M',
            goals: 890,
            assists: 245
          },
          transfer: {
            date: '2023-01-01',
            fee: '€200M',
            contractLength: '2.5年',
            salary: '€200M/年',
            agent: '豪尔赫·门德斯'
          }
        };
        
        setTransferData(mockTransferData);
      } catch {
        setError('转会数据获取失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    // 演示Promise和async/await
    const demonstrateAsyncConcepts = async () => {
      console.log('🚀 开始异步转会数据处理...');
      
      // Promise示例
      const fetchPlayerStats = (playerId: string): Promise<PlayerStats> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              id: playerId,
              goals: 890,
              assists: 245,
              matches: 1100
            });
          }, 1000);
        });
      };
      
      // 使用Promise.then()
      fetchPlayerStats('cr7').then((stats: PlayerStats) => {
        console.log('⚽ 球员统计 (Promise):', stats);
      });
      
      // 使用async/await
      try {
        const playerStats = await fetchPlayerStats('cr7');
        console.log('🏆 球员统计 (async/await):', playerStats);
      } catch (error) {
        console.error('❌ 获取球员统计失败:', error);
      }
      
      // Promise.all示例 - 同时获取多个球员数据
      const playerIds = ['cr7', 'messi', 'neymar'];
      const allPlayersPromise = playerIds.map(id => fetchPlayerStats(id));
      
      try {
        const allPlayersStats = await Promise.all(allPlayersPromise);
        console.log('🌟 所有球员统计:', allPlayersStats);
      } catch (error) {
        console.error('❌ 获取所有球员统计失败:', error);
      }
      
      // 链式Promise示例
      fetchPlayerStats('cr7')
        .then((stats: PlayerStats) => {
          console.log('🎯 第一步 - 获取基础统计:', stats);
          return { ...stats, efficiency: stats.goals / stats.matches };
        })
        .then((enhancedStats) => {
          console.log('📊 第二步 - 计算效率:', enhancedStats);
          return { ...enhancedStats, rating: enhancedStats.efficiency * 100 };
        })
        .then((finalStats) => {
          console.log('🏅 第三步 - 最终评级:', finalStats);
        })
        .catch((error) => {
          console.error('❌ 链式处理失败:', error);
        });
    };

    demonstrateAsyncConcepts();
    fetchTransferData();
  }, []);

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
            🔄 球员转会系统：异步编程
          </h1>
          <p className="text-lg text-green-200/90 max-w-2xl mx-auto">
            使用Promise和async/await处理球员转会信息的异步获取和更新，展示现代JavaScript异步编程的核心概念。
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 转会数据展示 */}
          <div className="bg-green-900/60 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/20 border border-green-700">
            <div className="p-6 border-b border-green-700">
              <h3 className="text-xl font-semibold text-green-100">🏟️ 转会数据实时获取</h3>
            </div>
            <div className="p-8">
              {loading && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                  <p className="text-green-300">正在获取转会数据...</p>
                </div>
              )}
              
              {error && (
                <div className="bg-red-900/50 border border-red-600 rounded-lg p-4 text-red-200">
                  ❌ {error}
                </div>
              )}
              
              {transferData && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-800/40 p-6 rounded-lg border border-green-600">
                    <h4 className="text-lg font-bold text-green-300 mb-4">👤 球员信息</h4>
                    <div className="space-y-2 text-green-200">
                      <p><strong>姓名:</strong> {transferData.player.name}</p>
                      <p><strong>年龄:</strong> {transferData.player.age}</p>
                      <p><strong>位置:</strong> {transferData.player.position}</p>
                      <p><strong>国籍:</strong> {transferData.player.nationality}</p>
                      <p><strong>当前俱乐部:</strong> {transferData.player.currentTeam}</p>
                      <p><strong>前俱乐部:</strong> {transferData.player.previousTeam}</p>
                      <p><strong>市场价值:</strong> {transferData.player.marketValue}</p>
                      <p><strong>职业生涯进球:</strong> {transferData.player.goals}</p>
                      <p><strong>助攻:</strong> {transferData.player.assists}</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-800/40 p-6 rounded-lg border border-green-600">
                    <h4 className="text-lg font-bold text-green-300 mb-4">💰 转会详情</h4>
                    <div className="space-y-2 text-green-200">
                      <p><strong>转会日期:</strong> {transferData.transfer.date}</p>
                      <p><strong>转会费:</strong> {transferData.transfer.fee}</p>
                      <p><strong>合同长度:</strong> {transferData.transfer.contractLength}</p>
                      <p><strong>年薪:</strong> {transferData.transfer.salary}</p>
                      <p><strong>经纪人:</strong> {transferData.transfer.agent}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 异步编程说明 */}
          <div className="bg-green-900/60 backdrop-blur-md rounded-xl shadow-2xl shadow-green-500/20 border border-green-700">
            <div className="p-6 border-b border-green-700">
              <h3 className="text-xl font-semibold text-green-100">📚 异步编程概念</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
                  <h4 className="text-lg font-bold text-green-300 mb-3">🔄 Promise</h4>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li>• 异步操作的承诺对象</li>
                    <li>• 三种状态：pending、fulfilled、rejected</li>
                    <li>• 使用.then()和.catch()处理结果</li>
                    <li>• 支持链式调用</li>
                  </ul>
                </div>
                
                <div className="bg-green-800/30 p-6 rounded-lg border border-green-600">
                  <h4 className="text-lg font-bold text-green-300 mb-3">⚡ async/await</h4>
                  <ul className="space-y-2 text-green-200 text-sm">
                    <li>• 更简洁的异步代码写法</li>
                    <li>• 基于Promise的语法糖</li>
                    <li>• 使用try/catch处理错误</li>
                    <li>• 代码可读性更强</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-green-800/20 p-4 rounded-lg border border-green-600">
                <p className="text-green-200 text-sm">
                  💡 <strong>控制台输出:</strong> 请打开浏览器控制台查看详细的异步操作演示，包括Promise链式调用和Promise.all的使用示例。
                </p>
              </div>
            </div>
          </div>

          {/* C罗图片展示 */}
          <div className="text-center">
            <Image
              src="/practice/images/生成C罗图片 (10).png"
              alt="C罗转会 - 异步数据处理"
              width={400}
              height={300}
              className="rounded-lg shadow-lg border-2 border-green-600 mx-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
} 
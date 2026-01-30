
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { calculateAge } from '../utils/ageCalculator';
import { AgeResult } from '../types';

const AgeCalculator: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Helper to generate arrays for selection
  const years = useMemo(() => Array.from({ length: 125 }, (_, i) => currentYear - i), [currentYear]);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // State for Date of Birth
  const [dobDay, setDobDay] = useState('1');
  const [dobMonth, setDobMonth] = useState('0'); // 0-indexed
  const [dobYear, setDobYear] = useState(currentYear.toString());

  // State for Target Date
  const today = new Date();
  const [targetDay, setTargetDay] = useState(today.getDate().toString());
  const [targetMonth, setTargetMonth] = useState(today.getMonth().toString());
  const [targetYear, setTargetYear] = useState(today.getFullYear().toString());

  const [result, setResult] = useState<AgeResult | null>(null);
  const [liveSeconds, setLiveSeconds] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  
  const timerRef = useRef<number | null>(null);

  // Check if target date is today to enable live ticking
  const isTargetToday = useMemo(() => {
    const now = new Date();
    return targetDay === now.getDate().toString() &&
           targetMonth === now.getMonth().toString() &&
           targetYear === now.getFullYear().toString();
  }, [targetDay, targetMonth, targetYear]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCalculating(true);
    
    setTimeout(() => {
      try {
        const dobStr = `${dobYear}-${(parseInt(dobMonth) + 1).toString().padStart(2, '0')}-${dobDay.padStart(2, '0')}`;
        
        // If target is today, use full current time for precise seconds
        const targetDateObj = isTargetToday ? new Date() : new Date(parseInt(targetYear), parseInt(targetMonth), parseInt(targetDay));
        const targetStr = targetDateObj.toISOString();
        
        const res = calculateAge(dobStr, targetStr);
        setResult(res);
        setLiveSeconds(res.totalSeconds);
        setError('');

        // Start live ticker if target is today
        if (isTargetToday) {
          timerRef.current = window.setInterval(() => {
            setLiveSeconds(prev => (prev !== null ? prev + 1 : null));
          }, 1000);
        }

        if (window.innerWidth < 768) {
          const resultsEl = document.getElementById('results-view');
          resultsEl?.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (err) {
        setError('Please enter a valid date combination.');
      } finally {
        setIsCalculating(false);
      }
    }, 400);
  };

  const SelectGroup = ({ 
    label, 
    day, setDay, 
    month, setMonth, 
    year, setYear 
  }: any) => (
    <div className="space-y-3">
      <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="grid grid-cols-3 gap-2 p-2 rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm">
        <select 
          value={day} 
          onChange={(e) => setDay(e.target.value)}
          aria-label={`${label} - Day`}
          className="bg-white border border-slate-300 rounded-xl px-2 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer text-slate-800 font-medium text-sm md:text-base"
        >
          {days.map(d => <option key={d} value={d}>{d.toString().padStart(2, '0')}</option>)}
        </select>
        <select 
          value={month} 
          onChange={(e) => setMonth(e.target.value)}
          aria-label={`${label} - Month`}
          className="bg-white border border-slate-300 rounded-xl px-2 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer text-slate-800 font-medium text-sm md:text-base"
        >
          {monthsList.map((m, i) => <option key={i} value={i}>{m.substring(0, 3)}</option>)}
        </select>
        <select 
          value={year} 
          onChange={(e) => setYear(e.target.value)}
          aria-label={`${label} - Year`}
          className="bg-white border border-slate-300 rounded-xl px-2 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer text-slate-800 font-medium text-sm md:text-base"
        >
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 overflow-hidden border border-indigo-50">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-2">Age Explorer</h3>
            <p className="text-indigo-100 opacity-80">Define your chronological footprint</p>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-10" aria-hidden="true">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          </div>
        </div>
        
        <form onSubmit={handleCalculate} className="p-6 md:p-8 space-y-8">
          <SelectGroup 
            label="Date of Birth" 
            day={dobDay} setDay={setDobDay}
            month={dobMonth} setMonth={setDobMonth}
            year={dobYear} setYear={setDobYear}
          />

          <SelectGroup 
            label="Calculation Date (Target)" 
            day={targetDay} setDay={setTargetDay}
            month={targetMonth} setMonth={setTargetMonth}
            year={targetYear} setYear={setTargetYear}
          />

          {error && (
            <div role="alert" className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={isCalculating}
            className={`w-full relative overflow-hidden group py-5 rounded-2xl text-white font-extrabold text-xl transition-all shadow-xl ${isCalculating ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-indigo-200'}`}
          >
            <span className={isCalculating ? 'opacity-0' : 'opacity-100 transition-opacity'}>
              Generate Exact Report
            </span>
            {isCalculating && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </form>

        {result && (
          <div id="results-view" className="bg-slate-50 border-t border-slate-100 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500" aria-live="polite">
            {/* Primary Display */}
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">You are exactly</div>
              <div className="flex flex-wrap justify-center items-baseline gap-4 md:gap-8">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl font-black text-indigo-600 leading-none">{result.years}</div>
                  <div className="text-sm font-bold text-slate-400 mt-2">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-7xl font-black text-indigo-600 leading-none">{result.months}</div>
                  <div className="text-sm font-bold text-slate-400 mt-2">Months</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-7xl font-black text-indigo-600 leading-none">{result.days}</div>
                  <div className="text-sm font-bold text-slate-400 mt-2">Days</div>
                </div>
              </div>
            </div>

            {/* Visual Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Days</div>
                  <div className="text-xl font-extrabold text-slate-800">{result.totalDays.toLocaleString()}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c.533.308.533 1.076 0 1.384l-8.583 4.951a1.076 1.076 0 01-1.076 0L2.758 16.93a1.076 1.076 0 010-1.384l8.583-4.951a1.076 1.076 0 011.076 0l8.583 4.951z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.247l8.583 4.951a1.076 1.076 0 010 1.384l-8.583 4.951a1.076 1.076 0 01-1.076 0L2.358 8.582a1.076 1.076 0 010-1.384L10.941 2.247a1.076 1.076 0 011.076 0z"></path></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Minutes</div>
                  <div className="text-xl font-extrabold text-slate-800">{result.totalMinutes.toLocaleString()}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 md:col-span-2 group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-1 h-full bg-indigo-500 transition-all ${isTargetToday ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 shrink-0">
                  <svg className={`w-6 h-6 ${isTargetToday ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Seconds Alive</div>
                    {isTargetToday && <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" aria-hidden="true"></span>}
                  </div>
                  <div className="text-3xl font-black text-slate-900 tabular-nums">
                    {(liveSeconds || result.totalSeconds).toLocaleString()}
                  </div>
                </div>
                {isTargetToday && <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter absolute right-4 top-4">Real-time Data</div>}
              </div>

              <div className="bg-indigo-600 p-6 rounded-3xl md:col-span-2 text-white relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest mb-1">Next Birthday Countdown</div>
                    <div className="text-3xl font-black">{result.nextBirthdayDays} Days Remaining</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-xl text-sm font-bold group-hover:bg-white/30 transition-colors cursor-pointer">
                    Plan Celebration
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10" aria-hidden="true">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const text = `I am ${result.years} years old! Calculated exactly with AgeMeter: https://agemeter.vercel.app/`;
                navigator.clipboard.writeText(text);
                alert('Success: Age report copied to clipboard!');
              }}
              className="mt-8 w-full py-3 text-indigo-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-white rounded-xl transition-all border border-transparent hover:border-indigo-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              Share Accuracy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;

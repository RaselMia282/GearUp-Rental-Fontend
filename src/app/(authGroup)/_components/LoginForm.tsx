'use client';

import Link from 'next/link';

import { Mail, Lock, Eye, ArrowRight } from 'lucide-react';
import { loginAction } from '../_actions.ts/loginActions';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

export default function LoginFrom() {
  const[state,action,pending]=useActionState(loginAction,false)
  useEffect(()=>{
    if(!state) return
    if(state.success){
       toast.success(state.message)
    }
    if(state.error){
    toast.error(state.message)
    }
  },[state])
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100 p-3 sm:p-6 lg:p-8">
      {/* Container Card */}
      <div className="flex w-full max-w-sm sm:max-w-md lg:max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
        
        {/* Left Side: Hero Image & Overlay (Hidden on mobile/tablet, visible on desktop) */}
        <div className="relative hidden lg:flex w-1/2 flex-col justify-between p-8 xl:p-10 text-white">
          {/* <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
            alt="Mountain Exploration"
            fill
            priority
            className="object-cover"
          /> */}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

          {/* Top Logo */}
          <div className="relative z-10 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FF5722] font-black text-white text-xs">
              ▲
            </div>
            <span className="text-xl font-bold tracking-tight text-white">GearUp</span>
          </div>

          {/* Middle Content */}
          <div className="relative z-10 my-auto space-y-4 pr-6">
            <h1 className="text-3xl xl:text-4xl font-black leading-tight tracking-tight">
              Equipping your <br /> next milestone.
            </h1>
            <p className="text-xs xl:text-sm text-gray-300 leading-relaxed">
              Access premium outdoor equipment tailored for high-performance athletes and weekend explorers alike. Your journey starts here.
            </p>
          </div>

          {/* Bottom Stats */}
          <div className="relative z-10 flex items-center gap-8 xl:gap-12 border-t border-white/20 pt-6">
            <div>
              <p className="text-xl xl:text-2xl font-black">25k+</p>
              <p className="text-[10px] font-semibold tracking-wider text-gray-300 uppercase">
                Rentals Completed
              </p>
            </div>
            <div>
              <p className="text-xl xl:text-2xl font-black">4.9/5</p>
              <p className="text-[10px] font-semibold tracking-wider text-gray-300 uppercase">
                User Rating
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form UI */}
        <div className="flex w-full flex-col justify-center p-6 sm:p-8 lg:w-1/2 lg:p-12">
          <div className="mx-auto w-full max-w-xs sm:max-w-sm space-y-5 sm:space-y-6">
            
            {/* Mobile Logo Header */}
            <div className="flex items-center gap-2 lg:hidden mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FF5722] font-black text-white text-xs">
                ▲
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">GearUp</span>
            </div>

            {/* Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Welcome Back</h2>
              <p className="mt-1 text-xs text-gray-500">
                Sign in to manage your rentals and gear bookings.
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 sm:py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 sm:py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.97 1.08.08 2.16-.57 2.81-1.37z" />
                </svg>
                Apple
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-gray-200" />
              <span className="absolute bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                OR EMAIL
              </span>
            </div>

            {/* Form Pure UI */}
            <form action={action}  className="space-y-3.5 sm:space-y-4">
              {/* Email Input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 h-4 w-4 text-gray-400 shrink-0" />
                  <input
                    type="email"
                    name="email"
                    placeholder="explorer@gearup.com"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2.5 pl-9 pr-3 text-xs text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-[11px] font-bold text-orange-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3 h-4 w-4 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    name="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2.5 pl-9 pr-10 text-xs text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Keep Me Signed In */}
              <div className="flex items-center gap-2 pt-0.5">
                <input
                  id="remember"
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                />
                <label htmlFor="remember" className="text-xs text-gray-600 cursor-pointer select-none">
                  Keep me signed in for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FF5722] py-2.5 sm:py-3 text-xs font-bold text-white uppercase tracking-wider transition hover:bg-[#F4511E]"
              >
                {
                  pending?"Logging":"Sign In"
                }
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Footer Sign Up Link */}
            <div className="pt-1 text-center text-xs text-gray-600">
              {"Don't have an account yet?"}{' '}
              <Link href="/register" className="font-bold text-orange-600 hover:underline block sm:inline mt-0.5 sm:mt-0">
                Join the GearUp Community
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
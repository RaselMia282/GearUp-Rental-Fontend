'use client';

import Link from 'next/link';
import { registerActions } from '../_actions.ts/registerActions';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';


export default function RegisterPage() {
    const [state,action,pending]= useActionState(registerActions,false)
    useEffect(()=>{
        if(!state) return
        if(state.success){
            toast.success(state.message)
        }
        if(!state.success){
            toast.error(state.message)
        }
    },[state])
  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      {/* Left Side: Hero Branding & Image */}
      <div className="relative hidden w-1/2 flex-col justify-between p-12 text-white lg:flex">
        {/* <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
          alt="Adventure Mountain Background"
          fill
          priority
          className="object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        {/* Top Logo */}
        <div className="relative z-10">
          <Link href="/" className="text-2xl font-black tracking-tight text-white">
            GearUp
          </Link>
        </div>

        {/* Middle Heading */}
        <div className="relative z-10 max-w-lg space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Equip Your Next Discovery.
          </h1>
          <p className="text-base text-gray-200">
            Join a community of modern explorers. Rent the highest quality technical gear for your next mountain, desert, or sea adventure.
          </p>
        </div>

        {/* Bottom Features */}
        <div className="relative z-10 flex items-center gap-8 text-xs font-semibold tracking-wide text-gray-300">
          <span>Insured Gear</span>
          <span>Global Logistics</span>
        </div>
      </div>

      {/* Right Side: Clean Form */}
      <div  className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
            <p className="mt-2 text-sm text-gray-500">
              Step into the wild with the best technical equipment.
            </p>
          </div>

          <form action={action} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold tracking-wider text-gray-700 uppercase">
                Full Name
              </label>
              <input
                type="text"
                name='name'
                placeholder="John Doe"
                className="w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold tracking-wider text-gray-700 uppercase">
                Email Address
              </label>
              <input
                type="email"
                name='email'
                placeholder="explorer@gearup.com"
                className="w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold tracking-wider text-gray-700 uppercase">
                Phone Number
              </label>
              <input
                type="tel"
                name='number'
                placeholder="+880 1700-000000"
                className="w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold tracking-wider text-gray-700 uppercase">
                Password
              </label>
              <input
                type="text"
                name='password'
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-1">
              <input
                id="terms"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-gray-600 leading-snug">
                I agree to the{' '}
                <span className="font-semibold text-orange-600 hover:underline cursor-pointer">
                  Terms of Service
                </span>{' '}
                and the{' '}
                <span className="font-semibold text-orange-600 hover:underline cursor-pointer">
                  Rental Agreement
                </span>{' '}
                for all gear usage.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-[#FF5722] py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#F4511E]"
            >
              {
                pending?"Creating Account":"Create Account"
              }
            </button>
          </form>

          {/* Footer Navigation */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-gray-900 hover:underline">
              Sign In
            </Link>
          </p>

          <div className="pt-8 text-center text-xs text-gray-400 flex items-center justify-between border-t border-gray-100">
            <span>© 2026 GearUp Adventure Rentals</span>
            <div className="space-x-4">
              <span className="hover:underline cursor-pointer">Privacy</span>
              <span className="hover:underline cursor-pointer">Help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
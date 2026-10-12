'use client'

import { TLogin, useLogin } from '@/hook/useLogin'
import { useFormik } from 'formik'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import * as yup from 'yup'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

// Warna: biru KAI #1B2A5E, oranye KAI #F47B20, latar #EEF2F7
const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4'
const inputOk =
  'border-slate-300 focus:border-[#1B2A5E] focus:ring-[#1B2A5E]/15'
const inputError =
  'border-red-500 focus:border-red-500 focus:ring-red-500/15'

export default function LoginPage() {
  const [visiblePassword, setVisiblePassword] = useState<'password' | 'text'>(
    'password',
  )

  const formLogin = useFormik<TLogin>({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: yup.object({
      username: yup.string().required('Form required!'),
      password: yup.string().required('Form required!'),
    }),
    onSubmit: (value) => {
      useLogin(value)
    },
  })

  return (
    <main
      className={`${jakarta.className} grid min-h-screen bg-[#EEF2F7] lg:grid-cols-[1.05fr_1fr]`}
    >
      {/* Panel kiri (desktop) */}
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#1B2A5E] p-12 text-white lg:flex">
        <Brand light />

        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
            Pesan tiket kereta, tanpa antre.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Masuk untuk memilih jadwal, kursi, dan membayar dalam satu tempat.
          </p>
        </div>

        {/* Rel kereta */}
        <svg
          aria-hidden="true"
          viewBox="0 0 600 300"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full"
          fill="none"
          strokeLinecap="round"
        >
          <g stroke="#fff" strokeOpacity="0.22">
            <line x1="267.7" y1="70" x2="332.3" y2="70" strokeWidth="1" />
            <line x1="240.7" y1="95" x2="359.3" y2="95" strokeWidth="1.5" />
            <line x1="208.5" y1="125" x2="391.5" y2="125" strokeWidth="2.5" />
            <line x1="165.6" y1="165" x2="434.4" y2="165" strokeWidth="3.5" />
            <line x1="111.5" y1="215" x2="488.5" y2="215" strokeWidth="5" />
            <line x1="41.5" y1="280" x2="558.5" y2="280" strokeWidth="7" />
          </g>
          <g stroke="#F47B20" strokeWidth="3">
            <line x1="300" y1="40" x2="60" y2="300" />
            <line x1="300" y1="40" x2="540" y2="300" />
          </g>
        </svg>
      </aside>

      {/* Panel kanan: form */}
      <section className="flex flex-col items-center justify-center px-5 py-10 sm:px-8">
        <div className="mb-8 lg:hidden">
          <Brand />
        </div>

        {/* Kartu bergaya tiket */}
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(27,42,94,0.08)]">
          <div className="px-8 pb-6 pt-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#1B2A5E]">
              Masuk ke akun
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Gunakan username dan kata sandi yang terdaftar.
            </p>
          </div>

          {/* Garis sobekan tiket */}
          <div className="relative border-t-2 border-dashed border-slate-200">
            <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full border border-slate-200 bg-[#EEF2F7] [clip-path:inset(0_0_0_50%)]" />
            <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full border border-slate-200 bg-[#EEF2F7] [clip-path:inset(0_50%_0_0)]" />
          </div>

          <form
            onSubmit={formLogin.handleSubmit}
            noValidate
            className="space-y-5 px-8 pb-8 pt-6"
          >
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Masukkan username"
                value={formLogin.values.username}
                onChange={formLogin.handleChange}
                aria-invalid={!!formLogin.errors.username}
                aria-describedby={
                  formLogin.errors.username ? 'username-error' : undefined
                }
                className={`${inputBase} ${
                  formLogin.errors.username ? inputError : inputOk
                }`}
              />
              {formLogin.errors.username && (
                <p
                  id="username-error"
                  role="alert"
                  className="mt-1.5 text-sm text-red-600"
                >
                  {formLogin.errors.username}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Kata sandi
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={visiblePassword}
                  autoComplete="current-password"
                  placeholder="Masukkan kata sandi"
                  value={formLogin.values.password}
                  onChange={formLogin.handleChange}
                  aria-invalid={!!formLogin.errors.password}
                  aria-describedby={
                    formLogin.errors.password ? 'password-error' : undefined
                  }
                  className={`${inputBase} pr-12 ${
                    formLogin.errors.password ? inputError : inputOk
                  }`}
                />
                <button
                  type="button"
                  onClick={() =>
                    setVisiblePassword((prev) =>
                      prev === 'password' ? 'text' : 'password',
                    )
                  }
                  aria-label={
                    visiblePassword === 'password'
                      ? 'Tampilkan kata sandi'
                      : 'Sembunyikan kata sandi'
                  }
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-lg text-slate-500 transition hover:text-[#1B2A5E] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1B2A5E]/15"
                >
                  {visiblePassword === 'password' ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
              {formLogin.errors.password && (
                <p
                  id="password-error"
                  role="alert"
                  className="mt-1.5 text-sm text-red-600"
                >
                  {formLogin.errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#F47B20] px-4 py-3.5 text-[15px] font-bold text-[#1B2A5E] transition hover:bg-[#E26D14] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F47B20]/40 active:scale-[0.99]"
            >
              Masuk
            </button>

            <p className="pt-1 text-center text-sm text-slate-600">
              Belum punya akun?{' '}
              <Link
                href={'/Register'}
                className="font-semibold text-[#1B2A5E] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:underline"
              >
                Daftar sekarang
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

/* Logo sementara: ganti dengan logo KAI milikmu */
function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F47B20] text-sm font-extrabold text-[#1B2A5E]">
        KAI
      </div>
      <span
        className={`text-base font-bold leading-tight ${
          light ? 'text-white' : 'text-[#1B2A5E]'
        }`}
      >
        Kereta Api
        <br />
        Indonesia
      </span>
    </div>
  )
}

function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9.9 5.2A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6A16.6 16.6 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 4.4-1" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      <path d="m3 3 18 18" />
    </svg>
  )
}

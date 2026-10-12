'use client';

import { TRegister, useRegister } from '@/hook/useLogin';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as yup from 'yup';

const inputClass =
  'w-full rounded-md border bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus-visible:border-[#000060] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000060]';

function Track({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, #F47B20 0 6px, transparent 6px 22px), linear-gradient(#F47B20, #F47B20), linear-gradient(#F47B20, #F47B20)',
        backgroundSize: '22px 100%, 100% 2px, 100% 2px',
        backgroundPosition: '0 0, 0 2px, 0 8px',
        backgroundRepeat: 'repeat-x, no-repeat, no-repeat',
      }}
    />
  );
}

type FieldProps = {
  id: keyof TRegister;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
};

function Field({ id, label, error, hint, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-semibold"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-sm font-medium text-red-700"
        >
          {error}
        </p>
      ) : (
        hint && (
          <p
            id={`${id}-hint`}
            className="mt-1.5 text-sm text-neutral-600"
          >
            {hint}
          </p>
        )
      )}
    </div>
  );
}

const RegisterPage: React.FC = () => {
  const [visiblePassword, setVisiblePassword] = useState<'text' | 'password'>(
    'password',
  );

  const formRegister = useFormik<TRegister>({
    initialValues: {
      email: '',
      password: '',
      phoneNumber: '',
      username: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: yup.object({
      email: yup
        .string()
        .required('Email wajib diisi')
        .email('Format email tidak valid'),
      password: yup.string().required('Password wajib diisi'),
      phoneNumber: yup
        .string()
        .required('Nomor telepon wajib diisi')
        .max(13, 'Maksimal 13 angka'),
      username: yup.string().required('Username wajib diisi'),
    }),
    onSubmit: (value) => {
      useRegister(value);
    },
  });

  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    formRegister;

  const border = (name: keyof TRegister) =>
    errors[name] ? 'border-red-600' : 'border-neutral-300';

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      {/* PANEL BRAND */}
      <aside className="flex flex-col justify-between bg-[#000060] text-white">
        <div className="px-6 py-10 md:px-12 md:py-14 lg:py-20">
          <p className="text-xl font-bold tracking-tight">KAI</p>
          <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            Buat akun KAI
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
            Daftar untuk menulis artikel dan berbagi cerita seputar perjalanan
            kereta api Indonesia.
          </p>
        </div>
        <Track />
      </aside>

      {/* FORM */}
      <section className="flex items-center justify-center px-5 py-10 md:px-10 md:py-14">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-md rounded-lg border border-neutral-200 bg-white p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#000060]">
            Daftar
          </h2>
          <p className="mt-1 text-neutral-600">
            Isi data berikut untuk membuat akun.
          </p>

          <div className="mt-6 grid gap-5">
            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nama@email.com"
                value={values.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${inputClass} ${border('email')}`}
              />
            </Field>

            <Field id="username" label="Username" error={errors.username}>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Username Anda"
                value={values.username}
                onChange={handleChange}
                aria-invalid={!!errors.username}
                aria-describedby={
                  errors.username ? 'username-error' : undefined
                }
                className={`${inputClass} ${border('username')}`}
              />
            </Field>

            <Field id="password" label="Password" error={errors.password}>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={visiblePassword}
                  autoComplete="new-password"
                  placeholder="Password Anda"
                  value={values.password}
                  onChange={handleChange}
                  aria-invalid={!!errors.password}
                  aria-describedby={
                    errors.password ? 'password-error' : undefined
                  }
                  className={`${inputClass} ${border('password')} pr-24`}
                />
                <button
                  type="button"
                  onClick={() =>
                    setVisiblePassword((prev) =>
                      prev === 'password' ? 'text' : 'password',
                    )
                  }
                  aria-pressed={visiblePassword === 'text'}
                  className="absolute inset-y-0 right-0 rounded-r-md px-4 text-sm font-semibold text-[#000060] hover:text-[#d96a14] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#000060]"
                >
                  {visiblePassword === 'password' ? 'Tampilkan' : 'Sembunyikan'}
                </button>
              </div>
            </Field>

            <Field
              id="phoneNumber"
              label="Nomor telepon"
              error={errors.phoneNumber}
              hint="Maksimal 13 angka"
            >
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="08123456789"
                maxLength={13}
                value={values.phoneNumber}
                onChange={handleChange}
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={
                  errors.phoneNumber ? 'phoneNumber-error' : 'phoneNumber-hint'
                }
                className={`${inputClass} ${border('phoneNumber')}`}
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 w-full cursor-pointer rounded-md bg-[#F47B20] px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-[#d96a14] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#000060] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500"
          >
            {isSubmitting ? 'Mendaftarkan...' : 'Daftar'}
          </button>

          <p className="mt-6 text-center text-neutral-600">
            Sudah punya akun?{' '}
            <Link
              href="/Login"
              className="font-semibold text-[#000060] underline decoration-[#F47B20] decoration-2 underline-offset-4 hover:text-[#d96a14] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#000060]"
            >
              Login
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;
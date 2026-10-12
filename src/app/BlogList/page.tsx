'use client';

import { CreateBlog, GetBlog } from '@/hook/useBlog';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const gutter = 'px-5 sm:px-8 md:px-12 lg:px-16';
const inputClass =
  'mt-2 w-full rounded-lg border-2 border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-[#000060] focus:outline-none focus:ring-4 focus:ring-[#000060]/15';

const BlogListPage = () => {
  const [isLogin, setIsLogin] = useState<string | null>('')
  const [valueTitle, setValueTitle] = useState<string>('');
  const [valueDescription, setValueDescription] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { blog, getBlog } = GetBlog();

  useEffect(() => {
    const username = localStorage.getItem('username');
    setIsLogin(username)
  }, [])

  const canSubmit =
    valueTitle.trim() !== '' && valueDescription.trim() !== '' && !isSubmitting;

  const handleSubmitBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    try {
      // await supaya daftar blog diambil ulang setelah data benar-benar tersimpan
      await CreateBlog({
        Title: valueTitle,
        Description: valueDescription,
      });
      await getBlog();
      setValueTitle('');
      setValueDescription('');
    } catch (error) {
      console.error('Gagal mengunggah blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* HEADER */}
      <header className="bg-[#000060] text-white">
        <div className={`${gutter} mx-auto max-w-6xl py-12 md:py-16`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F47B20]">
            Blog resmi
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Blog KAI
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Kabar, cerita, dan informasi terbaru seputar perjalanan kereta api
            Indonesia. Baca artikel di bawah, atau tulis artikel Anda sendiri.
          </p>
        </div>
        <div className="h-1.5 bg-[#F47B20]" />
      </header>

      <div className={`${gutter} mx-auto max-w-6xl py-10 md:py-14`}>
        {!isLogin ? (
          /* BELUM LOGIN */
          <div className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm md:p-10">
            <div
              aria-hidden="true"
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F47B20]/15 text-3xl"
            >
              🔒
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#000060]">
              Masuk dulu untuk menulis artikel
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-neutral-600">
              Anda perlu login terlebih dahulu sebelum bisa membuat blog.
            </p>
            <Link
              href={'/Login'}
              className="mt-7 inline-block w-full rounded-lg bg-[#F47B20] px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-[#d96a14] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#000060]/30 sm:w-auto sm:px-12"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-12">
            {/* FORM */}
            <section className="lg:sticky lg:top-8 lg:self-start">
              <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-[#000060]">
                  Tulis artikel baru
                </h2>
                <p className="mt-2 text-neutral-600">
                  Isi dua kolom di bawah, lalu tekan tombol Upload.
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="blog-title"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000060] text-sm text-white">
                      1
                    </span>
                    Judul artikel
                  </label>
                  <input
                    id="blog-title"
                    type="text"
                    value={valueTitle}
                    onChange={(e) => setValueTitle(e.target.value)}
                    placeholder="Contoh: Pengalaman naik kereta ke Yogyakarta"
                    className={inputClass}
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="blog-description"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000060] text-sm text-white">
                      2
                    </span>
                    Isi artikel
                  </label>
                  <textarea
                    id="blog-description"
                    rows={7}
                    value={valueDescription}
                    onChange={(e) => setValueDescription(e.target.value)}
                    placeholder="Ceritakan di sini dengan kata-kata Anda sendiri..."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmitBlog}
                  disabled={!canSubmit}
                  className="mt-7 w-full rounded-lg bg-[#F47B20] px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-[#d96a14] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#000060]/30 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500"
                >
                  {isSubmitting ? 'Mengunggah...' : 'Upload artikel'}
                </button>

                {!canSubmit && !isSubmitting && (
                  <p className="mt-3 text-center text-sm text-neutral-500">
                    Tombol aktif setelah judul dan isi artikel terisi.
                  </p>
                )}
              </form>
            </section>

            {/* DAFTAR BLOG */}
            <section>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Artikel terbaru
                </h2>
                <span className="rounded-full bg-[#000060]/10 px-4 py-1.5 text-sm font-semibold text-[#000060]">
                  {blog.length} artikel
                </span>
              </div>

              {blog.length === 0 ? (
                <div className="mt-6 rounded-2xl border-2 border-dashed border-neutral-300 bg-white px-6 py-16 text-center">
                  <div aria-hidden="true" className="text-5xl">
                    📝
                  </div>
                  <p className="mt-4 text-xl font-bold text-[#000060]">
                    Belum ada artikel
                  </p>
                  <p className="mt-2 text-neutral-600">
                    Artikel pertama Anda akan muncul di sini setelah diunggah.
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid gap-5">
                  {blog.map((value, index) => (
                    <article
                      key={index}
                      className="rounded-2xl border border-neutral-200 border-l-4 border-l-[#F47B20] bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
                    >
                      <h3 className="text-xl font-bold leading-snug text-[#000060] md:text-2xl">
                        {value.Title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500">
                        Ditulis oleh{' '}
                        <span className="font-semibold text-neutral-700">
                          {value.createdBy}
                        </span>
                      </p>
                      <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-neutral-700">
                        {value.Description}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}

export default BlogListPage
/**
 * Aşağıya kendi bilgilerini yaz. Boş bıraktığın satır için buton tıklanınca bir şey olmaz.
 *
 * LINKEDIN_URL — LinkedIn’deki “özel profil URL’n” ile birebir aynı olmalı (tahmin etme).
 *   LinkedIn’de: Profil (veya ben simgesi) → Profili görüntüle → sağ üst “Profili düzenle”
 *   → “Herkese açık profili ve URL’yi düzenle” / “Edit public profile & URL”
 *   → “Profil URL’sini düzenle” satırındaki adresi kopyala ve buraya yapıştır.
 *   Tarayıcıda LinkedIn’den çıkış yapıp bu adresi açarak dene: profil açılmıyorsa slug yanlıştır.
 *   Not: LinkedIn bazen giriş yapmamış kullanıcıya “Kaydol / Oturum aç” gösterir; bu tamamen
 *   LinkedIn tarafının davranışı; sitedeki link doğru formattadır (https://www.linkedin.com/in/…).
 *
 * Örnek format:
 *   'https://www.linkedin.com/in/senin-ozel-adin/'
 *
 * EMAIL_ADDRESS — Sadece e-posta, mailto: otomatik eklenir:
 *   Örnek: 'isim@ornek.com'
 *
 * CV_PATH — İki seçenek:
 *   (1) PDF’i projenin `public/` klasörüne koy → başına / ile yol yaz:
 *       Örnek: CV’yi `public/melisa-cv.pdf` olarak kaydet → CV_PATH = '/melisa-cv.pdf'
 *   (2) CV internette host ediliyorsa tam URL:
 *       Örnek: 'https://.../cv.pdf'
 */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mlsarac/';
export const EMAIL_ADDRESS = 'melisaarac03@gmail.com';
export const CV_PATH = '/melisa-cv.pdf';

function isAbsoluteUrl(s) {
  return /^https?:\/\//i.test(s);
}

function buildContactLinks() {
  const linkedinHref = LINKEDIN_URL.trim() || '#';
  const emailHref = EMAIL_ADDRESS.trim() ? `mailto:${EMAIL_ADDRESS.trim()}` : '#';
  const cvHref = CV_PATH.trim() || '#';

  return [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/mlsarac',
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: linkedinHref,
      external: isAbsoluteUrl(linkedinHref),
    },
    {
      id: 'email',
      label: 'Email',
      href: emailHref,
      external: false,
    },
    {
      id: 'cv',
      label: 'Download CV',
      href: cvHref,
      external: isAbsoluteUrl(cvHref),
    },
  ];
}

export const contactLinks = buildContactLinks();

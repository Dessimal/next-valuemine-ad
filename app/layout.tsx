import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valuemine Power Solutions",
  description: "You Can Now 'Pay Small Small' for Solar",
  openGraph: {
    title: "Pay 'Small Small' for Correct Solar",
    description: "You Can Now 'Pay Small Small' for Solar ",
    siteName: "Valuemine",
    images: [
      {
        url: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAxL3Jhd3BpeGVsb2ZmaWNlOF9mcm9udF92aWV3X3Bob3RvX29mX2FfYWZyaWNhbl93b21hbl9jaXZpbF9lbmdpbl8wNDk2ZTFhYS0yN2RjLTQ1YjctOWQ2My0zMGZhNGFmZTJjZjJfMS5qcGc.jpg",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '888936398833281');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style={{display: 'none'}}
src="https://www.facebook.com/tr?id=888936398833281&ev=PageView&noscript=1"
/></noscript> */}

        {/* Facebook Pixel Script */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '572364702580924');
fbq('track', 'PageView');
          `}
        </Script>

        {/* Optional noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1342736207020557&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <GoogleAnalytics gaId="G-NKM6Z40LVL" />
      <GoogleTagManager gtmId="GTM-W96DLD9F" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

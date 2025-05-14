export const sendFbEvent = async ({ eventName, name, email, phone }: {
    eventName: string;
    name?: string;
    email?: string;
    phone?: string;
  }) => {
    await fetch('/api/fb-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        name,
        email,
        phone,
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    });
  };
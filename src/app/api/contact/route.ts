import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (name.length < 2) {
    return NextResponse.json(
      { message: "Please enter a valid name." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { message: "Message must be at least 10 characters." },
      { status: 400 }
    );
  }

  // Replace this with an email provider, database write, or CRM webhook.
  console.info("New portfolio contact message", {
    name,
    email,
    message,
    receivedAt: new Date().toISOString()
  });

  return NextResponse.json({
    message: "Thanks for reaching out. I’ll get back to you soon."
  });
}

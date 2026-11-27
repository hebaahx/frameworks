import Link from "next/link";

export default function HvanaLogo() {
  return (
    <Link className="logo" href="/">
      <span className="logo-name">HvANA</span>
      <span className="logo-tagline">Nieuws en opinie over de HvA</span>
    </Link>
  );
}
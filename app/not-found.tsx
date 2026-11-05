import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <main className="not-found-shell">
      <section className="not-found-card" aria-labelledby="not-found-title">
        <div className="repo-bar">
          <strong>reeganrajasekar</strong>
          <span>/</span>
          <span>404.md</span>
          <ThemeToggle />
        </div>
        <div className="not-found-content">
          <div className="not-found-code" aria-hidden="true">404</div>
          <p className="not-found-eyebrow">PAGE NOT FOUND</p>
          <h1 id="not-found-title">This route got lost in the stack.</h1>
          <p>
            The page you are looking for does not exist, moved, or is taking a
            night-shift break.
          </p>
          <div className="not-found-actions">
            <Link className="not-found-primary" href="/">
              Return to profile
            </Link>
            <Link className="not-found-secondary" href="/#contact">
              Contact Reegan
            </Link>
          </div>
        </div>
        <div className="not-found-footer">
          <span>status: <strong>404</strong></span>
          <span>system: portfolio</span>
        </div>
      </section>
    </main>
  );
}

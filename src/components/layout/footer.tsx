export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40">
      <div className="container flex items-center justify-center h-16">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Zero Theorem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
